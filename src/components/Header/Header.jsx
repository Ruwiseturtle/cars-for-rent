import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./HeaderStyled.css";
import { FaBookmark } from "react-icons/fa";
import { selectFavorite } from "../../redux/cars/carSelectors";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/cars/filterReducer";
import { setCurrentPage } from "../../redux/cars/carReducer";
import { selectFilter } from "../../redux/cars/carSelectors";

const Header = () => {
  const favorites = useSelector(selectFavorite);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {}, [filter]);

  const handleClick = () => {
    dispatch(setCurrentPage(1));
    dispatch(setFilter({ brand: "", price: 0, from: 0, to: 0 }));
  };

  return (
    <header className="containerHeader">
      <div className="left-elements">
        <NavLink className="text" to="/">
          Home
        </NavLink>
        <NavLink className="text" to="/catalog" onClick={handleClick}>
          Сar catalog
        </NavLink>
      </div>
      <div className="right-elements">
        <NavLink name="liked" className="button-liked" to="/favorites">
          <FaBookmark className="icon-liked" />
        </NavLink>
        <p className="counter-likes">{favorites.length}</p>
      </div>
    </header>
  );
};

export default Header;
