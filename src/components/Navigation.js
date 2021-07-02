import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { Film } from 'react-bootstrap-icons';


function Navigation() {
  return (
    <>
      <nav className="NavBar">
        <div className="icons">
          <Link to="/about"><Film className="Film" /></Link>
          <span>MOVIES</span>
        </div>
        <ul className="routes">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav >
      <hr></hr>
    </>
  );

}

export default Navigation;