import React from 'react'
import './CallForPaper.css'
import cfpData from '../../../data/callForPaper.json'
import IconMapper from '../../IconMapper/IconMapper'

const CallForPaper = () => {
  const { title, description, recordNumber, publication, submission, tracks, footer } = cfpData

  return (
    <div className="cfp-container">
      <div className="cfp-header">
        <h1>{title}</h1>
        <p>{description}</p>
        <p className="cfp-record"><strong>IEEE Conference Record Number: {recordNumber}</strong></p>
        <button className="cfp-btn">Download Brochure</button>
      </div>

      <div className="cfp-split-section">
        <div className="cfp-column">
          <h2>{publication.title}</h2>
          <p>{publication.description}</p>
          <ul className="cfp-check-list">
            {publication.features.map((feature, index) => (
              <li key={index}>
                <IconMapper iconName="IoIosRibbon" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="cfp-column">
          <h2>{submission.title}</h2>
          <ul className="cfp-check-list">
            {submission.guidelines.map((guideline, index) => (
              <li key={index}>
                <IconMapper iconName="BsCheck2Circle" />
                <div>
                  <strong>{guideline.title}</strong>
                  <p>{guideline.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="cfp-section">
        <h2>{tracks.title}</h2>
        <p>{tracks.description}</p>
        <div className="cfp-tracks">
          {tracks.list.map((track, index) => (
            <div key={index} className="cfp-track-item">
              <div className="cfp-track-header">
                <IconMapper iconName={track.icon} />
                <h3>{track.title}</h3>
              </div>
              <p>{track.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cfp-footer">
        <h2>{footer.title}</h2>
        <p>{footer.description}</p>
        <div className="cfp-actions">
          <button className="cfp-btn primary">Submit Paper</button>
          <button className="cfp-btn secondary">Download Template</button>
        </div>
      </div>
    </div>
  )
}

export default CallForPaper