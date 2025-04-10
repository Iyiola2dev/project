import { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Programs', href: '#programs' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'About', href: '#about' }
  ]

  return (
    <nav className="fixed w-full py-3 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm px-2 md:px-6">
      <div className="o px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex-shrink-0 font-bold text-xl text-blue-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* TechTheory */}
            <img className='h-[2.5rem] md:h-[2rem] lg:h-[2.5rem] xl:h-[3rem]' src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1744281981/TechTheory_qfthta.png" alt="Logo" />
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#FF9F7B] hover:text-[#FF9F7B]/20 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-[#FF9F7B] hover:text-[#FF9F7B]/20 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar