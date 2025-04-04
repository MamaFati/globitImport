import React from "react";
import IoT from "../assets/IoTlogo.png";
import STEMAide from "../assets/stemAidBlack.jpeg";
import Sosoinks from "../assets/sosoink.png";
import VerityFashion from "../assets/verityFashion.png";

const trustedBy = [
  {
    name: "IoT",
    logo: IoT,
    link: "https://gh.linkedin.com/company/iotnetworkhub",
  },
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
];

const TrustedBy = () => {
  return (
    <section className="bg-gray-50 py-14 px-6 text-center">
      <h4 className="text-gray-900 text-md uppercase font-semibold mb-2">
        Our Partners
      </h4>

      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
        Strategic Partnerships in Delivering Excellence
      </h2>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-gray-700 mb-10">
        We collaborate with reputable organizations to enhance education,
        technology access, and deliver innovative solutions to empower
        communities.
      </p>

      {/* Partner Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {trustedBy.map((company, index) => (
          <a
            key={index}
            href={company.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 grayscale hover:grayscale-0 flex items-center justify-center"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-24 w-auto object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
