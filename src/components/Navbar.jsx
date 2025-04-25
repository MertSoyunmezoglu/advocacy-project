import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
    className={`fixed top-0 w-full z-50 px-8 lg:px-16 py-4 flex justify-between items-center transition-all duration-500 ${
      scrolled ? 'bg-white/80 shadow-md backdrop-blur' : 'bg-white/0'
    }`}
  >
  
      <Link to="/" className="transition-all duration-500">
        <img
          src="/assets/images/logo.png"
          alt="Göksu Law"
          className={`transition-all duration-500 ${
            scrolled ? 'w-24' : 'w-32'
          }`}
        />
      </Link>

      <ul
        className={`flex font-medium transition-all duration-500 ${
          scrolled ? 'text-black text-sm gap-4' : 'text-gray-50 text-md gap-6'
        }`}
      >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">The Firm</Link></li>
        <li><Link to="/expertise">Expertise</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/news">News & Insights</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
