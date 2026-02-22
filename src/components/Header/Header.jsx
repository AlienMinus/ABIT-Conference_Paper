import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import './HeaderMobile.css'
import Search from '../Search/Search'
import IconMapper from '../IconMapper/IconMapper'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode')
    } else {
      document.body.classList.add('light-mode')
    }
  }, [isDarkMode])

  return (
    <header className="site-header">
      <div className="container header-inner">
        

        <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          <div className="logo-mark">IC</div>
          <div className="logo-text">IC-SIT</div>
        </Link>

        <div className="mobile-search-trigger" onClick={() => setIsSearchOpen(true)}>
          <IconMapper iconName="FaSearch" />
        </div>

        <div className="mobile-theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
          <IconMapper iconName={isDarkMode ? 'FaSun' : 'FaMoon'} />
        </div>
        
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
          <ul className="nav-list" onClick={(e) => { 
            if (e.target.tagName === 'A') {
              const parent = e.target.parentElement
              if (!parent.classList.contains('has-dropdown')) setIsMenuOpen(false)
            }
          }}>
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
                <li><a href="/#important-dates">Important Dates</a></li>
                <li><Link to="/for-authors/call-for-papers">Call for Papers</Link></li>
                <li><Link to="/for-authors/paper-submission">Paper Submission</Link></li>
                <li><Link to="/for-authors/registration">Registration</Link></li>
                <li><Link to="/for-authors/camera-ready">Camera Ready Submission</Link></li>
                <li><Link to="/for-authors/presentation-guidelines">Presentation & Video Guidelines</Link></li>
                <li><Link to="/for-authors/best-paper-award">Best Paper Award</Link></li>
              </ul>
            </li>

            <li className="has-dropdown">
              <a href="#program">Program</a>
              <ul className="dropdown">
                <li><Link to="/program/keynote">Keynote Talks</Link></li>
                <li><Link to="/program/schedule">Program Schedule</Link></li>
                <li><Link to="/program/student-symposium">IEEE Student Symposium</Link></li>
                <li><Link to="/program/conference-proceeding">Conference Proceeding</Link></li>
              </ul>
            </li>

            <li className="has-dropdown">
              <a href="#venue">Venue</a>
              <ul className="dropdown">
                <li><Link to="/venue/conference-venue">Conference Venue</Link></li>
                <li><Link to="/venue/accommodations">Accommodations</Link></li>
                <li><Link to="/venue/sightseeing">Sightseeing</Link></li>
              </ul>
            </li>

            <li><Link to="/sponsorship">Sponsorship</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/past-conferences">Past Conferences</Link></li>
            <li className="theme-trigger" onClick={() => setIsDarkMode(!isDarkMode)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <IconMapper iconName={isDarkMode ? 'FaSun' : 'FaMoon'} />
            </li>
            <li className="search-trigger" onClick={() => setIsSearchOpen(true)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <IconMapper iconName="FaSearch" />
            </li>
          </ul>
        </nav>

        <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </div>
    </header>
  )
}

export default Header