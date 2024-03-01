import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import "./Cars.css";
import {
  selectFilter,
  selectGetCars,
  selectCurrentPage,
  selectFilterFlag,
} from "../../redux/cars/carSelectors";
import {
  getCarsThunks,
  getFilteredCarsThunk,
} from "../../redux/cars/carsThunks";
import { PER_PAGE } from "../../services/globalVariables";
import { setCurrentPage } from "../../redux/cars/carReducer";

const Cars = () => {
  // const [cars, setCars] = useState([]);
  const [car, setCar] = useState(null);
  const [seeLoad, setSeeLoad] = useState(true);
  const cars = useSelector(selectGetCars);
  const currentPage = useSelector(selectCurrentPage);
  const filter = useSelector(selectFilter);
  const filterFlag = useSelector(selectFilterFlag);
  const dispatch = useDispatch();

  const onClose = () => {
    setCar(null);
    document.body.style.overflowY = "scroll";
  };

  const handleClick = (car) => {
    setCar(car);
    document.body.style.overflowY = "hidden";
  };


  useEffect(() => {
    if (cars.length < PER_PAGE) {
      setSeeLoad(false);
    } else {
      setSeeLoad(true);
    }
    
    if (!filterFlag) {
      dispatch(getCarsThunks(currentPage));
    } else {
      dispatch(
        getFilteredCarsThunk({ currentPage: currentPage, brand: filter.brand })
      );
    }
  }, [dispatch, currentPage, cars.length, seeLoad, filterFlag, filter.brand]);

  const onClickShowMore = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  return (
    <div className="car-box">
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
