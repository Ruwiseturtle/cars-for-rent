import React from "react";
import "./Card.css";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorite } from "../../redux/cars/carSelectors";
import { setFavorite } from "../../redux/cars/carReducer";

const Card = (carProps) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorite);

  const handleSubmit = (e) => {
    e.preventDefault();

    const clickedId = Number(e.currentTarget.name);

    let isIDInFavorites = favorites.some((car) => car.car.id === clickedId);

    let newFavorites = [];

    if (isIDInFavorites) {
      newFavorites = favorites.filter((car) => car.car.id !== clickedId);
      dispatch(setFavorite(newFavorites));
    } else {
      newFavorites = [...favorites, carProps];
      dispatch(setFavorite(newFavorites));
    }
  };

  return (
    <div className="card">
      <img
        className="image-car"
        src={carProps.car.img ? carProps.car.img : carProps.car.photoLink}
        alt={carProps.car.make}
      />
      <div className="first-box-aboutCar">
        <div className="left-first-string-aboutCar">
          <p className="text-Make">{carProps.car.make}</p>
          <p className="text-model">{carProps.car.model}</p>
          <p className="text-year">{carProps.car.year}</p>
        </div>
        <div className="right-first-string-aboutCar">
          <p className="text-rentalPrice">{carProps.car.rentalPrice}</p>
        </div>
      </div>
      <button
        name={carProps.car.id}
        className="button-favorite red"
        onClick={handleSubmit}
      >
        <FaRegHeart className="iconWhite" />
        {favorites.some((car) => car.car.id === carProps.car.id) && (
          <FaRegHeart className="iconRed" />
        )}
      </button>
    </div>
  );
};

export default Card;
