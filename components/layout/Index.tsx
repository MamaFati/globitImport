import HeroPage from "../home/Hero";
import AboutUs from "../home/AboutUs";
import HowItWorks from "../home/HowItWorks";

const MainPage = () => {
    return (
      <div className="bg-custom-background ">
        <HeroPage />
        <HowItWorks />
        <AboutUs />
      </div>
    );
}
 
export default MainPage;