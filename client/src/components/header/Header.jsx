import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import 'react-date-range/dist/style.css';
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns'

const Header = () => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])
  return (
    <div>
     <div className="header">
        <div className="headerContainer">
          <div className="headerList">
            <div className="headerListItem">
             <FontAwesomeIcon  icon={faBed} />
             <span>Stays</span>
            </div>
            <div className="headerListItem">
             <FontAwesomeIcon  icon={faPlane} />
             <span>Flights</span>
            </div>
            <div className="headerListItem">
             <FontAwesomeIcon  icon={faCar} />
             <span>Car rentals</span>
            </div>
            <div className="headerListItem">
             <FontAwesomeIcon  icon={faBed} />
             <span>Attractions</span>
            </div>
            <div className="headerListItem">
             <FontAwesomeIcon  icon={faTaxi} />
             <span>Airport taxis</span>
            </div>
          </div>
          <h1 className="headerTitle">A lifetime of discounts? it's Genius.</h1>
          <p className="headerDesc">Get rewarded for your travels - unlock instant savings of 10% or more with a free blueHike account</p>
          <button className="headerBtn">Sign in / Register</button>
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} className='headerIcon' />
              <input type="text" placeholder='Where are you going?' className='headerSearchInput' />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
              <span className='headerSearchText'>{`${format(date[0].startDate,'mm/dd/yyyy')} to ${format(date[0].endDate,'mm/dd/yyyy')} `}</span>
              <DateRange editableDateInputs={true} onChange={item =>setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date} className='date' />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className='headerIcon' />
              <span className='headerSearchText'>2 adults 2 children 1 room</span>
            </div>
            <div className="headerSearchItem">
              <button className="headerBtn">Search</button>
            </div>
          </div>
        </div>
     </div>
    </div>
  )
}

export default Header