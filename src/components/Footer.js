import React from 'react'
import "../css/footer.css"
import socialsImg1 from "../assets/images/socials/email.png"
import socialsImg2 from "../assets/images/socials/linkedin.png"
import socialsImg3 from "../assets/images/socials/dribbble.png"
import socialsImg4 from "../assets/images/socials/github.png"
import socialsImg5 from "../assets/images/socials/frontend mentor.png"

const Footer = () => {
  return (
    <div className='footer-container'>
        <img src={socialsImg1} alt="email" />
        <img src={socialsImg2} alt="linked in" />
        <img src={socialsImg3} alt="dribbble" />
        <img src={socialsImg4} alt="github" />
        <img src={socialsImg5} alt="frontend mentor" />
    </div>
  )
}

export default Footer