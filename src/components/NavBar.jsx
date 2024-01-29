import React from "react";
import img from "../assets/arrow_forward_ios.png";
import "./CSS/NavBar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">IIIT KOTTAYAM</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          HOME
        </Link>
        <Link to="/about" className="nav-link">
          ABOUT
        </Link>
        <Link to="/events" className="nav-link">
          EVENTS
        </Link>
        <Link to="/admin" className="nav-link">
          ADMIN
        </Link>
      </div>
      <div className="login-button">
        <button className="login-btn">
          <div className="login-content">
            LOGIN <img src={img} alt="Arrow icon" />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
