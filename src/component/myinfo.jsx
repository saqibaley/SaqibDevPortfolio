import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import jscript from "../assets/jScript.png";
import reactImg from "../assets/logo512.png";
import figma from "../assets/figma.svg";
import tailwind from "../assets/tailwind.svg";
import html from "../assets/html5.png";
import css3 from "../assets/css3.png";
import gitHub from "../assets/gitHub.png";
import myImg from "../assets/profilePhoto.png";

const Information = () => {
  return (
    <div id="personalInfo" className="infoContainer">
      <div className="infoPersonal">
        <div className="infoHeading">
          <h2>Front End React Developer</h2>
          <p>
            Hello! I'm Saqib Ali and I am a passionate Front-End React Developer
            currently based in Dubai, UAE
          </p>
          <a
            href="https://www.linkedin.com/in/saqibalei/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="linkedin-icon"
              size="2x"
            />
          </a>
        </div>
        <div className="stack-container">
          <div className="stack-title">
            <h1>STACK</h1>
            <span></span>
          </div>
          <div className="stackImages">
            <div className="stack-list">
              <div className="stack-item">
                <img src={reactImg} alt="JavaScript" />
              </div>
              <div className="stack-item">
                <img src={html} alt="JavaScript" />
              </div>
              <div className="stack-item">
                <img src={css3} alt="JavaScript" />
              </div>
              <div className="stack-item">
                <img src={jscript} alt="JavaScript" />
              </div>
              <div className="stack-item">
                <img src={gitHub} alt="JavaScript" />
              </div>
            </div>
            <div className="stackItem">
              <div className="stack-item">
                <img src={figma} alt="Tailwind CSS" />
              </div>
              <div className="stack-item">
                <img src={tailwind} alt="JavaScript" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="photoContainer">
        <img src={myImg} alt="Your Photo" className="profilePhoto" />
      </div>
    </div>
  );
};
export default Information;
