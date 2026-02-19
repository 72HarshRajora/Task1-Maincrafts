import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Product List</h1>

      {products.map((item) => (
        <ProductCard
          key={item._id}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default Home;
