import React from 'react'
import './Welcome.css'

const Welcome = () => {
  return (
    <section className="welcome-section">
      <div className="container">
        <h2 className="section-title">Welcome To IC-SIT 2026</h2>
        <div className="section-underline"></div>
        
        <div className="welcome-content">
          <p>
            We are delighted to invite you to the 2<sup>nd</sup> International Conference on Intelligent Computing and Sustainable Innovation in Technology (IC-SIT), scheduled to take place from September 8<sup>th</sup> to 10<sup>th</sup>, 2026. Hosted by Silicon University in Odisha, India, this conference promises to be a pivotal event for professionals and enthusiasts in the fields of technology, engineering, and innovation.
          </p>
          
          <p>
            IC-SIT provides a dynamic platform for researchers, academics, industry professionals, and policymakers to exchange ideas, present their latest research findings, and explore innovative solutions in the realms of intelligent computing and sustainable technology. This interdisciplinary conference aims to foster collaboration and knowledge sharing across a range of specialized tracks.
          </p>
          
          <p>
            IC-SIT 2026 is organized in <span className="highlight">hybrid mode</span>, bolstering the global presence of the event. Delegates will be able to decide whether to attend physically or virtually. We look forward to meeting you at Silicon University, Odisha or virtually. This will further ensure the presence of internationally acclaimed keynote speakers for the session talks.
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