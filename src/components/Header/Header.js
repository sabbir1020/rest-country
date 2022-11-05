import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <h1>All Country </h1>
      <div>
        <nav>
          <a href="/Home">Home</a>
          <a href="/Blogs">Blogs</a>
          <a href="/About">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
