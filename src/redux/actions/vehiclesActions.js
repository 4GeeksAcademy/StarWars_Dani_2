import { fetchVehiclesStart,fetchVehiclesSuccess,fetchVehiclesError } from "../reducers/vehiclesReducer";

export const fetchVehicles = () => async (dispatch) => {
  dispatch(fetchVehiclesStart());
  try {
    const response = await fetch("https://swapi.dev/api/people/");
    const data = await response.json();
    dispatch(fetchVehiclesSuccess(data.results));
  } catch (error) {
    dispatch(fetchVehiclesError());
  }
};
