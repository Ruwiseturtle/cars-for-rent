import React from "react";
import Filter from "../../components/Filter/Filter";
import Cars from "../../components/CarsList/Cars";
import './CarCatalog.css';
import { Loading } from "../../components/Loading/Loading";

const CarCatalog = () => {

  return (
    <div className='carCatalog-container'>
      <Filter />
      <Loading/>
      <Cars />
    </div>
  );
};

export default CarCatalog;
