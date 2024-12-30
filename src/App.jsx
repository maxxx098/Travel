import React, { useEffect } from "react";
import  AOS  from "aos";
import 'aos/dist/aos.css'
import Navigation from './common/navigation/nav'
import { BrowserRouter as Router, Route, Routes, useLocation, BrowserRouter } from 'react-router-dom'; 
import Home from './pages/homepage/index.jsx'
import Footer from './common/footer/footer.jsx'
import Destinations from './pages/destinations/index.jsx'
import About from './pages/about/index.jsx';
const App = () => {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []); 

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<About/>} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}



export const ScrollToTop = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    const navHeight = document.querySelector("nav")?.offsetHeight || 0; 
    window.scrollTo({
      top: -navHeight,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

export default App
