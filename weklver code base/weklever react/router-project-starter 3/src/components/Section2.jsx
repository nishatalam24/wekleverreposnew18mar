import React from 'react'
import puzzle from "../custom_assets/puzzle.svg"
import workflow from "../custom_assets/workflow.svg"
import highimpact from "../custom_assets/highimpact.svg"
import "./section2.css"

const Section2 = () => {
  return (
    <div>

<section className="section_two">

<div className="section_two_left">
    <div className="para_section_two_left">



        <p>
            We operate at
            the intersection
            of science and
            style.
        </p>

        <p>
            We help you unlock your unique growth loops and put them into action with frameworks and strategies
            that drive rapid growth and maximize revenue potential.

        </p>
    </div>

</div>

<div className="section_two_right">
<img src={workflow} alt="Logo" loading="lazy"/>
</div>

</section>
<section className="section_two">

<div className="section_two_left">

    <div className="para_section_two_left">

        <p>
            We are the missing piece of your marketing puzzle.
        </p>

        <p>
            When you partner with WeKlever, you get a tailored growth squad of proven experts that understand
            your business and are committed to achieving rapid growth that taps into your full potential. We are
            a team built on the belief that when the right people and ideas connect, anything’s possible.

        </p>
    </div>

</div>

<div className="section_two_right">
<img src={puzzle} alt="Logo" loading="lazy"/>
</div>

</section>


<section className="section_two">

<div className="section_two_left">

    <div className="para_section_two_left">

        <p>
            No Fluff. High impact. No penny wasted.
        </p>

        <p>
            When you partner with WeKlever, you get a tailored growth squad of proven experts that understand
            your
            business and are committed to achieving rapid growth
            that taps into your full potential. We are a team built on the belief that when the right people and
            ideas connect, anything’s possible.

        </p>
    </div>

</div>

<div className="section_two_right">
<img src={highimpact} alt="Logo" loading="lazy"/>

</div>



</section>

    </div>
  )
}

export default Section2