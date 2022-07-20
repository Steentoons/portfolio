import React from "react";
import "../css/portfolio.css";

const PortfolioCard = (props) => {
    const portfolioImgBg = {
        backgroundImage: `url(${props.img})`

    };

    const portfolioHandler = () => {
      console.log("index is " + props.portfolioKey)
      props.setCurrentIdx(props.portfolioKey)
      props.setPortfolioView(true)
    }

  return (
    <div className="portfolio-div" onClick={() => {portfolioHandler()}}>
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
