import React from 'react'
import './Registration.css'
import registrationData from '../../../data/registration.json'
import IconMapper from '../../IconMapper/IconMapper'

const Registration = () => {
  const { title, description, feeTitle, table, participationFee, notes, registrationLink } = registrationData

  return (
    <div className="registration-container">
      <div className="registration-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="registration-section">
        <h2>{feeTitle}</h2>
        <div className="registration-table-container">
          <table className="reg-table">
            <thead>
              <tr>
                {table.headers.map((header, index) => (
                  <th key={index}>
                    {header.text}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, index) => (
                <tr key={index}>
                  <td><strong>{row.category}</strong></td>
                  {row.values.map((val, idx) => (
                    <td key={idx}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="registration-participation-fee">
        <h3>{participationFee}</h3>
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
        <a href={registrationLink.url} className="reg-btn" target="_blank" rel="noopener noreferrer">
          {registrationLink.text}
        </a>
        <p className="coming-soon-text">{registrationLink.comingSoonText}</p>
      </div>
    </div>
  )
}

export default Registration
