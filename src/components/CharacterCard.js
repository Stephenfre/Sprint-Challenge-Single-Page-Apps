import React from "react";
import styled from "styled-components";

const CharacterCards = styled.div`
  border-radius: 10px;
  padding: 30px;
  width: 75%;
  height: 100%;
  margin-bottom: 30px;
  box-shadow: 0px 15px 40px grey;
`;

const CharacterImg = styled.img`
  width: 100%;
`;

export default function CharacterCard(props) {
  return (
    <CharacterCards className="character-card">
      <CharacterImg src={props.image} alt="Rick and Morty Characters" />
      <p>Name: {props.name}</p>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
    </CharacterCards>
  );
}

// key = { index }
// name = { rickMorty.name }
// status = { rickMorty.status }
// type = { rickMorty.type }
// gender = { rickMorty.gender }
