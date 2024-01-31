import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="top">
                <nav>
                   <a href="#"><li className='active'>Home</li></a>
                    <a href="#about"><li>About</li></a>
                    <a href="#experience"><li>Projects</li></a>
                 </nav>
                 <div className="socials">
                 <Link to="https://www.instagram.com/abderrahmen_malouche/"><FaInstagram className='ig' /></Link>
                 <Link to="https://www.linkedin.com/in/abderrahmen-malouche-7720b3218/"><FiLinkedin  className='li'/></Link>
                 <Link to="https://github.com/Abderrahmen-Malouche"><TbBrandGithub  className='github'/></Link>
                 </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <h5>Interested in working together <span>?</span></h5>
                    <div className="buttons">
                    <Link smooth to="/contact" style={{ textDecoration: 'none' }}><button className="getintouch">Get In Touch</button></Link>
                     <a href="#experience"><button className="browse">Browse Projects</button></a> 
                                        </div>
                </div>
                <div className="right">
                    <h5>©2024 All Rights Reserved.</h5>
                    <h5>Made with 💜 by Abderrahmen Malouche</h5>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer