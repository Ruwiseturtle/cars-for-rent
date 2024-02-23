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
          <li className="style-text1">sss</li>
          <li className="style-text2">sss</li>
          <li className="style-text2">sss</li>
          <li className="style-text3 ">sss</li>
          <li className="">sss</li>
          <li className="">sss</li>
          <li className="">sss</li>
          <li className="">sss</li>
          <li className="">sss</li>
          <li className="">sss</li>
          <li className="">sss</li>
        </ul>
      </div>
    </div>
  );
};
export default Modal;
