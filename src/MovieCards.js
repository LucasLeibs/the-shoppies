import React from "react";
import { ToastProvider, useToasts } from "react-toast-notifications";
import { Link } from "react-router-dom";
export default function MovieCards(props) {
  
  const { addToast } = useToasts();

  const addNomination = (movie) => {
    props.nominations.length === 5
      ? addToast("Can only nominate 5 movies total", { appearance: "warning" })
      : props.addNom(movie);
  };
 
  const movies = props.movies ? props.movies.slice(0, 9) : props.movies;
  return (
    <div>
      <ToastProvider>
        <div className="badge-wrapper">
          <Link to="/nominations">
            <button className="nomination-button">Nominations </button>{" "}
          </Link>
          <span className="badge">{props.nominations.length}</span>
        </div>
        {props.movies ? (
          <div className="movie-container">
            {movies.map((movie) => (
              <div className="card">
                {props.nominations.includes(movie) ? (
                  <button className="disabled-button">Nominated</button>
                ) : (
                  <button
                    className="nominate-button"
                    onClick={() => addNomination(movie)}
                  >
                    Nominate
                  </button>
                )}
                <img className="movie-poster" src={movie.Poster} alt="Movie Poster" />
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
      </ToastProvider>
    </div>
  );
}
