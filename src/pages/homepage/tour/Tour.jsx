import React  from 'react';
import './Tour.css'
import { AiFillBook } from "react-icons/ai";
import Image_1 from '../../../assets/svg/Img_1.svg'
import Image_2 from '../../../assets/svg/Img_2.svg'
import Image_3 from '../../../assets/svg/Img_3.svg'
const Tour = () => {
 
  return (
    <section  className='services_extension'>
        <div className='services_box'>
           <h3 className='h-3_title'>Why Choose Us?</h3>
           <h2 className='services_paragraph'>Plan Your Trip With Us</h2>
        </div>

        <section className='section_images'>
          <div className="service_images">
            <div className="service_content">
                
            <img className='service_icons' src={Image_1} alt="" />
            </div>
            <div className='services_sub-content'>
            <h3 className='section_header-3'>Cost Effective Solution</h3>
            <p  className='section_paragraph' >Get high-quality design work at a <br /> fraction of the cost.</p>
            </div>
          </div>
          <div className="service_images">
           <div className="service_content">
           <img className='service_icons'  src={Image_2} alt="" />

            </div>
            <div className='services_sub-content'>
            <h3 className='section_header-3'>Cost Effective Solution</h3>
            <p  className='section_paragraph' >Get high-quality design work at a <br /> fraction of the cost.</p>
            </div>
          </div>
          <div className="service_images">
           <div className="service_content">
           <img className='service_icons'  src={Image_3} alt="" />

           </div>
           <div className='services_sub-content'>
            <h3 className='section_header-3'>Cost Effective Solution</h3>
            <p  className='section_paragraph' >Get high-quality design work at a <br /> fraction of the cost.</p>
            </div>
          </div>
        </section>
    </section>
  )
}

export default Tour
