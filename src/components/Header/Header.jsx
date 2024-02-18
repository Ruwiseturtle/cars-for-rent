import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderStyled.css";
import { FaBookmark } from "react-icons/fa";
import { selectFavorite } from "../../redux/cars/carSelectors";
import {  useSelector } from "react-redux";

const Header = () => {
  const favorites = useSelector(selectFavorite);

  const handleSubmit = (e) => {
    
  };

  return (
    <header className="containerHeader">
      <div className="left-elements">
        <NavLink className="text" to="/">
          Home
        </NavLink>
        <NavLink className="text" to="/catalog">
          Сar catalog
        </NavLink>
      </div>
      <div className="right-elements">        
        <NavLink
          name="liked"
          className="button-liked"
          to="/favorites"
          onClick={handleSubmit}
        >
          <FaBookmark className="icon-liked" />
        </NavLink>
        <p className="counter-likes">{favorites.length}</p>
      </div>
    </header>
  );
};

export default Header;
