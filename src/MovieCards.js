import React, {useState} from 'react'

export default function MovieCards(props) {
    const [nominations, setNomination] = useState([]);

    const addNomination = (movie) => {
        props.addNom(movie)
        
    }
    console.log(nominations)
    return (
        <div>
          
            {props.movies ? (
           
          <div className="movie-container">
           
            {props.movies.map((movie) => (
       
                  <div className="card">
                    {props.nominations.includes(movie) ? (
                      <button className="disabled-button"
                    
                      >
                        Nominated
                      </button>
                    ) : (
                      <button
                        className="nominate-button"
                        onClick={() => addNomination(movie)}
                      >
                        Nominate
                      </button>
                    )}
                    <img className="movie-poster" src={movie.Poster} />
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
    )
}
