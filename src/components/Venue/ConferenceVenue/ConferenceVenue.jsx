import React from 'react'
import './ConferenceVenue.css'
import cvData from '../../../data/conferenceVenue.json'
import IconMapper from '../../IconMapper/IconMapper'

const ConferenceVenue = () => {
  const { header, content } = cvData

  return (
    <div className="cv-container">
      <div className="cv-header">
        <h1>{header.title}</h1>
        <p>{header.description}</p>
      </div>

      <div className="cv-split-layout">
        <div className="cv-details">
          <div className="cv-info-card">
            <div className="cv-info-header">
              <IconMapper iconName={content.address.icon} />
              <h3>{content.address.title}</h3>
            </div>
            <div className="cv-address-lines">
              {content.address.details.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>

          {content.transport.map((item, index) => (
            <div key={index} className="cv-info-card">
              <div className="cv-info-header">
                <IconMapper iconName={item.icon} />
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="cv-map-wrapper">
          <div className="cv-map-container">
            <iframe src={content.mapEmbed} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Conference Venue Map"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConferenceVenue