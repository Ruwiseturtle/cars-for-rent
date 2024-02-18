import axios from "axios";

const carsListInstance = axios.create({
  baseURL: "https://6538cb3ca543859d1bb1ed9f.mockapi.io/",
});

export const requestGetFilteredCars = async (filter) => {
  try {
    const { data } = await carsListInstance.get(`cars?make=${filter}`);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
