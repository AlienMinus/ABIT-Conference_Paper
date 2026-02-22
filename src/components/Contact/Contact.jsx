import React from 'react'
import './Contact.css'
import contactData from '../../data/contact.json'

const Contact = () => {
  const { title, description, cards } = contactData

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="section-underline"></div>
        <p className="contact-description">
          {description}
        </p>
        
        <div className="contact-grid">
          {cards.map((card, index) => (
            <div key={index} className="contact-card">
              <h3>{card.title}</h3>
              {card.text && <p>{card.text}</p>}
              {card.name && <p className="contact-name">{card.name}</p>}
              {card.phone && <p>{card.phone}</p>}
              {card.email && <a href={`mailto:${card.email}`} className="contact-email">{card.email}</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact