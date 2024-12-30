import React from 'react'
import './Holiday.css'
import { FaPlay } from "react-icons/fa";
import HolidayImage from '../../../assets/img/Img_2.jpg'
import Play from '../../../assets/svg/play.svg'
const Holiday = () => {
  return (
    <>
    <section className="holiday_section container">
        <div className="holiday_container container">
        <div className="holiday_section_img">
            <img src={HolidayImage} alt="Holiday_Image" />
        </div>
        <div className="holiday_section_text">
            <h5>ABOUT US</h5>
            <h2>What is Aerotav?</h2>
            <p>Experience seamless journeys with Aerotav: Travel Made Easier. From effortless
               bookings to personalized support, we simplify every step of your travel.
                Focus on creating memories while we handle the details—traveling has never been this easy.
            </p>
          
            <div className="play">
               <div className="about_btn">
                <button className='btn'>Read more</button>
               </div>
              <div className="about_btn">
                <div className="play_image">
                  <div className="play_icon">
                    <FaPlay className='Icon' />
                    </div>
                    <div className="play_p">
                    <p>Play Demo</p>
                    </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Holiday
