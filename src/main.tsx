import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import BrowserModeProvider from './contexts/BrowserMode'
import SidebarContextProvider from './contexts/SidebarContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <BrowserModeProvider>
        <SidebarContextProvider>
          <App />
        </SidebarContextProvider>
      </BrowserModeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
