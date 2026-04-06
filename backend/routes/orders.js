import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

export default router;

router.post("/", async (req, res) => {
  try {
    const { items, amount, status } = req.body;

    const newOrder = new Order({
      items,
      amount,
      status,
    });

    await newOrder.save();

    res.json({ message: "Order saved" });

  } catch (err) {
    res.status(500).json({ error: "Failed to save order" });
  }
});