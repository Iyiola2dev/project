import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import SecondSec from './components/SecondSec'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <Hero />
      <SecondSec/>
      <Features />
     
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App