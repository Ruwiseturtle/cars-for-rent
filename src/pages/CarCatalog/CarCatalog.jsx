import React from "react";
import Filter from "../../components/Filter/Filter";
import Cars from "../../components/CarsList/Cars";

const CarCatalog = () => {

  return (
    <div>
      <Filter />
      <Cars />
    </div>
  );
};

export default CarCatalog;
