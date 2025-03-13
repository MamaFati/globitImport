import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "../assets/pexels-markusspiske-93106.jpg";
import slide2 from "../assets/pexels-hormel-media-1095814.jpg";
import slide3 from "../assets/pexels-tomfisk-3057960.jpg";

const slides = [
  {
    image: slide1,
    text: "Your Most Trusted Import Partner – Bringing Quality to Your Doorstep.",
  },
  {
    image: slide2,
    text: "Say Goodbye to the Stress of Sourcing! We Ensure Quality, Reliability, and Seamless Delivery.",
  },
  {
    image: slide3,
    text: "Experience Hassle-Free Importing. No Expertise Needed – We Guide You Every Step of the Way!",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: -100, position: "absolute" }}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full"
        >
          <img
            src={slides[currentIndex].image}
            alt="Slide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10 flex items-center justify-center text-center p-6">
            <motion.h2
              className="text-white text-3xl md:text-5xl font-serif lg:p-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {slides[currentIndex].text}
            </motion.h2>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition duration-300"
        onClick={prevSlide}
      >
        <ChevronLeft size={30} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition duration-300"
        onClick={nextSlide}
      >
        <ChevronRight size={30} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
