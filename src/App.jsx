import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout'
import Home from './pages/home/page'
import About from './pages/about/page'
import Contact from './pages/contact/page'

function App() {

  return (<BrowserRouter>
            <Routes>
                <Route path='/*' element={<Layout/>}>
                    <Route path='' element={<Home/>} />
                    <Route path='about' element={<About/>} />
                    <Route path='contact' element={<Contact/>} />
                </Route>
            </Routes>
        </BrowserRouter>
  )
}

export default App
