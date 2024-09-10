import React from "react";

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search tasks by title:"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="my-4 form-input"
      />
    </>
  );
};

export default Search;
