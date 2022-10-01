import React from 'react'
import jacePic from "../../assets/jace.png"

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="home-hero-inner">
                    <div className="home-content">
                        <h3 className="home-intro"> Hi There!, My name is </h3>
                        <h2 className="home-title hollow">Aneke Chidindu Emmanuel</h2>
                        <p className="home-para">I'm a <span className="hollow">Software Developer</span> based in Nigeria. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic et quisquam similique laboriosam sequi reiciendis nemo odit explicabo inventore fugit?</p>
                    </div>

                    <div className="home-image">
                        <img src={jacePic} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero