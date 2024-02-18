import React, { useState } from "react";
import "./Cars.css";
import { requestGetAllCars } from "../../API/cars/gerCars";
import { requestGetFilteredCars } from "../../API/cars/getFilteredCars";
import { useEffect } from "react";
import Card from "../Card/Card";
import { selectFilter } from "../../redux/cars/carSelectors";
import { useSelector } from "react-redux";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    if (!filter) {
      requestGetAllCars().then((value) => {
        setCars([...value]);
      });
    } else {
      requestGetFilteredCars(filter).then((value) => {
        setCars([...value]);
      });
    }
  }, [filter]);

  return (
    <div className="car-box">
      <ul className="car-catalog">
        {cars &&
          cars.map((car) => (
            <li key={car.id}>
              <Card car={car}></Card>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cars;
