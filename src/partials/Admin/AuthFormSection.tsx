import React, { useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate, useNavigation } from 'react-router-dom'
import { fetchLogin } from '../../apis/auth'
import Button from '../../components/Button/Button'
import { useAlert } from '../../contexts/AlertContext'

interface AuthFormSectionProps {} 

const AuthFormSection:React.FC<AuthFormSectionProps> = () => {
    const [page, setPage] = useState("login")
    const [isLoading, setIsLoading] = useState(false)
    const {showAlert} = useAlert()
    const navigate = useNavigate()

    const handleLogin = async (e: any) => {
        e.preventDefault();
        setIsLoading(true)

        const email = e.target.elements.email.value
        const password = e.target.elements.password.value
        
        const result = await fetchLogin(JSON.stringify({email, password}))
        if(!result?.success) {
            setIsLoading(false)
            showAlert(result.message)
            return
        }

        setIsLoading(false)
        showAlert(result.message)
        e.target.reset()

        setTimeout(() => {
            navigate("/jacemuan/dashboard")
        }, 2000)

    }

    const handleRegistration = async (e: any) => {

    }

    return (
        <section className="section auth-form-section">
            <div className="container-md">
                <div className="auth-back">
                    <a onClick={() => {page === "login" ? setPage("register") :  setPage("login")}} className="auth-back-link">
                        <IoArrowBack />
                        <span>{ page === "login" ? "Register" : "Login" }</span>
                    </a>
                </div>
                <form className="auth-form" onSubmit={(e) => page === "login" ? handleLogin(e) : handleRegistration(e)}>
                    <div className="auth-form-group">
                        <label htmlFor="email" className="auth-label">email</label>
                        <input type="email" id="email" name="email" className="auth-input" />
                    </div>

                    <div className="auth-form-group">
                        <label htmlFor="password" className="auth-label">password</label>
                        <input type="password" id="password" name="password" className="auth-input" />
                    </div>

                    <Button 
                        large
                        text={page === "login" ? 'Login' : 'Register'}
                        style={{ marginTop: '2rem' }}
                    />
                </form>
            </div>
        </section>
    )
}

export default AuthFormSection