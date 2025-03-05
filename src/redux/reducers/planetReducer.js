import { createSlice } from "@reduxjs/toolkit";

const planetsSlice = createSlice({
  name: "planets",
  initialState: { list: [], loading: false },
  reducers: {
    fetchPlanetsStart: (state) => { state.loading = true; },
    fetchPlanetsSuccess: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    fetchPlanetsError: (state) => { state.loading = false; },
  },
});

export const { fetchPlanetsStart, fetchPlanetsSuccess, fetchPlanetsError } = planetsSlice.actions;
export default planetsSlice.reducer;
