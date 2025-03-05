import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../redux/actions/charactersActions.js";
import { fetchVehicles } from "../redux/actions/vehiclesActions.js";
import { fetchPlanets } from "../redux/actions/planetsAction.js";
import CardList from "../components/CardList";

const Home = () => {
  const dispatch = useDispatch();
  const { list: characters } = useSelector((state) => state.characters);
  const { list: vehicles } = useSelector((state) => state.vehicles);
  const { list: planets } = useSelector((state) => state.planets);

  useEffect(() => {
    dispatch(fetchCharacters());
    dispatch(fetchVehicles());
    dispatch(fetchPlanets());
  }, [dispatch]);

  return (
    <div>
      <h1>Star Wars Catalog</h1>
      <h2>Characters</h2>
      <CardList items={characters} type="characters" />
      
      <h2>Vehicles</h2>
      <CardList items={vehicles} type="vehicles" />
      
      <h2>Planets</h2>
      <CardList items={planets} type="planets" />
    </div>
  );
};

export default Home;
