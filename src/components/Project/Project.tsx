import React from 'react'
import { Link } from 'react-router-dom';
import { getSlug } from '../../utils';

interface ProjectProps { 
    id: string;
    title: string;
    pic: string;
    text: string;
}

const Project: React.FC<ProjectProps> = ({ pic, text, title }) => {
    return (
        <Link to={`/project/${getSlug(title)}`} className="project-card shadow-lg">
            <img className="project-img" src={pic} alt={title} />
            <div className="project-detail">
                <h2 className="project-title">{ title }</h2>
                <p className="project-para">{ text }</p>
            </div>
        </Link>
    )
}

export default Project