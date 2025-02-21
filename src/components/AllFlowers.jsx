import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function AllFlowers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://worood-flower-shop-6fd48-default-rtdb.europe-west1.firebasedatabase.app/worood-flower-shop"
      )
      .then((response) => {
        const productsArray = Object.entries(response.data).map(
          ([id, product]) => ({
            id, // product id (from the Firebase key)
            ...product, // product data (name, description, etc.)
          })
        );
        // console.log("productssss", productsArray);
        setProducts(productsArray);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch products.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="all-flowers-container">
      {products.map((product) => (
        <div className="all-flowers-card">
          <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} />
          </Link>
          <h3>{product.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default AllFlowers;
