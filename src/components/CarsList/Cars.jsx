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
  const dispatch = useDispatch();
  let filteredCars = filterCars1();

  console.log('ccccccccccc');
  console.log(filter.from);

  const onClose = () => {
    setCar(null);
    document.body.style.overflowY = "scroll";
  };

  const handleClick = (car) => {
    setCar(car);
    document.body.style.overflowY = "hidden";
  };

  useEffect(() => {
    if (!isActiveFilter(filter)) {
      cars.length < PER_PAGE ? setSeeLoad(false) : setSeeLoad(true);
      dispatch(thunk.getCarsThunks(currentPage));
    } else if (isActiveFilter(filter) && filter.brand) {
      dispatch(thunk.getFilteredCarsThunk(filter.brand));
    }
  }, [dispatch, cars.length, filter, currentPage]);

  function filterCars1() {
    
      if (filter.price > 0 && filter.from === 0 && filter.to === 0) {
        //якщо у фільтрі вибрана тільки ціна
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
        return cars;
      }
  }

  const onClickShowMore = () => {
    dispatch(setCurrentPage(currentPage + 1));
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
