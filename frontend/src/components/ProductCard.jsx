function ProductCard({ name, price }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px",
      borderRadius: "8px",
      width: "200px"
    }}>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
    </div>
  );
}

export default ProductCard;
