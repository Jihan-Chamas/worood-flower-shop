import React, { useEffect, useState } from "react";
import axios from "axios";



function AllFlowers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://us-central1-worood-flower-shop.cloudfunctions.net/api/getProducts"
      )
      .then((response) => {
        setProducts(response.data);
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
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default AllFlowers;
