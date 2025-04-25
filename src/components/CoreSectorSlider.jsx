import {
    FaBuilding,
    FaUsers,
    FaUniversity,
    FaMicrochip,
    FaShip,
    FaCopyright,
  } from 'react-icons/fa'
  import { motion } from 'framer-motion'
  
  const sectors = [
    {
      title: 'Construction and Infrastructure',
      icon: <FaBuilding />,
      bg: 'bg-purple-600',
    },
    {
      title: 'Employment and Human Resources',
      icon: <FaUsers />,
      bg: 'bg-blue-600',
    },
    {
      title: 'Financial Institutions',
      icon: <FaUniversity />,
      bg: 'bg-indigo-500',
    },
    {
      title: 'Information Technologies',
      icon: <FaMicrochip />,
      bg: 'bg-teal-600',
    },
    {
      title: 'Liners, Shipping and Maritime Law',
      icon: <FaShip />,
      bg: 'bg-sky-500',
    },
    {
      title: 'Protection of Investment and Property Rights',
      icon: <FaCopyright />,
      bg: 'bg-cyan-700',
    },
  ]
  
  export default function CoreSectorSlider() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        {sectors.map((sector, i) => (
          <motion.div
            key={i}
            className={`${sector.bg} text-white text-center py-10 px-4 cursor-pointer transition-all`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="w-32 h-32 border-2 border-white rounded-full flex items-center justify-center text-5xl">
                {sector.icon}
              </div>
              <p className="mt-4 font-serif text-sm px-4">{sector.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    )
  }
  