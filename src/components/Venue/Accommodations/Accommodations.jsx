import React from 'react'
import './Accommodations.css'
import accData from '../../../data/accommodations.json'

const Accommodations = () => {
  const { header, guestHouse } = accData

  return (
    <div className="acc-container">
      <div className="acc-header">
        <h1>{header.title}</h1>
        <p>{header.description}</p>
      </div>

      <div className="acc-section">
        <h2>{guestHouse.title}</h2>
        <p className="acc-note">{guestHouse.note}</p>
        <div className="acc-grid">
          {guestHouse.rooms.map((room, index) => (
            <div key={index} className="acc-card">
              <img src={room.image} alt={room.type} />
              <div className="acc-card-content">
                <h3>{room.type}</h3>
                <div className="acc-price">{room.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accommodations