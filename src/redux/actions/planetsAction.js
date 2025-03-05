import {
  fetchPlanetsStart,
  fetchPlanetsSuccess,
  fetchPlanetsError,
} from "../reducers/planetReducer";

export const fetchPlanets = () => async (dispatch) => {
  dispatch(fetchPlanetsStart());
  try {
    const response = await fetch("https://swapi.dev/api/planets/");
    const data = await response.json();
    dispatch(fetchPlanetsSuccess(data.results.slice(0,3)));
  } catch (error) {
    dispatch(fetchPlanetsError());
  }
};
