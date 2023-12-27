import React, { useState } from "react";

const Search = ({ dataFilter }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="Search">
      <input
        type="text"
        name=""
        className=""
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          dataFilter(searchText);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
