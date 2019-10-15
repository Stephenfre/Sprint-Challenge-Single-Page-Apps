import React, { useState } from "react";
import styled from "styled-components";

const FormStyling = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Search = props => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <FormStyling className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </FormStyling>
  );
};

export default Search;
