import React from 'react'
import { Link } from 'react-router-dom';
import "./Button.css"

interface ButtonProps {
    children?: JSX.Element | string;
    style?: React.CSSProperties;
    text?: string;
    link?: string;
    large?: boolean;
    handleClick?: () => void;
} 

const Button:React.FC<ButtonProps> = ({ large, style, children, text, link, handleClick }) => {

    if(link) {
        return (
            <Link to={link} className={`custom-button ${large ? "link large" : ""}`} style={{...style}}>
                { children || text }
            </Link>
        )
    }
    return (
        <button onClick={handleClick} className={`custom-button ${large ? "large" : ""}`} style={{...style}}>
            { children || text }
        </button>
    )
}

export default Button