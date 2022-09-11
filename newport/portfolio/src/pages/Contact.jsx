import React, {useState} from 'react'
import '../styles/contactcard.css'
import pro from '../assets/profile.png'
import  Modal  from '../components/Modal'


const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)
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
                <span className="left bottom">mharmondev1503@gmail.com</span>
                <span className="right bottom">@ManicNeo142</span>
            </div>
            <br></br>
            <div id='about'>
            <button className="primaryButton" onClick={() => setIsOpen(true)}>
                About Me
            </button>
                {isOpen && <Modal setIsOpen={setIsOpen} />}
            </div>
        </div>
    )
}

export default Contact