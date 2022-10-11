import { useEffect } from 'react'
import { Route, RouterProvider, Routes } from 'react-router-dom'
import { useBrowserMode } from './contexts/BrowserMode'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Project from './pages/Project/Project'
import { styleVariables } from './utils'


const App = () => {
  const { isDarkMode } = useBrowserMode()
  const router = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/project", element: <Project /> },
    { path: "/contact", element: <Contact /> },
  ]

  useEffect(() => {
    Object.entries(styleVariables).forEach((item: any) => {
      const doc = document.querySelector(":root") as any
      doc.style.setProperty(`${item[0]}`, `${item[1]}`)
    })
  }, [])

  return (
    <div className={`app ${isDarkMode && "dark"}`}>
      <Routes>
        { router.map(({ element, path }, index) => <Route key={`${path}-${index}`} element={element} path={path} />) }
      </Routes>
    </div>
  )
}

export default App
