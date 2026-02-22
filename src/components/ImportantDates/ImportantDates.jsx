import React from 'react'
import './ImportantDates.css'
import importantDates from '../../data/importantDates.json'
import IconMapper from '../IconMapper/IconMapper'

const ImportantDates = () => {
  return (
    <section id="important-dates" className="important-dates-section">
      <div className="container">
        <h2 className="section-title">Important Dates</h2>
        <div className="section-underline"></div>
        
        <div className="dates-grid">
          {importantDates.map((item, index) => (
            <div key={index} className={`date-card ${item.featured ? 'featured' : ''}`}>
              <div className="date-icon"><IconMapper iconName={item.icon} /></div>
              <h3>{item.title}</h3>
              <p className="date-value">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImportantDates