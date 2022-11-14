import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../Header/Header.css"

import logoLight from "../../assets/JD/Jace.png"
import logoDark from "../../assets/JD/Jace-dark.png"
import { useBrowserMode } from '../../contexts/BrowserMode'


interface AuthHeaderProps { }

const AuthHeader: React.FC<AuthHeaderProps> = () => {
    const { isDarkMode, isScrolled } = useBrowserMode()
    const logo = isDarkMode ? logoDark : logoLight

    return (
        <div className={`header ${isScrolled && "shadow"}`}>
            <div className="container">
                <div className="header-wrapper">
                    <Link to={"/"} className={"headerLogo"}>
                        Jace<span className="dev">Dev</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AuthHeader