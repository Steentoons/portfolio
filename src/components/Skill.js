import React from 'react'
import "../css/skill.css"
import { downloadFile } from 'fs-browsers';
import steenCV from "../assets/data/cv/Augustine Kirumba Development CV(1).docx"

const Skill = (props) => {
    const skillEl = props.isButton ? (
        <div className='skill-button-wrapper'>
            <button onClick={() => {downloadFile(steenCV, "Augustine-Kirumba-Resume.docx")}}>{props.content}</button>
        </div>
    ) : (
        <div className='skill-img-wrapper'>
            <img src={props.img} alt="skills" />
        </div>
    )
  return (
    <div className='skill-container'>
        {skillEl}
    </div>
  )
}

export default Skill