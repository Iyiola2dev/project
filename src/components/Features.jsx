const Features = () => {
  const features = [
    {
      title: "TECH TRANSITION BOOTCAMP",
      description: "We provide intensive, hands-on bootcamp training programs designed to equip you with the latest skills and knowledge needed for successful career transitions in the tech industry.",
      image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjk3YzJkMzE4ZWM4ZjBiYzM1ZjY4ZjBjYzM5ZjM4ZTBhOGU4ZjZhZiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/juua9i2c2fA0AIp2iq/giphy.gif"
    },
    {
      title: "CAREER MENTORING",
      description: "Our mentors are industry professionals who provide tailored guidance, career advice, and support to help you achieve your professional goals",
      image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDVmNzBkZWZjZTY4ZmQ5ZWNhZDM4ZjM5ZjM4NzBkZDY4ZTY4ZjZhNyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/xT9IgzoKnwFNmISR8I/giphy.gif"
    },
    {
      title: "DIGITAL CONSULTING",
      description: "As we expand our services, TechTheory will offer digital transformation consultancy to organizations, leveraging our deep knowledge of technology trends and industry best practices.",
      image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWJjNzI0ZWY0ZWNhMzM4ZWNhOGM0ZjM5Y2M5NzBkZDY4ZTY4ZjZhNyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/l46Cy1rHbQ92uuLXa/giphy.gif"
    }
  ]

  return (
    <section className="py-5 lg:py-20 px-4" id="programs">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={feature.title}
            className="bg-gray-800 p-6 rounded-lg"
            data-aos="fade-up"
            data-aos-delay={100 * (index + 1)}
          >
            <img 
              src={feature.image}
              alt={feature.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#FF9F7B]">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features