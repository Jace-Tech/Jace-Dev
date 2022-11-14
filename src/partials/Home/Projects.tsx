import React from 'react'
import Button from '../../components/Button/Button'
import { PROJECT_CONTENT } from '../../contents/home'
import Project from '../../components/Project/Project'

interface ProjectsProps { }

const Projects: React.FC<ProjectsProps> = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title array">Featured Projects</h2>
                <div className="home-projects">
                    {PROJECT_CONTENT.map(project => <Project {...project} key={project.id} />)}
                </div>
                <div className="project-center">
                    <Button large link={"/project"}>Show More</Button>
                </div>
                <div className="close array" />
            </div>
        </section>
    )
}

export default Projects