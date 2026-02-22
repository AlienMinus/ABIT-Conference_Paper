import React from 'react'
import './Participants.css'
import participants from '../../../data/participants.json'
import ParticipantCard from './ParticipantCard'

const Participants = () => {
  return (
    <section className="participants-section">
      <div className="container">
        <h2 className="section-title">What Our Participants Say</h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">Feedback from previous & expected participants</p>
        
        <div className="participants-scroll-container">
          <div className="participants-track">
            {participants.map((participant, index) => (
              <ParticipantCard key={index} participant={participant} />
            ))}
            {/* Duplicate for continuous scrolling */}
            {participants.map((participant, index) => (
              <ParticipantCard key={`dup-${index}`} participant={participant} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Participants