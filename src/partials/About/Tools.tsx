import React, { useEffect, useState } from 'react'
import { tabLinks, tabMenuItems } from '../../contents/about'
import { useBrowserMode } from '../../contexts/BrowserMode'

interface ToolsProps { }

const Tools: React.FC<ToolsProps> = () => {
    const { isDarkMode } = useBrowserMode()
    const [tabMenu, setTabMenu] = useState("language")
    const [listMenu, setListMenu] = useState<any>([])


    useEffect(() => {
        const items = Object.entries(tabMenuItems).filter(item => item[0].includes(tabMenu))?.[0]?.[1]
        items && setListMenu(items as any)
    }, [tabMenu])

    return (
        <section className="section">
            <div className="container">
                <h3 className="section-title array">Tools</h3>
                <ul className={`tab-menu ${isDarkMode ? "dark" : ""}`}>
                    {tabLinks.map((item, index) => (
                        <li
                            onClick={() => setTabMenu(item.toLowerCase())}
                            className={`tab-item clickable ${tabMenu === item.toLowerCase() ? "active" : ""}`}
                            key={`${item}-${index}`}
                        >{item}</li>
                    ))}
                </ul>

                <div className="tab-items-container">
                    {listMenu.map(({ link, title, img }: { link: string, title: string, img: any }, index: number) => (
                        <a href={link} key={`${title}-${index}`} className="tab-menu-item shadow-sm">
                            <img src={img} className="item-img" alt={title} />
                            <span className="item-title">{title}</span>
                        </a>
                    ))}
                </div>
                <div className="close array" />
            </div>
        </section>
    )
}

export default Tools