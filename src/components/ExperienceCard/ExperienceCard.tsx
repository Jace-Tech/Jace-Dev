import React from 'react'
import "./ExperienceCard.css"

interface ExperienceCardProps {
    children?: JSX.Element;
    title: string;
    company: string;
    from: string;
    to: string;
    description: string;
} 

const ExperienceCard:React.FC<ExperienceCardProps> = ({ title, company, from, to, description }) => {
    return (
        <div className="experience">
            <div className="inner-card">
                <div className="stack">
                    <span className="stack-title">{ title }</span> 
                    <span className="text-divider">-</span>
                    <span className="stack-company">{ company }</span>
                </div>
                <div className="stack-duration">
                    <span className="time">{from} </span>
                    <span className="text-divider">-</span>
                    <span className="time">{to}</span>
                </div>
                <p className="stack-desc">{ description }</p>
            </div>
        </div>
    )
}

export default ExperienceCard