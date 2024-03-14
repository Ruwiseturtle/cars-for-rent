import { createSlice } from "@reduxjs/toolkit";
import { getCarsThunks, getFilteredCarsThunk } from "./carsThunks";

const INITIAL_STATE = {
  cars: [],
  currentPage: 1,
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
      //кейси для отримання каталогу машин одныэъ сторінки
      .addCase(getCarsThunks.pending, (state) => {
        console.log('status pending машин');
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarsThunks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
      })
      .addCase(getCarsThunks.rejected, (state, action) => {
        console.log("status error машин");
        state.isLoading = false;
        state.error = action.payload;
      })
      //кейси для отримання відфільтрованого каталогу машин по бренду
      .addCase(getFilteredCarsThunk.pending, (state) => {
        console.log("status pending відфільтрованих машин");
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFilteredCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = [...action.payload];
      })
      .addCase(getFilteredCarsThunk.rejected, (state, action) => {
        console.log("status error відфільтрованих машин");
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setFilter, setCurrentPage } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
