import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={() => setPlayState(true)} />

            </div> 
        <div className="about-right">
            <h3>ABOUT ICECUBE</h3>
            <h2>Reliable Cooling & Electrical Solutions</h2>
            <p>Ice Cube Refrigeration & Electricals provides reliable refrigeration and electrical services for homes, shops, and commercial spaces. We specialize in installation, repair, and maintenance of air conditioners, refrigerators, deep freezers, and complete electrical systems.</p>
            <p>Based in Patna, Bihar, we proudly serve customers across Patna and nearby districts including Gaya, Vaishali, Bhojpur, and surrounding areas. With a focus on quality workmanship and customer satisfaction, we ensure every job is completed safely, efficiently, and at an affordable price.</p>
            <p>We also provide maintenance services for both government premises and private establishments on a contract basis. Whether it’s a small electrical repair or complete refrigeration maintenance, our team is dedicated to delivering fast, professional, and dependable solutions you can trust.</p>
        </div>      
     
    </div>
  )
}

export default About
