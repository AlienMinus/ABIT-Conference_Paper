import React from 'react'
import './Sightseeing.css'
import ssData from '../../../data/sightseeing.json'
import IconMapper from '../../IconMapper/IconMapper'

const Sightseeing = () => {
  const { header, intro, bhubaneswar, odisha } = ssData

  const renderPlaces = (places) => (
    <div className="ss-grid">
      {places.map((place, index) => (
        <div key={index} className="ss-card">
          <div className="ss-image-wrapper">
            <img src={place.image} alt={place.name} />
            <h3 className="ss-place-name">{place.name}</h3>
          </div>
          <div className="ss-card-content">
            <p className="ss-address">
              <IconMapper iconName="FaMapMarkerAlt" />
              {place.address}
            </p>
            <p className="ss-distance">
              <IconMapper iconName="FaRoute" />
              Distance from Venue: {place.distance}
            </p>
            <p>{place.description}</p>
            <a href={place.link} target="_blank" rel="noopener noreferrer" className="ss-btn">Read More</a>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="ss-container">
      <div className="ss-header">
        <h1>{header.title}</h1>
        <p>{header.description}</p>
      </div>

      <div className="ss-intro">
        <h2>{intro.title}</h2>
        <p>{intro.description}</p>
      </div>

      <div className="ss-section">
        <h2>{bhubaneswar.title}</h2>
        {renderPlaces(bhubaneswar.places)}
      </div>

      <div className="ss-section">
        <h2>{odisha.title}</h2>
        {renderPlaces(odisha.places)}
      </div>
    </div>
  )
}

export default Sightseeing