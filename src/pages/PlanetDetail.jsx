import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PlanetDetail = () => {
  const { id } = useParams();
  const planet = useSelector((state) => state.planet.list[id - 1]);

  if (!planet) return <p>planet not found</p>;

  return (
    <div>
      <h1>{planet.name}</h1>
      <p>Height: {planet.height}</p>
      <p>Mass: {planet.mass}</p>
      <p>Gender: {planet.gender}</p>
    </div>
  );
};

export default PlanetDetail;
