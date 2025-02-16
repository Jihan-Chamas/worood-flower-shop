import React from "react";
import "./styling.css";

function HomePage(){
  return (
    <div className="container">
     
      <header className="hero">
      <img src='./src/images/sakura.gif' />
        <h1>Welcome to Worod Flower Shop</h1>
        <p>Fresh flowers for every occasion</p>
     
      </header>

      <section className="featured">
        <h2>Our Products</h2>
        <div className="flower-list">
          <div className="flower-card">
            <img src="./src/images/pink-roses.webp" alt="Rose Bouquet" />
            <h3>Rose Bouquet</h3>
            <p>$25.99</p>
            <button className="shop-btn">Buy now</button>
          </div>
          <div className="flower-card">
            <img src="./src/images/tulip-roses.webp" alt="Tulip Delight" />
            <h3>Tulip Delight</h3>
            <p>$19.99</p>
            <button className="shop-btn">Buy now</button>
          </div>
          <div className="flower-card">
            <img src="./src/images/sunflower-roses.webp" alt="Sunflower Charm" />
            <h3>Sunflower Charm</h3>
            <p>$22.99</p>
            <button className="shop-btn">Buy now</button>
          </div>
          <div className="flower-card">
            <img src="./src/images/orchid-roses.webp" alt="Orchid Elegance" />
            <h3>Orchid Elegance</h3>
            <p>$29.99</p>
            <button className="shop-btn">Buy now</button>
          </div>
          <div className="flower-card">
            <img src="./src/images/valentine-roses.webp" alt="Daisy Fresh" />
            <h3>Valentine's Bouquet</h3>
            <p>$18.99</p>
            <button className="shop-btn">Buy now</button>
          </div>
          <div className="flower-card">
            <img src="./src/images/flamengo-roses.webp" alt="Lily Love" />
            <h3>Flamingo Love</h3>
            <p>$24.99</p>
            <button className="shop-btn">Buy now</button>
          </div>
          <div className="flower-card">
            <img src="./src/images/lilis-roses.webp" alt="Lilis flower"/>
            <h3>Lili Dream</h3>
            <p>$26.99</p>
            <button className="shop-btn">Buy now</button>
          </div>
          <div className="flower-card">
            <img src="./src/images/manuka-honey.webp" alt="Manuka Honey" />
            <h3>Manuka Honey</h3>
            <p>$40.99</p>
            <button className="shop-btn">Buy now</button>
          </div>
          <div className="flower-card">
            <img src="./src/images/orangeblossom-honey.jpeg" alt="Orangeblossom Honey" />
            <h3>Orangeblossom Honey</h3>
            <p>$21.99</p>
            <button className="shop-btn">Buy now</button>
          </div>
          <div className="flower-card">
            <img src="./src/images/wildflowers-honey.webp" alt="Wild Flowers Honey" />
            <h3>Wild Roses Honey</h3>
            <p>$27.99</p>
            <button className="shop-btn">Buy now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
