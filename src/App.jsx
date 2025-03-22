import React from "react";
import HeroSection from "./components/BodyCom";
// import NavBar from "./components/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/ Header";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <NavBar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          {/* <Route path="/about" element={<AboutUs />} /> 
          <Route path="/services" element={<OurServices />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/appointment" element={<MainApp />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
