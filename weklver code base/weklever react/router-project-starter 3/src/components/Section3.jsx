import React from 'react'
import "./section3.css"
import partner6 from '../custom_assets/partner6.jpeg'
import partner7 from '../custom_assets/partner7.jpeg'
import partner8 from '../custom_assets/partner8.jpeg'
import partner9 from '../custom_assets/partner9.jpeg'

const Section3 = () => {
  return (
    <div>
<div class="section_three">
        <p>Our partners are backed by the best in venture:
        </p>
        <div class="section_threelogos">
        <img src={partner6} alt="Logo" loading="lazy"/>
        <img src={partner7} alt="Logo" loading="lazy"/>
        <img src={partner8} alt="Logo" loading="lazy"/>
        <img src={partner9} alt="Logo" loading="lazy"/>
        </div>
    </div>
    </div>
  )
}

export default Section3

