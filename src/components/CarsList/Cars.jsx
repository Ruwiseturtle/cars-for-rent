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
  const cars = useSelector(selectors.selectGetCars);
  const currentPage = useSelector(selectors.selectCurrentPage);
  const filter = useSelector(selectors.selectFilter);
  let filteredCars = filterCars(filter, cars);
  let isfilterActive = isActiveFilter(filter);

  const onClose = () => {
    setCar(null);
    document.body.style.overflowY = "scroll";
  };

  const handleClick = (car) => {
    setCar(car);
    document.body.style.overflowY = "hidden";
  };

  useEffect(() => {
    // console.log(`первый юзеффект: ${cars}`);
    dispatch(thunk.getCarsThunks(1));
    setSeeLoad(true);
    // console.log("выходим из юзееффекта");
  }, [dispatch]);

  useEffect(() => {
    // console.log("второй юзееффект");
    // console.log(`cars: ${cars}`);
    // console.log(`активен ли фильтр: ${isfilterActive}`);
    // console.log(`cars.lenght: ${cars.length}`);

    if (!isfilterActive) {
      // console.log("шаг 1");
      cars.length < PER_PAGE ? setSeeLoad(false) : setSeeLoad(true);
      dispatch(thunk.getCarsThunks(currentPage));
    } else if (isfilterActive && filter.brand) {
      // console.log("шаг 2");
      dispatch(thunk.getFilteredCarsThunk(filter.brand));
    } else {
      // console.log("шаг 3");
      dispatch(thunk.getFilteredCarsThunk(""));
    }
  }, [dispatch, filter]);

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
      {seeLoad && (
        <div key="page" className="pagination" onClick={onClickShowMore}>
          Load more
        </div>
      )}
    </div>
  );
};

export default Cars;
