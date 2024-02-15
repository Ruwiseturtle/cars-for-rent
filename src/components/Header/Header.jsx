import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderStyled.css";

const Header = () => {
  return (
    <header className="containerHeader">
      <NavLink className="text" to="/">
        Home
      </NavLink>
      <NavLink className="text" to="/catalog">
        Сar catalog
      </NavLink>
    </header>
  );
};

export default Header;
