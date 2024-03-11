export function isActiveFilter(filter) {
  return !!filter.brand || !!filter.price || !!filter.from || !!filter.to;
}

export function filterCars(filter, cars) {
  if (cars.length === 0) { return cars;}

  if (isActiveFilter(filter)) {
    return cars
      .map((car) => {
        //якщо вибрана ціна
        if (
          filter.price > 0 &&
          Number(car.rentalPrice.slice(1)) === filter.price
        ) {
          return filterMilleage(filter, car);
          //якщо не вибрана ціна
        } else if (filter.price === 0) {
          return filterMilleage(filter, car);
        }

        return null;
      })
      .filter(Boolean);
  } else if (!isActiveFilter(filter)) {
    return cars;
  }
}

//фільтруємо пробіг. Вертаємо машину в залежності від полів from та to.
//якщо пробіг входить в діапазон від from до to, то машина вертається
function filterMilleage({ from, to }, car) {
  if (from === 0 && to === 0) {
    return car;
  } else if (
    from !== 0 &&
    to !== 0 &&
    car.mileage >= from &&
    car.mileage <= to
  ) {
    return car;
  } else if (from !== 0 && to === 0 && car.mileage >= from) {
    return car;
  } else if (from === 0 && to !== 0 && car.mileage <= to) {
    return car;
  }
}
