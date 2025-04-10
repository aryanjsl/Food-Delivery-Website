import React from 'react'
import './Header.css'
import headerImg from '../../assets/header_img.png';

const Header = () => {
  return (
    <div className='header'
    style={{
      backgroundImage: `url(${headerImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    }}>
      <div className='header-contents'>
        <h2>Order fresh, tasty meals now!</h2>
        <p>Order fresh, tasty meals now! Enjoy homemade, restaurant-quality food delivered to your doorstep. Our meal plans keep you healthy and satisfied with fresh, high-quality ingredients. Say goodbye to meal prep stress and enjoy hassle-free dining!</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
