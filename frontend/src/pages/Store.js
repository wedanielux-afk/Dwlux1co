import { useEffect, useState, useContext } from "react";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";

function Store() {
  const [products, setProducts] = useState([]);
  const { cart, addToCart } = useContext(CartContext);

  // Fetch products
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  // Stripe Checkout
  const handleCheckout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ cart })
      });

      const data = await res.json();

      // Redirect to Stripe
      window.location.href = data.url;

    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Store 🛒</h1>

      <p>Cart: {cart.length} items</p>

      <button onClick={handleCheckout}>
        Checkout 💳
      </button>

      <hr />

      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
      }}>
        {products.map(product => (
          <ProductCard
            key={product._id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Store;