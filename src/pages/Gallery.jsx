import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import GalleryComponent from '../components/Gallery/Gallery'

const Gallery = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="gallery-page">
      <div className="container" style={{ marginTop: '100px' }}>
        <GalleryComponent />
      </div>
    </div>
  )
}

export default Gallery