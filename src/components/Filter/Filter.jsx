import React from "react";
import "./Filter.css";
import { MODELS, PRICE } from "../../services/globalVariables";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/cars/carReducer";

const Filter = () => {
  const dispatch = useDispatch();

  const selectByValues = (e) => {
    dispatch(setFilter(e.target.value));
    //  dispatch(setFilter(e.target.value));
  };

  return (
    <div className="filter-box">
      <form>
        <div className="item">
          <label>car-brand</label>
          <select
            className="input-item"
            id="car-brand"
            name="car-brand"
            onChange={selectByValues}
          >
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
          <input
            className="input-from"
            type="email"
            name="email"
            placeholder="From"
          />
        </div>

        <div className="item">
          <label>
            <span className="invisible-text">invisible text</span>
          </label>
          <input
            className="input-to"
            type="email"
            name="email"
            placeholder="To"
          />
        </div>

        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Filter;
