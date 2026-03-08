import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', () => {
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
    }, []);

    const[mobileMenu, setmobileMenu] = useState(false);

    const toggleMenu = () => {
      mobileMenu ? setmobileMenu(false) : setmobileMenu(true);
    }

  return (
    <nav className={sticky ? 'dark-nav' : ''}>
      <div className="container nav-content">
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='Services' smooth={true} offset={-260} duration={500}>Services</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
          <li><Link to='Sites' smooth={true} offset={-260} duration={500}>Sites</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
          <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
      </div>
    </nav>
  )
}

export default Navbar
