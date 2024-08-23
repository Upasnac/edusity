import React from 'react'
import './programs.css'
import program_1 from '../../assets/images/program-1.png'
import program_2 from '../../assets/images/program-2.png'
import program_3 from '../../assets/images/program-3.png'
import program_icon_1 from '../../assets/images/program-icon-1.png'
import program_icon_2 from '../../assets/images/program-icon-2.png'
import program_icon_3 from '../../assets/images/program-icon-3.png'


const programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program_1} alt=""/>
            <div className='caption'>
                <img src={program_icon_1} alt='' />
                <p>Graduation degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_2} alt=""/>
            <div className='caption'>
                <img src={program_icon_2} alt='' />
                <p>Master degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_3} alt=""/>
            <div className='caption'>
                <img src={program_icon_3} alt='' />
                <p>Post Graduation degree</p>
            </div>
        </div>
        </div>
  )
}

export default programs