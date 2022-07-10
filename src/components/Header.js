import React from 'react'
import "../css/header.css"
import barsIcon from "../assets/icons/bars.png"

const Header = () => {
  return (
    <div className='header-container'>
        <div className="header-menu-wrapper">
            <div className="header-menu-div">
                <div className="header-menu-content-div">
                    <img src={barsIcon} alt="Menu bars" />
                </div>
                <div className="header-menu-content-div header-menu-home ">Ho</div>
                <div className="header-menu-content-div header-menu-about">Ab</div>
                <div className="header-menu-content-div header-menu-portfolio">Po</div>
                <div className="header-menu-content-div header-menu-testimonials">Te</div>
                <div className="header-menu-content-div header-menu-home">Co</div>
            </div>
        </div>
    </div>
  )
}

export default Header