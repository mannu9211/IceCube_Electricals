import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "69c0e4af-eac4-4a5c-a428-0409ef0c18dc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Something went wrong!");
    }
  };

  return (
    <div className='contact'>

      {/* LEFT SIDE */}
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>

        <p>
          Have a question or need assistance? Don’t hesitate to get in touch with us. 
          We are always ready to help with installation, repair, and maintenance services 
          to ensure your systems run smoothly.
        </p>

        <ul>
          <li><img src={mail_icon} alt="" /> makhan7644806099@gmail.com</li>
          <li><img src={phone_icon} alt="" /> +91 7644806099</li>
          <li><img src={location_icon} alt="" /> Nehru Nagar, Boring Road, Patna 800001, Bihar, India</li>
        </ul>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="contact-col">
        <form onSubmit={onSubmit}>

          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your phone number" required />

          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>

          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>

        </form>

        <span>{result}</span>
      </div>

    </div>
  )
}

export default Contact