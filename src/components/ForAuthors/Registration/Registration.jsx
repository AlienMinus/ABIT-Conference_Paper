import React from 'react'
import './Registration.css'
import registrationData from '../../../data/registration.json'
import IconMapper from '../../IconMapper/IconMapper'
import UnderConstruction from '../../UnderConstruction/UnderConstruction'

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
        <UnderConstruction />
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
