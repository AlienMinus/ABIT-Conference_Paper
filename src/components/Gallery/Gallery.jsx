import React, { useState, useEffect } from 'react'
import './Gallery.css'
import galleryData from '../../data/gallery.json'

const Gallery = () => {
  const { header, images } = galleryData
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedImage])

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1>{header.title}</h1>
        <p>{header.description}</p>
      </div>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item" onClick={() => setSelectedImage(img)}>
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="gallery-caption">
              <p>{img.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>&times;</button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="lightbox-image" />
            <p className="lightbox-caption">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery