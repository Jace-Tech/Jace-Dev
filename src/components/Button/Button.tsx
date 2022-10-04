import React, { DetailedHTMLProps } from 'react'
import { Link } from 'react-router-dom';
import "./Button.css"

interface ButtonProps {
    children?: JSX.Element | string;
    style?: React.CSSProperties;
    text?: string;
    link?: string;
    href?: string;
    attr?: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> | React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    large?: boolean;
    handleClick?: () => void;
} 

const Button:React.FC<ButtonProps> = ({ large, attr, href, style, children, text, link, handleClick }) => {

    if(href) {
        return (
            <a {...attr as any} href={href} className={`custom-button ${large ? "link large" : ""}`} style={{...style}}>
                { children || text }
            </a>
        )
    }

    if(link) {
        return (
            <Link {...attr as any} to={link} className={`custom-button ${large ? "link large" : ""}`} style={{...style}}>
                { children || text }
            </Link>
        )
    }
    return (
        <button {...attr as any} onClick={handleClick} className={`custom-button ${large ? "large" : ""}`} style={{...style}}>
            { children || text }
        </button>
    )
}

export default Button