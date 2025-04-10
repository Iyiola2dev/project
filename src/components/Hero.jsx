import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzM3MjYyMzQzYmM5ZDM5ZTBiNjBkNjU5YzM5NjRhOTM1NjM4NjM3YiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/26tn33aiTi1jkl6H6/giphy.gif" 
          alt="Tech Background"
          className="absolute w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Ignite Your Digital Transformation Journey,
            <span className="text-[#FF9F7B]"> Empowering Tomorrow's Agile Leaders Today!</span>
          </h1>
        </motion.div>
        
        <motion.button
          className="bg-[#FF9F7B] hover:bg-[#FF9F7B]/20 text-gray-800 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Journey
        </motion.button>
      </div>
    </section>
  )
}

export default Hero