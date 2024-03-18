import React from 'react'
import "./partner.css"
import logo1 from "../custom_assets/partner1.jpeg"

const Partner = () => {
  return (
    <div >

      <div className='section_1'>
      <div className="section_1_border">

<p>The trusted growth partner for many startups, scaleups, and Fortune 500 brands:</p>


<div className="partner_logos">
<img src={logo1} alt="Logo" loading="lazy"/>
<img src={logo1} alt="Logo" loading="lazy"/>
<img src={logo1} alt="Logo" loading="lazy"/>
<img src={logo1} alt="Logo" loading="lazy"/>
<img src={logo1} alt="Logo" loading="lazy"/>
</div>


</div>
      </div>

    </div>
  )
}

export default Partner