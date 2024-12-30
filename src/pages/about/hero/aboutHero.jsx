import React from 'react';
import './aboutHero.css';
import Image_1 from '../../../assets/img/Img8.jpg';
import Image_2 from '../../../assets/img/Img9.jpg';
import Image_3 from '../../../assets/img/Img10.jpg';
import Image_4 from '../../../assets/img/Img11.jpg';

import Logo from '../../../assets/img/bg.png'
import Logo2 from '../../../assets/img/logo2.png'
import Logo3 from '../../../assets/img/logo3.png'
import Logo4 from '../../../assets/img/logo4.png'
const aboutHero = () => {
  return (
    <section className="aboutHero_section">
      <div className="aboutHero_container">
        <div className="absolute_img">
          <img data-aos="zoom-in-up" src={Logo} alt="" />
        </div>
        <span data-aos="zoom-in-up">HOME / PAGE / ABOUT US</span>
        <h1 data-aos="zoom-in-up">Unlock Your Travel Dreams With Us</h1>
        <p data-aos="zoom-in-up">Discover the more about the most adventurous nature life, life is so short trip.</p>
       <div data-aos="zoom-in-up" >
       <button className="btn">See More</button>
       </div>
      </div>
    </section>
  );
};

export default aboutHero;
