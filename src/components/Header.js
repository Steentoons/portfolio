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

  const homeHandler = () => {
    const el = document.getElementById("heroesSection")

    el.scrollIntoView({behavior: "smooth"})
  } 

  const contactsHandler = () => {
    const el = document.getElementById("contacts")

    el.scrollIntoView({behavior: "smooth"})
  } 

  const testimonialHandler = () => {
    const el = document.getElementById("testimonial")

    el.scrollIntoView({behavior: "smooth"})
  } 

  const portfolioHandler = () => {
    const el = document.getElementById("portfolio")

    el.scrollIntoView({behavior: "smooth"})
  } 

  const aboutHandler = () => {
    const el = document.getElementById("about")

    el.scrollIntoView({behavior: "smooth"})
  } 
  
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
            <div onClick={() => {homeHandler()}} className="header-menu-content-div header-menu-home ">Ho</div>
            <div onClick={() => {aboutHandler()}} className="header-menu-content-div header-menu-about">Ab</div>
            <div onClick={() => {portfolioHandler()}} className="header-menu-content-div header-menu-portfolio">
              Po
            </div>
            <div onClick={() => {testimonialHandler()}} className="header-menu-content-div header-menu-testimonials">
              Te
            </div>
            <div onClick={() => {contactsHandler()}} className="header-menu-content-div header-menu-home">Co</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
