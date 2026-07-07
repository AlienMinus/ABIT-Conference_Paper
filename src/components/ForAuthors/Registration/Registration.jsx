import React from 'react'
import './Registration.css'
import registrationData from '../../../data/registration.json'
import IconMapper from '../../IconMapper/IconMapper'

const Registration = () => {
  const { title, description, feeTitle, table, notes, registrationLink } = registrationData

  return (
    <div className="registration-container">
      <div className="registration-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="registration-section">
        <h2>{feeTitle}</h2>
        <div className="registration-announcement-card">
          <div className="registration-announcement-content">
            <div className="registration-announcement-icon">
              <IconMapper iconName="LuConstruction" />
            </div>
            <h1>To Be Announced...</h1>
            <h2>Will be Updated Soon</h2>
            <p>Information under this page are yet to be announced. Please feel free to check back later.</p>
          </div>
        </div>
      </div>

      <div className="registration-section">
        <h2>{notes.title}</h2>
        <ul className="registration-list check-list">
          {notes.list.map((item, index) => (
            <li key={index}>
              <IconMapper iconName="BsCheck2Circle" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="registration-action">
        <button className="reg-btn" disabled style={{ cursor: 'not-allowed', opacity: 0.5, border: 'none' }}>
          {registrationLink.text}
        </button>
        <p className="coming-soon-text">{registrationLink.comingSoonText}</p>
      </div>
    </div>
  )
}

export default Registration
