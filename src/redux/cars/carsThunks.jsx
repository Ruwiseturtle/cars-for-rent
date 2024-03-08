import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestGetAllCars } from "../../API/cars/gerCars";
import { requestGetFilteredCars } from "../../API/cars/getFilteredCars";

//санка для отримання даних по усіх машин однієї сторінки
export const getCarsThunks = createAsyncThunk(
  "cars/get",
  async (page, thunkAPI) => {
    try {
      const carsData = await requestGetAllCars(page);
      return carsData; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//санка для отримання даних по усіх машин
export const getFilteredCarsThunk = createAsyncThunk(
  "cars/getFiltered",
  async (brand, thunkAPI) => {
    try {
      const carsData = await requestGetFilteredCars(brand);
      return carsData; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

