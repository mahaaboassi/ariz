import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout'
import Home from './pages/home/page'
import About from './pages/about/page'

function App() {
  const [count, setCount] = useState(0)

  return (<BrowserRouter>
    <Routes>
        <Route path='/*' element={<Layout/>}>
            <Route path='' element={<Home/>} />
            <Route path='about' element={<About/>} />
        </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
