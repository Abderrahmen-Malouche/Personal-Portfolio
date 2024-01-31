import React from 'react'
import "./About.css"
import Specialheading from '../special-heading/Specialheading'
const About = () => {
  return (
    <div className='about' id="about">
        <div className="container">
        <Specialheading title="My Story"/>
        <div className="about-text">
        <p>
        As a budding frontend developer with a strong foundation in computer science engineering, I am driven by a passion for creating intuitive and visually appealing web interfaces.<br/>
        Although my professional experience is just beginning, I have honed my skills through a series of dynamic projects during my academic journey. <br/>
        These projects, crafted with a blend of modern programming languages and frameworks, showcase my ability to translate complex requirements into user-friendly solutions.<br/> 
        As I approach the completion of my Bachelor's degree in Computer Science Engineering, I am eager to bring fresh perspectives and innovative ideas to the world of frontend development.💜</p>
        </div>
        </div>
    </div>
  )
}

export default About