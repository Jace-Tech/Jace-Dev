import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AlertProvider from './contexts/AlertContext'
import BrowserModeProvider from './contexts/BrowserMode'
import RequestProvider from './contexts/RequestContext'
import SidebarContextProvider from './contexts/SidebarContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertProvider>
        <BrowserModeProvider>
          <SidebarContextProvider>
              <App />
          </SidebarContextProvider>
        </BrowserModeProvider>
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>
)
