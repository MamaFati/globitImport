import HeroPage from "../home/Hero";
import AboutUs from "../home/AboutUs";
import HowItWorks from "../home/HowItWorks";
import ServicesComponent from "../home/Services";
import WhyChooseUs from "../home/WhyChooseUs";
import FrequentlyAsked from '../home/FrequentlyAsked'
import TestimonialSection from "../home/Testimonial";
import TrustedPartners from "@/components/home/TrustedPartners";
import BlogSection from "../home/Blogs";

const MainPage = () => {
    return (
      <div className="bg-custom-background ">
        <HeroPage />
        <ServicesComponent />
        <AboutUs />
        <HowItWorks />
        <WhyChooseUs />
        <TrustedPartners />
        <TestimonialSection />
        <BlogSection />
        <FrequentlyAsked />

      </div>
    );
}
 
export default MainPage;