import React from 'react'
import './Welcome.css'
import welcomeData from '../../../data/welcome.json'

const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="container">
        <h2 className="section-title">{welcomeData.title}</h2>
        <div className="section-underline"></div>
        
        <div className="welcome-content">
          {welcomeData.paragraphs.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Welcome