import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Welcome to Icecube Electricals</h1>
            <p>We provide professional installation, repair, and maintenance services for air conditioners, refrigerators, cold storage systems, and complete electrical works for residential and commercial spaces. Reliable service, affordable pricing, and customer satisfaction guaranteed.</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt=""/></button>
        </div>
      
    </div>
  )
}

export default Hero
