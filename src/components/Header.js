import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <NavLink className="nav-item" to="/home" activeClassName="is-active">
        Home
      </NavLink>
      <NavLink className="nav-item" to="/tasks" activeClassName="is-active">
        Tasks
      </NavLink>
      <NavLink className="nav-item" to="/profile" activeClassName="is-active">
        Profile
      </NavLink>
    </header>
  );
};

export default Header;
