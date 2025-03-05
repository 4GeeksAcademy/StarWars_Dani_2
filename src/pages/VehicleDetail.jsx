import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const VehicleDetail = () => {
  const { id } = useParams();
  const vehicle = useSelector((state) => state.vehicle.list[id - 1]);

  if (!vehicle) return <p>vehicle not found</p>;

  return (
    <div>
      <h1>{vehicle.name}</h1>
      <p>Model: {vehicle.model}</p>
      <p>Manufacturer: {vehicle.manufacturer}</p>
      <p>Passengers: {vehicle.pagassengers}</p>
    </div>
  );
};

export default VehicleDetail;
