import React from 'react'
import './Welcome.css'

const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="container">
        <h2 className="section-title">Welcome To IC-SAGAR 2026</h2>
        <div className="section-underline"></div>
        
        <div className="welcome-content">
          <p>
            We are delighted to invite you to the 1<sup>st</sup> Soft Computing Application in Smart Grid and Renewable Energy (SAGAR-26), scheduled to take place from November 06<sup>th</sup> to 07<sup>th</sup>, 2026. Hosted by Ajay Binay Institute of Technology in Odisha, India, this conference promises to be a pivotal event for professionals and enthusiasts in the fields of technology, engineering, and innovation.
          </p>
          
          <p>
            IC-SAGAR provides a dynamic platform for researchers, academics, industry professionals, and policymakers to exchange ideas, present their latest research findings, and explore innovative solutions in the realms of soft computing, smart grid technologies, and renewable energy. This interdisciplinary conference aims to foster collaboration and knowledge sharing across a range of specialized tracks.
          </p>
          
          <p>
            IC-SAGAR 2026 is organized in <span className="highlight">hybrid mode</span>, bolstering the global presence of the event. Delegates will be able to decide whether to attend physically or virtually. We look forward to meeting you at Ajay Binay Institute of Technology, Odisha or virtually. This will further ensure the presence of internationally acclaimed keynote speakers for the session talks.
          </p>
          
          <p>
            All accepted and presented papers will be submitted for inclusion in the <span className="ieee-link">IEEE Xplore digital library</span> subject to meeting IEEE Xplore's standards for scope and/or quality requirements.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Welcome