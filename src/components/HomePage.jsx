import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styling.css";
import FlowerCarousel from "./FlowerCarousel";
import { Link } from "react-router-dom";
function HomePage() {
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
    <div className="container">
      <header className="hero">
        <img src="./src/images/sakura.gif" alt="Hero" />
        <h1>Welcome to Worood Flower Shop</h1>
        <p>Fresh flowers for every occasion</p>
      </header>
      <div className="browse-flowers">
        <div className="flowers-state">
          <h1>Flowers, What the World Needs</h1>
          <p>
            Discover the beauty of nature with our handpicked collection of
            flowers. Whether you're celebrating a special occasion or just
            brightening up your day, we have the perfect blooms for you. Let our
            vibrant selection bring joy and elegance to any moment. Start
            exploring our curated floral arrangements now!
          </p>
          <Link to="./allFlowers">
            <button className="shop-btn">Browse</button>
          </Link >
        </div>
        <div className="browse-image-flowers">
          {products.slice(0, 6).map((product) => (
            <img src={product.image} alt={product.name} />
          ))}
        </div>
      </div>
      <section className="featured">
        <h2>Our Products</h2>

        {loading && <p>Loading products...</p>}
        {error && <p className="error">{error}</p>}
        <FlowerCarousel products={products} />
      </section>
    </div>
  );
}

export default HomePage;
