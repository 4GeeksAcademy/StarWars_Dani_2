import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, description, type }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={`/${type}/${id}`}>
        <button>Read More</button>
      </Link>
    </div>
  );
};

export default Card;
