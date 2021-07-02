import React from "react";
import { Link } from "react-router-dom";
import Proptype from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link to={{
      pathname: `/movie/${id}`,
      state: {
        year,
        title,
        summary,
        poster,
        genres
      }
    }}>
      <div className="movies__movie" >
        <img src={poster} alt={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__geners">
            {genres.map((genre, index) => {
              return <li key={index} className="movie__genre">{genre}</li>
            })}
          </ul>
          <p className="movie__summary">{summary}</p>
        </div>
      </div>
    </Link>
  );
}

Movie.prototype = {
  key: Proptype.number.isRequired,
  id: Proptype.number.isRequired,
  year: Proptype.number.isRequired,
  tile: Proptype.string.isRequired,
  summary: Proptype.string.isRequired,
  poster: Proptype.string.isRequired,
  genre: Proptype.arrayOf(Proptype.string).isRequired
}

export default Movie;