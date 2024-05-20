import './mailList.css'
import React from 'react'

const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle"></h1>
        <span className="mailDesc"></span>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList