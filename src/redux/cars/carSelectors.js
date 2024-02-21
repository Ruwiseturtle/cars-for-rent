export const selectGetCars = (state) => state.carsStore.cars;
export const selectFavorite = (state) => state.carsStore.favorite;
export const selectFilter = (state) => state.carsStore.filter;
export const getCurrentPage = (state) => state.carsStore.currentPage;
export const selectorIsLoading = (state) => state.carsStore.isLoading;
export const selectorIsError = (state) => state.carsStore.isError;
export const selectUseFilter = (state) => state.carsStore.useFilter;
export const setUseFilter = (state) => state.carsStore.setUseFilter;