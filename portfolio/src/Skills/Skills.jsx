import React from 'react'
import "./Skills.css"
import Specialheading from '../special-heading/Specialheading'


const Skills = () => {
  return (
    <div className='skills' id="skills" id="about">
        <div className="container">
        <Specialheading title="Skills"/>
        <div className="list">
            <div className="skill">
                <h3>Web Design</h3>
                <ul>
                    <li>UI/UX Design</li>
                    <li>Responsive Design</li>
                </ul>
            </div>
            <div className="skill">
            <h3>Frontend</h3>
                <ul>
                    <li>Javacript</li>
                    <li>ReactJS</li>
                    <li>Tailwindcss</li>
                    <li>CSS3</li>
                </ul>
            </div>
            <div className="skill">
            <h3>Backend</h3>
                <ul>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>MongoDB</li>
                </ul>
            </div>
            <div className="skill">
            <h3>Soft skills</h3>
                <ul>
                    <li>Effective Communication</li>
                    <li>Collaboration</li>
                    <li>Commitment</li>
                    <li>Leadership</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Skills