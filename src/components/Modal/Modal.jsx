import "./Modal.css";
import { useEffect } from "react";
import "../Card/Card";

const Modal = ({ onClose, car }) => {
  console.log("машина");
  console.log(car);

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
            <p>{car.rentalCompany} |</p>

            {car.accessories.some(
              (str) => str.toLocaleLowerCase().indexOf("premium") >= 0
            ) && <p>Premium</p>}
          </div>
          <div className="modal-item-box2">
            <p>{car.type}</p>
            <p>{car.model}</p>
            <p>{car.year}</p>
            <p>{car.type}</p>
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
          <p className="modal-list-accesories">
            Accesories and functionalities:
          </p>
        </div>
      </div>
    </div>
  );
};
export default Modal;
