import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/images/msg-icon.png'
import mail_icon from '../../assets/images/mail-icon.png'
import phone_icon from '../../assets/images/phone-icon.png'
import location_icon from '../../assets/images/location-icon.png'
import white_arrow from '../../assets/images/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "85345458-b5ed-4042-af24-72ccbd8d8264");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Email Sent Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message<img src={msg_icon} alt=""></img></h3>
            <p>
            Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
            </p>
            <ul>
                <li> <img src={mail_icon} alt=""></img>Contact@educity.com</li>
                <li><img src={phone_icon} alt=""></img>456-789-132</li>
                <li><img src={location_icon} alt=""></img>11 Cambridge Terrace</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your Mobile Number' required/>
                <label>Write your message here</label>
                <textarea  name='message' rows='6' placeholder='Enter your message' required/>
                <button type='submit' className='btn dark-btn'>Submit Now<img src={white_arrow} alt=""></img></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact