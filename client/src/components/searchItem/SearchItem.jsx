import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="pic1.jpg" alt="" className='siImg' />
        <div className="siDesc">
            <h1 className='siTitle'>Tower Street Apartment</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio Apartment with air conditioning</span>
            <span className="siFeature">Entire studio . 1 bathroom 21m2 1 full bed </span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>    
         <div className="siDetails">
          <div className="SiRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$123</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className='siCheckButton'>See availability</button>          
            </div>
         </div>
    </div>
  )
}

export default SearchItem