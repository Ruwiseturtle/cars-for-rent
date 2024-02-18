import { createSlice } from "@reduxjs/toolkit";
import { getCarsThunks, getFilteredCarsThunk } from "./carsThunks";

const INITIAL_STATE = {
  cars: [],
  favorite: [],
  filter: "",
  //   filter2: '',
  // filter2: {
  //   brand: [],
  //   price: 0,
  //   from: 0,
  //   to: 0,
  // },
  isLoading: false,
  error: null,
  totalCount: 0,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,
  reducers: {
    setFavorite: (state, action) => {
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

export const { setFavorite, setFilter } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
