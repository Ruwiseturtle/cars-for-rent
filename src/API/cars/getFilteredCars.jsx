import axios from "axios";

axios.defaults.baseURL = "https://6538cb3ca543859d1bb1ed9f.mockapi.io/"; 

export const requestGetFilteredCars = async (brand) => {
  try {
    const { data } = await axios.get(`cars?make=${brand}`
    );
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
