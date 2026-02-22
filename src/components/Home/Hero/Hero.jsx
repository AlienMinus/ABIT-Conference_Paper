import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'
import CountdownTimer from './CountdownTimer'
import heroData from '../../../data/hero.json'
import IconMapper from '../../IconMapper/IconMapper'
import StarryBackground from './StarryBackground'

const Hero = () => {
  const { badge, title, recordNumber, location, date, countdownTarget, buttons } = heroData
  const [isWormhole, setIsWormhole] = useState(false)
  const navigate = useNavigate()

  const handleButtonClick = (label) => {
    if (label.includes('Call for Papers')) {
      navigate('/for-authors/call-for-papers')
    }
    else if (label.includes('Paper Submission')) {
      navigate('/for-authors/paper-submission')
    }
  }

  return (
    <section className="hero-section">
      <StarryBackground isWormhole={isWormhole} />
      <div className="hero-content">
        <div className="conference-badge">
          <span>{badge}</span>
        </div>
        <h1 className="hero-title">
          {title}
        </h1>
        <div className="hero-subtitle">
          <div className="hero-record-number">
            IEEE Conference Record Number: <span className="record-link">{recordNumber}</span>
          </div>
          <div className="hero-meta-details">
            <span className="location-icon"><IconMapper iconName="FaMapMarkerAlt" /> {location}</span>
            <span className="date-separator">|</span>
            <span className="calendar-icon"><IconMapper iconName="FaCalendarAlt" /> {date}</span>
          </div>
        </div>
        
        {/* Countdown */}
        <CountdownTimer targetDate={countdownTarget} />

        <div className="hero-buttons">
          {buttons.map((btn, index) => (
            <button 
              key={index} 
              className={`btn btn-${btn.variant}`}
              onClick={() => handleButtonClick(btn.label)}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero