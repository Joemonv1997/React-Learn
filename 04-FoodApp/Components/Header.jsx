import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="company_logo">
        <img
          src="https://png.pngtree.com/png-vector/20220701/ourmid/pngtree-fast-food-logo-png-image_5573657.png"
          alt="Food Logo"
          className="logo"      
        />
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
