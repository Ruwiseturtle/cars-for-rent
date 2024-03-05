import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/cars/carReducer";
import { setFilterFlag } from "../../redux/cars/filterReducer";
import * as selectors from "../../redux/cars/carSelectors";
import * as thunk from "../../redux/cars/carsThunks";
import { PER_PAGE } from "../../services/globalVariables";
import Modal from "../Modal/Modal";
import Card from "../Card/Card";
import "./Cars.css";

const Cars = () => {
  // const [cars, setCars] = useState([]);
  const [car, setCar] = useState(null);
  const [seeLoad, setSeeLoad] = useState(true);
  let cars = useSelector(selectors.selectGetCars);
  const currentPage = useSelector(selectors.selectCurrentPage);
  const filter = useSelector(selectors.selectFilter);
  const filterFlag = useSelector(selectors.selectFilterFlag);
  const dispatch = useDispatch();
  let filteredCars = filterCars();

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
      dispatch(thunk.getCarsThunks(currentPage));
    } else if (filterFlag && filterFlag.brand !== "") {
      dispatch(
        thunk.getFilteredCarsThunk({
          currentPage: currentPage,
          brand: filter.brand,
        })
      );
    }
  }, [dispatch, currentPage, cars, filter, filterFlag]);

  function filterCars() {
    //якщо у фільтрі вибрана тільки ціна
    if (filter.price > 0 && filter.from === 0 && filter.to === 0) {
      return cars.map((car) => {
        if (Number(car.rentalPrice.slice(1)) === filter.price) {
          return car;
        } else {
          return null;
        }
      });
    }
    //якщо вибраний тільки діапазон пробігу
    else if (filter.price === 0 && filter.from > 0 && filter.to > 0) {
      return cars.map((car) => {
        if (filter.from >= car.mileage && filter.to <= car.mileage) {
          return car;
        } else {
          return null;
        }
      });
    } //якщо вибрана ціна і діапазон пробігу
    else if (filter.price > 0 && filter.from > 0 && filter.to > 0) {
      return cars.map((car) => {
        if (
          filter.from >= car.mileage &&
          filter.to <= car.mileage &&
          Number(car.rentalPrice.slice(1)) === filter.price
        ) {
          return car;
        } else {
          return null;
        }
      });
    } //якщо параметри фільтра скинуто
    else {
      setFilterFlag(false);
      return cars;
    }
  }

  const onClickShowMore = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  return (
    <div className="car-box">
      <ul className="car-catalog">
        {cars &&
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
