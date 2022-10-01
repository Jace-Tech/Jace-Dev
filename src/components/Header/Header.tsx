import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

import logoLight from "../../assets/JD/Jace.png"
import logoDark from "../../assets/JD/Jace-dark.png"
import { useBrowserMode } from '../../contexts/BrowserMode'
import { useSidebarContext } from '../../contexts/SidebarContext'

interface HeaderProps {} 

const Header:React.FC<HeaderProps> = () => {
    const { isDarkMode, isScrolled } = useBrowserMode()
    const {isSidebarOpen, setIsSidebarOpen} = useSidebarContext()

    const logo = isDarkMode ? logoDark : logoLight
    return (
        <div className={`header ${isScrolled && "shadow"} ${isSidebarOpen && "transparent"}`}>
            <div className="container">
                <div className="header-wrapper">
                    <Link to={"/"} className={"headerLogo"}>
                        Jace<span className="dev">Dev</span>
                    </Link>

                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={`burger ${isSidebarOpen && "change"}`}>
                        <span className={`line ${isSidebarOpen && "rotate-left"}`}></span>
                        <span className={`line ${isSidebarOpen && "hide"}`}></span>
                        <span className={`line ${isSidebarOpen && "rotate-right"}`}></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header