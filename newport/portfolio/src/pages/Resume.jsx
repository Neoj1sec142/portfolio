import React from 'react'
import '../styles/resumecard.css'
const pdf = require("../assets/Mark_Harmon_Full_Stack_Developer.pdf")
const Resume = () => {
    return(
        <div>
            <br></br>
            <h1 id="r">Resume</h1>
            <br></br>
            <div className='container'>
            <object 
                data={pdf} 
                id="resume"
                width="500" 
                height="500">No IMG</object></div>
            <div className='res-card'>
            </div>
            
        </div>
    )
}

export default Resume