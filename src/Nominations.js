import React from "react";
import { Link } from "react-router-dom";

export default function Nominations(props) {
  const handleClick = (movie) => {
    props.deleteNom(movie);
  };
  return (
    <div>
      <div className="badge-wrapper">
        <Link to="/">
          <button className="nomination-button">Back to Search</button>
        </Link>
      </div>
      {props.nominations ? (
        <div className="movie-container">
          {props.nominations.map((movie) => (
            <div className="card">
              <button
                className="nominate-button"
                onClick={() => handleClick(movie)}
              >
                Remove
              </button>

              <img className="movie-poster" src={movie.Poster} alt='Movie Poster'/>
              <div className="movie-info">
                <data>({movie.Year})</data>
                <p className="movie-title">{movie.Title}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h2>No results </h2>
        </div>
      )}
    </div>
  );
}
