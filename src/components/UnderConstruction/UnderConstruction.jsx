// UnderConstruction.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import IconMapper from '../IconMapper/IconMapper'
import underConstructionData from '../../data/underConstruction.json'
import './UnderConstruction.css'

const UnderConstruction = () => {
  const { title, subtitle, text, buttonPrimary, buttonSecondary } = underConstructionData

  return (
    <div className="under-construction-container">
      <div className="under-construction-content">
        <div className="construction-icon"><IconMapper iconName="LuConstruction" /></div>

        <h1 className="under-construction-title">
          {title}
        </h1>

        <h2 className="under-construction-subtitle">
          {subtitle}
        </h2>

        <p className="under-construction-text">
          {text}
        </p>

        <div className="under-construction-actions">
          <Link to="/" className="under-construction-btn primary">
            {buttonPrimary}
          </Link>

          <button
            className="under-construction-btn secondary"
            onClick={() => window.history.back()}
          >
            {buttonSecondary}
          </button>
        </div>
      </div>
    </div>
  )
}

export default UnderConstruction