export const selectGetCars = (state) => state.carsStore.cars;
export const selectFavorite = (state) => state.carsStore.favorite;
export const selectFilter = (state) => state.carsStore.filter;
export const getCurrentPage = (state) => state.carsStore.currentPage;
export const isLoading = (state) => state.carsStore.isLoading;
export const isError = (state) => state.carsStore.isError;