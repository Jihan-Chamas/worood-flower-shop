import React from "react";
import "./styling.css";
import Logo from "../assets/Worood.png";
import { Link } from "react-router-dom";

function Footer(){
return (
  <div className="footer-container">
    <div className="footer">
      <div className="footer-logo">
        <Link to="./">
          <img className="logo-design" src={Logo} alt="Worood Logo" />
        </Link>
      </div>
      <div className="footer-1">
        <h3>About us</h3>
        <p>Contact us</p>
        <p>Feedback</p>
      </div>
      <div className="footer-2">
        <h3>Follow us</h3>
        <p>Github</p>
        <p>LinkedIn</p>
      </div>
    </div>
    <footer className="footer-bottom">
      &copy; 2025 Worood flower shop. All rights reserved.
    </footer>
  </div>
);
}

export default Footer;