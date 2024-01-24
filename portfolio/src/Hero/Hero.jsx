import React from 'react'
import photo from "../Assets/photo.png"
import "./Hero.css"
import "../common.css"
const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="hero-left">
                <h5>Hey,I'm Abderrahmen</h5>
                <h1><span>Front</span>end Developer</h1>
                <p>I'am a frontend developer based in Hungary, I'll help you build beautiful websites your users will love</p>

            <div className="hero-left-buttons">
                <button className="getintouch">Get In Touch</button>
                <button className="browse">Browse Projects</button>
            </div>
            </div>
                <div className="hero-right">
                    <img src={photo} alt="" />
                </div>
        </div>
    </div>
  )
}

export default Hero