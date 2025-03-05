import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./reducers/charactersReducer"; 
import vehiclesReducer from "./reducers/vehiclesReducer";
import planetsReducer from "./reducers/vehiclesReducer";



const store = configureStore({
  reducer: {
    characters: charactersReducer,
    vehicles: vehiclesReducer,
    planets: planetsReducer,
  },
});

export default store;