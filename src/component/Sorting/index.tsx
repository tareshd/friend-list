import React from "react";
import { useDispatch } from "react-redux";
import * as Actions from "../../store/actions";
import UpArrow from "../../assets/UpArrow.png";
import DownArrow from "../../assets/DownArrow.png";

export const Sorting: React.FC = () => {
  const dispatch = useDispatch();

  const handleSorting = (sortType: string) => {
    if (sortType === "Asc") {
      dispatch({ type: Actions.SORT_BY_FAVOURITE_ASC });
    } else {
      dispatch({ type: Actions.SORT_BY_FAVOURITE_DESC });
    }
  };

  return (
    <div className="sort-container">
      <div className="button-wrapper">
        <span className="sort-label">Sort By Fav: </span>
        <div
          className="button sort-button"
          onClick={() => handleSorting("Asc")}
        >
          <img className="sort-img" src={UpArrow} alt="Sort Asc" />
        </div>
        <div
          className="button sort-button"
          onClick={() => handleSorting("Desc")}
        >
          <img className="sort-img" src={DownArrow} alt="Sort Desc" />
        </div>
      </div>
    </div>
  );
};
