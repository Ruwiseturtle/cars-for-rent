import axios from "axios";
import { PER_PAGE } from "../../services/globalVariables";

axios.defaults.baseURL = "https://6538cb3ca543859d1bb1ed9f.mockapi.io/";

export const requestGetFilteredCars = async (currentPage, brand) => {
  try {
    const { data } = await axios.get(
      `cars?page=${currentPage}&limit=${PER_PAGE}&make=${brand}`
    );
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
