import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-100 text-center text-md py-3 text-gray-600"
    >
      <div className="mb-3 flex justify-center gap-6">
        {[ 
          { href: 'https://facebook.com', icon: <FaFacebookF />, color: 'hover:text-blue-600' },
          { href: 'https://instagram.com', icon: <FaInstagram />, color: 'hover:text-pink-500' },
          { href: 'https://twitter.com', icon: <FaXTwitter />, color: 'hover:text-black' }
        ].map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${item.color}`}
            whileHover={{ scale: 1.5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
      <p>© 2025 Göksu Law. All rights reserved.</p>
    </motion.footer>
  )
}
