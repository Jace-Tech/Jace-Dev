import React, { createContext, useContext, useState } from "react";
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

    return ( 
        <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}> 
            <Sidebar />
            {children} 
        </SidebarContext.Provider> 
    )
}

export default SidebarContextProvider

export const useSidebarContext = () => useContext(SidebarContext);