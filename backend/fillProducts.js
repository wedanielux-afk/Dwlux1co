import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB");

    await Product.deleteMany(); // optional: clears old data

    await Product.insertMany([
      {
        name: "Lux Watch",
        price: 299,
        image: "https://picsum.photos/200",
        description: "Luxury watch",
        stock: 10
      },
      {
        name: "Designer Bag",
        price: 499,
        image: "https://picsum.photos/200",
        description: "Stylish bag",
        stock: 5
      },
      {
        name: "Sunglasses",
        price: 199,
        image: "https://picsum.photos/200",
        description: "Trendy sunglasses",
        stock: 20
      }
    ]);

    console.log("✅ Products added!");
    process.exit();
  })
  .catch(err => console.log(err));