import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import "../common.css"
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <Link to="/" style={{ textDecoration: 'none' }}><div className="navbar-logo">Abdou<span>.</span></div></Link>
        <nav>
            <Link to="/" style={{ textDecoration: 'none' }}><li className='active'>Home</li></Link>
            <Link to="/about" style={{ textDecoration: 'none' }}><li>About</li></Link>
            <Link to="/education" style={{ textDecoration: 'none' }}><li>Education</li></Link>
            <Link to="/projects" style={{ textDecoration: 'none' }}><li>Projects</li></Link>
        </nav>
        <img src="https://framerusercontent.com/images/y7AJDvszhzacJVCt3lE8xkNyDY.svg" alt="contact" />

        </div>
    </div>
  )
}

export default Navbar