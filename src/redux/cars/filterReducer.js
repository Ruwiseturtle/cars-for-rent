import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filter: {
    brand: "",
    price: 0,
    from: 0,
    to: 0,
  },
};

const filterSlice = createSlice({
  name: "filterCars",
  initialState: INITIAL_STATE,
  reducers: {
    setFilter: (state, action) => {
      console.log(action.payload);
      state.filter = action.payload;
    }
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;