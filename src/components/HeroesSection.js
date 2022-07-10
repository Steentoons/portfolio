import React from "react";
import "../css/heroesSection.css";
import SteenToonsImg from "../assets/images/steen toons.png";

const HeroesSection = () => {
  return (
    <div className="heroes-section-container">
      <div className="heroes-section-img-wrapper">
        <img src={SteenToonsImg} alt="Steen toons" />
      </div>
      <div className="heroes-section-call-me-steen-wrapper">
        <div className="heroes-section-call-me-steen">
          <div className="heroes-section-call-me-steen-overlay">
            <div className="heroes-section-call-me-steen-overlay-contents">
              <div className="heroes-section-call-me-steen-overlay-contents-top">
                CALL ME
              </div>
              <div className="heroes-section-call-me-steen-overlay-contents-bottom">
                STEEN
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="heroes-section-name-wrapper">
        <div className="heroes-section-name-overlay">
          <div className="heroes-section-name-div">AUGUSTINE KIRUMBA</div>
          <div className="heroes-section-name-title-div">
            FRONT-END DEVELOPER
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroesSection;
