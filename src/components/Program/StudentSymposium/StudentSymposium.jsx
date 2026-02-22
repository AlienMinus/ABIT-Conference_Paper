import React from 'react'
import './StudentSymposium.css'
import ssData from '../../../data/studentSymposium.json'
import IconMapper from '../../IconMapper/IconMapper'

const StudentSymposium = () => {
  const { header, about, tracks, guidelines, awards } = ssData

  return (
    <div className="ss-container">
      <div className="ss-header">
        <h1>{header.title}</h1>
        <p>{header.description}</p>
      </div>

      <div className="ss-section">
        <h2>{about.title}</h2>
        <p>{about.description}</p>
      </div>

      <div className="ss-section">
        <h2>{tracks.title}</h2>
        <div className="ss-grid">
          {tracks.list.map((track, index) => (
            <div key={index} className="ss-card">
              <IconMapper iconName={track.icon} />
              <h3>{track.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="ss-section">
        <h2>{guidelines.title}</h2>
        <ul className="ss-list">
          {guidelines.list.map((item, index) => (
            <li key={index}>
              <IconMapper iconName="BsCheck2Circle" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="ss-section">
        <h2>{awards.title}</h2>
        <ul className="ss-list">
          {awards.list.map((item, index) => (
            <li key={index}>
              <IconMapper iconName="IoIosRibbon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default StudentSymposium