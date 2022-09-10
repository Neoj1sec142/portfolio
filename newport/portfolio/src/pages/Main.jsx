import React from 'react'
import {RiGithubFill, RiLinkedinBoxFill, RiTwitterFill} from 'react-icons/ri'

const Main = () => {
    return(
        <div>
        <h1>Text</h1>
        <div className="card main">
            Main
        </div>
        <footer className='card main'>
            <RiGithubFill className='icon' />
            <RiLinkedinBoxFill className='icon'/>
            <RiTwitterFill className='icon'/>
        </footer>
        </div>
    )
}

export default Main