import React from 'react'
import './SponsorshipDetails.css'
import sponsorshipData from '../../data/sponsorship.json'
import IconMapper from '../IconMapper/IconMapper'

const SponsorshipDetails = () => {
  const { header, highlights, whySponsor, packages, advertisement, contact } = sponsorshipData

  return (
    <div className="sponsorship-details-container">
      <div className="sponsorship-header">
        <h1>{header.title}</h1>
        <p>{header.description}</p>
        <button className="sponsorship-btn">{header.buttonText}</button>
      </div>

      <div className="sponsorship-split-section">
        <div className="sponsorship-column">
          <h2>{highlights.title}</h2>
          <ul className="sponsorship-list">
            {highlights.items.map((item, index) => (
              <li key={index}>
                <IconMapper iconName="BsCheck2Circle" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="sponsorship-column">
          <h2>{whySponsor.title}</h2>
          <ul className="sponsorship-list">
            {whySponsor.items.map((item, index) => (
              <li key={index}>
                <IconMapper iconName="BsCheck2Circle" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sponsorship-packages-grid">
        {packages.map((pkg, index) => (
          <div key={index} className="package-card">
            <h3>{pkg.name}</h3>
            <div className="package-price">INR {pkg.price}</div>
            <ul className="package-features">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className={!feature.available ? 'unavailable' : ''}>
                  <IconMapper iconName={feature.available ? "BsCheck2Circle" : "FaTimesCircle"} />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="advertisement-section">
        <h2>{advertisement.title}</h2>
        {advertisement.description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
        <div className="advertisement-table-container">
          <table className="ad-table">
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Category</th>
                <th>Amount (in INR)</th>
                <th>Number</th>
              </tr>
            </thead>
            <tbody>
              {advertisement.rates.map((rate, index) => (
                <tr key={index}>
                  <td>{rate.sl}</td>
                  <td>{rate.category}</td>
                  <td>{rate.amount}</td>
                  <td>{rate.number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="sponsorship-contact">
        <p>{contact.text}</p>
        <span className="contact-highlight">{contact.name}</span>
        <p>{contact.phone}</p>
        <a href={`mailto:${contact.email}`} className="contact-link">{contact.email}</a>
      </div>
    </div>
  )
}

export default SponsorshipDetails