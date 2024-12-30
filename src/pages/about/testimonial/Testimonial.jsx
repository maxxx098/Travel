import React, { useState, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; 

import Image_1 from '../../../assets/img/client-3.jpg'
const Testimonial = () => {
  const [testimonials] = useState([
    {
      id: 1,
      img: Image_1,
      text: `Booking my trips through this platform has been a game-changer! From the intuitive interface to the seamless booking process, I've never felt more excited to explore new destinations.`,
      name: 'Emily Watson',
      role: 'Travel Enthusiast',
    },
    {
      id: 2,
      img: Image_1,
      text: `As a busy professional, time is of the essence. This website made planning my vacation a breeze, allowing me to focus on what matters most: making memories with my family.`,
      name: 'David Nguyen',
      role: 'Business Executive',
    },
    {
      id: 3,
      img: Image_1,
      text: `I've been using this service for years, and it never disappoints. The convenience of booking my flights, accommodations, and activities all in one place saves me time and stress every trip.`,
      name: 'Michael Johnson',
      role: 'Frequent Flyer',
    },
  ]);

  
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      direction: 'vertical',
      autoHeight: true,
      slidesPerView: 1,
    });

    return () => {
      swiper.destroy(); 
    };
  }, []);

 
  return (
    <section className="section__container " id="client">
      <div className='divider'></div>
      <div className="container client__container">
      <div className="client__content">
        <h3 className="section__subheader">TESTIMONIALS</h3>
        <h2 className="section__header">What People Say About Us</h2>
      </div>
      <div className="client__swiper">
        <div className="swiper">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial) => (
              <div
                className="swiper-slide"
                key={testimonial.id}
              >
                <div className="client__card">
                  <img src={testimonial.img} alt={testimonial.name} />
                  <div className="client__card__content">
                    <p>{testimonial.text}</p>
                    <h4>{testimonial.name}</h4>
                    <h5>{testimonial.role}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     
      </div>
      <div className='divider'></div>
      
    </section>
  );
};


export const Review = () => {
  return (
    <section className='review_section container'>
      <div className="review_container">
        <div className="review_box">
            <h1 className='review_box_header-1'>4.9/5</h1>
            <p className="review_box_paragraph">By clients</p>
        </div>
                {/* Divider */}
        <div className='review_divider'></div>

        <div className="review_box">
           <h1 className='review_box_header-1'>25k min</h1>
           <p className="review_box_paragraph">Project Size</p>
        </div>
                 {/* Divider */}
        <div className='review_divider'></div>

        <div className="review_box">
           <h1 className='review_box_header-1'>100+</h1>
           <p className="review_box_paragraph">Happy Customers</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;

