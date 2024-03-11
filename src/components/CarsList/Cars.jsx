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
  const dispatch = useDispatch();
  const currentPage = useSelector(selectors.selectCurrentPage);
  const filter = useSelector(selectors.selectFilter);
  const cars = useSelector(selectors.selectGetCars);
  let filteredCars = filterCars(filter, cars);
  let isfilterActive = isActiveFilter(filter);

  useEffect(() => {
    getCarsAll();
  }, [dispatch, filter, currentPage, cars.length]);

  async function getCarsAll() {
    switch (isfilterActive) {
      //фільтр неактивний
      case false:
        cars.length < PER_PAGE ? setSeeLoad(false) : setSeeLoad(true);
        await dispatch(thunk.getCarsThunks(currentPage));
        break;
      //фільтр активний
      case true:
        setSeeLoad(false);
        if (filter.brand) {
          await dispatch(thunk.getFilteredCarsThunk(filter.brand));
        } else {
          await dispatch(thunk.getFilteredCarsThunk(""));
        }
        break;
      default:
        break;
    }
  }

  const onClose = () => {
    setCar(null);
    document.body.style.overflowY = "scroll";
  };

  const handleClick = (car) => {
    setCar(car);
    document.body.style.overflowY = "hidden";
  };

  const onClickShowMore = () => {
    dispatch(setCurrentPage(currentPage + 1));
    console.log(currentPage);
  };

  return (
    <div className="car-box">
      <ul className="car-catalog">
        {filteredCars.map((car) => (
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
