import React, { useState } from "react";
import "../css/portfolio.css";
import closeIcon from "../assets/icons/close.png";
import { portfolio } from "../data/portfolioData";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const [portfolioView, setPortfolioView] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(-1);

  const printPortfolios = portfolio.map((item, idx) => {
    return (
      <PortfolioCard
        key={idx}
        title={item.title}
        img={item.img}
        setPortfolioView={setPortfolioView}
        portfolioKey={idx}
        setCurrentIdx={setCurrentIdx}
      />
    );
  });

  const closePortfolioView = () => {
    setPortfolioView(!portfolioView)
  }

  const url = portfolio[currentIdx]

  const printPortfolioView = portfolioView ? (
    <div className="portfolio-overlay-container">
      <div className="portfolio-overlay-wrapper">
        <div className="portfolio-overlay-icon">
          <img src={closeIcon} onClick={() => {closePortfolioView()}} alt="close button" />
        </div>
        <div className="portfolio-overlay-title">{portfolio[currentIdx].title}</div>
        <div className="portfolio-overlay-content">{portfolio[currentIdx].desc}</div>

        <div className="portfolio-overlay-links">
          <ul>
            <li onClick={() => {
              window.open(`${url.liveSite}`)
            }}>VISIT THE LIVE SITE</li>
            <li onClick={() => {
              window.open(`${url.repo}`)
            }}>SEE THE GITHUB REPO</li>
            <li onClick={() => {
              window.open(`${url.frontendMentor}`)
            }}>VISIT THE FRONTEND MENTOR CHALLENGE</li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    ""
  );

  return (
    <>
      {printPortfolioView}

      <div id="portfolio" className="portfolio-container">
        <div className="portfolio-title">PORTFOLIO</div>
        <div className="portfolio-wrapper">{printPortfolios}</div>
      </div>
    </>
  );
};

export default Portfolio;
