import HeroPage from "../home/Hero";
import AboutUs from "../home/AboutUs";
import HowItWorks from "../home/HowItWorks";
import ServicesComponent from "../home/Services";
import WhyChooseUs from "../home/WhyChooseUs";
import FrequentlyAsked from '../home/FrequentlyAsked'

const MainPage = () => {
    return (
      <div className="bg-custom-background ">
        <HeroPage />
        <ServicesComponent />
        <AboutUs />
        <HowItWorks />
        <WhyChooseUs />
        <FrequentlyAsked />

      </div>
    );
}
 
export default MainPage;