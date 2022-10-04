import React, { useEffect, useState } from 'react'
import { linkContent } from '../../@types'
import Header from '../../components/Header/Header'
import { tabLinks, tabMenuItems } from '../../contents/about'
import { useBrowserMode } from '../../contexts/BrowserMode'
import "./About.css"

interface AboutProps {} 

const About:React.FC<AboutProps> = () => {
    const { isDarkMode } = useBrowserMode()
    const [tabMenu, setTabMenu] = useState("language")
    const [listMenu, setListMenu] = useState<any>([])


    useEffect(() => {
        const items = Object.entries(tabMenuItems).filter(item => item[0].includes(tabMenu))?.[0]?.[1]
        items && setListMenu(items as any)
    }, [tabMenu])
    return (
        <div className='page'>
            <Header />
            <section>
                <div className="container">
                    <h3 className="hollow page-title">{"< About"}</h3>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="about-grid">

                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h3 className="section-title array">Tools</h3>
                    <ul className={`tab-menu ${isDarkMode ? "dark" : ""}`}>
                        { tabLinks.map((item, index) => (
                            <li 
                                onClick={() => setTabMenu(item.toLowerCase())}
                                className={`tab-item clickable ${tabMenu === item.toLowerCase() ? "active" : "" }`} 
                                key={`${item}-${index}`}
                            >{ item }</li>
                        ))}
                    </ul>

                    <div className="tab-items-container">
                        { listMenu.map(({ link, title }: { link: string, title: string }, index: number) => (
                            <a href={link} key={`${title}-${index}`} className="tab-menu-item shadow-sm">
                                <span className="item-title">{title}</span>
                            </a>
                        ))}
                    </div>
                    <div className="close array" />
                </div>
            </section>
        </div>
    )
}

export default About