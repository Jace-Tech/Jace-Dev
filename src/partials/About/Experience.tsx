import React from 'react'
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard'

interface ExperienceProps { }

const Experience: React.FC<ExperienceProps> = () => {
    return (
        <section className="section">
            <div className="container">
                <h3 className="section-title array">Experience</h3>
                <div className="experience-container">
                    <ExperienceCard
                        company={"WBT"}
                        from={"Nov 2020"}
                        to={"Present"}
                        title={"Software Engineer"}
                        description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas laudantium perspiciatis temporibus esse ab dolore aut. Minus, ad. Alias, nostrum"}
                    />
                    <ExperienceCard
                        company={"WBT"}
                        from={"Nov 2020"}
                        to={"Present"}
                        title={"Software Engineer"}
                        description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas laudantium perspiciatis temporibus esse ab dolore aut. Minus, ad. Alias, nostrum"}
                    />
                    <ExperienceCard
                        company={"WBT"}
                        from={"Nov 2020"}
                        to={"Present"}
                        title={"Software Engineer"}
                        description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas laudantium perspiciatis temporibus esse ab dolore aut. Minus, ad. Alias, nostrum"}
                    />
                </div>
                <div className="close array" />
            </div>
        </section>
    )
}

export default Experience