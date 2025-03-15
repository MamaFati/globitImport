import AboutUs from "./AboutUs";
import Carousel from "./Carosel";
import ImportServices from "./Services";
import TrustedBy from "./TrustedBy";

function HeroSection() {
  return (
    <>
      <main>
        <Carousel />
        <AboutUs />
        <ImportServices />
        <TrustedBy />
      </main>
    </>
  );
}
export default HeroSection;
