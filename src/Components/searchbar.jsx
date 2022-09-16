import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./searchbar.css";

const Searchbar = ({ value, changeInput }) => {
  return (
    <div className="searchBar-wrap">
      <h1 className="searchtite">Restro </h1>
      <SearchIcon className="searchBar-icon" />
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};

export default Searchbar;
