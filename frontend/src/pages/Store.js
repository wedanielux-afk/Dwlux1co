import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const API = process.env.REACT_APP_API;

export default function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Store</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {Array.isArray(products) &&
          products.map(p => (
            <ProductCard key={p._id} product={p} />
          ))}
      </div>
    </div>
  );
}