import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      price: Number,
      image: String,
    }
  ],
  amount: Number,
  status: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Order", orderSchema);