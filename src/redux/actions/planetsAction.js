import {
  fetchPlanetsStart,
  fetchPlanetsSuccess,
  fetchPlanetsError,
} from "../reducers/planetReducer";

export const fetchPlanets = () => async (dispatch) => {
  dispatch(fetchPlanetsStart());
  try {
    const response = await fetch("https://swapi.dev/api/planets?limit=3");
    const data = await response.json();
    dispatch(fetchPlanetsSuccess(data.results));
  } catch (error) {
    dispatch(fetchPlanetsError());
  }
};
