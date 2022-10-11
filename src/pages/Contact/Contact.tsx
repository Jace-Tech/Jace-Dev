import React from 'react'
import Header from '../../components/Header/Header'
import Hollow from '../../components/Hollow/Hollow'

interface ContactProps {} 

const Contact:React.FC<ContactProps> = () => {
    return (
        <div className="page">
            <Header />
            <Hollow title="Contact" />
        </div>
    )
}

export default Contact