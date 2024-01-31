import React from 'react'
import Hero from '../../Hero/Hero'
import About from '../../About/About'
import Skills from '../../Skills/Skills'
import Experience from "../../Experience/Experience"

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Skills/>
        <Experience/>
    </div>
  )
}

export default Home