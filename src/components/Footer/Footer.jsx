import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import footerData from '../../data/footer.json'
import IconMapper from '../IconMapper/IconMapper'

const Footer = () => {
  const { about, links, contact, social, copyright, mapEmbed } = footerData

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <h3>{about.title}</h3>
            <p>{about.description}</p>
            <div className="footer-social">
              {social.map((item, index) => (
                <a key={index} href={item.url} className="social-icon" aria-label={item.icon}>
                  <IconMapper iconName={item.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>{contact.title}</h3>
            <div className="footer-contact-item">
              <IconMapper iconName="FaMapMarkerAlt" />
              <span>{contact.address}</span>
            </div>
            <div className="footer-contact-item">
              <IconMapper iconName="FaEnvelope" />
              <span>{contact.email}</span>
            </div>
            <div className="footer-contact-item">
              <IconMapper iconName="FaPhone" />
              <span>{contact.phone}</span>
            </div>
          </div>

          <div className="footer-col footer-map">
            <h3>Location</h3>
            <div className="map-container">
              <iframe src={mapEmbed} width="100%" height="200" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Footer Map"></iframe>
            </div>
          </div>
        </div>
        <div className="footer-bottom">{copyright}</div>
      </div>
    </footer>
  )
}

export default Footer