import React from "react";
import "./styling.css";
import "../images/worood-logo.jpeg";


function Navbar(){

 return (
   <div className="container">
       <div className="navbar-list">
         <a href="/">Home Page</a>
         <a href="/aboutus">About us</a>
         <a href="/contactus">Contact us</a>
       </div>
   </div>
 );
}

export default Navbar;