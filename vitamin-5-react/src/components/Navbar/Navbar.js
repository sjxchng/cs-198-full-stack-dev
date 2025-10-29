import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">My Website</div>

      <div className="navbar-links">
        <Link to="/home" className="nav-link">
          Home
        </Link>
        <Link to="/nothome" className="nav-link">
          Not Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;