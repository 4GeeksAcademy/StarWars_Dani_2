import {
  fetchVehiclesStart,
  fetchVehiclesSuccess,
  fetchVehiclesError,
} from "../reducers/vehiclesReducer";

export const fetchVehicles = () => async (dispatch) => {
  dispatch(fetchVehiclesStart());
  try {
    const response = await fetch("https://swapi.dev/api/vehicles/?limit=3");
    const data = await response.json();
    dispatch(fetchVehiclesSuccess(data.results));
  } catch (error) {
    dispatch(fetchVehiclesError());
  }
};
