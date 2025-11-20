import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="site-nav">
      <Link to="/" className="logo">EmpowerSA</Link>
      <ul className="nav-links">
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
