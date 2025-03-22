import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "Product Sourcing",
    description:
      "We connect you with verified suppliers from China, Turkey, and Dubai to help you find high-quality products at the best prices.",
    icon: "🔍",
  },
  {
    title: "Procurement",
    description:
      "We handle the entire procurement process, ensuring secure and hassle-free transactions for your business.",
    icon: "🛒",
  },
  {
    title: "RMB Exchange",
    description:
      "Simplify payments to Chinese suppliers with our secure and cost-effective RMB exchange solutions.",
    icon: "💱",
  },
  {
    title: "Shipping",
    description:
      "Ensure timely and secure delivery of your imported goods with our trusted shipping solutions.",
    icon: "🚢",
  },
  {
    title: "Importation Training",
    description:
      "Learn how to import from China, Turkey, and Dubai without an agent through our expert-led training.",
    icon: "📚",
  },
];

const ImportServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          At Globit Imports, we provide end-to-end import solutions, from
          product sourcing to delivery. Let us handle the hard work while you
          focus on growing your business.
        </p>
      </div>
      <div className="max-w-6xl mx-auto mt-10 px-4">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="p-4">
              <div className="bg-gray-50 shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition duration-300">
                <div className="text-5xl text-blue-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {service.description}
                </p>
                <button className="mt-4 text-blue-500 font-medium hover:underline">
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ImportServices;
