import React from 'react'
import './Services.css'
import service_1 from '../../assets/program-1.png'
import service_2 from '../../assets/program-2.png'
import service_3 from '../../assets/program-3.png'
import service_icon_1 from '../../assets/program-icon-1.png'
import service_icon_2 from '../../assets/program-icon-2.png'
import service_icon_3 from '../../assets/program-icon-3.png'

const Services = () => {
  return (
    <div className='Services'>
      <div className="service">
        <img src={service_1} alt="" />
        <div className="caption">
          <img src={service_icon_1} alt="" />
          <p>Refrigeration</p>
        </div>
      </div>
      <div className="service">
        <img src={service_2} alt="" />
        <div className="caption">
          <img src={service_icon_2} alt="" />
          <p>Air Conditioning</p>
        </div>
      </div>
      <div className="service">
        <img src={service_3} alt="" />
        <div className="caption">
          <img src={service_icon_3} alt="" />
          <p>Electrical Services</p>
        </div>
      </div>
    </div>
  )
}

export default Services
