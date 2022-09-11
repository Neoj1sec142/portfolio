import React from 'react'
import '../styles/contactcard.css'
import pro from '../assets/profile.png'
const Contact = () => {
    return(
        <div>
            <br></br>
            <div id="gradient"></div>
            <div id="card">
                <img src={pro} alt='nopic' width="15%"/>
                <h2>Mark Harmon</h2>
                <p>Full Stack Software Developer</p>
                <p>Interested in Web technologies like HTML5, CSS3, JavaScript, Python, SQL, etc.</p>
                <p>Love PicoCTF and respect Guido van Rossum. ;)</p>
                <span class="left bottom">mharmondev1503@gmail.com</span>
                <span class="right bottom">@ManicNeo142</span>
            </div>
            <br></br>
            <div id='about'>
                About Me:
            </div>
        </div>
    )
}

export default Contact