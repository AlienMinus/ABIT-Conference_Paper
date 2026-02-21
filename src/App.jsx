import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [days, setDays] = useState(199)
  const [hours, setHours] = useState(12)
  const [minutes, setMinutes] = useState(8)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev === 0) {
          setMinutes(prev => {
            if (prev === 0) {
              setHours(prev => {
                if (prev === 0) {
                  setDays(prev => prev > 0 ? prev - 1 : 0)
                  return 23
                }
                return prev - 1
              })
              return 59
            }
            return prev - 1
          })
          return 59
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const participants = [
    {
      name: "Dr. Suryakanta Senapati",
      title: "Professor of AI & ML",
      testimonial: "This was a fantastic high-quality professional and intellectual engagement platform. The conference offered excellent opportunities for networking and knowledge sharing.",
      image: "👨‍🏫"
    },
    {
      name: "Dr. Manas Das",
      title: "Research Scholar",
      testimonial: "Exceptional conference with diverse topics covering the latest innovations in intelligent computing. The sessions were inspiring and well-organized.",
      image: "👩‍🎓"
    },
    {
      name: "Prof. Ashok Kumar Dash",
      title: "Department Head",
      testimonial: "Outstanding organization and quality of presentations. The conference successfully brought together leading experts and emerging talents in the field.",
      image: "👨‍💼"
    },
    {
      name: "Dr. Kamal Das",
      title: "Tech Lead",
      testimonial: "An incredible platform for showcasing cutting-edge research. The networking opportunities and technical insights were invaluable for my work.",
      image: "👩‍💻"
    },
    {
      name: "Prof. Soumya Patnayak",
      title: "Innovation Lead",
      testimonial: "The conference demonstrated a perfect blend of academic rigor and industry relevance. Highly recommended for anyone interested in technology.",
      image: "👨‍🔬"
    }
  ]

  return (
    <div className="app-container">
      {/* Site Header / Navigation */}
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">
            <div className="logo-mark">IC</div>
            <div className="logo-text">IC-SIT</div>
          </div>

          <nav className="site-nav" aria-label="Main navigation">
            <ul className="nav-list">
              <li><a href="#home">Home</a></li>
              <li className="has-dropdown">
                <a href="#committee">Committee</a>
                <ul className="dropdown">
                  <li><a href="#program-committee">Program Committee</a></li>
                  <li><a href="#advisory-committee">Advisory Committee</a></li>
                  <li><a href="#technical-committee">Technical Committee</a></li>
                </ul>
              </li>

              <li className="has-dropdown">
                <a href="#authors">For Authors</a>
                <ul className="dropdown">
                  <li><a href="#important-dates">Important Dates</a></li>
                  <li><a href="#call-for-papers">Call for Papers</a></li>
                  <li><a href="#paper-submission">Paper Submission</a></li>
                  <li><a href="#registration">Registration</a></li>
                  <li><a href="#camera-ready">Camera Ready Submission</a></li>
                  <li><a href="#presentation-guidelines">Presentation & Video Guidelines</a></li>
                  <li><a href="#best-paper">Best Paper Award</a></li>
                </ul>
              </li>

              <li className="has-dropdown">
                <a href="#program">Program</a>
                <ul className="dropdown">
                  <li><a href="#keynote">Keynote / Plenary Talks</a></li>
                  <li><a href="#schedule">Program Schedule</a></li>
                  <li><a href="#student-symposium">IEEE Student Symposium</a></li>
                  <li><a href="#proceeding">Conference Proceeding</a></li>
                </ul>
              </li>

              <li className="has-dropdown">
                <a href="#venue">Venue</a>
                <ul className="dropdown">
                  <li><a href="#conference-venue">Conference Venue</a></li>
                  <li><a href="#accommodations">Accommodations</a></li>
                  <li><a href="#sightseeing">Sightseeing</a></li>
                </ul>
              </li>

              <li><a href="#sponsorship">Sponsorship</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#past">Past Conferences</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="conference-badge">
            <span>2nd International Conference on</span>
          </div>
          <h1 className="hero-title">
            Intelligent Computing and Sustainable Innovation in Technology (IC-SIT) 2026
          </h1>
          <p className="hero-subtitle">
            <span className="location-icon">📍</span> Silicon University, Odisha
            <span className="date-separator">|</span>
            <span className="calendar-icon">📅</span> September 08-10, 2026
          </p>
          
          {/* Countdown */}
          <div className="countdown">
            <div className="countdown-item">
              <span className="countdown-number">{String(days).padStart(3, '0')}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{String(hours).padStart(2, '0')}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{String(minutes).padStart(2, '0')}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{String(seconds).padStart(2, '0')}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary">Call for Papers →</button>
            <button className="btn btn-secondary">Paper Submission →</button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <h2 className="section-title">Welcome To IC-SIT 2026</h2>
          <div className="section-underline"></div>
          
          <div className="welcome-content">
            <p>
              We are delighted to invite you to the 2<sup>nd</sup> International Conference on Intelligent Computing and Sustainable Innovation in Technology (IC-SIT), scheduled to take place from September 8<sup>th</sup> to 10<sup>th</sup>, 2026. Hosted by Silicon University in Odisha, India, this conference promises to be a pivotal event for professionals and enthusiasts in the fields of technology, engineering, and innovation.
            </p>
            
            <p>
              IC-SIT provides a dynamic platform for researchers, academics, industry professionals, and policymakers to exchange ideas, present their latest research findings, and explore innovative solutions in the realms of intelligent computing and sustainable technology. This interdisciplinary conference aims to foster collaboration and knowledge sharing across a range of specialized tracks.
            </p>
            
            <p>
              IC-SIT 2026 is organized in <span className="highlight">hybrid mode</span>, bolstering the global presence of the event. Delegates will be able to decide whether to attend physically or virtually. We look forward to meeting you at Silicon University, Odisha or virtually. This will further ensure the presence of internationally acclaimed keynote speakers for the session talks.
            </p>
            
            <p>
              All accepted and presented papers will be submitted for inclusion in the <span className="ieee-link">IEEE Xplore digital library</span> subject to meeting IEEE Xplore's standards for scope and/or quality requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="important-dates-section">
        <div className="container">
          <h2 className="section-title">Important Dates</h2>
          <div className="section-underline"></div>
          
          <div className="dates-grid">
            <div className="date-card featured">
              <div className="date-icon">📄</div>
              <h3>Paper Submission Deadline</h3>
              <p className="date-value">Apr 30, 2026</p>
            </div>
            
            <div className="date-card">
              <div className="date-icon">✅</div>
              <h3>Notification of Acceptance</h3>
              <p className="date-value">Jul 1, 2026</p>
            </div>
            
            <div className="date-card featured">
              <div className="date-icon">👤</div>
              <h3>Author Registration</h3>
              <p className="date-value">Jul 8 - Aug 6, 2026</p>
            </div>
            
            <div className="date-card">
              <div className="date-icon">🐦</div>
              <h3>Early Bird Registration Closes</h3>
              <p className="date-value">Jul 15, 2026</p>
            </div>
            
            <div className="date-card featured">
              <div className="date-icon">📹</div>
              <h3>Camera Ready Submission</h3>
              <p className="date-value">Jul 8 - Aug 10, 2026</p>
            </div>
            
            <div className="date-card">
              <div className="date-icon">🎯</div>
              <h3>Date of Conference</h3>
              <p className="date-value">Sep 8-10, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Participants/Testimonials Section with Scrolling */}
      <section className="participants-section">
        <div className="container">
          <h2 className="section-title">What Our Participants Say</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">Feedback from previous & expected participants</p>
          
          <div className="participants-scroll-container">
            <div className="participants-track">
              {participants.map((participant, index) => (
                <div key={index} className="participant-card">
                  <div className="participant-image">{participant.image}</div>
                  <h3 className="participant-name">{participant.name}</h3>
                  <p className="participant-title">{participant.title}</p>
                  <p className="participant-testimonial">"{participant.testimonial}"</p>
                </div>
              ))}
              {/* Duplicate for continuous scrolling */}
              {participants.map((participant, index) => (
                <div key={`dup-${index}`} className="participant-card">
                  <div className="participant-image">{participant.image}</div>
                  <h3 className="participant-name">{participant.name}</h3>
                  <p className="participant-title">{participant.title}</p>
                  <p className="participant-testimonial">"{participant.testimonial}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer with College Name */}
      <footer className="footer-section">
        <div className="container">
          <p className="college-name">AJAY BINAY INSTITUTE OF TECHNOLOGY</p>
          <p className="footer-subtitle">Supporting Innovation in Education & Technology</p>
          <p className="footer-copyright">&copy; 2026 IC-SIT Conference. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
