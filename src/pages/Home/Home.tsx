import React from 'react'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Hero from "../../partials/Home/Hero"
import Projects from '../../partials/Home/Projects'

import "./Home.css"

interface HomeProps {} 

const Home:React.FC<HomeProps> = () => {
    return (
        <div className="home">
            <Header />
            <Hero />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home