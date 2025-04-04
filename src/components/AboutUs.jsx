import AboutImg from "../assets/business-team-working-laptop.jpg";
// import "../styles/animations.css"; // Import custom styles

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse md:flex-row items-center">
        {/* Text Section */}
        <div
          className="md:w-1/2 text-gray-700 space-y-6 animate-slideInLeft"
          style={{ "--animation-duration": "1s", "--animation-delay": "0.2s" }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Who We Are
          </h2>
          <h3 className="text-blue-500 font-semibold uppercase text-sm pt-4 tracking-widest">
            Your Trusted Import Partner
          </h3>

          <p className="text-lg">
            Say goodbye to the{" "}
            <strong className="font-bold">overwhelming stress </strong>
            of sourcing reliable suppliers, ensuring{" "}
            <strong className="font-bold">top-tier quality</strong>, and
            managing complex logistics.
            <strong className="text-blue-500"> Globit Imports</strong> makes
            <strong className="font-bold"> global trading effortless</strong>
            with a{" "}
            <strong className="font-bold">
              secure and seamless process
            </strong>{" "}
            tailored for you.
          </p>
          <p className="text-lg">
            We meticulously{" "}
            <strong className="font-bold">vet every product</strong>, ensuring
            you receive only the{" "}
            <strong className="font-bold">best-in-class quality</strong>—on
            time, every time. Our{" "}
            <strong className="font-bold">expert team</strong> eliminates risks,
            giving you <strong className="font-bold">peace of mind</strong>{" "}
            while we handle every detail.
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="#"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-md"
            >
              Get Started
            </a>
            <a
              href="#"
              className="text-blue-500 border border-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-500 hover:text-white transition duration-300 shadow-md"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:ml-9">
          <img
            src={AboutImg}
            alt="About Globit Imports"
            className="w-full max-w-lg rounded-lg shadow-lg animate-scaleIn"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
