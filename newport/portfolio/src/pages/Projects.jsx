import React, { useEffect, useState } from 'react'
import '../styles/projectcard.css'
import ProjectCard from '../components/ProjectCard'
import {projectData} from '../components/ProjectData.jsx'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
    const na = useNavigate()
    const [filter, setFilter] = useState('default')
    const [data, setData] = useState([])
    
    useEffect(() => {
        if(filter === 'default'){
            setData(projectData)
        }else{
            setData(projectData.filter((p) => p.languages.includes(filter)))
        }
    },[filter])
    const handleChange = (e) => {
        setFilter(e.target.value)
    }
    if(data){
        return(
            <div className='container'>
                <br></br>
                <h1 className='text-center'>~ My Projects ~</h1>
                <br></br>
                <div className='card'>
                <select className="form-select form-select-sm" 
                        onChange={(e) => handleChange(e)}
                        aria-label=".form-select-sm example">
                    <option value="default">Filter Projects by Language</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                </select>
                </div>
                {data.map((p) => (
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