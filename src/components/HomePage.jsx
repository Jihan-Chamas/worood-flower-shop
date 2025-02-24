import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styling.css";
import FlowerCarousel from "./FlowerCarousel";
import { Link } from "react-router-dom";
import George from "/src/images/george.jpeg";
import david from "/src/images/david.jpeg";
import victor from "/src/images/victor.jpeg";
import kamran from "/src/images/kamran.jpeg";
import leen from "/src/images/leen.jpeg";
import jihan from "/src/images/jihan.jpeg";
import one from "/src/images/d2e81712760de144fd0459138cae8e34.jpg";
import two from "/src/images/167d6a64f9e14bac9f032f14468d4f4d.jpg";
import three from "/src/images/honey-stock.jpg";
import dabdoob from "/src/images/birthday.jpg";
function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://worood-flower-shop-6fd48-default-rtdb.europe-west1.firebasedatabase.app/worood-flower-shop.json"
      )
      .then((response) => {
        const productsArray = Object.entries(response.data).map(
          ([id, product]) => ({
            id,
            ...product,
          })
        );
        setProducts(productsArray);
        console.log(productsArray);

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
        <img
          src="https://www.flowershopsnetwork.co.uk/cdn/shop/files/Flowershopsnetwork_homepage_banner.webp?v=1729505888&width=2000"
          alt="Hero"
        />
      </header>
      <div className="under-hero">
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0599/5816/5579/files/fd_icon_mon_sat.png?v=1738939295" />
          <p>Free Delivery Nationwide</p>
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0599/5816/5579/files/fd_icon_same_day.png?v=1738939295" />
          <p>Same Day Delivery before 2pm</p>
        </div>
        <div>
          <img
            style={{ height: 40 }}
            src="https://cdn.shopify.com/s/files/1/0806/6465/8257/files/reviews.png?v=1739930829"
          />
          <p>★★★★⯪ (4.5/5) Reviews</p>
        </div>
      </div>
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
          </Link>
        </div>
        <div className="browse-image-flowers">
          <img src={one} />
          <img src={two} />
          <img src={three} />
        </div>
      </div>
      <section className="featured">
        <h2>Our Products</h2>

        {loading && <p>Loading products...</p>}
        {error && <p className="error">{error}</p>}
        <FlowerCarousel products={products} />
      </section>
      <div className="birthday-container">
        <img src={dabdoob} />
        <div>
          <h2 className="shining-text">
            🎉 Make Their Birthday Extra Special! 🎁
          </h2>
          <p>
            Surprise your loved one with a vibrant bouquet of fresh flowers,
            guaranteed to bring a big, beaming smile to their face! 🌸💖 Each
            birthday bouquet is expertly arranged and carefully packaged by our
            skilled florists, ensuring a delightful gift full of love and
            joy.Want to add a personal touch? Pair the bouquet with a heartfelt
            birthday card, a delicious chocolate treat, or a fun, quirky
            mug—turning it into the perfect, personalized birthday surprise!
            🎂🎈
          </p>
        </div>
      </div>
      <div className="sunflower">
        <label>
          Send us your image !!
          <input type="url" placeholder="Enter your image url!" />
        </label>
        <h2 className="shining-text">
          send us your image and we will make you a sunflower
        </h2>
        <div className="sunflower-imgs">
          <img src={George} />
          <img src={victor} />
          <img src={leen} />
          <img src={kamran} />
          <img src={jihan} />
          <img src={david} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
