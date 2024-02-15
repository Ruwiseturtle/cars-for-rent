import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <div className="filter-box">
      <form autocomplete="on" novalidate>
        <div className="item">
          <label>car-brand</label>
          <select id="car-brand" name="car-brand" />
        </div>

        <div className="item">
          <label>Price/1hour </label>
          <select type="email" name="email" />
        </div>

        <div className="item">
          <label>Car mileage/km </label>
          <input className="input-from" type="email" name="email" />
        </div>

        <div className="item">
          <label><span className='invisible-text'>invisible text</span>
          </label>
          <input className="input-to" type="email" name="email" />
        </div>

        <button className='button' type="submit">Search</button>
      </form>
    </div>
  );
};

export default Filter;
