import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CharacterDetail from "../pages/CharacterDetail";
import VehicleDetail from "../pages/VehicleDetail";
import PlanetDetail from "../pages/PlanetDetail";

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters/:id/" element={<CharacterDetail />} />
        <Route path="/vehicles/:id/" element={<VehicleDetail />} />
        <Route path="/planets/:id/" element={<PlanetDetail />} />
      </Routes>
   
  );
};

export default AppRoutes;