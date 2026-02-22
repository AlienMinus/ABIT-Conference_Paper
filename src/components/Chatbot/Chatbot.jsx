import React, { useState, useRef, useEffect } from 'react'
import './Chatbot.css'
import IconMapper from '../IconMapper/IconMapper'

// Import data for training
import aboutData from '../../data/about.json'
import cfpData from '../../data/callForPaper.json'
import importantDates from '../../data/importantDates.json'
import registrationData from '../../data/registration.json'
import contactData from '../../data/contact.json'
import sponsorshipData from '../../data/sponsorship.json'
import keynoteData from '../../data/keynoteTalks.json'
import venueData from '../../data/conferenceVenue.json'
import accommodationsData from '../../data/accommodations.json'
import scheduleData from '../../data/programSchedule.json'
import awardsData from '../../data/bestPaperAward.json'
import studentData from '../../data/studentSymposium.json'
import sightseeingData from '../../data/sightseeing.json'
import proceedingsData from '../../data/conferenceProceeding.json'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm the IC-SIT 2026 Virtual Assistant. How can I help you today?", sender: 'bot' }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = { text: inputValue, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue)
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase()
    
    // Important Dates
    if (lowerInput.includes('date') || lowerInput.includes('deadline') || lowerInput.includes('when')) {
      const datesList = importantDates.map(d => `${d.title}: ${d.date}`).join('\n')
      return `Here are the important dates:\n${datesList}`
    } 
    // Venue
    else if (lowerInput.includes('venue') || lowerInput.includes('where') || lowerInput.includes('location') || lowerInput.includes('address')) {
      return `${venueData.header.description} Address: ${venueData.content.address.details.join(' ')}`
    } 
    // Registration
    else if (lowerInput.includes('register') || lowerInput.includes('fee') || lowerInput.includes('cost') || lowerInput.includes('price')) {
      return `${registrationData.description} Please visit the Registration page for the detailed fee structure.`
    } 
    // Call for Papers / Tracks
    else if (lowerInput.includes('track') || lowerInput.includes('topic') || lowerInput.includes('area')) {
      const tracks = cfpData.tracks.list.map(t => t.title).join(', ')
      return `We invite papers in the following tracks: ${tracks}.`
    }
    // Paper Submission
    else if (lowerInput.includes('paper') || lowerInput.includes('submit')) {
      return `${cfpData.description} You can submit your paper via the link provided on the Paper Submission page.`
    } 
    // Contact
    else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone')) {
      return `You can reach us at ${contactData.contact.email} or call ${contactData.contact.phone}.`
    }
    // Sponsorship
    else if (lowerInput.includes('sponsor')) {
      return sponsorshipData.header.description
    }
    // Keynote
    else if (lowerInput.includes('keynote') || lowerInput.includes('speaker')) {
      return keynoteData.header.description
    }
    // About
    else if (lowerInput.includes('about') || lowerInput.includes('abit') || lowerInput.includes('conference')) {
      return aboutData.paragraphs[0]
    }
    // Accommodation
    else if (lowerInput.includes('accommodation') || lowerInput.includes('hotel') || lowerInput.includes('stay') || lowerInput.includes('room')) {
      return `${accommodationsData.header.description} Check the Accommodations page for rates.`
    }
    // Schedule
    else if (lowerInput.includes('schedule') || lowerInput.includes('program') || lowerInput.includes('agenda')) {
      return `${scheduleData.header.description} The conference spans 3 days from September 08-10, 2026.`
    }
    // Awards
    else if (lowerInput.includes('award') || lowerInput.includes('prize') || lowerInput.includes('best paper')) {
      return `${awardsData.header.description}`
    }
    // Proceedings / Publication
    else if (lowerInput.includes('proceeding') || lowerInput.includes('publication') || lowerInput.includes('journal')) {
      return `${cfpData.publication.description}`
    }
    // Student Symposium
    else if (lowerInput.includes('student') || lowerInput.includes('symposium')) {
      return `${studentData.header.description}`
    }
    // Sightseeing
    else if (lowerInput.includes('sightseeing') || lowerInput.includes('tour') || lowerInput.includes('visit') || lowerInput.includes('tourism')) {
      return `${sightseeingData.header.description}`
    } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return "Hello! I can help you with information about dates, registration, venue, tracks, and more."
    } else {
      return "I'm not sure about that. Please check the website menu for more details or contact the organizers directly."
    }
  }

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3><IconMapper iconName="FaRobot" /> IC-SIT Virtual Assistant</h3>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>
              <IconMapper iconName="FaTimes" />
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form className="chatbot-input-area" onSubmit={handleSendMessage}>
            <input 
              type="text" 
              className="chatbot-input" 
              placeholder="Type a message..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="chatbot-send">
              <IconMapper iconName="FaPaperPlane" />
            </button>
          </form>
        </div>
      )}
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        <IconMapper iconName={isOpen ? "FaTimes" : "FaCommentDots"} />
      </button>
    </div>
  )
}

export default Chatbot