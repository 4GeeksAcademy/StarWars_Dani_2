import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ id, title, description, type }) => {

  const navigate = useNavigate();


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
