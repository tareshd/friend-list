import React from "react";
import { SearchBar } from "../SearchBar";
import { Sorting } from "../Sorting";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="friend-list-heading">
        <h1>F.R.I.E.N.D.S</h1>
      </div>
      <Sorting />
      <SearchBar />
    </div>
  );
};
