import {
  fetchCharactersStart,
  fetchCharactersSuccess,
  fetchCharactersError,
} from "../reducers/charactersReducer";

export const fetchCharacters = () => async (dispatch) => {
  dispatch(fetchCharactersStart());
  try {
    const response = await fetch("https://swapi.dev/api/people/");
    const data = await response.json();
    dispatch(fetchCharactersSuccess(data.results.slice(0,3)));
  } catch (error) {
    dispatch(fetchCharactersError());
  }
};
