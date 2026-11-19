import React, { useState, useRef, useEffect } from 'react'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import { FaCopy, FaEdit, FaCheck, FaMicrophone, FaMicrophoneSlash, FaArrowAltCircleRight } from 'react-icons/fa'
import './Chatbot.css'
import IconMapper from '../IconMapper/IconMapper'
import ChatbotIcon from './ChatbotIcon'
import FlowDiagram from '../ForAuthors/Help/FlowDiagram'
import '../ForAuthors/Help/Help.css'

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
import helpData from '../../data/help.json'
import welcomeData from '../../data/welcome.json'
import underConstructionData from '../../data/underConstruction.json'
import termsData from '../../data/termsAndConditions.json'
import sponsorLogosData from '../../data/sponsorslogo.json'
import presentationGuidelinesData from '../../data/presentationGuidelines.json'
import cameraReadyData from '../../data/cameraReady.json'
import pastConferencesData from '../../data/pastConferences.json'
import privacyPolicyData from '../../data/privacyPolicy.json'
import heroCarouselData from '../../data/heroCarousel.json'
import heroData from '../../data/hero.json'
import headlineData from '../../data/headline.json'
import galleryData from '../../data/gallery.json'
import footerData from '../../data/footer.json'
import faqData from '../../data/faq.json'
import drawerData from '../../data/drawer.json'
import proceedingsData from '../../data/conferenceProceeding.json'
import committeeData from '../../data/committee.json'

const quickQuestions = [
  'What are the important dates?',
  'How do I submit a paper?',
  'Where is the conference venue?',
]

const authorGuideIntents = [
  {
    guideId: 'camera-ready',
    keywords: [
      'camera-ready',
      'camera ready',
      'final paper',
      'pdf express',
      'copyright form',
    ],
  },
  {
    guideId: 'presentation',
    keywords: [
      'presentation',
      'slides',
      'virtual video',
      'on-site talk',
      'oral presentation',
      'mp4',
      'presenter',
    ],
  },
  {
    guideId: 'registration',
    keywords: [
      'how to register',
      'how do i register',
      'how can i register',
      'registration process',
      'registration steps',
      'register an author',
    ],
  },
  {
    guideId: 'paper-submission',
    keywords: [
      'how to submit',
      'how do i submit',
      'how can i submit',
      'paper submission',
      'submit a paper',
    ],
  },
]

const getAuthorGuideResponse = (guide) => {
  const steps = guide.steps
    .map((step, index) => `${index + 1}. **${step.title}** — ${step.description}`)
    .join('\n')
  const supplementalText =
    guide.id === 'camera-ready'
      ? `\n\n**Checklist:** ${cameraReadyData.checklist.items.join(' ')}`
      : guide.id === 'presentation'
        ? `\n\n**Video:** ${presentationGuidelinesData.video.specs
            .map(({ label, value }) => `${label}: ${value}`)
            .join(' · ')}. ${presentationGuidelinesData.video.instructions.join(' ')}`
        : ''
  const copyText = `**${guide.title}**\n\n${steps}${supplementalText}`

  return {
    text: `Here is the **${guide.title}** workflow:${supplementalText}`,
    copyText,
    component: (
      <div className="chatbot-author-guide-response">
        <div className="chatbot-author-guide-diagram">
          <FlowDiagram title={guide.title} steps={guide.steps} compact />
        </div>
        <div className="chatbot-author-guide-actions">
          <Link to={guide.link} className="chatbot-btn">
            {guide.linkText}
          </Link>
          {guide.id === 'paper-submission' && (
            <>
              <a
                href={psData.footer.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="chatbot-btn"
              >
                {psData.footer.buttonText}
              </a>
              <a
                href="/assets/res/template.docx"
                download="SAGAR2027_Paper_Template.docx"
                className="chatbot-btn secondary"
              >
                Download Template
              </a>
            </>
          )}
          {guide.id === 'camera-ready' && (
            <a
              href={cameraReadyData.header.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="chatbot-btn"
            >
              {cameraReadyData.header.buttonText}
            </a>
          )}
        </div>
      </div>
    ),
  }
}

const getFaqMatch = (input) => {
  const stopWords = new Set([
    'about',
    'are',
    'can',
    'how',
    'is',
    'the',
    'what',
    'when',
    'where',
    'who',
    'with',
    'should',
    'does',
    'do',
    'my',
    'i',
    'a',
    'an',
    'to',
    'for',
    'of',
    'and',
  ])
  const terms = input
    .toLowerCase()
    .match(/[a-z0-9]+/g)
    ?.filter((term) => term.length > 2 && !stopWords.has(term)) ?? []
  let bestMatch
  let bestScore = 0

  faqData.items.forEach((item) => {
    const searchableText = `${item.question} ${item.answer}`.toLowerCase()
    const score = terms.filter((term) => searchableText.includes(term)).length
    if (score > bestScore) {
      bestMatch = item
      bestScore = score
    }
  })

  return bestScore >= 2 ? bestMatch : undefined
}

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
  const [showGreetingBubble, setShowGreetingBubble] = useState(false)
  const [hasGreetingDismissed, setHasGreetingDismissed] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hi! I'm **SAGARika**, your SAGAR 2027 conference assistant. What can I help you with today?", sender: 'bot' }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState(null)
  const messagesEndRef = useRef(null)
  const [isListening, setIsListening] = useState(false)
  const recognitionRef = useRef(null)

  useEffect(() => {
    if (hasGreetingDismissed || isOpen) return undefined

    let timer
    const handleDrawerClosed = () => {
      timer = setTimeout(() => {
        setShowGreetingBubble(true)
      }, 550)
    }

    if (window.__drawerPopupsClosed) {
      handleDrawerClosed()
    } else {
      window.addEventListener('drawer-popups-closed', handleDrawerClosed)
    }

    return () => {
      if (timer) clearTimeout(timer)
      window.removeEventListener('drawer-popups-closed', handleDrawerClosed)
    }
  }, [hasGreetingDismissed, isOpen])

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0].transcript)
          .join('');
        setInputValue(transcript);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const toggleListening = (e) => {
    e.preventDefault();
    if (!recognitionRef.current) {
      alert('Voice input is not supported in this browser.');
      return;
    }
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      setInputValue('');
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

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

  const sendMessage = (message) => {
    const trimmedMessage = message.trim()
    if (!trimmedMessage) return
    // Add user message
    const userMessage = { text: trimmedMessage, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(trimmedMessage)
      if (typeof botResponse === 'string') {
        setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }])
      } else {
        setMessages(prev => [...prev, { text: botResponse.text, component: botResponse.component, copyText: botResponse.copyText, sender: 'bot' }])
      }
      setIsTyping(false)
    }, 1500)
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    sendMessage(inputValue)
  }

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase()
    const faqMatch = getFaqMatch(input)
    
    // Announcements
    if (
      lowerInput.includes('announcement') ||
      lowerInput.includes('news') ||
      lowerInput.includes('updates') ||
      lowerInput.includes('notice')
    ) {
      return {
        text: 'Here are the latest SAGAR2027 announcements:',
        component: (
          <div className="chatbot-data-links">
            {headlineData.messages.map((message) => (
              <div className="chatbot-data-link" key={message.text}>
                <span>{message.text}</span>
                {message.href &&
                  (message.href.startsWith('/') &&
                  !message.href.startsWith('/assets/') ? (
                    <Link to={message.href}>{message.href}</Link>
                  ) : (
                    <a href={message.href}>{message.href}</a>
                  ))}
              </div>
            ))}
          </div>
        ),
      }
    }
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
    // Poster and submission QR
    else if (
      (
        lowerInput.includes('qr') ||
        lowerInput.includes('poster') ||
        lowerInput.includes('announcement image')
      ) &&
      !authorGuideIntents.some(({ keywords }) =>
        keywords.some((keyword) => lowerInput.includes(keyword)),
      )
    ) {
      const drawer = drawerData.drawers.find(({ id }) =>
        lowerInput.includes('qr') || lowerInput.includes('cmt')
          ? id === 'cmt-paper-submission'
          : id === 'sagar2027',
      )
      return {
        text: `**${drawer.heading}**\n\n${drawer.description}`,
        component: (
          <img
            className="chatbot-data-image"
            src={drawer.src}
            alt={drawer.alt}
          />
        ),
      }
    }
    // Gallery
    else if (
      lowerInput.includes('gallery') ||
      lowerInput.includes('photos') ||
      lowerInput.includes('pictures')
    ) {
      return {
        text: `**${galleryData.header.title}**\n\n${galleryData.header.description}`,
        component: (
          <div className="chatbot-gallery">
            {galleryData.images.map((image) => (
              <figure key={image.caption}>
                <img src={image.src} alt={image.alt} />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        ),
      }
    }
    // Homepage imagery
    else if (
      lowerInput.includes('carousel') ||
      lowerInput.includes('homepage banner') ||
      lowerInput.includes('homepage image')
    ) {
      return {
        text: `**${heroData.badge} ${heroData.title}**`,
        component: (
          <div className="chatbot-gallery">
            {Object.entries(heroCarouselData).map(([key, src], index) => (
              <figure key={key}>
                <img src={src} alt={`SAGAR2027 homepage banner ${index + 1}`} />
              </figure>
            ))}
          </div>
        ),
      }
    }
    // Author workflows
    else if (
      !/\b(fee|fees|cost|price|pricing)\b/.test(lowerInput) &&
      authorGuideIntents.some(({ keywords }) =>
        keywords.some((keyword) => lowerInput.includes(keyword)),
      )
    ) {
      const intent = authorGuideIntents.find(({ keywords }) =>
        keywords.some((keyword) => lowerInput.includes(keyword)),
      )
      const guide = helpData.guides.find(({ id }) => id === intent.guideId)
      return getAuthorGuideResponse(guide)
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
    // Template download
    else if (lowerInput.includes('template')) {
      return {
        text: "Here is the paper template for SAGAR2027.",
        component: (
          <a href="/assets/res/template.docx" download="SAGAR2027_Paper_Template.docx" className="chatbot-btn">
            Download Template
          </a>
        )
      }
    }
    // Paper Submission
    else if (lowerInput.includes('paper') || lowerInput.includes('submit')) {
      return {
        text: `${cfpData.description}\n\nYou can submit your paper via the link provided below.`,
        component: (
          <>
            <a href={psData.footer.buttonLink} target="_blank" rel="noopener noreferrer" className="chatbot-btn" style={{ display: 'inline-block', marginTop: '10px', padding: '8px 15px', backgroundColor: 'var(--primary-color)', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>{psData.footer.buttonText}</a>
            <a href="/assets/res/template.docx" download="SAGAR2027_Paper_Template.docx" className="chatbot-btn secondary" style={{ display: 'inline-block', marginTop: '10px', marginLeft: '10px', padding: '8px 15px', backgroundColor: 'transparent', color: 'var(--neon-purple)', border: '1px solid var(--neon-purple)', textDecoration: 'none', borderRadius: '5px' }}>Download Template</a>
          </>
        )
      }
    } 
    // Contact
    else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone')) {
      return `You can reach us at:\n\n- **Email:** ${contactData.contact.email}\n- **Phone:** ${contactData.contact.phone}\n- **Address:** ${footerData.contact.address}`
    }
    // Sponsorship
    else if (lowerInput.includes('sponsor')) {
      return {
        text: sponsorshipData.header.description,
        component: (
          <div className="chatbot-data-links">
            {sponsorLogosData.map((sponsor) => (
              <a
                href={sponsor.website}
                key={sponsor.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="chatbot-sponsor-logo"
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                />
                {sponsor.name}
              </a>
            ))}
          </div>
        ),
      }
    }
    // Keynote
    else if (lowerInput.includes('keynote') || lowerInput.includes('speaker')) {
      return keynoteData.header.description
    }
    // About
    else if (
      (
        lowerInput.includes('about') ||
        lowerInput.includes('abit') ||
        lowerInput.includes('conference') ||
        lowerInput.includes('sagar2027')
      ) &&
      !lowerInput.includes('past conference') &&
      !lowerInput.includes('previous conference') &&
      !lowerInput.includes('conference history') &&
      !lowerInput.includes('committee') &&
      !lowerInput.includes('chair') &&
      !lowerInput.includes('convenor')
    ) {
      if (lowerInput.includes('abit') && !lowerInput.includes('sagar')) {
        return aboutData.paragraphs[0].replace(/<[^>]*>?/gm, '')
      }
      return `${welcomeData.paragraphs[0].replace(/<[^>]*>?/gm, '')}\n\n**Location:** ${heroData.location}\n**Dates:** ${heroData.date.replace(/<[^>]*>?/gm, '')}\n**Conference ID:** ${heroData.recordNumber}`
    }
    // Accommodation
    else if (lowerInput.includes('accommodation') || lowerInput.includes('hotel') || lowerInput.includes('stay') || lowerInput.includes('room')) {
      return `${accommodationsData.header.description}\n\nCheck the **Accommodations** page for rates.`
    }
    // Schedule
    else if (
      lowerInput.includes('schedule') ||
      lowerInput.includes('agenda') ||
      lowerInput.includes('conference program')
    ) {
      return `${scheduleData.header.description}\n\nThe conference spans **2 days** from **February 26-27, 2027**.`
    }
    // Awards
    else if (lowerInput.includes('award') || lowerInput.includes('prize') || lowerInput.includes('best paper')) {
      return `${awardsData.header.description}`
    }
    // Proceedings / Publication
    else if (
      lowerInput.includes('proceeding') ||
      lowerInput.includes('journal') ||
      (lowerInput.includes('publication') && !lowerInput.includes('chair'))
    ) {
      const archiveItems = proceedingsData.archive.items
        .map((item) => `- **${item.title}:** ${item.description}`)
        .join('\n')
      return {
        text: `${cfpData.publication?.description || proceedingsData.header.description}\n\n**${proceedingsData.archive.title}**\n${proceedingsData.archive.description}\n\n${archiveItems}`,
        component: (
          <div className="chatbot-data-links">
            {proceedingsData.archive.items.map((item) =>
              item.link !== '#' ? (
                <a
                  href={item.link}
                  key={item.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.buttonText}
                </a>
              ) : (
                <span key={item.title}>{item.buttonText}</span>
              ),
            )}
          </div>
        ),
      }
    }
    // Student Symposium
    else if (lowerInput.includes('student') || lowerInput.includes('symposium')) {
      return `${studentData.header.description}`
    }
    // Brochure
    else if (lowerInput.includes('brochure')) {
      return {
        text: "**Here is the conference brochure:**",
        component: (
          <div className="chatbot-pdf-wrapper" style={{ marginTop: '10px' }}>
            <iframe src="assets/res/Brochure.pdf" title="Conference Brochure" style={{ width: '100%', height: '300px', border: 'none', borderRadius: '8px' }}></iframe>
          </div>
        )
      }
    }
    // Sightseeing
    else if (lowerInput.includes('sightseeing') || lowerInput.includes('tour') || lowerInput.includes('visit') || lowerInput.includes('tourism')) {
      return `${sightseeingData.header.description}`
    }
    // Committee
    else if (lowerInput.includes('committee') || lowerInput.includes('chair') || lowerInput.includes('convenor')) {
      const committeeSections = Object.entries(committeeData).flatMap(
        ([groupKey, group]) =>
          Object.entries(group.subsections).map(([sectionKey, section]) => ({
            groupKey,
            groupTitle: group.title,
            sectionKey,
            title: section.title,
            members: section.members,
          })),
      )
      const selectedSection = committeeSections.find(({ sectionKey, title }) =>
        [sectionKey, title].some((value) =>
          lowerInput.includes(value.toLowerCase()),
        ),
      )

      if (!selectedSection) {
        const groups = Object.values(committeeData)
          .map(({ title, subsections }) =>
            `**${title}:** ${Object.values(subsections)
              .map(({ title: sectionTitle }) => sectionTitle)
              .join(', ')}`,
          )
          .join('\n\n')
        return `${committeeData.program.description}\n\n${groups}\n\nSee the [full committee list](/committee/program).`
      }

      const members = selectedSection.members
        .slice(0, 12)
        .map(({ name, affiliation }) => `- **${name}** — ${affiliation}`)
        .join('\n')
      const remainingCount = selectedSection.members.length - 12
      return `**${selectedSection.title}**\n\n${members}${remainingCount > 0 ? `\n- And ${remainingCount} more members.` : ''}`
    }
    // Past conferences
    else if (
      lowerInput.includes('past conference') ||
      lowerInput.includes('previous conference') ||
      lowerInput.includes('conference history')
    ) {
      const conferences = pastConferencesData.conferences
        .map(({ title, date, location, description }) =>
          `**${title}**\n${date} · ${location}\n\n${description}`,
        )
        .join('\n\n')
      return `${pastConferencesData.header.description}\n\n${conferences}`
    }
    // Privacy policy
    else if (lowerInput.includes('privacy') || lowerInput.includes('data protection')) {
      const matchingSections = privacyPolicyData.sections.filter(({ title, paragraphs }) => {
        const searchableText = `${title} ${paragraphs.join(' ')}`.toLowerCase()
        return lowerInput
          .split(/\W+/)
          .filter((term) => term.length > 3)
          .some((term) => searchableText.includes(term))
      })
      const sections = (matchingSections.length ? matchingSections : privacyPolicyData.sections)
        .map(({ title, paragraphs }) => `**${title}:** ${paragraphs[0]}`)
        .join('\n\n')
      return `**${privacyPolicyData.title}** (${privacyPolicyData.updated})\n\n${privacyPolicyData.intro}\n\n${sections}\n\n[Read the full privacy policy](/privacy-policy).`
    }
    // Terms and conditions
    else if (
      lowerInput.includes('terms') ||
      lowerInput.includes('conditions') ||
      lowerInput.includes('terms of use')
    ) {
      return `**${termsData.title}** (${termsData.updated})\n\n${termsData.intro}\n\n${termsData.sections
        .map(({ title }) => `- ${title}`)
        .join('\n')}\n\n[Read the full terms](/terms-and-conditions).`
    }
    // Page status
    else if (
      lowerInput.includes('under construction') ||
      lowerInput.includes('not announced') ||
      lowerInput.includes('coming soon')
    ) {
      return `**${underConstructionData.title}**\n\n${underConstructionData.subtitle}. ${underConstructionData.text}`
    }
    // Website links
    else if (
      lowerInput.includes('social media') ||
      lowerInput.includes('website links') ||
      lowerInput.includes('social links') ||
      lowerInput.includes('footer')
    ) {
      const links = footerData.links
        .map(({ label, url }) => `- [${label}](${url})`)
        .join('\n')
      const socials = footerData.social
        .map(({ icon, url }) => `- [${icon}](${url})`)
        .join('\n')
      return `**${footerData.about.title}**\n${footerData.about.description}\n\n${footerData.copyright}\n\n**Website:** ${footerData.contact.website}\n**Website links**\n${links}\n\n**Social media**\n${socials}`
    }
    // Frequently asked questions
    else if (
      lowerInput.includes('faq') ||
      lowerInput.includes('frequently asked question')
    ) {
      return `**${faqData.title}**\n\n${faqData.items
        .map(({ question, answer }) => `**${question}**\n${answer}`)
        .join('\n\n')}`
    } else if (faqMatch) {
      return {
        text: `**${faqMatch.question}**\n\n${faqMatch.answer}`,
        component: (
          <Link to={faqMatch.link} className="chatbot-btn">
            {faqMatch.linkText}
          </Link>
        ),
      }
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
            <div className="chatbot-header-info">
              <ChatbotIcon className="chatbot-brand-icon" />
              <div className="chatbot-header-text">
                <h3>SAGARika</h3>
                <span className="chatbot-header-status">
                  <span className="chatbot-status-dot"></span> Online • AI Assistant
                </span>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setIsOpen(false)} aria-label="Close SAGARika">
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
            {messages.length === 1 && !isTyping && (
              <div className="chatbot-quick-questions" aria-label="Quick questions">
                <span className="chatbot-quick-questions-title">✨ Quick questions</span>
                {quickQuestions.map((question) => (
                  <button
                    className="chatbot-quick-question"
                    key={question}
                    onClick={() => sendMessage(question)}
                    type="button"
                  >
                    <span className="chatbot-quick-question-arrow">›</span>
                    <span>{question}</span>
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form className="chatbot-input-area" onSubmit={handleSendMessage}>
            <button
              type="button"
              className={`chatbot-mic-btn ${isListening ? 'listening' : ''}`}
              onClick={toggleListening}
              title={isListening ? "Stop listening" : "Start voice input"}
            >
              {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
            </button>
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
      {!isOpen && showGreetingBubble && (
        <div
          className="chatbot-greeting-bubble"
          role="dialog"
          aria-label="Greeting from SAGARika"
          onClick={() => {
            setIsOpen(true)
            setShowGreetingBubble(false)
          }}
        >
          <button
            className="chatbot-greeting-close"
            type="button"
            aria-label="Dismiss greeting"
            onClick={(e) => {
              e.stopPropagation()
              setShowGreetingBubble(false)
              setHasGreetingDismissed(true)
            }}
          >
            <IconMapper iconName="FaTimes" />
          </button>
          <div className="chatbot-greeting-header">
            <div className="chatbot-greeting-avatar">
              <ChatbotIcon className="chatbot-brand-icon" />
            </div>
            <div>
              <span className="chatbot-greeting-name">SAGARika</span>
              <span className="chatbot-greeting-badge">AI Assistant</span>
            </div>
          </div>
          <p className="chatbot-greeting-text">
            👋 Hi there! Need any help with <strong>SAGAR 2027</strong> papers, dates, or registration?
          </p>
          <div className="chatbot-greeting-cta">
            <span>Chat with me</span>
            <FaArrowAltCircleRight className="chatbot-greeting-tail" />
          </div>
        </div>
      )}
      <button
        className="chatbot-toggle"
        onClick={() => {
          setIsOpen(!isOpen)
          setShowGreetingBubble(false)
        }}
        aria-label={isOpen ? 'Close SAGARika' : 'Open SAGARika'}
      >
        {isOpen ? (
          <IconMapper iconName="FaTimes" />
        ) : (
          <ChatbotIcon className="chatbot-brand-icon" />
        )}
      </button>
    </div>
  )
}

export default Chatbot