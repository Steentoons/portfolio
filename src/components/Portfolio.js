import React from "react";
import "../css/portfolio.css";
import closeIcon from "../assets/icons/close.png"

const Portfolio = () => {
  return (
    <>
    <div className="portfolio-overlay-container">
        <div className="portfolio-overlay-wrapper">
          <div className="portfolio-overlay-icon">
            <img src={closeIcon} alt="close button" />
          </div>
          <div className="portfolio-overlay-title">ROCK PAPER SCISSORS</div>
          <div className="portfolio-overlay-content">
        about running this application with administrator rights! about running
        this application with administrator rights! about running this
        application with administrator rights! about running this application
        with administrator rights! about running this application with
        administrator rights! about running this application with administrator
        rights! about running this application with administrator rights! about
        running this application with administrator rights! about running this
        application with administrator rights! about running this application
        with administrator rights! about running this application with
        administrator rights! about running this application with administrator
        rights! about running this application with administrator rights! about
        running this application with administrator rights! about running this
        application with administrator rights! about running this application
        with administrator rights! about running this application with
        administrator rights! about running this application with administrator
        rights! about running this application with administrator rights! about
        running this application with administrator rights! about running this
        application with administrator rights! about running this application
        with administrator rights! about running this application with
        administrator rights!
      </div>
      
      <div className="portfolio-overlay-links">
        <ul>
          <li>VISIT THE LIVE SITE</li>
          <li>SEE THE GITHUB REPO</li>
          <li>VISIT THE FRONTEND  MENTOR CHALLENGE</li>
        </ul>
      </div>
        </div>
      </div>

    <div className="portfolio-container">

      <div className="portfolio-title">PORTFOLIO</div>
      <div className="portfolio-wrapper">
        <div className="portfolio-div">
          <div className="portfolio-div-shadow"></div>
          <div className="portfolio-div-img">
            <div className="portfolio-div-actual-img first-portfolio-img"></div>
          </div>
          <div className="portfolio-div-title">COUNTRIES REST</div>
        </div>
        <div className="portfolio-div">
          <div className="portfolio-div-shadow"></div>
          <div className="portfolio-div-img">
            <div className="portfolio-div-actual-img second-portfolio-img"></div>
          </div>
          <div className="portfolio-div-title">ROCK PAPER SCISSORS</div>
        </div>
        <div className="portfolio-div">
          <div className="portfolio-div-shadow"></div>
          <div className="portfolio-div-img">
            <div className="portfolio-div-actual-img third-portfolio-img"></div>
          </div>
          <div className="portfolio-div-title">EASY BANK</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Portfolio;
