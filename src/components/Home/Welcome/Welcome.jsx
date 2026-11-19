import React from 'react'
import { useState } from 'react'
import './Welcome.css'
import welcomeData from '../../../data/welcome.json'

const Welcome = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="welcome-section">
      <div className="container">
        <h2 className="section-title">{welcomeData.title}</h2>
        <div className="section-underline"></div>
        
        <div className="welcome-content">
          {welcomeData.paragraphs.slice(0, 2).map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
          {welcomeData.paragraphs.length > 2 && (
            <>
              {!isExpanded && (
                <button
                  type="button"
                  className="welcome-read-more"
                  aria-expanded={false}
                  aria-controls="welcome-more-content"
                  onClick={() => setIsExpanded(true)}
                >
                  Read more
                </button>
              )}
              <div
                id="welcome-more-content"
                className={`welcome-extra-paragraphs${isExpanded ? ' is-expanded' : ''}`}
              >
                {welcomeData.paragraphs.slice(2).map((paragraph, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
              {isExpanded && (
                <button
                  type="button"
                  className="welcome-read-more"
                  aria-expanded={true}
                  aria-controls="welcome-more-content"
                  onClick={() => setIsExpanded(false)}
                >
                  Read less
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Welcome