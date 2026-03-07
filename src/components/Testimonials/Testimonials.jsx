import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'        
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

const slideForward =()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward =()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                    <div>
                        <h3>Manish Patel</h3>
                        <span>ICE cube, PATNA</span>
                    </div>
                    </div>
                    <p>I had an issue with my air conditioner and contacted Ice Cube Refrigeration & Electricals. Their technician arrived on time, quickly identified the problem, and fixed it efficiently. The service was professional and reasonably priced. I highly recommend them for any electrical or refrigeration work.</p>
                </div>
            </li>
             <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                    <div>
                        <h3>Rohan Singh</h3>
                        <span>ICE cube, PATNA</span>
                    </div>
                    </div>
                    <p>Ice Cube Refrigeration & Electricals provided excellent service for our shop in Patna. They handled both electrical wiring and refrigerator maintenance very professionally. The team was skilled, polite, and completed the work on time. We are very satisfied with their service.</p>
                </div>
            </li>
             <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                    <div>
                        <h3>Mannu kumar</h3>
                        <span>ICE cube Electricals, PATNA</span>
                    </div>
                    </div>
                    <p>We hired Ice Cube Refrigeration & Electricals for maintenance work on a contract basis, and their service has been reliable and efficient. They respond quickly to issues and ensure everything runs smoothly. A trustworthy team for electrical and refrigeration services</p>
                    </div>
            </li>
             <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                    <div>
                        <h3>Uday Ray</h3>
                        <span>ICE cube Electricals, PATNA</span>
                    </div>
                    </div>
                    <p>Great experience working with Ice Cube Refrigeration & Electricals. They repaired our deep freezer and also fixed some electrical faults in our house. The technician was knowledgeable and explained everything clearly. I would definitely recommend their services</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
