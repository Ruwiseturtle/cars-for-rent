import { createSlice } from "@reduxjs/toolkit";
import { getCarsThunks, getFilteredCarsThunk } from "./carsThunks";

const INITIAL_STATE = {
  cars: [],
  isLoading: false,
  error: null,
  totalCount: 0,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,
 
  extraReducers: (builder) =>
    builder
      //кейси для отримання каталогу машин
      .addCase(getCarsThunks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarsThunks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = [...action.payload];
      })
      .addCase(getCarsThunks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //для фільтрування
      .addCase(getFilteredCarsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFilteredCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filter = action.filter;
      })
      .addCase(getFilteredCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
  //для пагінації
});

export const { setFilter } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
