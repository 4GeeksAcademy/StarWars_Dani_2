import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PlanetsDetail = () => {
  const { id } = useParams();
  const { list, loading } = useSelector((state) => state.planets || { list: [], loading: true });

  if (loading) return <p>Loading planets...</p>;
  if (!list.length) return <p>No planets available</p>;

  const planet = list[id - 1];

  if (!planet) return <p>planets not found</p>;

  return (
    <div>
      <h1>{planet.name}</h1>
      <p>Rotation_period: {planet.rotation_period}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Gravity: {planet.gravity}</p>
    </div>
  );
};

export default PlanetsDetail;
