import React, { useEffect, useState, useRef} from "react";
import Movie from "./Movie";
import "./MovieList.css";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MovieList({movies}) {
  //console.log(movies);

  //const인데 어떻게 각 container에 붙을 수가 있는거지?
  const moviesRef = useRef(null);
  
  function handleScrollRight(){
    const opt = {
      left: 600,
      behavior: 'smooth'
    }
    moviesRef.current.scrollBy(opt);
  }

  function handleScrollLeft(){
    const opt = {
      left: -600,
      behavior: 'smooth'
    }
    moviesRef.current.scrollBy(opt);
  }

  return (
    <section className="container">
      
      <span className="leftBtnBox btnBox" onClick={handleScrollLeft}>
        <FontAwesomeIcon icon={faAngleLeft} className="leftBtn"/>
      </span>
      
      <ul className="movies" ref = {moviesRef}>
        { 
          movies &&
          movies.map(movie => {
            console.log("not loading")
            return (
              <>
                <li key={movie.id} className="movieBox">
                  {
                    <Movie
                      key = {movie.id}
                      year={movie.year}
                      title={movie.title}
                      summary={movie.summary}
                      poster={movie.medium_cover_image}
                      genres={movie.genres}
                      rating={movie.rating}
                      runtime={movie.runtime}
                      backgroundImage={movie.background_image}
                    />
                  }
                </li>
              </>
            );
          })
        }
      </ul>

      <span className="rightBtnBox btnBox" onClick={handleScrollRight}>
        <FontAwesomeIcon icon={faAngleRight} className="rightBtn"/>
      </span>

    </section >
  );
}

export default MovieList;