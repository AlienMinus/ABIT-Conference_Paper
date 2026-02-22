import React from 'react'
import './ProgramSchedule.css'
import pschData from '../../../data/programSchedule.json'

const ProgramSchedule = () => {
  const { header, days } = pschData

  return (
    <div className="psch-container">
      <div className="psch-header">
        <h1>{header.title}</h1>
        <p>{header.description}</p>
      </div>

      <div className="psch-days">
        {days.map((day, index) => (
          <div key={index} className="psch-day">
            <h2>{day.date}</h2>
            <div className="psch-timeline">
              {day.events.map((event, idx) => (
                <div key={idx} className="psch-event">
                  <div className="psch-time">{event.time}</div>
                  <div className="psch-activity">{event.activity}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgramSchedule