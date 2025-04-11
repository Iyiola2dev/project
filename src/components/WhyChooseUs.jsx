import { motion } from 'framer-motion'


const ZigzagLine = () => {
    // SVG path for a longer zigzag line
    const pathVariants = {
      hidden: {
        pathLength: 0,
        opacity: 0
      },
      visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }
      }
    };
  
    return (
      <motion.svg 
        width="60" 
        height="24" 
        viewBox="0 0 60 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block ml-2"
      >
        <motion.path
          d="M2 12 L8 6 L14 18 L20 6 L26 18 L32 6 L38 18 L44 6 L50 18 L56 12"
          stroke="#FF9F7B"
          strokeWidth="2"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>
    );
  };
  
const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Fun Learning Environment",
      description: "Learn in an engaging and interactive environment that makes tech education enjoyable!",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3B2bWg1bHhtZWYxNzI5YjNnamFxM3pyMHVtMnRzaXhsb2p4cDh2MCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cn2E4nKGGNb1eqAv3K/giphy.gif"
    },
    {
      title: "Expert Instructors",
      description: "Learn from industry veterans who bring real-world experience to the classroom.",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWU5cHo2M2J6ODBpOHJicndpYnp2MGViMnRlMGk5dTJxajljaGs0aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/L1R1tvI9svkIWwpVYr/giphy.gif"
    },
    {
      title: "Flexible Schedule",
      description: "Study at your own pace with our flexible learning programs.",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGM0ZjM5Y2M5NzBkZDY4ZTY4ZjZhNyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3oKIPEqDGUULpEU0aQ/giphy.gif"
    },
    {
      title: "Career Support",
      description: "Get ongoing support even after graduation to land your dream tech job.",
      gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTY4ZjZhZiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/RbDKaczqWovIugyJmW/giphy.gif"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-2xl lg:text-5xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          Why Choose Us? 
          <span className="text-[#FF9F7B]"><ZigzagLine /></span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-gray-800 rounded-xl p-6 text-center shadow-lg transform"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                bounce: 0.4
              }}
            >
              <motion.div 
                className="h-32 mb-4 overflow-hidden rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={benefit.gif} 
                  alt={benefit.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <h3 className="text-xl font-bold mb-2 text-[#FF9F7B]">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 font-semibold ">
                  {benefit.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs