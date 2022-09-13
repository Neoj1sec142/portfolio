import React from 'react'
import styles from '../styles/module.css'
import {RiCloseLine} from 'react-icons/ri'

const Modal = ({ setIsOpen }) => {
    return(
        <>
        <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
        <div className={styles.centered}>
            <div className={styles.modal}>
            <div className={styles.modalHeader}>
                <br></br>
                <h5 className={styles.heading}>Hello and Thank You,</h5>
            </div>
            <div className='modalContent'>
                <p>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; for taking the time to browse
                    my portfolio. I am from New Lenox, IL and have been
                    passionate about computer science and innovative
                    technology though was never able to afford schooling
                    to really dive deep on knowledge. Never in my life would
                    I have thought I could find something that would bring me 
                    so much peace and happiness. Whether it be learning new 
                    concepts, debugging, planning out wire frame sketches, 
                    hammering out the depolyment phase, or just writing 
                    code until I have achieved all of my post processing goals, I
                    take pride and joy in every process especially learning.
                    I'm always open to collaborations and open source ideas.
                    Feel free to reach out !! Thanks for visiting !!
                </p>
            </div>
            <button className='closeBtn' onClick={() => setIsOpen(false)}>
                <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            </div>
        </div>
        </>
    )
}

export default Modal