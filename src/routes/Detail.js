import React from "react";
import "./Detail.css";


class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;

    if (location.state === undefined) {
      return null;
    }
    else {
      const { poster, title, year, genres, summary } = location.state;
      return (
        <>
          <div className="movies__detail__movie" >
            <img src={poster} alt={title} />
            <div className="movie__detail__data">
              <h3 className="movie__detail__title">{title}</h3>
              <h5 className="movie__detail__year">{year}</h5>
              <ul className="movie__detail__geners">
                {genres.map((genre, index) => {
                  return <li key={index} className="movie__detail__genre">{genre}</li>
                })}
              </ul>
              <p className="movie__summary">{summary}</p>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Detail;