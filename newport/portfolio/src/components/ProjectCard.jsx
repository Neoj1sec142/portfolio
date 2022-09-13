import React from 'react'
import '../styles/projectcard.css'

const ProjectCard = ({p}) => {
    return(
        <div className='card pro'>
            <br></br>
            <legend className='text-center'>{p.title}</legend>
            <div className='container'>
            <img className='img-thumbnail' src={p.img} alt='nopic' /> 
            </div>
            {p.link !== ''
            ? <a href={`${p.link}`} id='pro-link'>{p.link}</a>
            : null}
            <br></br>
        </div>
    )
}

export default ProjectCard