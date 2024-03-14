export const selectGetCars = (state) => state.carsStore.cars;
export const selectStatusLoading = (state) => state.carsStore.isLoading;
export const selectStatusError = (state) => state.carsStore.error;
export const selectFavorite = (state) => state.favoriteCarsStore.favorite;
export const selectFilter = (state) => state.filterStore.filter;
export const selectCurrentPage = (state) => state.carsStore.currentPage;
export const selectorIsLoading = (state) => state.carsStore.isLoading;
export const selectorIsError = (state) => state.carsStore.isError;