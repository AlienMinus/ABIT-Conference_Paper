import React from 'react'

const ParticipantCard = ({ participant }) => {
  return (
    <div className="participant-card">
      <img src={participant.image} alt={participant.name} className="participant-image" />
      <h3 className="participant-name">{participant.name}</h3>
      <p className="participant-title">{participant.title}</p>
      <p className="participant-testimonial">"{participant.testimonial}"</p>
    </div>
  )
}

export default ParticipantCard