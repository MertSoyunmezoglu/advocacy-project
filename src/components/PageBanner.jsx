import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Footer from './Footer'

export default function PageBanner({ title, bg }) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [showFooter, setShowFooter] = useState(false)

  return (
    <div className="relative w-full">
      {/* Background image with optional title */}
      <div
        className={`relative w-auto ${isHome ? 'h-screen' : 'h-96'} bg-cover bg-center flex items-center justify-center`}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        {title && (
          <h1 className="relative text-white text-5xl font-serif z-10">
            {title}
          </h1>
        )}
      </div>

      {/* Animated Toggle Icon */}
      {isHome && (
        <button
          onClick={() => setShowFooter((prev) => !prev)}
          className={`fixed left-1/2 transform -translate-x-1/2 z-[9999] text-purple-600 text-2xl transition-all  duration-700 ease-in-out ${
            showFooter ? 'bottom-20' : 'bottom-6'
          }`}
        >
          {showFooter ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      )}

      {/* Toggle Footer */}
      {isHome && (
        <div
          className={`absolute bottom-0 left-0 w-full transition-all duration-700 ease-in-out bg-white shadow-lg z-30 ${
            showFooter ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <Footer />
        </div>
      )}
    </div>
  )
}
