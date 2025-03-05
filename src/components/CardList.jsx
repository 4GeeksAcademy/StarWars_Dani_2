import React from "react";
import Card from "./Card";

const CardList = ({ items, type }) => {
  return (
    <div className="grid">
      {items.map((item, index) => (
        <Card 
          key={index} 
          id={index + 1} 
          title={item.name} 
          description={item.model || item.gender || item.climate} 
          type={type} 
        />
      ))}
    </div>
  );
};

export default CardList;
