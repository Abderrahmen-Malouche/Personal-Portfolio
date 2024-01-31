import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <Link to="/" style={{ textDecoration: 'none' }}><div className="navbar-logo">Abdou<span>.</span></div></Link>
        <nav>
             <FaBars className='toggle-menu'/>
             
             
             <ul>

            <Link smooth to="/" style={{ textDecoration: 'none' }}><li className='active'>Home</li></Link>
            <a href="#about"><li>About</li></a>
            <a href="#experience"><li>Projects</li></a>
             </ul>
        </nav>
        <Link smooth to="/contact" style={{ textDecoration: 'none' }}><IoChatbubbleEllipsesOutline className='chat'/></Link>

        </div>
    </div>
  )
}

export default Navbar