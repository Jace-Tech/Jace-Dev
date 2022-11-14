import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { linkContent } from '../../@types'
import { LINKS_CONTENTS } from '../../contents/home'
import { useBrowserMode } from '../../contexts/BrowserMode'
import { useSidebarContext } from '../../contexts/SidebarContext'
import "./Sidebar.css"

interface SidebarProps {} 

const Sidebar:React.FC<SidebarProps> = () => {
    const { isSidebarOpen } = useSidebarContext()
    const { isDarkMode } = useBrowserMode()

    const { pathname } = useLocation()

    return (
        <div className={`sidebar ${ isSidebarOpen ? "show" : "" } ${ isDarkMode ? "dark" : ""}`}>
            <section className="section">
                <div className="container"> 
                    <div className="flex side-link">
                        <ul className="side-link-menu">
                            { LINKS_CONTENTS.map(({link, title}: linkContent, index: number) => (
                                <li className={`side-link-item ${pathname == link && "active"}`} key={`${index}-${title}`}>
                                    <Link to={link} className="hollow link">{ title }</Link>
                                </li>
                            )) }
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sidebar