import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div className="Nav-Container">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Character">Characters</NavLink>
        </nav>
      </div>
    </header>
  );
}
