import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  width: 30%;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  :hover {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }
`;

// const LinkTag = {
//   textDecoration: "none",
//   color: "black",
//   hover: "red"
// };

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavContainer className="Nav-Container">
        <NavStyle className="nav-link">
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/Character">Characters</StyledLink>
        </NavStyle>
      </NavContainer>
    </header>
  );
}

// style = { LinkTag }
// style = { LinkTag }
