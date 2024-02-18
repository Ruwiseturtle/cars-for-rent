import React from "react";
import "./Card.css";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
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
        <div className="item-box1">
          <p className="text-Make">{carProps.car.make}</p>
          <p className="text-model">{carProps.car.model}</p>
          <p className="text-year">{carProps.car.year}</p>
        </div>
        <div className="item-box">
          <p className="text-rentalPrice">{carProps.car.rentalPrice}</p>
        </div>
      </div>
      <div className="second-box-aboutCar">
        <div className="item-box2">
          <p>{carProps.car.address.split(",")[1]} |</p>
          <p>{carProps.car.address.split(",")[2]} |</p>
          <p>{carProps.car.rentalCompany} |</p>

          {carProps.car.accessories.some(
            (str) => str.toLocaleLowerCase().indexOf("premium") >= 0
          ) && <p>Premium</p>}
        </div>
        <div className="item-box2">
          <p>{carProps.car.type}</p>
          <p>{carProps.car.model}</p>
          <p>{carProps.car.year}</p>
          <p>{carProps.car.type}</p>
        </div>
      </div>
      <button
        name={carProps.car.id}
        className="button-favorite"
        onClick={handleSubmit}
      >
        <FaRegHeart className="iconWhite" />
        {favorites.some((car) => car.car.id === carProps.car.id) && (
          <FaHeart className="iconRed" />
        )}
      </button>
      <button className="button-learn-more">Learn more</button>
    </div>
  )
};

export default Card;
