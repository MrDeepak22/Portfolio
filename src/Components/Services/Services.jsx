import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Resume.pdf";
import { themeContext } from "../../Context";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* Left Side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Technologies</span>
        <span style={{ color: darkMode ? "white" : "", fontSize:'20px'}}>
          1. Node.js :- It is a server-side platform built on Google Chrome's
          JavaScript Engine (V8 Engine). <br /> <br />
          2.ExpressJS :- It is a minimal and flexible Node.js web application
          framework that provides a robust set of features for web and mobile
          applications.
          <br /> <br />
          3. NestJs :- A progressive Node.js framework for building efficient,
          reliable and scalable server-side applications. <br />
          <br />
          4. MySQL :- MySQL is a relational database management system. <br />
          <br />
          5. MongoDB :- MongoDB is a document database used to build highly
          available and scalable internet applications.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="s-blur blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* Rifht Side */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
          
            emoji={HeartEmoji}
            heading={"Data Base"}
            detail={"MySQL, MongoDB, Sequelize, Mongoose"}
          />
        </div>
        {/* Second Card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Backend"}
            detail={"NodeJs,    ExpressJs(FrameWork),      NestJs(Basics)"}
          />
        </div>

        {/* Third Card */}
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"Frontend"}
            detail={"JavaScript, HTML, CSS, ReactJs(Basics)"}
          />
        </div>
        {/* Fourth Card
         <div style={{ top: "19rem", left: "30rem" }}>
          <Card
            emoji={Humble}
            heading={"Hosting Platforms"}
            detail={
              "GitHub, BitBucket"
            }
          />
        </div> */}
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
