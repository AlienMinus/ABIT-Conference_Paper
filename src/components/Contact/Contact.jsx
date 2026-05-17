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
              {card.phone && card.phone.split(',').map((phone, i) => (
                <p key={`phone-${i}`} className="contact-phone">{phone.trim()}</p>
              ))}
              {card.email && card.email.split(',').map((email, i) => (
                <a key={`email-${i}`} href={`mailto:${email.trim()}`} className="contact-email">{email.trim()}</a>
              ))}
              {card.website && <a href={card.website} target="_blank" rel="noopener noreferrer" className="contact-website">{card.website}</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact