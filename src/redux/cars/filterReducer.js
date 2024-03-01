import { createSlice } from "@reduxjs/toolkit";
import { MODELS, PRICE } from "../../services/globalVariables";

const INITIAL_STATE = {
  filter: {
    brand: MODELS[0],
    price: PRICE[0],
    from: 0,
    to: 0,
  },
  filterFlag: false,
};

const filterSlice = createSlice({
  name: "filterCars",
  initialState: INITIAL_STATE,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setFilterFlag: (state, action) => {
      state.filterFlag = action.payload;
    },
  },

});

export const { setFilter, setFilterFlag } = filterSlice.actions;
export default filterSlice.reducer;
