import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ContactComponent from '../components/Contact/Contact'

const Contact = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="contact-page">
      <div className="container" style={{ marginTop: '100px' }}>
        <ContactComponent />
      </div>
    </div>
  )
}

export default Contact