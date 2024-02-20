import React, { useState } from "react";
import "./Cars.css";
import { requestGetAllCars } from "../../API/cars/gerCars";
import { useEffect } from "react";
import Card from "../Card/Card";
import { PER_PAGE } from "../../services/globalVariables";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";
import { isLoading } from '../../redux/cars/carSelectors';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [seeLoad, setSeeLoad] = useState(false);
  const [car, setCar] = useState(null);
  const loading = useSelector(isLoading);
 
  const onClose = () => {
    setCar(null);
    document.body.style.overflowY = "scroll";
  };

  const handleClick = (car) => {
    setCar(car);
    document.body.style.overflowY = "hidden";
  };

  useEffect(() => { 
    requestGetAllCars(page).then((value) => {
      if (value.length === PER_PAGE) {
        setSeeLoad(true);
      } else {
        setSeeLoad(false);
      }
      setCars([...cars, ...value]);
    });
  }, [page]);

  const onClickShowMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="car-box">
      {loading && <h3 className='loading'>Loading...</h3>}

      <ul className="car-catalog">
        {cars &&
          cars.map((car) => (
            <li key={car.id}>
              <Card car={car} handleClick={handleClick}></Card>
            </li>
          ))}
      </ul>
      {car && <Modal onClose={onClose} car={car}></Modal>}
      {seeLoad && (
        <div key="page" className="pagination" onClick={onClickShowMore}>
          Load more
        </div>
      )}
    </div>
  );
};

export default Cars;
