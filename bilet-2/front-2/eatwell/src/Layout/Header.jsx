import React from "react";
import { NavLink } from "react-router-dom";
import "./Style.css"

const Header = () => {
  return (
    <header>
      <div className="eatwell">
        <h1 className="title-1">EATWELL</h1>
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
              to={"about"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/offer"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Offer
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/menu"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"news"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/gallery"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Gallery
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