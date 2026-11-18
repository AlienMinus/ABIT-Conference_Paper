import React from 'react'
import { Link } from 'react-router-dom'
import './LegalDocument.css'

const LegalDocument = ({ documentData }) => (
  <article className="legal-document container">
    <header className="legal-header">
      <h1>{documentData.title}</h1>
      <p>{documentData.intro}</p>
      <p className="legal-updated">{documentData.updated}</p>
    </header>

    <div className="legal-sections">
      {documentData.sections.map((section) => (
        <section className="legal-section" key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {section.items && (
            <ul>
              {section.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          )}
          {section.link && (
            section.link.url.startsWith('/')
              ? <Link to={section.link.url}>{section.link.label}</Link>
              : <a href={section.link.url} target="_blank" rel="noopener noreferrer">{section.link.label}</a>
          )}
        </section>
      ))}
    </div>
  </article>
)

export default LegalDocument
