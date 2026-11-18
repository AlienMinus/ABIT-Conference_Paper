import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import faqData from '../../../data/faq.json'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const visibleItems = showAll ? faqData.items : faqData.items.slice(0, 4)

  const toggleVisibleItems = () => {
    if (showAll) {
      setOpenIndex(null)
    }

    setShowAll(!showAll)
  }

  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <div className="container">
        <p className="faq-eyebrow">{faqData.eyebrow}</p>
        <h2 id="faq-title" className="section-title faq-title">{faqData.title}</h2>
        <p className="faq-intro">{faqData.intro}</p>

        <div className="faq-list" id="faq-list">
          {visibleItems.map((item, index) => {
            const isOpen = openIndex === index
            const answerId = `faq-answer-${index}`

            return (
              <div className={`faq-item${isOpen ? ' is-open' : ''}`} key={item.question}>
                <h3 className="faq-question">
                  <button
                    className="faq-toggle"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="faq-answer"
                  id={answerId}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                >
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
                    {item.link && (
                      item.link.startsWith('/#')
                        ? <a href={item.link}>{item.linkText}</a>
                        : <Link to={item.link}>{item.linkText}</Link>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {faqData.items.length > 4 && (
          <button
            className="faq-more-button"
            type="button"
            aria-expanded={showAll}
            aria-controls="faq-list"
            onClick={toggleVisibleItems}
          >
            {showAll ? 'Show fewer questions' : 'View more questions'}
          </button>
        )}
      </div>
    </section>
  )
}

export default FAQ
