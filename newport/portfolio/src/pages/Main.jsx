import React from 'react'
import {RiGithubFill, RiLinkedinBoxFill, RiTwitterFill} from 'react-icons/ri'

const Main = () => {
    return(
        <div>
            <h1 className='main'>Mark Harmon Full Stack Software Developer</h1>
            <div className="card main">
                <div className='sidebar'>
                    <button className='btn btn-outline-light'>Hello</button>
                    <button className='btn btn-outline-light'>Hello</button>
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