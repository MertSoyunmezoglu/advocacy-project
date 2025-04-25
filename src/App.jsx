import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Expertise from './pages/Expertise'
import Team from './pages/Team'
import News from './pages/News'
import Contact from './pages/Contact'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="flex flex-col">     
     <main className="flex-1">
      <ScrollProgress />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {!isHome && <Footer />}
    </div>
  )
}
