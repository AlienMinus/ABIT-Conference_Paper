import { useNavigate } from 'react-router-dom'
import './Hero.css'
import CountdownTimer from './CountdownTimer'
import heroData from '../../../data/hero.json'
import IconMapper from '../../IconMapper/IconMapper'
import HeroCarousel from './HeroCarousel'

const Hero = () => {
  const { badge, title, recordNumber, location, date, countdownTarget, buttons } = heroData
  const navigate = useNavigate()

  const handleButtonClick = (label) => {
    if (label.includes('Call for Papers')) {
      navigate('/for-authors/call-for-papers')
    }
    else if (label.includes('Paper Submission')) {
      navigate('/for-authors/paper-submission')
    }
    else{
      {/*Handle Brochure Download*/}
      window.open('assets/res/Brochure.pdf', '_blank')
    }
  }

  return (
    <section className="hero-section">
      <HeroCarousel />
      <div className="hero-content">
        <div className="hero-logos">
          <div className="hero-logo-item hero-logo-left">
            <img src="/favicon.png" alt="ABIT Logo" className="hero-logo-img" />
          </div>
          <div className="hero-logo-item hero-logo-center">
            <img src="/appicon.jpeg" alt="SAGAR2027 Logo" className="hero-logo-img" />
          </div>
          <div className="hero-logo-item hero-logo-right">
            <img src="/bentham.png" alt="Bentham Science Logo" className="hero-logo-img" />
          </div>
        </div>
        <div className="conference-badge">
          <span>{badge}</span>
        </div>
        <h1 className="hero-title">
          {title} <br/> (SAGAR2027)
        </h1>
        <div className="hero-subtitle">
          {/* <div className="hero-record-number">
            IEEE Conference Record Number: <span className="record-link">{recordNumber}</span>
          </div> */}
          <div className="hero-meta-details" style={{ flexDirection: 'column', alignItems: 'center', fontSize: '1.5rem', gap: '0.8rem' }}>
            <span className="location-icon">
              <IconMapper iconName="FaMapMarkerAlt" />
              <span className="meta-text">{location}</span>
            </span>
            <span className="calendar-icon">
              <IconMapper iconName="FaCalendarAlt" />
              <span className="meta-text" dangerouslySetInnerHTML={{ __html: date }}></span>
            </span>
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