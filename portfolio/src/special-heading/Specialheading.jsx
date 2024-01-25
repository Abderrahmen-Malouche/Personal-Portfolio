import React from 'react'
import "./Specialheading.css"
const Specialheading = (props) => {
  return (
    <div className='special-heading'>
        {props.title}<span>.</span>
    </div>
  )
}

export default Specialheading