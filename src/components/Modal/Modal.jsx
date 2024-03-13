import "./Modal.css";
import { useEffect } from "react";
import "../Card/Card";

const Modal = ({ onClose, car }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

    //функция
    function handleKeyDown(e) {
      if (e.code === "Escape") {
        onClose();
      }
    }
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal">
        <img
          className="modal-image-car"
          src={car.img ? car.img : car.photoLink}
          alt={car.make}
        />
        <ul className="info-car-box">
          <li className="list-item info1">
            <p className="style-text1">{car.make} &nbsp;</p>
            <p className="style-text1 blue">{car.model} &nbsp;</p>
            <p className="style-text1">{car.year}</p>
          </li>
          <li className="list-item info2">
            <p className="style-text2">{car.address.split(",")[1]} |</p>
            <p className="style-text2">{car.address.split(",")[2]} |</p>
            <p className="style-text2">id: {car.id} |</p>
            <p className="style-text2">year: {car.year} |</p>
            <p className="style-text2">type: {car.type} </p>
          </li>
          <li className="list-item info3">
            <p className="style-text2">
              Fuel Consumption: {car.fuelConsumption} |
            </p>
            <p className="style-text2">Engine Size: {car.engineSize}</p>
          </li>
          <li className="list-item info4">
            <p className="style-text3">{car.description}</p>
          </li>
          <li className="list-item info5">
            <p className="style-text5">Accesories and functionalities:</p>
          </li>
          <li className="list-item info6">
            {car.accessories.map((accessorie) => (
              <p key={accessorie} className="style-text2">
                {accessorie}&nbsp; |&nbsp;
              </p>
            ))}
          </li>
          <li className="list-item info7">
            {car.functionalities.map((functionalitie) => (
              <p key={functionalitie} className="style-text2">
                {functionalitie} &nbsp;|&nbsp;
              </p>
            ))}
          </li>
          <li className="list-item info8">
            <p className="style-text5">Rental Conditions:</p>
          </li>
          <li className="list-item ">
            <p className="style-text4 Minimum-age">Minimum age: </p>
            <p className="style-text4 blue num-minimum-age">
              {car.rentalConditions.slice(12, 15)}
            </p>
            <p className="style-text4 rental-condition">
              {car.rentalConditions.slice(16, 38)}
            </p>
          </li>
          <li className="list-item info9">
            <p className="style-text4 rental-condition">
              {car.rentalConditions.slice(39)}
            </p>
            <p className="style-text4 mileage">Mileage: </p>
            <p className="style-text4 blue num-mileage">{car.mileage}</p>
            <p className="style-text4 price">Price: </p>
            <p className="style-text4 blue rentalPrice">
              {car.rentalPrice.slice(1)}$
            </p>
          </li>
        </ul>
        <button className="btn-rental-car">Rental car</button>
      </div>
    </div>
  );
};
export default Modal;
