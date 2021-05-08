import React, { useRef } from "react";

export default function Search(props) {
  const query = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    const queryVal = query.current.value;
    props.fetchMovies(queryVal.trim());
  };
  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input placeholder="Search Movies" type="text" ref={query}></input>
    </form>
  );
}
