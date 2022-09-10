import React from 'react'
import '../styles/maincard.css'
import {RiGithubFill, RiLinkedinBoxFill, RiTwitterFill} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const Main = () => {
    const n = useNavigate()
    const navP = () => {n('/projects')}
    const navR = () => {n('/resume')}
    const navA = () => {n('/about')}
    const navC = () => {n('/contact')}
    return(
        <div>
            <h1 className='main'>Mark Harmon Full Stack Software Developer</h1>
            <div className="card main">
                <div className='sidebar btn-group-vertical'>
                    <br></br>
                    <button className='btn btn-outline-light side' onClick={()=>navP()}>Projects</button>
                    <br></br>
                    <button className='btn btn-outline-light side' onClick={()=>navR()}>Resume</button>
                    <br></br>
                    <button className='btn btn-outline-light side' onClick={()=>navA()}>About Me</button>
                    <br></br>
                    <button className='btn btn-outline-light side' onClick={()=>navC()}>Contact Info</button>
                    <br></br>
                </div>
            </div>
            <footer className='card main'>
                <a href='https://www.github.com/neoj1sec142' target='_blank' rel="noreferrer"><RiGithubFill className='icon' /></a>
                <a href='https://www.linkedin.com/in/markharmon142' target='_blank' rel="noreferrer"><RiLinkedinBoxFill className='icon'/></a>
                <a href='https://www.twitter.com/ManicNeo142' target='_blank' rel="noreferrer"><RiTwitterFill className='icon'/></a>
            </footer>
        </div>
    )
}

export default Main