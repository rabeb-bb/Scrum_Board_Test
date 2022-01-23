import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="appbar">
      <div className="logo">
        <i class="fas fa-bars"></i>
        <h2>SCRUM DASH</h2>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
