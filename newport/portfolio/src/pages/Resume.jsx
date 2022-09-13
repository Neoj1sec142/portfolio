import React from 'react'
import '../styles/resumecard.css'
const pdf = require("../assets/Mark_Harmon_Full_Stack_Developer.pdf")

const Resume = () => {
    return(
        <div>
            <br></br>
            <div className='card res-head'>
            <h1 id="r">Resume</h1>
            </div>
            <br></br>
            <div className='container'>
            <object 
                data={pdf} 
                id="resume"
                width="500" 
                height="500">No IMG</object></div>
            <div className='res-card'>
                <div className='container'>    
                    <div className='row res-one'>
                        <div className='col res-one'>
                            <h3>IDES/ Planning/ Version Control:</h3>
                            <ul className='text-muted'>
                                <li>VSCode</li> 
                                <li>PyCharm</li>
                                <li>Genie</li>
                                <li>Sublime</li>
                            </ul>
                        </div>
                        <div className='col res-one'>
                            <h3>Languages</h3>
                            <ul className='text-muted'>
                                <li>Python</li>
                                <li>JavaScript</li>
                                <li>SQL</li>
                                <li>HTML5</li>
                                <li>CSS</li>
                                <li>Java</li>
                                <li>BASH</li>
                            </ul>
                            <p className='text-muted'></p>
                        </div>
                        <div className='col res-one'>
                            <h3>DB / Backend Frameworks</h3>
                            <ul className='text-muted'>
                                <li>PostgreSQL</li>
                                <li>MySQL</li>
                                <li>SQLAlchemy</li>
                                <li>SQLite</li>
                                <li>MongoDB</li>
                                <li>Sequelize</li>
                            </ul>
                        </div>
                    </div>
                    <div className='row res-two'>
                        <div className='col res-two'>
                            <h3>Python Frameworks</h3>
                            <ul className='text-muted'>
                                <li>Flask</li>
                                <li>Flask-socket.io</li>
                                <li>Django</li>
                                <li>Django REST Framework</li>
                                <li>Matplotlib</li>
                                <li>Scikit-learn</li>
                                <li>Pandas Libraries</li>
                                <li>Tkinter</li>
                            </ul>
                        </div>
                        <div className='col res-two'>
                            <h3>Frontend Frameworks</h3>
                            <ul className='text-muted'>
                                <li>React</li>
                                <li>Vue</li>
                                <li>Redux</li>
                                <li>Bootstrap</li>
                                <li>Tailwind</li>
                            </ul>
                        </div>
                        <div className='col res-two'>
                            <h3>Planning / V Control</h3>
                            <ul className='text-muted'>
                                <li>GitHub</li>
                                <li>Trello</li>
                                <li>Figma</li>
                                <li>Component Heirarchy Diagrams</li>
                                <li>Entity Relationship Diagrams</li>
                            </ul>
                        </div>
                    </div>
                    <div className='row res-three'>
                        <h5>Soft Skills:</h5>
                        <p className='text-muted'>
                            I am a passionate and dependable problem solver
                             who thrives in complex problem solving and logic.
                             I am good at adapting to new and unfamiliar situations
                             and am efficient at grasping new concepts and quick learning.
                        </p>
                    </div>
                    <br></br>
                    <a href='/'><button className='btn btn-outline back'>Back to Home</button></a>
                </div>
            </div>
        </div>
    )
}

export default Resume