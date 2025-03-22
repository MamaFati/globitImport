import AboutUs from "./AboutUs";

import BlogSlider from "./BlogSlider";
import Carousel from "./Carosel";
import ContactSection from "./Contact";
import ImportServices from "./Services";
import TestimonialSection from "./Testimonial";
import TrustedBy from "./TrustedBy";

function HeroSection() {
  return (
    <>
      <main>
        <Carousel />
        <AboutUs />
        <ImportServices />
        <TrustedBy />
        <TestimonialSection />
        <BlogSlider />
        <ContactSection />
      </main>
    </>
  );
}
export default HeroSection;
