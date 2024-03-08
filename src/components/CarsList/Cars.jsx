import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/cars/carReducer";
import * as selectors from "../../redux/cars/carSelectors";
import * as thunk from "../../redux/cars/carsThunks";
import { PER_PAGE } from "../../services/globalVariables";
import Modal from "../Modal/Modal";
import Card from "../Card/Card";
import "./Cars.css";
import { isActiveFilter, filterCars } from "../../services/functions";

const Cars = () => {
  const [car, setCar] = useState(null);
  const [seeLoad, setSeeLoad] = useState(true);
  let cars = useSelector(selectors.selectGetCars);
  const currentPage = useSelector(selectors.selectCurrentPage);
  const filter = useSelector(selectors.selectFilter);
  let filteredCars = filterCars(filter, cars);
  let isfilterActive = isActiveFilter(filter);
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
    console.log(filteredCars);
    if (!isfilterActive) {
      cars.length < PER_PAGE ? setSeeLoad(false) : setSeeLoad(true);
      dispatch(thunk.getCarsThunks(currentPage));
    } else if (isfilterActive && filter.brand) {
      dispatch(thunk.getFilteredCarsThunk(filter.brand));
    } else {
      dispatch(thunk.getFilteredCarsThunk(""));
    }
  }, [
    dispatch,
    cars.length,
    filter,
    currentPage,
    isfilterActive
  ]);

  const onClickShowMore = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  return (
    <div className="car-box">
      <ul className="car-catalog">
        {filteredCars &&
          filteredCars.map((car) => (
            <li key={car.id}>
              <Card car={car} handleClick={handleClick}></Card>
            </li>
          ))}
      </ul>
      {car && <Modal onClose={onClose} car={car}></Modal>}
      {seeLoad && isActiveFilter && !isfilterActive && (
        <div key="page" className="pagination" onClick={onClickShowMore}>
          Load more
        </div>
      )}
    </div>
  );
};

export default Cars;
