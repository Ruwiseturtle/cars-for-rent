import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
  favorite: []
};

const favoriteSlice = createSlice({
  name: "favoriteCars",
  initialState: INITIAL_STATE,
  reducers: {
    setFavorite: (state, action) => {
      state.favorite = [...action.payload];
    },
    // deleteFavorite(state, action) {
    //   state.contacts = state.contacts.filter(
    //     (contact) => contact.id !== action.payload
    //   );
    // }
  },
});

export const { setFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
