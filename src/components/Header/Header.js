import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav>
      <div className="section-center nav-center">
        <h4>Flipkart</h4>
        <input type="text" />
        <button className="btn">Login</button>
      </div>
    </nav>
  );
}

export default Header;
