import React from 'react'
import "./Alert.css"

interface AlertProps {
    type: string;
    message: string;
    id: number;
} 

const Alert:React.FC<AlertProps> = ({ message, type }) => {
    return (
        <div className={`alert ${type.toLowerCase() === 'error' ? "error" : "" } ${type.toLowerCase() === 'success' ? "success" : "" }`}>
            { message }
        </div>
    )
}

export default Alert