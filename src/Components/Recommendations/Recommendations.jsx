import React from 'react'
import sodiq from "../../Image/sodiq.jpeg"
import israel from "../../Image/israel.jpg"
import moerayo from "../../Image/moerayo.jpeg"
import damola from "../../Image/damola.jpg"
import chidi from "../../Image/chidi.jpeg"
import "./recommendations.scss"

const Recommendations = () => {
  return (
    <div className='recommendation'><h3 className='mt-5'>Recommendations</h3>
      <div className='recommendationImage mt-5'>
        <img src={chidi} alt="chidi" />
        <img src={moerayo} alt="moerayo" />
        <img src={israel} alt="israel" />
        <img src={damola} alt="damola" />
        <img src={sodiq} alt="sodiq" />
      </div>

    </div>
  )
}

export default Recommendations