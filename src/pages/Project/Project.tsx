import React from 'react'
import Header from '../../components/Header/Header'
import Hollow from '../../components/Hollow/Hollow'

interface ProjectProps {} 

const Project:React.FC<ProjectProps> = () => {
    return (
        <div className="page">
            <Header />
            <Hollow title="Project" />
        </div>
    )
}

export default Project