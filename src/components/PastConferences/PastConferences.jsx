import React from 'react'
import './PastConferences.css'
import pcData from '../../data/pastConferences.json'
import IconMapper from '../IconMapper/IconMapper'

const PastConferences = () => {
  const { header, conferences } = pcData

  return (
    <div className="pc-container">
      <div className="pc-header">
        <h1>{header.title}</h1>
        <p>{header.description}</p>
      </div>

      <div className="pc-list">
        {conferences.map((conf, index) => (
          <div key={index} className="pc-card">
            <img src={conf.image} alt={conf.title} className="pc-image" />
            <div className="pc-content">
              <span className="pc-year">{conf.year}</span>
              <h3>{conf.title}</h3>
              <div className="pc-meta">
                <div className="pc-meta-item">
                  <IconMapper iconName="FaCalendarAlt" />
                  <span>{conf.date}</span>
                </div>
                <div className="pc-meta-item">
                  <IconMapper iconName="FaMapMarkerAlt" />
                  <span>{conf.location}</span>
                </div>
              </div>
              <p className="pc-description">{conf.description}</p>
              <a href={conf.link} className="pc-btn">View Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PastConferences