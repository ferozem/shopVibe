import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import "../styles/navbar.css";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            src="assets/shop-vibe-logo.png"
            alt="ShopVibe Logo"
            className="logo-img"
          />
          <span >ShopVibe</span>
        </Link>
        {/* <img src={item.image} alt={item.title} /> */}
        {/* <Link to="/">ShopVibe</Link> */}
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart" className="cart-link">
            🛒 Cart&nbsp;&nbsp;&nbsp;
            {totalItems > 0 && (
              <span className="cart-badge"> {totalItems}</span>
            )}
          </Link>
        </li>
      </ul>
      <button onClick={toggleTheme} className="theme-toggle">
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
};

export default Navbar;
