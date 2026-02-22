import React from 'react'
import './Registration.css'
import registrationData from '../../../data/registration.json'
import IconMapper from '../../IconMapper/IconMapper'

const Registration = () => {
  const { title, description, table, highlights, instructions, notes, feeIncludes } = registrationData

  return (
    <div className="registration-container">
      <div className="registration-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="registration-table-container">
        <table className="reg-table">
          <thead>
            <tr>
              {table.headers.map((header, index) => (
                <th key={index} rowSpan={header.rowSpan} colSpan={header.colSpan}>
                  {header.text}
                </th>
              ))}
            </tr>
            <tr>
              {table.subHeaders.map((subHeader, index) => (
                <th key={index}>{subHeader}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, index) => (
              <tr key={index}>
                <td>{row.sl}</td>
                <td>{row.category}</td>
                {row.values.map((val, idx) => (
                  typeof val === 'object' ? (
                    <td key={idx} colSpan={val.colSpan}>{val.text}</td>
                  ) : (
                    <td key={idx}>{val}</td>
                  )
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="registration-highlights">
        {highlights.map((highlight, index) => (
          <div key={index} className="highlight-item">
            <IconMapper iconName="FaBullseye" />
            <p>{highlight}</p>
          </div>
        ))}
      </div>

      <div className="registration-section">
        <h2>{instructions.title}</h2>
        <ol className="registration-list">
          {instructions.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>

      <div className="registration-section">
        <h2>{notes.title}</h2>
        <ol className="registration-list">
          {notes.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>

      <div className="registration-section">
        <h2>{feeIncludes.title}</h2>
        <ul className="registration-list check-list">
          {feeIncludes.list.map((item, index) => (
            <li key={index}>
              <IconMapper iconName="BsCheck2Circle" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Registration