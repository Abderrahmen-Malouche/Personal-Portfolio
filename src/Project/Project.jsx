import React from 'react'
import "./Project.css"
const Project = (props) => {
  return (
    <div>
        <div className="project left">
                    <div className="image">
                        <img src={props.image} alt="" />
                    </div>
                    <div className="text">
                    <h5>{props.name}</h5>
                    <p>{props.description}</p>
                    </div>
                </div>
        </div>
  )
}

export default Project