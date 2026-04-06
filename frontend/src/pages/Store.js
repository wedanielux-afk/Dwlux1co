import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dlux-backend.onrender.com/api/products")
      .then(res => res.json())
      .then(data => {
        console.log("Products:", data);
        setProducts(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Store 🛒</h1>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px"
      }}>
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Store;