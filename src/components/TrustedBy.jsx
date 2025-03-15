import React from "react";
import IoT from "../assets/pngwing.com.png";
import STEMAide from "../assets/stemAidBlack.jpeg";
import Sosoinks from "../assets/sosoink.png";
import VerityFashion from "../assets/verityFashion.png";
import Robfel from "../assets/STEMAIDE-WHITE.png";

const trustedBy = [
  { name: "IoT", logo: IoT, link: "https://example.com/iot" },
  {
    name: "STEMAide Africa",
    logo: STEMAide,
    link: "https://www.stemaide.com/",
  },
  { name: "Sosoinks", logo: Sosoinks, link: "https://example.com/sosoinks" },
  {
    name: "Verity Fashion College",
    logo: VerityFashion,
    link: "https://www.facebook.com/veritycocaofficial/",
  },
  {
    name: "Robfel Medical Consultancy",
    logo: Robfel,
    link: "https://example.com/robfelmedical",
  },
];

const TrustedBy = () => {
  return (
    <div className="bg-gray-100 py-12 mt-10">
      <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-800">
        Trusted By
      </h2>
      <div className="flex justify-center mt-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trustedBy.map((company, index) => (
            <a
              key={index}
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 flex items-center justify-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 w-auto"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
