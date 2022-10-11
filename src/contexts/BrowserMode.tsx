import React, { createContext, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

interface BrowserModeContextProp {
    isDarkMode: boolean;
    isScrolled: boolean;
    setIsDark: (value: boolean) => void;
    changeMode: (value: string) => void;
}

const BrowserModeContext = createContext<BrowserModeContextProp>({} as any)

interface BrowserModeProps {
    children: JSX.Element
} 

const BrowserModeProvider:React.FC<BrowserModeProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const {pathname} = useLocation()
    
    const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

    const changeMode = (mode: string) => {
        const _mode = mode === "dark" ? true : false;
        localStorage.setItem("JACE_APP_MODE", mode)
        setIsDarkMode(_mode)
    }

    const handleWindowScroll = (event: Event) => {
        (window.screenY >= 100) ? 
            setIsScrolled(true) :
            setIsScrolled(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleWindowScroll)
        return () => window.removeEventListener("scroll", handleWindowScroll)
    }, [])

    useEffect(() => {
        const mode = localStorage.getItem("JACE_APP_MODE")
        if(!mode) {
            setIsDarkMode(isBrowserDefaultDark())
            return
        }

        // const _mode = mode === "dark" ? true : false;
        // setIsDarkMode(_mode)
        setIsDarkMode(false)
    }, [])

    useEffect(() => {
        window.scrollTo({
            behavior: "smooth",
            top: 0,
            left: 0,
        })
    }, [pathname])
    return (
        <BrowserModeContext.Provider value={{ isDarkMode, setIsDark: setIsDarkMode, isScrolled, changeMode }}>
            { children }
        </BrowserModeContext.Provider>
    )
}

export default BrowserModeProvider

export const useBrowserMode = () => useContext(BrowserModeContext)