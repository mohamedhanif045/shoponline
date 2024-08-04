import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h3>The Quality Services of All Time</h3>
      </div>
      <div className="nav-links">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/services" activeClassName="active">
          Services
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
        <NavLink to="/admin" activeClassName="active">
          Admin
        </NavLink>
        <NavLink to="/blog" activeClassName="active">
          Blog
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
