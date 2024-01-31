import React from 'react'
import "./Experience.css"
import Project from '../Project/Project'
import projects from "../Assets/projects"
import Specialheading from '../special-heading/Specialheading'
const Experience = () => {
  return (
    <div className='experience' id="experience">
      <div className="container">
        <Specialheading  className="special" title="Projects"/>
        <div className="projects">

      {projects.map((item)=>{
        return <Project name={item.name} position={item.position} image={item.image} description={item.description}/>
      })}
      </div>
      </div>
        </div>
  )
}

export default Experience