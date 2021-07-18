import React, { useEffect, useState } from "react";
import useAxios from "../components/useAxios";
import Movie from "../components/Movie";



function MovieList(props) {
  const { loading, data, error } = useAxios({ url: "https://yts.mx/api/v2/list_movies.json" });
  const [movies, setMovies] = useState(null);
  //const [isMovies, setIsMovies] = useState(false);
  // console.log(loading);
  // console.log(data);
  // console.log(error);
  console.log(`props : ${props}` );

  useEffect(() => {
    if(!loading){
      setMovies(data.data.data.movies);
    }
  }, [loading])


  // if(!loading){
  //   console.log(movies);
  // }

  // if(!loading){
  //   setMovies(data.data.movies);
  // }

  return (
    <section className="container">
      
      {/* loading */}
      {
        loading === true &&
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      }
      {/* loaded */}
      
      { 
        movies &&
        movies.map(movie => {
          console.log("not loading")
          return (
            <>
              <div key={movie.id} className="movies">
                {
                  <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} rating={movies.rating} runtime={movies.runtime} background_image={movies.background_image} />
                }
              </div>
            </>
          );
        })
      }



    </section >
  );
}


export default MovieList;