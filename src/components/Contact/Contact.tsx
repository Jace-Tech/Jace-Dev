import React from 'react'
import "./Contact.css"

interface ContactProps {} 

const Contact:React.FC<ContactProps> = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title object">Get in touch</h2>
                <p className="contact-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, adipisci ullam? Alias odit neque voluptatum ea atque ducimus error dicta.</p>
            </div>
        </section>
    )
}

export default Contact