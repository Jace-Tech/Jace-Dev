import React, { createContext, useContext, useState } from "react";
import Alert from "../components/Alert/Alert";

interface AlertProps {
    showAlert:  (msg: string, type?: string) => void;
}
const AlertContext = createContext<AlertProps>({} as any); 

interface AlertProviderProps {
    children?: JSX.Element
} 

type AlertType = {
    id: number;
    message: string;
    type: string;
}

const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => { 
    const [alerts, setAlerts] = useState<AlertType[]>([])

    const showAlert = (msg: string, type: string = "error") => {
        const alert: AlertType = {
            id: Date.now(),
            message: msg,
            type
        }

        setAlerts(prev => [...prev, alert])

        setTimeout(() => {
            setAlerts(prev => prev.filter(oldAlert => oldAlert.id !== alert.id))
        }, 8000)
    }

    return ( 
        <AlertContext.Provider value={{ showAlert }}> 
            <div className="alert-container">
                { alerts.map(alert => <Alert key={alert.id} {...alert} />) }
            </div>
            {children} 
        </AlertContext.Provider> 
    )
}

export default AlertProvider

export const useAlert = () => useContext(AlertContext);