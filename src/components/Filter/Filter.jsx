import React, { useState, useEffect } from "react";
import "./Filter.css";
import { MODELS, PRICE } from "../../services/globalVariables";
import { useDispatch } from "react-redux";
import { setFilter, setFilterFlag } from "../../redux/cars/filterReducer";
import { setCurrentPage } from "../../redux/cars/carReducer";

const Filter = () => {
  const [filterBrand, setFilterBrand] = useState(MODELS[0]);
  const [filterPrice, setFilterPrice] = useState(PRICE[0]);
  const [filterFrom, setFilterFrom] = useState(0);
  const [filterTo, setFilterTo] = useState(0);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(
      setFilter({
        brand: filterBrand,
        price: filterPrice,
        from: filterFrom,
        to: filterTo,
      })
    );
    dispatch(setCurrentPage(1));
  });

  const handleClickForm = (e) => {
    e.preventDefault();

    if (e.target.name === "button-search") {
      setFilterBrand(e.currentTarget.elements[0].value);
      setFilterPrice(e.currentTarget.elements[1].value);
      setFilterFrom(e.currentTarget.elements[2].value);
      setFilterTo(e.currentTarget.elements[3].value);
      e.currentTarget.elements[2].value = "";
      e.currentTarget.elements[3].value = "";
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setFilter({ filterBrand, filterPrice, filterFrom, filterTo }));
    dispatch(setFilterFlag(true));
  };

  return (
    <div className="filter-box">
      <form onClick={handleClickForm}>
        <div className="item">
          <label>car-brand</label>
          <select className="input-item" id="car-brand" name="car-brand">
            {MODELS &&
              MODELS.map((model) => <option key={model}>{model}</option>)}
          </select>
        </div>

        <div className="item">
          <label>Price/1hour </label>
          <select className="input-item" id="car-price" name="car-price">
            {PRICE &&
              PRICE.map((price) => <option key={price}>{price}</option>)}
          </select>
        </div>

        <div className="item">
          <label>Car mileage/km </label>
          <input className="input-from" name="from" placeholder="From" />
        </div>

        <div className="item">
          <label>
            <span className="invisible-text">invisible text</span>
          </label>
          <input className="input-to" name="to" placeholder="To" />
        </div>

        <button
          type="submit"
          name="button-search"
          className="button"
          onClick={handleClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Filter;
