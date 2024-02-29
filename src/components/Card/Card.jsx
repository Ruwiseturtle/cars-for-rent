import React from "react";
import "./Card.css";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorite } from "../../redux/cars/carSelectors";
import { setFavorite } from "../../redux/cars/carsFavoritesReducer";

const Card = ({ car, handleClick }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorite);


  const handleSubmit = (e) => {
    e.preventDefault();
    const clickedId = Number(e.currentTarget.name);
    let isIDInFavorites = favorites.some((car) => car.id === clickedId);
    let newFavorites = [];

    if (isIDInFavorites) {
      newFavorites = favorites.filter((car) => car.id !== clickedId);
      dispatch(setFavorite(newFavorites));
    } else {
      newFavorites = [...favorites, car];
      dispatch(setFavorite(newFavorites));
    }
  };

  return (
    <div className="card">
      <img
        className="image-car"
        src={car.img ? car.img : car.photoLink}
        alt={car.make}
      />
      <div className="first-box-aboutCar">
        <div className="item-box1">
          <p className="text-Make">{car.make}</p>
          <p className="text-model">{car.model}</p>
          <p className="text-year">{car.year}</p>
        </div>
        <div className="item-box">
          <p className="text-rentalPrice">{car.rentalPrice}</p>
        </div>
      </div>
      <div className="second-box-aboutCar">
        <div className="item-box2">
          <p>{car.address.split(",")[1]} |</p>
          <p>{car.address.split(",")[2]} |</p>
          <p>{car.rentalCompany} |</p>

          {car.accessories.some(
            (str) => str.toLocaleLowerCase().indexOf("premium") >= 0
          ) && <p>Premium</p>}
        </div>
        <div className="item-box2">
          <p>{car.type}</p>
          <p>{car.model}</p>
          <p>{car.year}</p>
          <p>{car.type}</p>
        </div>
      </div>
      <button name={car.id} className="button-favorite" onClick={handleSubmit}>
        <FaRegHeart className="iconWhite" />
        {favorites.some((auto) => auto.id === car.id) && (
          <FaHeart className="iconRed" />
        )}
      </button>
      <button
        className="button-learn-more"
        type="button"
        onClick={() => handleClick(car)}
      >
        Learn more
      </button>
    </div>
  );
};

export default Card;
