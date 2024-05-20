import React from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";

const Header = () => {
  return (
    <header>
      <div className="aranozdot">
        <h1 className="aranoz">Aranoz</h1>
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
              to={"shop"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Shop
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
              to={"/blog"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Blog
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;