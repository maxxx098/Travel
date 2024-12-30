import React from 'react'
import './footer.css'
import { AiFillInstagram, AiFillGithub, AiFillFacebook, AiFillDingtalkCircle  } from "react-icons/ai";
import { Link } from 'react-router-dom';
const footer = () => {
  return (
    <>
    
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="footer__logo">
            <a href="#" className="logo">WP<span>Travel</span>.</a>
          </div>
          <p>
            Our platform is your passport to seamless adventures, offering a
            curated selection of destinations and a user-friendly booking
            experience.
          </p>
        </div>
        <div className="footer__col">
          <h4>Company</h4>
          <ul className="footer__links">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Mobile</a></li>
            <li><a href="#">Mobile</a></li>

          </ul>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <ul className="footer__links">
            <li><a href="#">Help/FAQ</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Affiliates</a></li>
            <li><a href="#">Affiliates</a></li>
            
          </ul>
        </div>
        
        <div className="footer__col">
          <ul className="footer__socials">
            <li>
              <a href="#"><i><AiFillInstagram size={30}/></i></a>
            </li>
            <li>
              <a href="#"><i><AiFillGithub size={30}/></i></a>
            </li>
            <li>
              <a href="#"><i><AiFillFacebook size={30}/></i></a>
            </li>
          </ul>
          <h5>Discover our app</h5>
          <div className="footer__discover">
           
          </div>
        </div>
      </div>
      <div className="footer__bar">
        Travel © 2024 Tour 2024 - All Rights Reserved
      </div>
    </footer>

    </>
  )
}



export const Newsletter = () => {
  return (
    <section classNameName="newsletter_section container">
        <div classNameName="newsletter_content">
            <div classNameName="newsletter_text">
                <h2>Ready to explore?</h2>
                <p>Let's go on vacation, make your day</p>
            </div>

            <form action="">
                <input type="email" placeholder='Enter your email...' required/>
                <input type="submit" value="Get started" classNameName='btn'/>
            </form>
        </div>
    </section>
  )
}
export const Copyright = () => {
    return (
     <div classNameName="copyright">
        <p>Travel & Tour 2024 - All Rights Reserved</p>
     </div>
    )
  }


export default footer
