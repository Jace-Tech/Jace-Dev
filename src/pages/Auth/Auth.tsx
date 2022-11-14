import React from 'react'
import AuthHeader from '../../components/AuthHeader/AuthHeader'
import AuthFormSection from '../../partials/Admin/AuthFormSection'
import "./Auth.css"

interface AuthProps {} 

const Auth:React.FC<AuthProps> = () => {
    return (
        <div className="auth"> 
            <AuthHeader />
            <AuthFormSection />
        </div>
    )
}

export default Auth