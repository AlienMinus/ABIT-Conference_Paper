import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import './HeaderMobile.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          <div className="logo-mark">IC</div>
          <div className="logo-text">IC-SIT</div>
        </Link>
        
        <button 
          className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`site-nav ${isMenuOpen ? 'active' : ''}`} aria-label="Main navigation">
          <ul className="nav-list" onClick={(e) => { if (e.target.tagName === 'A') setIsMenuOpen(false) }}>
            <li><Link to="/">Home</Link></li>
            <li className="has-dropdown">
              <Link to="/committee/program">Committee</Link>
              <ul className="dropdown">
                <li><Link to="/committee/program">Program Committee</Link></li>
                <li><Link to="/committee/advisory">Advisory Committee</Link></li>
                <li><Link to="/committee/technical">Technical Committee</Link></li>
              </ul>
            </li>

            <li className="has-dropdown">
              <a href="#authors">For Authors</a>
              <ul className="dropdown">
                <li><a href="#important-dates">Important Dates</a></li>
                <li><a href="#call-for-papers">Call for Papers</a></li>
                <li><a href="#paper-submission">Paper Submission</a></li>
                <li><a href="#registration">Registration</a></li>
                <li><a href="#camera-ready">Camera Ready Submission</a></li>
                <li><a href="#presentation-guidelines">Presentation & Video Guidelines</a></li>
                <li><a href="#best-paper">Best Paper Award</a></li>
              </ul>
            </li>

            <li className="has-dropdown">
              <a href="#program">Program</a>
              <ul className="dropdown">
                <li><a href="#keynote">Keynote / Plenary Talks</a></li>
                <li><a href="#schedule">Program Schedule</a></li>
                <li><a href="#student-symposium">IEEE Student Symposium</a></li>
                <li><a href="#proceeding">Conference Proceeding</a></li>
              </ul>
            </li>

            <li className="has-dropdown">
              <a href="#venue">Venue</a>
              <ul className="dropdown">
                <li><a href="#conference-venue">Conference Venue</a></li>
                <li><a href="#accommodations">Accommodations</a></li>
                <li><a href="#sightseeing">Sightseeing</a></li>
              </ul>
            </li>

            <li><a href="#sponsorship">Sponsorship</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#past">Past Conferences</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header