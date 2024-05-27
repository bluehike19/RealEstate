import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './hotel.css'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Hotel = () => {

  const photos = [
    {
      src: '/pic1.jpg'
    },
    {
      src: '/pic2.jpg'
    },
    {
      src: '/pic3.jpg'
    },
    {
      src: '/pic4.jpg'
    },
  ]

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
        <div className="hotelImages">
          {photos.map(photo=>(
            <div className="hotelImgWrapper">
              <img src={photo.src} className="hotelImg" />
            </div>
          ))}
        </div>
        <div className="hotelDetails">
          <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
            <p className="hotelDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis suscipit iste reprehenderit excepturi sint mollitia ut! Quos distinctio ipsum odit possimus deleniti incidunt repellat cupiditate! Repellendus magni quaerat neque.</p>
          </div>
          <div className="hotelDetailsPrice">
            <h1>Perfect for a 9-night stay!</h1>
            <span>located in the real heart of Krakow, this property has an excellent location score of 9.8!</span>
            <h2>
              <b>$945</b> (9 nights)
            </h2>
            <button>Reserve or Book now!</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hotel;