import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
// import LocationsList from "./components/LocationsList.js";
// import SearchForm from "./components/SearchForm.js";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/Character" component={CharacterList} />
      {/* <SearchForm /> */}
    </main>
  );
}
