import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div style={{
      border: "1px solid #eee",
      padding: 20,
      borderRadius: 12
    }}>
      <img src={product.image} width="100%" />
      <h2>{product.name}</h2>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;