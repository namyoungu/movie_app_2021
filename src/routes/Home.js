import React from "react";
import MovieList from "../components/MovieList";
import useAxios from "../components/useAxios";
import { useEffect, useState } from "react";
import "./Home.css";
import HomeMainImg from "../components/HomeMainImg";

function Home(){
  const { loading, data, error } = useAxios({ url: "https://yts.mx/api/v2/list_movies.json" });
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if(!loading){
      setMovies(data.data.data.movies);
      console.log(movies);
    }
  }, [loading])

  return(
    <section>
      {
          movies &&
          <HomeMainImg
            movie = {movies[0]}
          />
      }
      <h1>최근에 나온 컨텐츠</h1>
      {
          movies &&
          <MovieList
            movies = {movies}
          />
      }
      
      <h1>추천 컨텐츠</h1>
      {
          movies &&
          <MovieList
            movies = {movies}
          />
      }

    </section>
    

  );
}

export default Home;