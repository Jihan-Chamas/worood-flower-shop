import React, { useState } from "react";
import "./styling.css";
import Logo from "../assets/Worood.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" />
        </button>

        <div className={`navbar-list ${menuOpen ? "open" : ""}`}>
          <a href="/aboutus" onClick={closeMenu}>
            About us
          </a>
          <Link to="./" onClick={closeMenu}>
            <img className="logo-design" src={Logo} alt="Worood Logo" />
          </Link>
          <a href="/addProduct" onClick={closeMenu}>
            Add Flowers
          </a>
          <Link to="./user" onClick={closeMenu}>
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
