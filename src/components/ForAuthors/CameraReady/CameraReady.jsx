import React from 'react'
import './CameraReady.css'
import crData from '../../../data/cameraReady.json'
import IconMapper from '../../IconMapper/IconMapper'

const CameraReady = () => {
  const { header, steps, checklist } = crData

  return (
    <div className="cr-container">
      <div className="cr-header">
        <h1>{header.title}</h1>
        <p>{header.description}</p>
        <a href={header.buttonLink} target="_blank" rel="noopener noreferrer" className="cr-btn">{header.buttonText}</a>
      </div>

      <div className="cr-split-section">
        <div className="cr-column">
          <h2>{steps.title}</h2>
          <ul className="cr-steps">
            {steps.list.map((step, index) => (
              <li key={index} className="cr-step-item">
                <div className="cr-step-number">{index + 1}</div>
                <div className="cr-step-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="cr-column">
          <h2>{checklist.title}</h2>
          <ul className="ps-check-list">
            {checklist.items.map((item, index) => (
              <li key={index}>
                <IconMapper iconName="BsCheck2Circle" />
                <div>
                  <p>{item}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CameraReady