import React from "react";
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
          <li>Home</li>
          <li>About</li>
          <li>Restaurent</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
