import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard.js";
import SearchForm from "./SearchForm.js";
import styled from "styled-components";

const CharacterLists = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CharacterCardCont = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// const CharacterCards = styled.div`
//   background: grey;
//   border-radius: 10px;
//   padding: 10px;
//   width: 25%;
//   height: 100%;
//   margin-bottom: 30px;
//   box-shadow: 10px 5px 5px lightgrey;
// `;

export default function CharacterList() {
  const [showCharacter, setShowCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    async function fetchData() {
      try {
        const characterData = await axios.get(
          "https://rickandmortyapi.com/api/character/"
        );
        setShowCharacter(characterData.data.results);
        console.log(characterData.data.results);
      } catch (err) {
        console.log("you gotta be quicker than that" + err);
      }
    } //***** END OF FETCH ***** //
    fetchData();
  }, []);

  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    axios
      .get(
        `https://rickandmortyapi.com/api/character/?name=${searchValue}&status=alive`
      )
      .then(response => {
        if (response.status === 200) {
          console.log("status is 200 sir");
          setShowCharacter(response.data.results);
          setLoading(false);
        } else {
          setErrorMessage(response.Error);
          setLoading(false);
        }
      })
      .catch(err => {
        setErrorMessage(err.Error);
        setLoading(false);
      });
  };

  return (
    <CharacterLists className="character-list">
      <SearchForm search={search} />
      <CharacterCardCont className="charcter-card-container">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          showCharacter.map((rickMorty, index) => {
            return (
              <CharacterCard
                key={index}
                image={rickMorty.image}
                name={rickMorty.name}
                status={rickMorty.status}
                species={rickMorty.species}
                gender={rickMorty.gender}
              />
            );
          })
        )}
      </CharacterCardCont>
    </CharacterLists>
  );
}
