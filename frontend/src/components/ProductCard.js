function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        width: "200px",
        borderRadius: "10px",
        textAlign: "center"
      }}
    >
      <img src={product.image} alt={product.name} width="150" />

      <h3>{product.name}</h3>

      <p style={{ fontWeight: "bold" }}>${product.price}</p>

      <p style={{ fontSize: "12px", color: "#555" }}>
        {product.description}
      </p>

      <p style={{ fontSize: "12px" }}>
        Stock: {product.stock}
      </p>

      <button style={{ marginTop: "10px" }}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;