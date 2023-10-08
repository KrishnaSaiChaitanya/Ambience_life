import React from "react";
import "./LoadingAnimation.css";

function Loading_Animation() {
  return (
    <div className="main_div">
      <div className="wrapper">
        <div className="book-loader-container">
          <div className="spine"></div>
          <div className="page" style={{ "--page-num": 1 }}></div>
          <div className="page" style={{ "--page-num": 2 }}></div>
          <div className="page" style={{ "--page-num": 3 }}></div>
          <div className="page" style={{ "--page-num": 4 }}></div>
          <div className="page static right"></div>
          <div className="page static left"></div>
        </div>
      </div>
      <div class="container">
        <div class="loading">
          <div class="ball one"></div>
          <div class="ball two"></div>
          <div class="ball three"></div>
          <div class="ball four"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading_Animation;
