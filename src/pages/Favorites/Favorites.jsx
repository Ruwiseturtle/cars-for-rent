import "./Favorites.css";
import { selectFavorite } from "../../redux/cars/carSelectors";
import { useSelector } from "react-redux";
import "../../components/Card/Card.css";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import "../HomePage/HomePage";
import Modal from "../../components/Modal/Modal";

const Favorites = () => {
  const favorites = useSelector(selectFavorite);
  const [favoriteCar, setfavoriteCar] = useState(null);
  
   const onClose = () => {
     setfavoriteCar(null);
     document.body.style.overflowY = "scroll";
  };
  
   const handleClick = (car) => {
     setfavoriteCar(car);
     document.body.style.overflowY = "hidden";
  };
  
  return (
    <div className="favorites-box">
      <ul className="favorites-catalog">
        {favorites &&
          favorites.map((car) => (
            <li key={nanoid()}>
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
                <button className="button-learn-more" onClick={handleClick}>
                  Learn more
                </button>
                {favoriteCar && <Modal onClose={onClose} car={car}></Modal>}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Favorites;
