import React from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";

const Header = () => {
  return (
    <header>
      <div className="estoredot">
        <h1 className="estore">Estore</h1>
        <h1 className="dot">.</h1>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"catagori"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Catagori
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/latest"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Latest
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/blog"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/pages"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Pages
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <input type="text" placeholder="Search products" />
          </li>
          <li>
            <button className="signin">Sign In</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
