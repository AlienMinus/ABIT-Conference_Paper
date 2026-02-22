import React from 'react'
import GalleryComponent from '../components/Gallery/Gallery'

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="container" style={{ marginTop: '100px' }}>
        <GalleryComponent />
      </div>
    </div>
  )
}

export default Gallery