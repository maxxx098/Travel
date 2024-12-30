import React from 'react';
import { Link } from 'react-router-dom';

import './home.css';


const Home = () => {
  return (
    <>
    <section data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-duration="500" data-aos-offset="0" className="home_section home_bg ">
       <div className="home_container " data-aos="zoom-in">
       <div className="home_text home_box">
            <h5 data-aos="fade-up"  data-aos-anchor-placement="top-center" data-aos-duration="5000">Let's</h5>
            <h1 data-aos="zoom-in" data-aos-duration="6000">Explore  United Kingdom</h1>
            <p data-aos="zoom-in" data-aos-duration="7000">Rich history, stunning landscapes, vibrant cities, and unforgettable <br /> adventures await. Discover your next great adventure in the UK!
            </p>
            <button data-aos="zoom-in" data-aos-duration="8000" className='btn'><Link className='link_btn' to="/">Book a trip</Link></button>
        </div>
       </div>
    </section>
    
    </>
  );
};

export default Home;

