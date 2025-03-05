import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "characters",
  initialState: { list: [], loading: false },
  reducers: {
    fetchCharactersStart: (state) => { state.loading = true; },
    fetchCharactersSuccess: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    fetchCharactersError: (state) => { state.loading = false; },
  },
});

export const { fetchCharactersStart, fetchCharactersSuccess, fetchCharactersError } = charactersSlice.actions;
export default charactersSlice.reducer;
