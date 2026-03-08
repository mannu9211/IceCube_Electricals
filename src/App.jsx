import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Title from './components/Title/Title'
import About from './components/About/About'
import Site from './components/Sites/Site'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import whatsapplogo from './assets/whatsapp.png'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
  <>
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our Services' title='What We Offer' />
        <Services/>
        <About setPlayState={setPlayState} />
        <Title subtitle='Work Showcase' title='Our Recent Work' />
        <Site />
        <Title subtitle='TESTIMONIALS' title='What Our Clients Say' />
        <Testimonials/>
        <Title subtitle='CONTACT US' title='Get In Touch With Us' />
        <Contact/>
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
    <div className="whatsapp-button">
      <a href="https://wa.me/7644806099?text=Hello, How  can I help you?" target="_blank" rel="noreferrer">
        <img src={whatsapplogo} width="60" alt="WhatsApp" />
      </a>
    </div>
    </>
  )
}

export default App