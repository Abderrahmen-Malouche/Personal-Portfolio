import React from 'react'
import photo from "../Assets/photo.png"
import "./Hero.css"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="hero-left">
                <h5>Hey,I'm Abderrahmen <img src="https://www.stefantopalovic.com/static/media/waving.1bae5fcfb51082b5c2b4.png" alt="" /></h5>
                <h1><span>Front</span>end Developer</h1>
                <p>I'am a frontend developer based in Hungary, I'll help you build beautiful websites your users will love</p>
                <div className="hero-left-buttons">
                   <Link smooth to="/contact" style={{ textDecoration: 'none' }}><button className="getintouch">Get In Touch</button></Link>
                   <a href="#experience"><button className="browse">Browse Projects</button></a>
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