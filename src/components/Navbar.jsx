import React from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css';

const Navbar = ({ cartCount }) => {
  const userPhoneNumber = localStorage.getItem("userPhoneNumber");

  return (
    <nav className="navbar">
      <h1 className="navbar-title">E-COMMERCE</h1>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/all">Categories</Link></li>
        <li><Link to="/category/mens">Men's</Link></li>
        <li><Link to="/category/womens">Women's</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contactUs">Contact Us</Link></li>
        {userPhoneNumber ? (
          <>
            <li><Link to="/cart">Cart <span className="navbar-cart">({cartCount})</span></Link></li>
            {/* <li><button onClick={() => {
              localStorage.removeItem("userPhoneNumber");
              window.location.reload();
            }}>Sign In</button></li> */}
          </>
        ) : (
          <li><Link to="/signIn">Sign In</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;