import React, { useState } from "react";
import "./Filter.css";
import { MODELS, PRICE } from "../../services/globalVariables";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/cars/filterReducer";

const Filter = () => {
  const [filterBrand, setFilterBrand] = useState(MODELS[0]);
  const [filterPrice, setFilterPrice] = useState(PRICE[0]);
  const [filterFrom, setFilterFrom] = useState(0);
  const [filterTo, setFilterTo] = useState(0);
  const dispatch = useDispatch();

  const handleClickForm = (e) => {
    e.preventDefault();
    console.log("!!!");
    if (e.target.name === "button-search") {
      setFilterBrand(e.currentTarget.elements[0].value);
      setFilterPrice(Number(e.currentTarget.elements[1].value));
      setFilterFrom(Number(e.currentTarget.elements[2].value));
      setFilterTo(Number(e.currentTarget.elements[3].value));
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      setFilter({
        brand: filterBrand,
        price: filterPrice,
        from: filterFrom,
        to: filterTo,
      })
    );
  };

  return (
    <div className="filter-box">
      <form onClick={handleClickForm}>
        <div className="item">
          <label>car-brand</label>
          <select className="input-item" id="car-brand" name="car-brand">
            <option>{""}</option>
            {MODELS &&
              MODELS.map((model, index) => {
                if (index > 0) {
                  return <option key={model}>{model}</option>;
                } else {
                  return null;
                }
              })}
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
          <input
            className="input-from"
            type="number"
            name="from"
            placeholder="From"
          />
        </div>

        <div className="item">
          <label>
            <span className="invisible-text">invisible text</span>
          </label>
          <input
            className="input-to"
            type="number"
            name="to"
            placeholder="To"
          />
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
