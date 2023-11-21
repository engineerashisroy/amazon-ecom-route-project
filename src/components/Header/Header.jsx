import React from "react";
import "./header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="main-container">
      <nav className="header-container">
        <img src={logo} alt="" />
        <div className="header-description">
          <ul>
            <li>
              <Link to="shop">Shop</Link>
            </li>

            <li>
              <Link to="order">Order</Link>
            </li>

            <li>
              <Link to="inventory">Inventory</Link>
            </li>
            <li>
              <Link to="about">About Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Header;
