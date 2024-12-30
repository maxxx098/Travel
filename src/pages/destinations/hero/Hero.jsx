import { useState } from "react";
import { IoCamera } from "react-icons/io5";
import './Hero.css'
import image1 from '../../../assets/img/98.avif'
import image2 from '../../../assets/img/Img4.jpg'
import image3 from '../../../assets/img/Img5.jpg'
import image4 from '../../../assets/img/Img6.jpg'
import image5 from '../../../assets/img/Img7.jpg'
import Logo from '../../../assets/img/bg.png'



const Hero = () => {
  return (
   <section className="aboutHero_section" >
         <div className="aboutHero_container">
           <div className="absolute_img">
             <img data-aos="zoom-in-up" src={Logo} alt="" />
           </div>
           <span data-aos="zoom-in-up">HOME / PAGE / PLACES</span>
           <h1 data-aos="zoom-in-up">Explore the Unseen, Live the Dream</h1>
           <p data-aos="zoom-in-up">Embark on a journey where every adventure is a step toward your dreams.</p>
           <div data-aos="zoom-in-up" >
            <button className="btn">See More</button>
           </div>
         </div>
       </section>
  )
}







export default Hero
