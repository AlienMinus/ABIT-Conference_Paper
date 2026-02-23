import React from 'react'
import './Sponsors.css'
import sponsorsData from '../../data/sponsorslogo.json'

const Sponsors = () => {
  return (
    <section id="sponsors" className="sponsorship-section">
      <div className="container">
        <h2 className="section-title">Sponsorship</h2>
        <div className="section-underline"></div>
        {sponsorsData.length > 0 ? (
          <div className="sponsors-grid">
            {sponsorsData.map((sponsor, index) => (
              <div key={index} className="sponsor-card">
                <a href={sponsor.website} target="_blank" rel="noopener noreferrer" title={sponsor.name}>
                  <img src="{sponsor.logo}" alt={sponsor.name} className="sponsor-logo" />
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="sponsorship-text">Sponsorship opportunities and packages will be announced soon.</p>
        )}
      </div>
    </section>
  )
}

export default Sponsors