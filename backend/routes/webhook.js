import express from "express";
import Stripe from "stripe";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-06-20",
  });

  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.log("❌ Webhook error:", err.message);
    return res.sendStatus(400);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const cart = JSON.parse(session.metadata.cart);

    const newOrder = new Order({
      items: cart,
      amount: session.amount_total / 100,
      status: "paid",
    });

    await newOrder.save();

    console.log("✅ Order saved to DB");
  }

  res.json({ received: true });
});

export default router;