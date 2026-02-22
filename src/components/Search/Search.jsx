import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import './Search.css'
import IconMapper from '../IconMapper/IconMapper'

// Import data files
import aboutData from '../../data/about.json'
import cfpData from '../../data/callForPaper.json'
import psData from '../../data/paperSubmission.json'
import regData from '../../data/registration.json'
import crData from '../../data/cameraReady.json'
import pgData from '../../data/presentationGuidelines.json'
import bpaData from '../../data/bestPaperAward.json'
import ktData from '../../data/keynoteTalks.json'
import pschData from '../../data/programSchedule.json'
import ssData from '../../data/studentSymposium.json'
import cpData from '../../data/conferenceProceeding.json'
import cvData from '../../data/conferenceVenue.json'
import accData from '../../data/accommodations.json'
import sightData from '../../data/sightseeing.json'
import galleryData from '../../data/gallery.json'
import pcData from '../../data/pastConferences.json'
import contactData from '../../data/contact.json'
import sponsorData from '../../data/sponsorship.json'

const Search = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const navigate = useNavigate()

  // Build search index
  const searchIndex = useMemo(() => [
    { title: 'Home', description: 'Conference Home Page', link: '/' },
    { title: aboutData.title, description: aboutData.paragraphs[0], link: '/#about' },
    { title: cfpData.title, description: cfpData.description, link: '/for-authors/call-for-papers' },
    { title: psData.header.title, description: psData.header.description, link: '/for-authors/paper-submission' },
    { title: regData.title, description: regData.description, link: '/for-authors/registration' },
    { title: crData.header.title, description: crData.header.description, link: '/for-authors/camera-ready' },
    { title: pgData.header.title, description: pgData.header.description, link: '/for-authors/presentation-guidelines' },
    { title: bpaData.header.title, description: bpaData.header.description, link: '/for-authors/best-paper-award' },
    { title: ktData.header.title, description: ktData.header.description, link: '/program/keynote' },
    { title: pschData.header.title, description: pschData.header.description, link: '/program/schedule' },
    { title: ssData.header.title, description: ssData.header.description, link: '/program/student-symposium' },
    { title: cpData.header.title, description: cpData.header.description, link: '/program/conference-proceeding' },
    { title: cvData.header.title, description: cvData.header.description, link: '/venue/conference-venue' },
    { title: accData.header.title, description: accData.header.description, link: '/venue/accommodations' },
    { title: sightData.header.title, description: sightData.header.description, link: '/venue/sightseeing' },
    { title: galleryData.header.title, description: galleryData.header.description, link: '/gallery' },
    { title: pcData.header.title, description: pcData.header.description, link: '/past-conferences' },
    { title: contactData.title, description: contactData.description, link: '/contact' },
    { title: sponsorData.header.title, description: sponsorData.header.description, link: '/sponsorship' },
    ...cfpData.tracks.list.map(t => ({ title: t.title, description: t.description, link: '/for-authors/call-for-papers' })),
    ...ssData.tracks.list.map(t => ({ title: t.title, description: 'Student Symposium Track', link: '/program/student-symposium' }))
  ], [])

  useEffect(() => {
    if (query.trim() === '') {
      setResults([])
      return
    }

    const lowerQuery = query.toLowerCase()
    const filtered = searchIndex.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) || 
      item.description.toLowerCase().includes(lowerQuery)
    )
    setResults(filtered)
  }, [query, searchIndex])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [isOpen])

  const handleNavigate = (link) => {
    if (link.startsWith('/#')) {
        const elementId = link.substring(2);
        navigate('/');
        setTimeout(() => {
            const element = document.getElementById(elementId);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        navigate(link)
    }
    onClose()
    setQuery('')
  }

  if (!isOpen) return null

  return (
    <div className={`search-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="search-container" onClick={e => e.stopPropagation()}>
        <div className="search-bar-row">
          <div className="search-input-wrapper">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search..." 
              value={query}
              onChange={e => setQuery(e.target.value)}
              autoFocus
            />
            <div className="search-icon">
              <IconMapper iconName="FaSearch" />
            </div>
          </div>
          <button className="search-close" onClick={onClose}>
            <IconMapper iconName="FaTimes" />
          </button>
        </div>

        <div className="search-results">
          {results.length > 0 ? (
            results.map((result, index) => (
              <div key={index} className="search-result-item" onClick={() => handleNavigate(result.link)}>
                <h3>{result.title}</h3>
                <p>{result.description.substring(0, 100)}...</p>
              </div>
            ))
          ) : (
            query && <p className="no-results">No results found for "{query}"</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Search
