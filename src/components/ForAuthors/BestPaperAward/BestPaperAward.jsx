import React from 'react'
import './BestPaperAward.css'
import bpaData from '../../../data/bestPaperAward.json'
import IconMapper from '../../IconMapper/IconMapper'

const BestPaperAward = () => {
  const { header, criteria, process, awards, note } = bpaData

  return (
    <div className="bpa-container">
      <div className="bpa-header">
        <h1>{header.title}</h1>
        <p>{header.description}</p>
      </div>

      <div className="bpa-section">
        <h2>{awards.title}</h2>
        <div className="bpa-grid">
          {awards.list.map((award, index) => (
            <div key={index} className="bpa-card">
              <IconMapper iconName="IoIosRibbon" />
              <h3>{award.title}</h3>
              <p>{award.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bpa-section">
        <h2>{criteria.title}</h2>
        <ul className="bpa-list">
          {criteria.list.map((item, index) => (
            <li key={index}>
              <IconMapper iconName="BsCheck2Circle" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="bpa-section">
        <h2>{process.title}</h2>
        <ul className="bpa-list">
          {process.steps.map((step, index) => (
            <li key={index}>
              <IconMapper iconName="FaBullseye" />
              <p>{step}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="bpa-note">
        <p>{note}</p>
      </div>
    </div>
  )
}

export default BestPaperAward