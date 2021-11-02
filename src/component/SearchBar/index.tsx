import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Actions from "../../store/actions";

export const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");

  const handleChange = (event: any) => {
    const value = event.target.value;
    setSearchText(value);
    dispatch({ type: Actions.SEARCH_BY_NAME, searchText: value });
  };

  return (
    <div className="search-box-container">
      <input
        type="text"
        id="search"
        placeholder="Search by a friend name"
        autoComplete="off"
        value={searchText}
        onChange={handleChange}
        onKeyPress={handleChange}
        className="text-field"
      />
    </div>
  );
};
