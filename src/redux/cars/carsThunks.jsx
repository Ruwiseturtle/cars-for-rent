import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestGetAllCars } from "../../API/cars/gerCars";
import { requestGetFilteredCars } from "../../API/cars/getFilteredCars";

//санка для отримання даних по усіх машин
export const getCarsThunks = createAsyncThunk(
  "cars/get",
  async (_, thunkAPI) => {
    try {
      const carsData = await requestGetAllCars();
      console.log("запит на отримання машин");
      return carsData; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//санка для отримання даних по усіх машин
export const getFilteredCarsThunk = createAsyncThunk(
  "cars/getFiltered",
  async (filter, thunkAPI) => {
    try {
      const carsData = await requestGetFilteredCars(filter);
      console.log("запит на отримання відфільтрованих машин");
      return carsData; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
