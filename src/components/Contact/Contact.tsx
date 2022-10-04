import React from 'react'
import Button from '../Button/Button'
import { IoMail } from "react-icons/io5"
import "./Contact.css"
import { EMAIL } from '../../utils'

interface ContactProps {} 

const Contact:React.FC<ContactProps> = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title object">Get in touch</h2>
                <p className="contact-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, adipisci ullam? Alias odit neque voluptatum ea atque ducimus error dicta.</p>

                <div className="contact-button">
                    <Button large href={`mailto:${EMAIL}?body=Hello Jace Dev`} style={{fontSize: "1.2rem", width: "fit-content"}}>
                        <div className="send-btn">
                            <div className="send-icon">
                                <IoMail />
                            </div>
                            Send Message
                        </div>
                    </Button>
                </div>

                <div className="close object" />
            </div>
        </section>
    )
}

export default Contact