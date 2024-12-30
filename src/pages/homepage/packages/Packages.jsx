import React from 'react'
import './Packages.css'
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import Image_1 from '../../../assets/tours/tour-1.jpg'
import Image_2 from '../../../assets/tours/tour-2.jpg'
import Image_3 from '../../../assets/tours/tour-3.jpg'
const Packages = () => {
  return (
   <section className="package_section container">
      <p className='package_p'>Trendy</p>
      <h1>Our Trending Tour Packages</h1>
    <div className="package_container container">
        <div className="package_card">
            <img src={Image_1} alt="" />
            <div className="package_card_box">
            <div className="package_card_content">
                <div><i><CiCalendar /></i><p>8 Days</p></div>
                <div><i><IoPerson /></i><p>15 People</p></div>
                <div><i><CiLocationOn /></i><p>Italy</p></div>
            </div>
            <h2>Norway</h2>
            <span className='package_span'>$999</span>
            <p className='package_paragraph'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            </div>
        </div>

        <div className="package_card">
            <img src={Image_2} alt="" />
            <div className="package_card_box">
            <div className="package_card_content">
                <div><i><CiCalendar /></i><p>8 Days</p></div>
                <div><i><IoPerson /></i><p>15 People</p></div>
                <div><i><CiLocationOn /></i><p>Italy</p></div>
            </div>
            <h2>Norway</h2>
            <span className='package_span'>$999</span>
            <p className='package_paragraph'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            </div>
        </div>

        <div className="package_card">
            <img src={Image_3} alt="" />
            <div className="package_card_box">
            <div className="package_card_content">
                <div><i><CiCalendar /></i><p>8 Days</p></div>
                <div><i><IoPerson /></i><p>15 People</p></div>
                <div><i><CiLocationOn /></i><p>Italy</p></div>
            </div>
            <h2>Norway</h2>
            <span className='package_span'>$999</span>
            <p className='package_paragraph'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            </div>
        </div>
        
    </div>
    <div className='package_btn'>
        <button className="btn">
            See More
        </button>
        <button className="btn_btn">
            See More
        </button>
    </div>
   </section>
  )
}

export default Packages
