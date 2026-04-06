import React, { useEffect, useState, useContext } from "react";
import { API } from "../api";
import { CartContext } from "../context/CartContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    API.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product._id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;