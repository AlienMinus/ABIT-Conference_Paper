import React from 'react'
import headlineData from '../../../data/headline.json'
import './Headline.css'

const Headline = () => {
  const renderSequence = (isDuplicate = false) => (
    <div
      className="headline-sequence"
      aria-hidden={isDuplicate || undefined}
      inert={isDuplicate || undefined}
    >
      {headlineData.messages.map((message) => (
        <div className="headline-message" key={message.text}>
          <span className="headline-new">NEW</span>
          <span>{message.text}</span>
          {message.href && (
            <a
              className="headline-link"
              href={message.href}
              target={message.href.startsWith('/assets/') ? '_blank' : undefined}
              rel={message.href.startsWith('/assets/') ? 'noreferrer' : undefined}
            >
              Click Here
            </a>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <section className="headline-banner" aria-label="Conference announcements">
      <div className="headline-track">
        {renderSequence()}
        {renderSequence(true)}
      </div>
    </section>
  )
}

export default Headline
