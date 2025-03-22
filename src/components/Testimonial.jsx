import "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import partner1 from "../assets/avatar.png";
import partner2 from "../assets/AvatarMaker (1).png";
import partner3 from "../assets/AvatarMaker.png";
import partner4 from "../assets/avatar.png";

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "Managing Director, Sahara Imports",
    image: partner1,
    quote:
      "Working with Globit Export has elevated our business. Their commitment to quality and timely delivery is unparalleled.",
  },
  {
    name: "Maria Gonzalez",
    role: "Founder, Pacific Traders",
    image: partner2,
    quote:
      "Globit Export has been an exceptional partner. Their transparency, efficiency, and product range exceeded our expectations.",
  },
  {
    name: "Chen Wei",
    role: "Operations Manager, Eastern Supplies",
    image: partner3,
    quote:
      "We've partnered with Globit Export for years. Their global network and reliability have helped us scale smoothly.",
  },
  {
    name: "Emily Johnson",
    role: "CEO, Johnson Global Solutions",
    image: partner4,
    quote:
      "From logistics to customer support, Globit Export delivers excellence. A trusted partner in international trade.",
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="m-auto py-16 px-5 bg-gray-50 w-full">
      <div className="text-center w-full lg:w-[50%] m-auto mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Trusted by Our Global Partners
        </h2>
        <p className="text-gray-600 text-lg">
          At Globit Export, we pride ourselves on building strong, lasting
          partnerships. Hear what our partners have to say about collaborating
          with us across the globe.
        </p>
      </div>
      <div className="w-full lg:w-[80%] m-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover m-auto mb-4 border-2 border-blue-500"
                />
                <h5 className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </h5>
                <p className="text-sm text-gray-500 mb-3">{testimonial.role}</p>
                <div className="p-4">
                  <p className="text-gray-700 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
