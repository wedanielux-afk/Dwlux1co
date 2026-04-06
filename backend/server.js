import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import productRoutes from "./routes/products.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API running"));

app.use("/api/products", productRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});