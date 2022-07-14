import React from "react";
import "../css/portfolio.css";
import closeIcon from "../assets/icons/close.png";
import { portfolio } from "../data/portfolioData";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const printPortfolios = portfolio.map((item, idx) => {
    return <PortfolioCard title={item.title} img={item.img} />;
  });

  return (
    <>
      {/* <div className="portfolio-overlay-container">
        <div className="portfolio-overlay-wrapper">
          <div className="portfolio-overlay-icon">
            <img src={closeIcon} alt="close button" />
          </div>
          <div className="portfolio-overlay-title">ROCK PAPER SCISSORS</div>
          <div className="portfolio-overlay-content">
            about running this application with administrator rights! about
            running this application with administrator rights! about running
            this application with administrator rights! about running this
            application with administrator rights! about running this
            application with administrator rights! about running this
            application with administrator rights! about running this
            application with administrator rights! about running this
            application with administrator rights! about running this
            application with administrator rights! about running this
            application with administrator rights! about running this
            application with administrator rights! about running this
            application with administrator rights! about running this
            application with administrator rights! about running this
            application with administrator rights! about running this
            application with administrator rights! about running this
            application with administrator rights! about running this
            application with administrator rights! about running this
            application with administrator rights! about running this
            application with administrator rights! about running this
            application with administrator rights! about running this
            application with administrator rights! about running this
            application with administrator rights! about running this
            application with administrator rights!
          </div>

          <div className="portfolio-overlay-links">
            <ul>
              <li>VISIT THE LIVE SITE</li>
              <li>SEE THE GITHUB REPO</li>
              <li>VISIT THE FRONTEND MENTOR CHALLENGE</li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className="portfolio-container">
        <div className="portfolio-title">PORTFOLIO</div>
        <div className="portfolio-wrapper">{printPortfolios}</div>
      </div>
    </>
  );
};

export default Portfolio;
