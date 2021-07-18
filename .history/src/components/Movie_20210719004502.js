import React, { useState } from "react";
import { Link } from "react-router-dom";
import Proptype from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres, rating, runtime, backgroundImage}) {
  const [onMouse, setOnMouse] = useState(false);

  function handleMouseOver(e){
    setOnMouse(true);
  }
  function handleMouseLeave(e){
    setOnMouse(false);
  }
  

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
      <div className="movie" onMouseOver ={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <img src={poster} alt={title} className="moiveImg"/>
        {/* {onMouse ? <img src={poster} alt={title} className="moiveImg2"/>: null} */}
        {onMouse ? <div>asdfasd</div>: null}
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