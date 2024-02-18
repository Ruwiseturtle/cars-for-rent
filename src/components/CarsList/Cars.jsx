import React, { useState } from "react";
import "./Cars.css";
import { requestGetAllCars } from "../../API/cars/gerCars";
import { requestGetFilteredCars } from "../../API/cars/getFilteredCars";
import { useEffect } from "react";
import Card from "../Card/Card";
import { selectFilter } from "../../redux/cars/carSelectors";
import { useSelector } from "react-redux";
import { PER_PAGE } from "../../services/globalVariables";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [seeLoad, setSeeLoad] = useState(false);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    if (!filter) {
      requestGetAllCars(page).then((value) => {
        if (value.length === PER_PAGE) {
          setSeeLoad(true);
        } else {
          setSeeLoad(false);
        }
        setCars([...cars, ...value]);
      });
    } else {
      requestGetFilteredCars(filter).then((value) => {
        setCars([...value]);
      });
    }
  }, [page]);

  const onClickShowMore = () => {
    setPage(page + 1);
  };

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
      {seeLoad && (
        <div key="page" className="pagination" onClick={onClickShowMore}>
          Load more
        </div>
      )}
    </div>
  );
};

export default Cars;
