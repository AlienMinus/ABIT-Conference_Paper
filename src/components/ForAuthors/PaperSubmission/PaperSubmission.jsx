import React from 'react'
import './PaperSubmission.css'
import psData from '../../../data/paperSubmission.json'
import IconMapper from '../../IconMapper/IconMapper'

const PaperSubmission = () => {
  const { header, submission, publication, submissionGuidelines, note, footer } = psData

  return (
    <div className="ps-container">
      <div className="ps-header">
        <h1>{header.title}</h1>
        <p>{header.description}</p>
        <div className="ps-header-actions">
          <a href={header.latexTemplateLink} download="SAGAR2027-LaTeX-Template.zip" className="ps-btn">{header.latexButtonText}</a>
          <a href={header.docxTemplateLink} download="SAGAR2027-Paper-Submission-Template.zip" className="ps-btn">{header.docxButtonText}</a>
        </div>
      </div>

      <div className="ps-section">
        <h2>{submission.title}</h2>
        <p>{submission.description}</p>
        
        <h3 className="ps-subtitle">{submission.stepsTitle}</h3>
        <ul className="ps-steps">
          {submission.steps.map((step, index) => (
            <li key={index} className="ps-step-item">
              <div className="ps-step-number">{index + 1}</div>
              <div className="ps-step-content">
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="ps-split-section">
        <div className="ps-column">
          <h2>{submissionGuidelines.title}</h2>
          <ul className="ps-check-list">
            {submissionGuidelines.guidelines.map((guideline, index) => (
              <li key={index} className={guideline.subGuidelines ? 'has-sub-guidelines' : ''}>
                <IconMapper iconName="BsCheck2Circle" />
                <div>
                  <strong>{guideline.title}</strong>
                  <p dangerouslySetInnerHTML={{ __html: guideline.description }}></p>
                  {guideline.subGuidelines && (
                    <ul className="ps-sub-check-list">
                      {guideline.subGuidelines.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <div>
                            <strong>{sub.title}</strong>
                            <p>{sub.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="ps-column">
          <h2>{publication.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: publication.description }}></p>
          <ul className="ps-check-list">
            {publication.features.map((feature, index) => (
              <li key={index}>
                <IconMapper iconName="IoIosRibbon" />
                <span dangerouslySetInnerHTML={{ __html: feature }}></span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ps-note">
        <h2>{note.title}</h2>
        <p>The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>
      </div>

      <div className="ps-footer">
        <h2>{footer.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: footer.description }}></p>
        <div className="ps-actions">
          <a href={footer.buttonLink} target="_blank" rel="noopener noreferrer" className="ps-btn">{footer.buttonText}</a>
        </div>
      </div>
    </div>
  )
}

export default PaperSubmission