import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const VehicleDetail = () => {
  const { id } = useParams();
  const { list, loading } = useSelector((state) => state.vehicles || { list: [], loading: true });

  if (loading) return <p>Loading vehicles...</p>;
  if (!list.length) return <p>No vehicles available</p>;

  const vehicle = list[id - 1];

  if (!vehicle) return <p>Vehicle not found</p>;

  return (
    <div>
      <h1>{vehicle.name}</h1>
      <p>Model: {vehicle.model}</p>
      <p>Manufacturer: {vehicle.manufacturer}</p>
      <p>Cost: {vehicle.cost_in_credits}</p>
    </div>
  );
};

export default VehicleDetail;
