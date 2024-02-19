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

    function handleKeyDown(e) {
      if (e.code === "Escape") {
        onClose();
      }
    }
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="moda">
        <img className="image" src={car.img} alt={car.make} />
      </div>
    </div>
  );
};
export default Modal;
