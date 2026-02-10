import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Subsidiary from './Pages/Subsidiary'
import Operations from './Pages/Operations'
import News from './Pages/News'
import NewsDetail from './Pages/NewsDetail'
import Contact from './Pages/Contact'
import Services from './Pages/Services'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/subsidiary" element={<Subsidiary/>} />
        <Route path="/operations" element={<Operations/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/contacts" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </>
  )
}

export default App
