import { useLocation } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'

const routeColors = {
  '/': 'bg-yellow-400',
  '/about': 'bg-blue-500',
  '/expertise': 'bg-purple-600',
  '/team': 'bg-teal-600',
  '/news': 'bg-red-500',
  '/contact': 'bg-green-500',
}

export default function ScrollProgress() {
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const currentColor = routeColors[location.pathname] || 'bg-gray-800'

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-[4px] z-[9999] origin-left transition-colors duration-300 ${currentColor}`}
      style={{ scaleX }}
    />
  )
}
