import React from "react";
import "./Header.css"; // For styling the header component

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Your Logo</h1> {/* Replace with your actual logo */}
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
