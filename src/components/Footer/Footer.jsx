import React from 'react'
import './Footer.css'
import footerData from '../../data/footer.json'
import IconMapper from '../IconMapper/IconMapper'

const Footer = () => {
  const { address, contact, social, mapUrl, copyrightText } = footerData

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          {/* Column 1: Address */}
          <div className="footer-col">
            <h3>Address</h3>
            <p>{address}</p>
          </div>

          {/* Column 2: Contact & Social */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            
            <div className="social-connect">
              <p>Connect with us:</p>
              <div className="social-icons">
                {social.map((item, index) => (
                  <a key={index} href={item.url} aria-label={item.platform}>
                    <IconMapper iconName={item.platform} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Map */}
          <div className="footer-col map-col">
            <h3>Location Map</h3>
            <div className="map-container">
              <iframe 
                src={mapUrl}
                width="100%" 
                height="200" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy"
                title="ABIT Location Map"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} {copyrightText}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer