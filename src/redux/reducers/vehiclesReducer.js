import { createSlice } from "@reduxjs/toolkit";

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState: { list: [], loading: false },
  reducers: {
    fetchVehiclesStart: (state) => { state.loading = true; },
    fetchVehiclesSuccess: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    fetchVehiclesError: (state) => { state.loading = false; },
  },
});

export const { fetchVehiclesStart, fetchVehiclesSuccess, fetchVehiclesError } = vehiclesSlice.actions;
export default vehiclesSlice.reducer;
