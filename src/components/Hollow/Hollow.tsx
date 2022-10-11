import React from 'react'

interface HollowProps { 
    title: string;
}

const Hollow: React.FC<HollowProps> = ({ title }) => {
    return (
        <section>
            <div className="container">
                <h3 className="hollow page-title">{`< ${title}`}</h3>
            </div>
        </section>
    )
}

export default Hollow