import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import productRoutes from "./routes/products.js";
import checkoutRoutes from "./routes/checkout.js";
import webhookRoutes from "./routes/webhook.js";
import orderRoutes from "./routes/orders.js";

const app = express();

app.use("/api/webhook", express.raw({ type: "application/json" }), webhookRoutes);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API running"));

app.use("/api/products", productRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log("🚀 Server running on port 5000")
    );
  })
  .catch(err => console.error(err));