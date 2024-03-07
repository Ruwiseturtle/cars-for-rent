
export function isActiveFilter(filter) {
  return filter.brand || filter.price || filter.from || filter.to;
}

export function filterCars(filter, cars){
   if (isActiveFilter(filter)) {
     return cars.map((car) => {
       //якщо вибрана ціна, а пробіг не вибраний, то фільтруємо по ціні              
       if (
         filter.price > 0 &&
         filter.from === 0 &&
         filter.to === 0 &&
         Number(car.rentalPrice.slice(1)) === filter.price
       ) {
         return car;
       }
       //якщо ціна вибрана
       if (filter.price === 0 && filter.from > 0 && filter.to > 0) {
         return car;
       } else return cars;
       
     });
   } else {
     return cars;
   }
}