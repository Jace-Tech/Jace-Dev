import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

interface SidebarContextProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (value: boolean) => void;
}
const SidebarContext = createContext<SidebarContextProps>({} as any); 

interface SidebarContextProviderProps {
    children: JSX.Element
} 

const SidebarContextProvider: React.FC<SidebarContextProviderProps> = ({ children }) => { 
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const location = useLocation()

    useEffect(() => {
        setIsSidebarOpen(false)
    }, [location])
    return ( 
        <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}> 
            <Sidebar />
            {children} 
        </SidebarContext.Provider> 
    )
}

export default SidebarContextProvider

export const useSidebarContext = () => useContext(SidebarContext);