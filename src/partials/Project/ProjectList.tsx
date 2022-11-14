import React, { useState } from 'react'
import { useBrowserMode } from '../../contexts/BrowserMode'
import { projectTabs, projectType } from "../../contents/project"
import Project from '../../components/Project/Project'


interface ProjectListProps { }
type projectTabItems = "project" | "clones" | "playground"

const ProjectList: React.FC<ProjectListProps> = () => {
    const [tab, setTab] = useState<projectTabItems>("project")
    const { isDarkMode } = useBrowserMode()


    return (
        <div className='project-list'>
            <section className="section">
                <div className="container">
                    <ul className={`tab-menu ${isDarkMode ? "dark" : ""}`}>
                        {Object.keys(projectTabs).map((item, index) => (
                            <li
                                onClick={() => setTab(item as any)}
                                className={`tab-item clickable ${tab === item.toLowerCase() ? "active" : ""}`}
                                key={`${item}-${index}`}
                            >{item}</li>
                        ))}
                    </ul>
                    <div className="tab-items-container">
                        <div className="home-projects">
                            {projectTabs[tab].map(project =>( <Project {...project} key={project.id} /> ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectList