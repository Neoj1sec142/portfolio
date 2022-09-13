import React from 'react'
import '../styles/projectcard.css'
import ProjectCard from '../components/ProjectCard'
import {projectData} from '../components/ProjectData.jsx'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
    const na = useNavigate()
    
    if(projectData.length){
        return(
            <div className='container'>
                <br></br>
                <h1 className='text-center'>~ My Projects ~</h1>
                <br></br>
                {projectData.map((p) => (
                <div className='pro-map' key={p.fav} 
                    onClick={() => na(`/projects/${p.fav}`, {
                        state:{title:p.title, 
                                langs:p.languages, 
                                img: p.img,
                                desc:p.description,
                                link:p.link,
                                fws:p.frameworks}})}>
                <ProjectCard p={p} />
                <br></br>
                </div>))}
                <a href="/"><button className='btn btn-outline-danger pro-back'>Back to Home</button></a>
                <div><br></br></div>
            </div>
        )
    }
}

export default Projects