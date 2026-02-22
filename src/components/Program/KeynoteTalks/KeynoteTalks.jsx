import React from 'react'
import './KeynoteTalks.css'
import ktData from '../../../data/keynoteTalks.json'

const KeynoteTalks = () => {
  const { header, speakers } = ktData

  return (
    <div className="kt-container">
      <div className="kt-header">
        <h1>{header.title}</h1>
        <p>{header.description}</p>
      </div>

      <div className="kt-grid">
        {speakers.map((speaker, index) => (
          <div key={index} className="kt-card">
            <img src={speaker.image} alt={speaker.name} className="kt-image" />
            <h3>{speaker.name}</h3>
            <p className="kt-affiliation">{speaker.affiliation}</p>
            {speaker.title && <h4>"{speaker.title}"</h4>}
            <p className="kt-abstract">{speaker.abstract}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default KeynoteTalks