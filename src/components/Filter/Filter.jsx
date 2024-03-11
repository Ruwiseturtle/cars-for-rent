import React, { useState } from "react";
import "./Filter.css";
import { MODELS, PRICE } from "../../services/globalVariables";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/cars/filterReducer";

const Filter = () => {
  const [filter, setFilterState] = useState({
    brand: MODELS[0],
    price: PRICE[0],
    from: 0,
    to: 0,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();

    switch (e.currentTarget.name) {
      case "car-brand":
        setFilterState({ ...filter, brand: e.currentTarget.value });
        break;
      case "car-price":
        setFilterState({ ...filter, price: Number(e.currentTarget.value) });
        break;
      case "from":
        setFilterState({ ...filter, from: Number(e.currentTarget.value) });
        break;
      case "to":
        setFilterState({ ...filter, to: Number(e.currentTarget.value) });
        break;
      default:
        break;
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setFilter(filter));
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
            onChange={handleChange}
          >
            <option onChange={handleChange}></option>
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
          <select
            className="input-item"
            id="car-price"
            name="car-price"
            onChange={handleChange}
          >
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
            onChange={handleChange}
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
            onChange={handleChange}
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
