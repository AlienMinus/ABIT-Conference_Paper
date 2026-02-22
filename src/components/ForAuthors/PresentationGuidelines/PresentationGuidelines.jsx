import React from 'react'
import './PresentationGuidelines.css'
import pgData from '../../../data/presentationGuidelines.json'
import IconMapper from '../../IconMapper/IconMapper'

const PresentationGuidelines = () => {
  const { header, oral, video } = pgData

  return (
    <div className="pg-container">
      <div className="pg-header">
        <h1>{header.title}</h1>
        <p>{header.description}</p>
      </div>

      <div className="pg-split-section">
        <div className="pg-column">
          <h2>{oral.title}</h2>
          <ul className="pg-list">
            {oral.guidelines.map((item, index) => (
              <li key={index}>
                <IconMapper iconName="BsCheck2Circle" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="pg-column">
          <h2>{video.title}</h2>
          <p>{video.description}</p>
          
          <div className="pg-specs-grid">
            {video.specs.map((spec, index) => (
              <div key={index} className="pg-spec-card">
                <h4>{spec.label}</h4>
                <p>{spec.value}</p>
              </div>
            ))}
          </div>

          <ul className="pg-list">
            {video.instructions.map((item, index) => (
              <li key={index}>
                <IconMapper iconName="BsCheck2Circle" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PresentationGuidelines