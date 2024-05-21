import React from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";

const Header = () => {
  return (
    <header>
      <h1 className="foundation">Foundation</h1>
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
              to={"about"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/discover"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Discover
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/donate"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Donate
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
