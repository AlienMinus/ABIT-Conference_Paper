import React from 'react'
import './Gallery.css'
import galleryData from '../../data/gallery.json'

const Gallery = () => {
  const { header, images } = galleryData

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1>{header.title}</h1>
        <p>{header.description}</p>
      </div>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="gallery-caption">
              <p>{img.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery