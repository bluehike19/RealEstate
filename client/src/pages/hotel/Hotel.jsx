import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './hotel.css'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Hotel = () => {
  return (
    <div>
    <Navbar/>
    <Header type='list'/>
    <div className="hotelContainer">
      <div className="hotelWrapper">
        <h1 className="hotelTitle">Grand Hotel</h1>
        <div className="hotelAddress">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Elton St 125 New York</span>
        </div>
        <span className="hotelDistance">Excellent location - 500m from center</span>
        <span className="hotelPriceHighlight">
          Book a stay over $114 at this property and get a free airport taxi
        </span>
      </div>
    </div>
    </div>
  )
}

export default Hotel;