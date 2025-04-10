import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael S.",
      text: "TechTheory Bootcamp's Agile Business Analysis training was an eye-opener for me. The hands-on approach and expert guidance helped me sharpen my skills and gain the confidence to transition into a new career. The practical insights I gained were invaluable."
    },
    {
      name: "Ben T.",
      text: "TechTheory Bootcamp provided a structured and supportive learning environment that helped me become an Agile Business Analyst. The mentorship and real-world projects allowed me to apply what I learned, which was instrumental in building my career."
    },
    {
      name: "Seyi O.",
      text: "TechTheory Bootcamp's Agile Business Analysis was a life-changing experience. I acquired essential skills and a deep understanding of Agile methodologies. The guidance and mentorship I received have already accelerated my career, and I'm excited about the opportunities that lie ahead"
    }
  ]

  return (
    <section className="py-20 bg-gray-800" id="testimonials">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-5xl font-bold text-center mb-4 text-[#FF9F7B]">
            Client Testimonials
          </h2>
          <p className="text-xl text-center text-white mb-12">
            Here's what some of our clients have to say about us
          </p>
        </motion.div>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.name}>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  delay: index * 0.2 // Stagger the animations
                }}
                className="bg-gray-100 p-8 rounded-3xl h-full flex flex-col shadow-lg"
              >
                <p className="text-gray-800 mb-6 text-lg leading-relaxed h-[300px]">
                  {testimonial.text}
                </p>
                <p className="text-[#FF9F7B] font-semibold text-lg">
                  - {testimonial.name}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials