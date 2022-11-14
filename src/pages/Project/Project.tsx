import React, { useEffect } from 'react'
import Contact from '../../components/Contact/Contact'
import Header from '../../components/Header/Header'
import Hollow from '../../components/Hollow/Hollow'
import useRequest from '../../contexts/RequestContext'
import ProjectList from '../../partials/Project/ProjectList'

interface ProjectProps {} 

const Project:React.FC<ProjectProps> = () => {
    const { isLoading, data, error  } = useRequest("http://jsonplaceholder.typicode.com/todos")

    useEffect(() => {
        console.log({ isLoading, data, error })
    }, [isLoading, data, error])
    
    return (
        <div className="page">
            <Header />
            <Hollow title="Project" />
            <ProjectList />
            <Contact />
        </div>
    )
}

export default Project