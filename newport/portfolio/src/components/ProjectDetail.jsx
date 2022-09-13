import React from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/projectcard.css'

const ProjectDetail = () => {
    const {state} = useLocation()
    return(
        <div className='container'>
            <br></br>
            <div className='card det'>
                <legend className='text-center'>{state.title}</legend>
                <img src={state.img} alt='nopic'/>
                <br></br>
                <p className="text-center">{state.desc}</p>
                <div className='row'>
                    <h3 className='text-center'>Technologies Used</h3>
                    <div className='col-sm'>
                    {state.langs.map((l, i) => (
                    <ul className='list-group'>
                        <li className='list-group-item' key={i}>{l}</li>
                    </ul>))}
                    </div>
                    <div className='col-sm'>
                    {state.fws.map((fw, i) => (
                    <ul className='list-group'>
                        <li className='list-group-item' key={i}>{fw}</li>
                    </ul>))}
                    </div>
                    <div><br></br></div>
                    <p className="text-muted text-center">Check out the source <a href={state.link}>here</a></p>
                </div>
                <br></br>
            </div>
            <br></br>
            <a href='/projects'><button className='btn btn-outline-danger'>Back to Projects</button></a>
            <br></br>
        </div>
    )
}

export default ProjectDetail