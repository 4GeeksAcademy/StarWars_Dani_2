import {
  fetchVehiclesStart,
  fetchVehiclesSuccess,
  fetchVehiclesError,
} from "../reducers/vehiclesReducer";

export const fetchVehicles = () => async (dispatch) => {
  dispatch(fetchVehiclesStart());
  try {
    const response = await fetch("https://swapi.dev/api/vehicles/");
    const data = await response.json();
    dispatch(fetchVehiclesSuccess(data.results.slice(0,3)));
  } catch (error) {
    dispatch(fetchVehiclesError());
  }
};
