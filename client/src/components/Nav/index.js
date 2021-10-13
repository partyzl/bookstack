import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Nav = () => {
  return (
    <div className="navContainer overlay">
      <nav className="navbar fixed-bottom navbar-light">
        <NavLink
          to="/search"
          activeClassName="current"
          className="text-decoration-none"
        >
          <i className="bi bi-search"></i>
        </NavLink>
        <NavLink
          to="/librarylanding"
          activeClassName="current"
          className="text-decoration-none"
        >
          <i className="bi bi-book-fill"></i>
        </NavLink>
        <NavLink to="/profilelanding" activeClassName="current">
          <i className="bi bi-person-circle"></i>
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
