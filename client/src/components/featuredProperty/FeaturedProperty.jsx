import './featuredProperty.css'
import React from 'react'

const FeaturedProperty = () => {
  return (
    <>
    <div className='fp'>
      <div className="fpItem">
      <img src="pic1.jpg" alt="" />
      <span className="fpName">Aparthotel Stare Miasto</span>
      <span className="fpCity">Madrid</span>
      <span className="fpPrice">Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
      </div>
    </div>
    <div className='fpItem'>
    <img src="pic1.jpg" alt="" />
    <span className="fpName">Aparthotel Stare Miasto</span>
    <span className="fpCity">Madrid</span>
    <span className="fpPrice">Starting from $120</span>
    <div className="fpRating">
      <button>8.9</button>
      <span>Excellent</span>
    </div>
  </div>
  <div className='fpItem'>
  <img src="pic1.jpg" alt="" />
  <span className="fpName">Aparthotel Stare Miasto</span>
  <span className="fpCity">Madrid</span>
  <span className="fpPrice">Starting from $120</span>
  <div className="fpRating">
    <button>8.9</button>
    <span>Excellent</span>
  </div>
</div>
</>
  )
}

export default FeaturedProperty