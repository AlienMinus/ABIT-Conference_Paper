import React from 'react'
import headlineData from '../../../data/headline.json'
import './Headline.css'

const Headline = () => {
  const renderSequence = (isDuplicate = false) => (
    <div className="headline-sequence" aria-hidden={isDuplicate || undefined}>
      {headlineData.messages.map((message, index) => (
        <div className="headline-item" key={`${index}-${message}`}>
          <span className="headline-new">NEW</span>
          <span>{message}</span>
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
