import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='SearchItem'>
        <img src="pic1.jpg" alt="" className='siImg' />
        <div className="siDesc">
            <h1 className='siTitle'>Tower Street Apartment</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio Apartment with air conditioning</span>
            <span className="siFeature">Entire studio . 1 bathroom 21m2 1 full bed </span>
            <span className="siCanceLop">Free cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
         </div>    
         <div className="siDetails">details</div>
    </div>
  )
}

export default SearchItem