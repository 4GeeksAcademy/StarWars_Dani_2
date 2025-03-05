import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CharacterDetail = () => {
  const { id } = useParams();
  const { list, loading } = useSelector((state) => state.character || { list: [], loading: true });

  if (loading) return <p>Loading character...</p>;
  if (!list.length) return <p>No character available</p>;

  const character = list[id - 1];

  if (!character) return <p>character not found</p>;

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
