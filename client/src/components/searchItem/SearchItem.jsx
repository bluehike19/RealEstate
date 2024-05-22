import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='SearchItem'>
        <img src="pic1" alt="" className='siImg' />
        <div className="siDesc">
            <h1 className='siTitle'>Tower Street Apartment</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio Apartment with air conditioning</span>
        </div>    
    </div>
  )
}

export default SearchItem