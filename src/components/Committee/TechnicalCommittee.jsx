import React from 'react'
import committeeData from '../../data/committee.json'
import CommitteeList from './CommitteeList'

const TechnicalCommittee = () => {
  const { technical } = committeeData

  return (
    <div id="technical" className="committee-category">
      <h2 className="section-title">{technical.title}</h2>
      <div className="section-underline"></div>
      {technical.description && <p className="page-description">{technical.description}</p>}
      
      {/* Direct Members */}
      {technical.members && (
        <CommitteeList members={technical.members} />
      )}

      {/* Subsections */}
      {technical.subsections && Object.entries(technical.subsections).map(([key, section]) => (
        <div key={key} id={`technical-${key}`} className="committee-subsection">
          <h3 className="subsection-title">{section.title}</h3>
          <CommitteeList members={section.members} />
        </div>
      ))}
    </div>
  )
}

export default TechnicalCommittee