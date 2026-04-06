import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { API } from "../api";

const CheckoutForm = () => {
  const { cart, clearCart } = useContext(CartContext);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    try {
      const { data } = await API.post("/checkout", { products: cart });

      const result = await stripe.redirectToCheckout({
        sessionId: data.id,
      });

      if (result.error) alert(result.error.message);

    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <CardElement />
      <button type="submit" disabled={!stripe || cart.length === 0}>
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;