import React from 'react'
import committeeData from '../../data/committee.json'
import CommitteeList from './CommitteeList'

const AdvisoryCommittee = () => {
  const { advisory } = committeeData

  return (
    <div id="advisory" className="committee-category">
      <h2 className="section-title">{advisory.title}</h2>
      <div className="section-underline"></div>
      {advisory.description && <p className="page-description">{advisory.description}</p>}
      
      {/* Direct Members */}
      {advisory.members && (
        <CommitteeList members={advisory.members} />
      )}

      {/* Subsections */}
      {advisory.subsections && Object.entries(advisory.subsections).map(([key, section]) => (
        <div key={key} id={`advisory-${key}`} className="committee-subsection">
          <h3 className="subsection-title">{section.title}</h3>
          <CommitteeList members={section.members} />
        </div>
      ))}
    </div>
  )
}

export default AdvisoryCommittee