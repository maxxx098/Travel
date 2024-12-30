import React from 'react';
import './Trip.css';
import trip from '../../../assets/svg/trip.svg';
import { ImAirplane, ImCreditCard, ImDatabase } from "react-icons/im";
import { BsFillCalendar2DateFill } from "react-icons/bs";

const Trip = () => {
  return (
    <section className="section___container container">
      <div className="trip__container container">
        <div className="trip__content">
          <h3 className="section__subheader">EASY & FAST</h3>
          <h2 className="section__header">Book Your Next Trip In 3 Easy Steps</h2>
          <ul className="trip__list">
            <li>
              <span><i><ImDatabase size={20} color='black'/></i></span>
              <div>
                <h4>Choose Destination</h4>
                <p>
                  Choose your dream destination from our curated selection of
                  exotic locales, bustling cities, and serene getaways.
                </p>
              </div>
            </li>
            <li>
              <span><i><ImCreditCard size={20} /></i></span>
              <div>
                <h4>Choose your Budget</h4>
                <p>
                  Secure your adventure with ease through our streamlined payment
                  process, ensuring a hassle-free booking experience.
                </p>
              </div>
            </li>
            <li>
              <span><i><BsFillCalendar2DateFill size={20} /></i></span>
              <div>
                <h4> Selected Date</h4>
                <p>
                  Prepare for takeoff as you finalize your travel plans, arriving
                  at the airport on your selected date ready to embark on your
                  next unforgettable journey.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="trip__image">
          <div className="trip_image_content">
            <img src={trip} alt="Trip" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trip;

