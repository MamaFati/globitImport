import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full"
        >
          <img
            src={slides[currentIndex].image}
            alt="Slide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 flex items-center justify-center text-center p-6">
            <motion.h2
              className="text-white text-3xl md:text-5xl font-semibold lg:p-20 drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {slides[currentIndex].text}
            </motion.h2>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125 shadow-md"
                : "bg-gray-400"
            }`}
            whileHover={{ scale: 1.3 }}
          ></motion.button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
