import React, { useState } from "react";
import "../css/header.css";
import barsIcon from "../assets/icons/bars.png";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // useEffect(() => {
  //   isNavOpen ?
  // }, [isNavOpen])

  const headerMenuState = {
    display: isNavOpen ? "block" : "none"
  }

  const headerMenuHeight = {
    height: isNavOpen ? "456px" : "80px"
  }

  const openNavMenu = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  return (
    <div className="header-container">
      <div className="header-menu-wrapper">
        <div className="header-menu-div" style={headerMenuHeight}>
          <div className="header-menu-content-div">
            <img
              onClick={() => {
                openNavMenu();
              }}
              src={barsIcon}
              alt="Menu bars"
            />
          </div>
          <div className="header-menu-content-wrapper" style={headerMenuState}>
            <div className="header-menu-content-div header-menu-home ">Ho</div>
            <div className="header-menu-content-div header-menu-about">Ab</div>
            <div className="header-menu-content-div header-menu-portfolio">
              Po
            </div>
            <div className="header-menu-content-div header-menu-testimonials">
              Te
            </div>
            <div className="header-menu-content-div header-menu-home">Co</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
