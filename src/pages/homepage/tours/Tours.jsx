import React from 'react'
import './Tour.css'
import Image_1 from '../../../assets/tours/tour-1.jpg'
import Image_2 from '../../../assets/tours/tour-2.jpg'
import Image_3 from '../../../assets/tours/tour-3.jpg'
import Image_4 from '../../../assets/tours/tour-4.jpg'
import Image_5 from '../../../assets/tours/tour-5.jpg'
const Tours = () => {
  return (
   <section className='tours_section container'>
      <div className="tours_container container">
        <span>Promotion</span>
        <h2>We Provide You Best Europe <br />
         Sightseeing Tours</h2>
         <p className='tours_p'>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
         <div className="tours_btn">
            <button className='btn'>View Tours</button>
         </div>

         <div className="tours_content">
            <div className="tours_card">
              <img src={Image_1} alt="" />
              <div className="tours_card_box">
                <p>50% Off</p>
              </div>
            </div>
            <div className="tours_card">
              <img src={Image_2} alt="" />
              <div className="tours_card_box">
                <p>50% Off</p>
              </div>
            </div>
            <div className="tours_card">
              <img src={Image_3} alt="" />
              <div className="tours_card_box">
                <p>50% Off</p>
              </div>
            </div>
            <div className="tours_card">
              <img src={Image_4} alt="" />
              <div className="tours_card_box">
                <p>50% Off</p>
              </div>
            </div>
            <div className="tours_card">
              <img src={Image_5} alt="" />
              <div className="tours_card_box">
                <p>50% Off</p>
              </div>
            </div>
         </div>
      </div>
   </section>
  )
}

export default Tours
