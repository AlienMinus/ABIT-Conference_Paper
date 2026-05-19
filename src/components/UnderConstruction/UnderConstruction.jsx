// UnderConstruction.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import IconMapper from '../IconMapper/IconMapper'
import './UnderConstruction.css'

const UnderConstruction = () => {
  return (
    <div className="under-construction-container">
      <div className="under-construction-content">
        <div className="construction-icon"><IconMapper iconName="LuConstruction" /></div>

        <h1 className="under-construction-title">
          Under Construction
        </h1>

        <h2 className="under-construction-subtitle">
          We're Building Something Amazing
        </h2>

        <p className="under-construction-text">
          This page is currently under development. Our team is working hard
          to bring you new features and an improved experience.
        </p>

        <div className="under-construction-actions">
          <Link to="/" className="under-construction-btn primary">
            Back to Home
          </Link>

          <button
            className="under-construction-btn secondary"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default UnderConstruction