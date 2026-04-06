import { useEffect } from "react";

function Success() {

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cart,
        amount: cart.reduce((total, item) => total + item.price, 0),
        status: "paid",
      }),
    })
    .then(() => {
      localStorage.removeItem("cart");
    })
    .catch(err => console.error(err));

  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>✅ Payment Successful!</h1>
      <p>Your order has been placed.</p>
    </div>
  );
}

export default Success;