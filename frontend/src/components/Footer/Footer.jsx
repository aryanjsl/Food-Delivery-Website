import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <img src={assets.logo} alt="" />
        <p>We are dedicated to bringing delicious, fresh, and affordable meals right to your doorstep. Our mission is to make food delivery convenient, fast, and satisfying for every customer.</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
        <h2>Get in Touch</h2>
        <ul>
            <li>+91 8595852402</li>
            <li>contact@aryanjsl999@gmail.com</li>
        </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2025 © Big Bites™ Ltd. All rights reserved.</p>
    </div>
  )
}

export default Footer
