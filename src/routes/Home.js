import PropTypes from "prop-types";
import React, { useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    //console.log(movies);
    //    this.setState({ movies: movies });
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (<div className="loader"><span className="loader__text">Loading...</span></div>) : movies.map(movie => {
          return (
            <div key={movie.id} className="movies">
              {
                <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
              }
            </div>);
        })}
      </section>
    );
  }
}


export default Home;
