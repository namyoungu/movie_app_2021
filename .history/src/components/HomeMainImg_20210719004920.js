import React from "react";
import "./HomeMainImg.css";
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomeMainImg({movie}){

  return(

    <section className="mainImgBox">
      <div>
        <img src={movie.background_image} alt={movie.title} className="mainImg"/>
        <span className="mainImgTitle">{movie.title}</span>
        <span className="mainImgSummary">{movie.summary.substring(30) + " ..."}</span>
        <div className="playBtnBox">
          <FontAwesomeIcon icon={faPlay} className="playBtn"/>
          <span>재생</span>
        </div>    
      </div>
      
      
    </section>
  
  );
  
}

export default HomeMainImg;