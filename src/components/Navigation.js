import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { Film } from 'react-bootstrap-icons';


function Navigation() {
  return (
    <>
      <nav className="NavBar">
        <div className="icons">
          <Link to="/about"><Film className="Film" color="red"/></Link>
          <span className="navMovies">MOVIES</span>
        </div>
        <ul className="routes">
          <li><Link to="/" className="navHome">Home</Link></li>
          <li><Link to="/about" className="navAbout">About</Link></li>
          <li><Link to="/test" className="navTest">Test</Link></li>
        </ul>
      </nav >
      <hr></hr>
    </>
  );

}

export default Navigation;