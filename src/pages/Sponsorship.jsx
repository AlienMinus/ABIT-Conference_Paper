import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SponsorshipDetails from '../components/Sponsorship/SponsorshipDetails'

const Sponsorship = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="sponsorship-page">
      <div className="container" style={{ marginTop: '100px' }}>
        <SponsorshipDetails />
      </div>
    </div>
  )
}

export default Sponsorship