import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/images/next-icon.png'
import back_icon from '../../assets/images/back-icon.png'
import user_1 from '../../assets/images/user-1.png'
import user_2 from '../../assets/images/user-2.png'
import user_3 from '../../assets/images/user-3.png'
import user_4 from '../../assets/images/user-4.png'


const Testimonials = () => {
    const slider = useRef();
    let tx=0;
  const slideFoorward=()=>{
       if(tx > -50){
        tx -=25;
       }
       slider.current.style.transform = `translateX(${tx}%)`;

  }
  const slideBackward=()=>{
    if(tx < 0){
        tx +=25;
       }
       slider.current.style.transform = `translateX(${tx}%)`;
  }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn' 
        onClick={slideFoorward}></img>
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}></img>
        <div className='slider'>
            <ul ref={slider}>
                <li><div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt=''></img>
                        <h3>William Jackson</h3>
                        <span>Educity, USA</span>
                    </div>
                    
                    </div>
                    <p>
                    Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                    </p>
                    </li>
                    <li><div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt=''></img>
                        <h3>Emily Williams </h3>
                        <span>Educity, USA</span>
                    </div>
                    
                    </div>
                    <p>
                    Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                    </p>
                    </li>
                    <li><div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt=''></img>
                        <h3>William Jackson3</h3>
                        <span>Educity, USA</span>
                    </div>
                    
                    </div>
                    <p>
                    Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                    </p>
                    </li>
                    <li><div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt=''></img>
                        <h3>William Jackson4</h3>
                        <span>Educity, USA</span>
                    </div>
                    
                    </div>
                    <p>
                    Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                    </p>
                    </li>
            </ul>
        </div>

    </div>
  )
}

export default Testimonials