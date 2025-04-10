import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const heroSlides = [
    {
      image:
        "https://res.cloudinary.com/dtlejpoxq/image/upload/v1744246608/Altan/christina-wocintechchat-com-glRqyWJgUeY-unsplash_uir7kr.jpg",
      title: "Innovative Web Solutions",
      subtitle: "Build with the future in mind",
    },
    {
      image:
        "https://res.cloudinary.com/dtlejpoxq/image/upload/v1744246605/Altan/alex-kotliarskyi-ourQHRTE2IM-unsplash_vxcbdw.jpg",
      title: "AI & Machine Learning",
      subtitle: "Smarter tools for a smarter world",
    },
    {
      image:
        "https://res.cloudinary.com/dtlejpoxq/image/upload/v1744246852/Altan/jj-ying-8bghKxNU1j0-unsplash_lvrlpe.jpg",
      title: "Next-Gen Apps",
      subtitle: "Powerful experiences across all devices",
    },
    
  ];
  

const SecondSec = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-screen"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="min-h-screen bg-cover bg-center "
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute top-0  bg-black bg-opacity-40"  />
              <div className="absolute  inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="font-playfair text-6xl md:text-7xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="font-raleway text-xl md:text-2xl">
                  {slide.subtitle}
                </p>
                <button className="mt-8 px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 font-raleway font-semibold text-lg rounded-full">
                  Start Your Journey Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SecondSec;
