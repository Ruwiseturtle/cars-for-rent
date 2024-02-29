import { createSlice } from "@reduxjs/toolkit";
import { getCarsThunks, getFilteredCarsThunk } from "./carsThunks";

const INITIAL_STATE = {
  cars: [],
  currentPage: 1,
  totalCount: 0,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
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

export const { setFilter, setCurrentPage } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
