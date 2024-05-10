import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div>
        <div className="div">
            <div className="div">
            <FontAwesomeIcon  icon={faBed} />
            </div>
        </div>
    </div>
  )
}

export default Header