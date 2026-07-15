import React from "react";
import { Rnd } from "react-rnd";
import "./window.scss";
const Mwindow = ({children, width="40vw", height="40vh"}) => {
  return (
    <Rnd
    default={
  {    width:width,height:height,x:300,y:200}
    }>
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>{" "}
          </div>
          <div className="title">
            <p>niravkandira - zsh </p>
          </div>
        </div>
        <div className="main-content">
            {children}
        </div>
      </div>
    </Rnd>
  );
};

export default Mwindow;
