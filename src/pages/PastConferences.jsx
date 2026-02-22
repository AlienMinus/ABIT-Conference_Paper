import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PastConferencesComponent from '../components/PastConferences/PastConferences'

const PastConferences = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="past-conferences-page">
      <div className="container" style={{ marginTop: '100px' }}>
        <PastConferencesComponent />
      </div>
    </div>
  )
}

export default PastConferences