import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CharacterDetail = () => {
  const { id } = useParams();
  const character = useSelector((state) => state.characters.list[id - 1]);

  if (!character) return <p>Character not found</p>;

  return (
    <div>
      <h1>{character.name}</h1>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
};

export default CharacterDetail;
