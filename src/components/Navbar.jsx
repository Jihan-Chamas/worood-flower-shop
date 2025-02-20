import React from "react";
import "./styling.css";
import "../images/worood-logo.jpeg";
import Logo from "../assets/Worood.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

function Navbar() {
  return (
    <div className="container">
      <div className="navbar-list">
        <a href="/aboutus">About us</a>
        <Link to="./">
          <img className="logo-design" src={Logo} alt="" />
        </Link>
        <a href="/addProduct">Add Flowers</a>
        <Link to="./user">
          <FontAwesomeIcon icon={faUserCircle} size="2x" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
