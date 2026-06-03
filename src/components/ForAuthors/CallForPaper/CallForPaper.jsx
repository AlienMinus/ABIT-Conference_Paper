import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CallForPaper.css'
import cfpData from '../../../data/callForPaper.json'
import IconMapper from '../../IconMapper/IconMapper'

const CallForPaper = () => {
  const { title, description, recordNumber, brochureLink, publication, submission, tracks, footer } = cfpData
  const navigate = useNavigate()

  return (
    <div className="cfp-container">
      <div className="cfp-header">
        <h1>{title}</h1>
        <p>{description}</p>
        {/* <p className="cfp-record"><strong>IEEE Conference Record Number: {recordNumber}</strong></p> */}
        <a href={brochureLink} download="Brochure.pdf" className="cfp-btn">Download Brochure</a>
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
              <ul className="cfp-track-topics">
                {track.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="cfp-footer">
        <h2>{footer.title}</h2>
        <p>{footer.description}</p>
        <div className="cfp-actions">
          <button className="cfp-btn primary" onClick={() => navigate('/for-authors/paper-submission')}>Submit Paper</button>
          <a href={footer.templateLink} download="GBM.pdf" className="cfp-btn secondary">Download Template</a>
        </div>
      </div> */}
    </div>
  )
}

export default CallForPaper