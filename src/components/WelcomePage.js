import React from "react";
import styled from "styled-components";

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-cotent: center;
  align-items: center;
  width 100%;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Welcome>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </Welcome>
    </section>
  );
}
