import React from 'react'
import Contact from '../../components/Contact/Contact'
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
        </div>
    )
}

export default Home