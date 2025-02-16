import React from "react";
import "./styling.css";
import "../images/worood-logo.jpeg";


function Navbar(){

 return( 

 <div className="container">
 <nav className="navbar">
 <ul className ="navbar-list">
 <li><a href="/">Home Page</a></li>
 <li><a href="/aboutus">About us</a></li>
 <li><a href ="/contactus">Contact us</a></li>
 </ul>
 </nav>
 </div>
 );
}

export default Navbar;