import React from 'react'
import './About.css'
import aboutData from '../../../data/about.json'

const About = () => {
  const { title, paragraphs, image } = aboutData

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">{title}</h2>
            <div className="section-underline"></div>
            {paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
          <div className="about-image">
            <img src={image} alt="Ajay Binay Institute of Technology Logo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About