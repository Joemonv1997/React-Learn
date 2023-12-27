import React from "react";
import { Link } from "react-router-dom";
import { Logo_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="company_logo">
        <img src={Logo_URL} alt="Food Logo" className="logo" />
        <h4>Food App from Components</h4>
      </div>
      <div className="company_menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
