import React, {  } from 'react'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Hollow from '../../components/Hollow/Hollow'
import AboutMe from '../../partials/About/AboutMe'
import Experience from '../../partials/About/Experience'
import Tools from '../../partials/About/Tools'
import "./About.css"

interface AboutProps {} 

const About:React.FC<AboutProps> = () => {
    return (
        <div className='page'>
            <Header />
            <Hollow title='About' />
            <AboutMe />
            <Tools />
            <Experience />
            <Contact />
            <Footer />
        </div>
    )
}

export default About