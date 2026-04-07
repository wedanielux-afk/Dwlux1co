import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json(err.message);
  }
});
router.get("/seed", async (req, res) => {
  const products = [
    {
      name: "Lux Watch",
      price: 299,
      image: "https://picsum.photos/200",
      description: "Luxury watch",
      stock: 10,
    },
    {
      name: "Designer Bag",
      price: 499,
      image: "https://picsum.photos/200",
      description: "Stylish bag",
      stock: 5,
    },
    {
      name: "Sunglasses",
      price: 199,
      image: "https://picsum.photos/200",
      description: "Trendy sunglasses",
      stock: 20,
    },
  ];

  await Product.insertMany(products);
  res.json({ message: "Products added" });
});

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