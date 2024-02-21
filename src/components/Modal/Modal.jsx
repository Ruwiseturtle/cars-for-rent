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
        <div className="modal-first-box-aboutCar">
          <div className="modal-item-box1">
            <p className="modal-text-Make">{car.make}</p>
            <p className="modal-text-model">{car.model}</p>
            <p className="modal-text-year">{car.year}</p>
          </div>
        </div>
        <div className="modal-second-box-aboutCar">
          <div className="modal-item-box2">
            <p>{car.address.split(",")[1]} |</p>
            <p>{car.address.split(",")[2]} |</p>
            <p>id: {car.id} |</p>
            <p>year: {car.year} |</p>
            <p>type: {car.type} </p>
          </div>
          <div className="modal-item-box2">
            <p>Fuel Consumption: {car.fuelConsumption} |</p>
            <p>Engine Size: {car.engineSize}</p>
          </div>
        </div>
        <div className="modal-third-box-aboutCar">
          <p className="modal-text-description">{car.description}</p>
        </div>
        <div className="modal-fourth-box-aboutCar">
          <p className="modal-text-accesories">
            Accesories and functionalities:
          </p>
        </div>
        <div className="modal-sixth-box-aboutCar">
          <div className="modal-list-accesories">
            {car.accessories.map((accessorie) => (
              <p className="accesories">{accessorie} |</p>
            ))}
          </div>
          <div className="modal-list-functionalities">
            {car.functionalities.map((functionalitie) => (
              <p className="accesories">{functionalitie} |</p>
            ))}
          </div>
        </div>
        <div className="rental-conditions">Rental Conditions:</div>
        <div>
          <div className="rentalConditions-box">
            <p className="min-age-text">
              Minimum age:
              <span className="min-age-number">
                {car.rentalConditions.slice(12, 15)}
              </span>
            </p>
            <p className="min-age-text">{car.rentalConditions.slice(16, 31)}</p>
          </div>
          <div className="box-numbers">
            <p className="security">sssssssssss</p>
            <p className="milleage">
              Milleage:
              <span className="numbers">{car.mileage}</span>
            </p>
            <p className="price">
              Price:
              <span className="numbers">{car.rentalPrice} </span>
            </p>
          </div>
          <button className="rental-car" type="button">
            Rental car
          </button>

          <p></p>
        </div>
        <div>zzzz</div>
      </div>
    </div>
  );
};
export default Modal;
