import React from 'react'
import './PaperSubmission.css'
import psData from '../../../data/paperSubmission.json'
import IconMapper from '../../IconMapper/IconMapper'

const PaperSubmission = () => {
  const { header, submission, guidelines, note, footer } = psData

  return (
    <div className="ps-container">
      <div className="ps-header">
        <h1>{header.title}</h1>
        <p>{header.description}</p>
        <a href={header.templateLink} download="GBM.pdf" className="ps-btn">{header.buttonText}</a>
      </div>

      <div className="ps-split-section">
        <div className="ps-column">
          <h2>{submission.title}</h2>
          <p>{submission.description}</p>
          
          <h3 className="ps-subtitle">{submission.stepsTitle}</h3>
          <ul className="ps-steps">
            {submission.steps.map((step, index) => (
              <li key={index} className="ps-step-item">
                <div className="ps-step-number">{index + 1}</div>
                <div className="ps-step-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="ps-column">
          <h2>{guidelines.title}</h2>
          <ul className="ps-check-list">
            {guidelines.list.map((item, index) => (
              <li key={index}>
                <IconMapper iconName="BsCheck2Circle" />
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ps-note">
        <p>{note}</p>
      </div>

      <div className="ps-footer">
        <h2>{footer.title}</h2>
        <p>{footer.description}</p>
        <div className="ps-actions">
          <a href={footer.buttonLink} target="_blank" rel="noopener noreferrer" className="ps-btn">{footer.buttonText}</a>
        </div>
      </div>
    </div>
  )
}

export default PaperSubmission