import React, { useState, useEffect } from "react";
import "./Filter.css";
import { MODELS, PRICE } from "../../services/globalVariables";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/cars/filterReducer";

const Filter = () => {
  const [filterBrand, setFilterBrand] = useState("");
  const [filterPrice, setFilterPrice] = useState("");
  const [filterFrom, setFilterFrom] = useState(0);
  const [filterTo, setFilterTo] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(setFilter({ brand:'', price:0, from:0, to:0 }));
  });

  const handleChangeForm = (e) => {
    e.preventDefault();
    if (e.target.name === "car-brand") {
      setFilterBrand(e.currentTarget.elements[0].value);
    } else if (e.target.name === "car-price") {
      setFilterPrice(e.currentTarget.elements[1].value);
    } else if (e.target.name === "from") {
      setFilterFrom(e.currentTarget.elements[2].value);
    } else if (e.target.name === "to") {
      setFilterTo(e.currentTarget.elements[3].value);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setFilter({ filterBrand, filterPrice, filterFrom, filterTo }));
  };

  return (
    <div className="filter-box">
      <form onChange={handleChangeForm}>
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
