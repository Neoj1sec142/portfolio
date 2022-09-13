import React, {useState} from 'react'
import  Modal  from '../components/Modal'
import pro from '../assets/profile.png'
import '../styles/contactcard.css'

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
                <p>Interested in Web technologies like HTML5, CSS, JavaScript, Python, SQL, etc.</p>
                <p>Love PyCon and PicoCTF. ;)</p>
                <p>Email me @:</p>
                <span className="left bottom">mharmondev1503@gmail.com</span>
                <span className="right bottom">@ManicNeo142</span>
            </div>
            <br></br>
            <div id='about'>
            {!isOpen
            ? <button className="primaryButton" onClick={() => setIsOpen(true)}>About Me</button>
            : null}
                {isOpen && <Modal setIsOpen={setIsOpen} isOpen={isOpen}/>}
            </div>
            {!isOpen
            ? <a href='/'><button className='btn btn-outline con-back'>Back</button></a>
            : null
            }
        </div>
    )
}

export default Contact