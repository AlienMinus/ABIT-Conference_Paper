import React, { useState, useRef, useEffect } from 'react'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import { FaCopy, FaEdit, FaCheck } from 'react-icons/fa'
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
import psData from '../../data/paperSubmission.json'

const TypewriterMarkdown = ({ text }) => {
  const [textValue] = useTypewriter({
    words: [text],
    loop: 1,
    typeSpeed: 20,
  })
  
  return (
    <>
      <ReactMarkdown>{textValue}</ReactMarkdown>
      {textValue.length < text.length && <Cursor cursorStyle='_' />}
    </>
  )
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm the **SAGAR2027 Virtual Assistant**. How can I help you today?", sender: 'bot' }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState(null)
  const messagesEndRef = useRef(null)

  const stripMarkdown = (text) => {
    if (!text) return '';
    return text
      .replace(/(\*\*|__)(.*?)\1/g, '$2') // bold
      .replace(/(\*|_)(.*?)\1/g, '$2') // italic
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1') // links
      .replace(/#+\s?/g, '') // headers
      .replace(/`{1,3}(.*?)`{1,3}/g, '$1'); // code blocks
  }

  const handleCopy = (text, index) => {
    const cleanText = stripMarkdown(text)
    navigator.clipboard.writeText(cleanText)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const handleEdit = (text) => {
    setInputValue(text)
  }

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
      if (typeof botResponse === 'string') {
        setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }])
      } else {
        setMessages(prev => [...prev, { text: botResponse.text, component: botResponse.component, copyText: botResponse.copyText, sender: 'bot' }])
      }
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase()
    
    // Important Dates
    if (lowerInput.includes('date') || lowerInput.includes('deadline') || lowerInput.includes('when')) {
      const datesList = importantDates.map(d => `- ${d.title}: ${d.date}`).join('\n')
      return {
        text: "Here are the important dates:",
        copyText: `Here are the important dates:\n${datesList}`,
        component: (
          <div className="chatbot-table-wrapper">
            <table className="chatbot-table" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #ccc' }}>
                  <th style={{ textAlign: 'left', padding: '5px' }}>Event</th>
                  <th style={{ textAlign: 'left', padding: '5px' }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {importantDates.map((d, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '5px' }}>{d.title}</td>
                    <td style={{ padding: '5px' }}>{d.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
    } 
    // Venue
    else if (lowerInput.includes('venue') || lowerInput.includes('where') || lowerInput.includes('location') || lowerInput.includes('address')) {
      return {
        text: `**${venueData.header.description}**\n\n**Address:** ${venueData.content.address.details.join(', ')}`,
        component: (
          <div className="chatbot-map-wrapper" style={{ marginTop: '10px' }}>
            <iframe src={venueData.content.mapEmbed} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Conference Venue Map" style={{ width: '100%', height: '200px', border: 'none', borderRadius: '8px' }}></iframe>
          </div>
        )
      }
    } 
    // Registration
    else if (lowerInput.includes('register') || lowerInput.includes('fee') || lowerInput.includes('cost') || lowerInput.includes('price')) {
      return {
        text: `${registrationData.description}\n\nPlease visit the **Registration** page for the detailed fee structure.`,
        component: (
          <Link to="/for-authors/registration" className="chatbot-btn" style={{ display: 'inline-block', marginTop: '10px', padding: '8px 15px', backgroundColor: 'var(--primary-color)', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>Go to Registration</Link>
        )
      }
    } 
    // Call for Papers / Tracks
    else if (lowerInput.includes('track') || lowerInput.includes('topic') || lowerInput.includes('area')) {
      const tracks = cfpData.tracks.list.map((t, index) => `${index + 1}. **${t.title}**`).join('\n')
      return `We invite papers in the following tracks:\n\n${tracks}`
    }
    // Paper Submission
    else if (lowerInput.includes('paper') || lowerInput.includes('submit')) {
      return {
        text: `${cfpData.description}\n\nYou can submit your paper via the link provided below.`,
        component: (
          <a href={psData.footer.buttonLink} target="_blank" rel="noopener noreferrer" className="chatbot-btn" style={{ display: 'inline-block', marginTop: '10px', padding: '8px 15px', backgroundColor: 'var(--primary-color)', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>{psData.footer.buttonText}</a>
        )
      }
    } 
    // Contact
    else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone')) {
      return `You can reach us at:\n\n- **Email:** ${contactData.contact.email}\n- **Phone:** ${contactData.contact.phone}`
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
      return `${accommodationsData.header.description}\n\nCheck the **Accommodations** page for rates.`
    }
    // Schedule
    else if (lowerInput.includes('schedule') || lowerInput.includes('program') || lowerInput.includes('agenda')) {
      return `${scheduleData.header.description}\n\nThe conference spans **2 days** from **February 26-27, 2027**.`
    }
    // Awards
    else if (lowerInput.includes('award') || lowerInput.includes('prize') || lowerInput.includes('best paper')) {
      return `${awardsData.header.description}`
    }
    // Proceedings / Publication
    else if (lowerInput.includes('proceeding') || lowerInput.includes('publication') || lowerInput.includes('journal')) {
      return cfpData.publication?.description || "All accepted and presented papers will be published in the conference proceedings."
    }
    // Student Symposium
    else if (lowerInput.includes('student') || lowerInput.includes('symposium')) {
      return `${studentData.header.description}`
    }
    // Sightseeing
    else if (lowerInput.includes('sightseeing') || lowerInput.includes('tour') || lowerInput.includes('visit') || lowerInput.includes('tourism')) {
      return `${sightseeingData.header.description}`
    } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return "Hello! I can help you with information about **dates**, **registration**, **venue**, **tracks**, and more."
    } else {
      return "I'm not sure about that. Please check the website menu for more details or contact the organizers directly."
    }
  }

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3><IconMapper iconName="FaRobot" /> SAGAR2027 Virtual Assistant</h3>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>
              <IconMapper iconName="FaTimes" />
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message-wrapper ${msg.sender}`}>
                <div className={`message ${msg.sender}`}>
                  {msg.sender === 'bot' ? (
                    <>
                      {index === messages.length - 1 && !isTyping ? (
                        <TypewriterMarkdown text={msg.text} />
                      ) : (
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      )}
                      {msg.component && (
                        <div className="chatbot-component">
                          {msg.component}
                        </div>
                      )}
                    </>
                  ) : (
                    msg.text
                  )}
                  {msg.sender === 'bot' && (
                    <button className="message-action-btn bot-action" onClick={() => handleCopy(msg.copyText || msg.text, index)} title="Copy message">
                      {copiedIndex === index ? <FaCheck /> : <FaCopy />}
                    </button>
                  )}
                  {msg.sender === 'user' && (
                    <button className="message-action-btn user-action" onClick={() => handleEdit(msg.text)} title="Edit message">
                      <FaEdit />
                    </button>
                  )}
                </div>
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