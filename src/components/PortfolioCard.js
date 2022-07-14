import React from "react";
import "../css/portfolio.css";

const PortfolioCard = (props) => {
    const portfolioImgBg = {
        backgroundImage: `url(${props.img})`

    };
  return (
    <div className="portfolio-div">
      <div className="portfolio-div-shadow"></div>
      <div className="portfolio-div-img">
        <div
          className="portfolio-div-actual-img" style={portfolioImgBg} 
        ></div>
      </div>
      <div className="portfolio-div-title">{props.title}</div>
    </div>
  );
};

export default PortfolioCard;
