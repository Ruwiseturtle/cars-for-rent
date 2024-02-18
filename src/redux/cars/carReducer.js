import { createSlice } from "@reduxjs/toolkit";
import { getCarsThunks, getFilteredCarsThunk } from "./carsThunks";

const INITIAL_STATE = {
  cars: [],
  favorite: [],
  filter: "",
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,
  reducers: {
    setFavorite: (state, action) => {
      console.log("актион пейлоад");
      console.log(action.payload);
      state.favorite = [...action.payload];
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
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
        console.log("в кейсах");
        console.log(action.payload);
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
});

export const { setFavorite, setFilter } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
