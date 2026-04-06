import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// Get products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Add product
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

export default router;