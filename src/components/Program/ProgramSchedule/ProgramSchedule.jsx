import React from 'react'
import './ProgramSchedule.css'
import pschData from '../../../data/programSchedule.json'
import IconMapper from '../../IconMapper/IconMapper'
import UnderConstruction from '../../UnderConstruction/UnderConstruction'

const ProgramSchedule = () => {
  const { header, days } = pschData

  return (
    <section className="psch-container">
      <div className="psch-header">
        <span className="psch-badge">Conference Agenda</span>

        <h1>{header.title}</h1>

        <p>{header.description}</p>
      </div>

      <UnderConstruction />

      {/* <div className="psch-days">
        {days.map((day, index) => (
          <div key={index} className="psch-day">
            <div className="psch-day-header">
              <h2>{day.date}</h2>
            </div>

            <div className="psch-timeline">
              {day.events.map((event, idx) => (
                <div key={idx} className="psch-event">
                  <div className="psch-time-wrapper">
                    <div className="psch-dot"></div>
                    <div className="psch-line"></div>
                    <span className="psch-time">{event.time}</span>
                  </div>

                  <div className="psch-content">
                    <h3 className="psch-activity">{event.activity}</h3>

                    {event.venue && (
                      <p className="psch-venue">
                        <IconMapper iconName="FaMapMarkerAlt" className="venue-icon" /> {event.venue}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </section>
  )
}

export default ProgramSchedule