import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { carsReducer } from "./cars/carReducer";
import favoriteReducer from "./cars/carsFavoritesReducer";
import filterReducer from './cars/filterReducer';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// const authConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };

const favoritesConfig = {
  key: "favorites",
  storage,
  whitelist: ["favoriteCarsStore"],
};
export const rootReducer = combineReducers({
  carsStore: carsReducer,
  favoriteCarsStore: favoriteReducer,
  filterStore: filterReducer,
  //   auth: persistReducer(authConfig, authReducer),
});

const persistedReduser = persistReducer(favoritesConfig, rootReducer);

export const store = configureStore({
  // reducer: rootReducer,
  reducer: persistedReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
