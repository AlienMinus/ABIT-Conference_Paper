import React from 'react'
import './KeynoteSpeakers.css'
import keynoteTalks from '../../../data/keynoteTalks.json'

const KeynoteSpeakers = () => {
  const speakers = keynoteTalks.speakers

  return (
    <section className="keynote-speakers-section">
      <div className="container">
        <h2 className="section-title">Keynote Speakers</h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">{keynoteTalks.header.description}</p>

        <div className="keynote-speakers-scroll-container">
          <div className="keynote-speakers-track">
            {speakers.map((speaker, index) => (
              <article className="keynote-speaker-card" key={`${speaker.name}-${index}`}>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="keynote-speaker-image"
                />
                <h3 className="keynote-speaker-name">{speaker.name}</h3>
                {speaker.designation && (
                  <p className="keynote-speaker-designation">{speaker.designation}</p>
                )}
                <p className="keynote-speaker-affiliation">{speaker.affiliation}</p>
              </article>
            ))}
            {speakers.map((speaker, index) => (
              <article
                className="keynote-speaker-card keynote-speaker-card--duplicate"
                key={`duplicate-${speaker.name}-${index}`}
                aria-hidden="true"
              >
                <img
                  src={speaker.image}
                  alt=""
                  className="keynote-speaker-image"
                />
                <h3 className="keynote-speaker-name">{speaker.name}</h3>
                {speaker.designation && (
                  <p className="keynote-speaker-designation">{speaker.designation}</p>
                )}
                <p className="keynote-speaker-affiliation">{speaker.affiliation}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default KeynoteSpeakers
