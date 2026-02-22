import React from 'react'
import './ConferenceProceeding.css'
import cpData from '../../../data/conferenceProceeding.json'
import IconMapper from '../../IconMapper/IconMapper'

const ConferenceProceeding = () => {
  const { header, archive } = cpData

  return (
    <div className="cp-container">
      <div className="cp-header">
        <h1>{header.title}</h1>
        <p>{header.description}</p>
      </div>

      <div className="cp-section">
        <h2>{archive.title}</h2>
        <p>{archive.description}</p>
        <div className="cp-split-layout">
          <div className="cp-cover">
            <img src={archive.coverImage} alt="Proceedings Cover" />
          </div>
          <div className="cp-grid">
            {archive.items.map((item, index) => (
              <div key={index} className="cp-card">
                <IconMapper iconName={item.icon} />
                <div className="cp-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <a 
                  href={item.link} 
                  target={item.isExternal ? "_blank" : "_self"} 
                  rel={item.isExternal ? "noopener noreferrer" : ""}
                  download={item.isDownload ? true : undefined}
                  className="cp-btn"
                >
                  {item.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConferenceProceeding