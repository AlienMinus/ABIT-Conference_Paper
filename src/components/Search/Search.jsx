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

  const getTitle = (item) => item?.title || item?.header?.title || ''
  const getDescription = (item) =>
    item?.description || item?.header?.description || item?.paragraphs?.[0] || ''
  const getTracks = (item) => item?.tracks?.list || []

  // Build search index
  const searchIndex = useMemo(() => {
    const items = [
      { title: 'Home', description: 'Conference Home Page', link: '/' },
      { title: getTitle(aboutData), description: getDescription(aboutData), link: '/#about' },
      { title: getTitle(cfpData), description: getDescription(cfpData), link: '/for-authors/call-for-papers' },
      { title: getTitle(psData), description: getDescription(psData), link: '/for-authors/paper-submission' },
      { title: getTitle(regData), description: getDescription(regData), link: '/for-authors/registration' },
      { title: getTitle(crData), description: getDescription(crData), link: '/for-authors/camera-ready' },
      { title: getTitle(pgData), description: getDescription(pgData), link: '/for-authors/presentation-guidelines' },
      { title: getTitle(bpaData), description: getDescription(bpaData), link: '/for-authors/best-paper-award' },
      { title: getTitle(ktData), description: getDescription(ktData), link: '/program/keynote' },
      { title: getTitle(pschData), description: getDescription(pschData), link: '/program/schedule' },
      { title: getTitle(ssData), description: getDescription(ssData), link: '/program/student-symposium' },
      { title: getTitle(cpData), description: getDescription(cpData), link: '/program/conference-proceeding' },
      { title: getTitle(cvData), description: getDescription(cvData), link: '/venue/conference-venue' },
      { title: getTitle(accData), description: getDescription(accData), link: '/venue/accommodations' },
      { title: getTitle(sightData), description: getDescription(sightData), link: '/venue/sightseeing' },
      { title: getTitle(galleryData), description: getDescription(galleryData), link: '/gallery' },
      { title: getTitle(pcData), description: getDescription(pcData), link: '/past-conferences' },
      { title: getTitle(contactData), description: getDescription(contactData), link: '/contact' },
      { title: getTitle(sponsorData), description: getDescription(sponsorData), link: '/sponsorship' },

      ...getTracks(cfpData).map((t) => ({
        title: t?.title || '',
        description: t?.description || '',
        link: '/for-authors/call-for-papers'
      })),

      ...getTracks(ssData).map((t) => ({
        title: t?.title || '',
        description: 'Student Symposium Track',
        link: '/program/student-symposium'
      }))
    ]

    return items.filter((item) => item.title || item.description)
  }, [])

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
                <p>{result.description ? `${result.description.substring(0, 100)}...` : ''}</p>
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
