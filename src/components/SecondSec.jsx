import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const heroSlides = [
  {
    image:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWU5cHo2M2J6ODBpOHJicndpYnp2MGViMnRlMGk5dTJxajljaGs0aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/L1R1tvI9svkIWwpVYr/giphy.gif",
      // "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ6OGtneGRpYzE4eGNjeDhoM2ZybW9mdzJ0eWVrYnl3ZG9pdGl0bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9PrFYof7RY3qyAsLIP/giphy.gif",
    title: "Innovative Web Solutions",
    subtitle: "Build with the future in mind",
  },
  {
    image:
      "https://media.giphy.com/media/sy6b3bKGLdTaKqmWAu/giphy.gif?cid=ecf05e47xlldcyao8gyihuq4xsbw4idfdfumd8l63tbt1v3l&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    title: "AI & Machine Learning",
    subtitle: "Smarter tools for a smarter world",
  },
  {
    image:
      "https://media.giphy.com/media/cKgnjkZU5ctfsZVGE1/giphy.gif?cid=ecf05e474qhxcx4ez5ejfo1rtr2qol5tjnnqopk59cks9vn5&ep=v1_gifs_search&rid=giphy.gif&ct=g",
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
        {/* {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="min-h-screen bg-cover bg-center "
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div
                className="absolute top-0  bg-black bg-opacity-40"
               
              />
              <div className="absolute  inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="font-playfair text-4xl md:text-7xl font-bold mb-4">
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
        ))} */}

{heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover opacity-40"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h2 className="font-playfair text-4xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="font-raleway text-xl md:text-2xl text-white mb-8 drop-shadow-md">
                  {slide.subtitle}
                </p>
                <button className="mt-8 px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-raleway font-semibold text-lg rounded-full">
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
