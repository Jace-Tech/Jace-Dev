import React from 'react'
import { Link } from 'react-router-dom'
import { SOCIAL_CONTENT } from '../../contents/home'
import "./Footer.css"

interface FooterProps {} 

const Footer:React.FC<FooterProps> = () => {
    return (
        <div className="footer">
            <section className="section">
                <div className="container">
                    <div className="flex footer-credits">
                        <div className="footer-socials">
                                { SOCIAL_CONTENT.map(({icon: Icon, link, name}) => (
                                    <a key={name} target="_blank" href={link} className={`social ${name}`}>
                                        <Icon />
                                    </a>
                                )) }
                        </div>
                        <p className="footer-cred">Copywrite &copy; 2022. <strong className="hollow bolded">Aneke Chidindu Emmanuel</strong> </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer