import React from 'react'
import "../css/skill.css"

const Skill = (props) => {
    const skillEl = props.isButton ? (
        <div className='skill-button-wrapper'>
            <button>{props.content}</button>
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