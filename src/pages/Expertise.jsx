import { FaGavel, FaBalanceScale, FaUserTie } from 'react-icons/fa'
import { motion } from 'framer-motion'
import PageBanner from '../components/PageBanner'
import Navbar from '../components/Navbar'
import CoreSectorSlider from '../components/CoreSectorSlider'
import FadeInSection from '../components/FadeInSection'

export default function Expertise() {
  const practices = [
    {
      title: 'Arbitration',
      icon: <FaBalanceScale size={28} className="text-white" />,
    },
    {
      title: 'Litigation',
      icon: <FaGavel size={28} className="text-white" />,
    },
    {
      title: 'Consultancy',
      icon: <FaUserTie size={28} className="text-white" />,
    },
  ]

  return (
    <div>
      <Navbar />
      <PageBanner title="Expertise" bg="/assets/images/expert.jpg" />

      {/* Fundamental Practice */}
      <FadeInSection>
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Fundamental Practice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {practices.map((item, index) => (
              <motion.div
                key={index}
                className="p-6 border rounded shadow hover:shadow-md transition"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-700 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Core Sector Focus - Animated Slider */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Core Sector Focus
        </h2>
        <CoreSectorSlider />
      </section>
    </div>
  )
}
