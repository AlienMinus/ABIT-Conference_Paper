import React from 'react'
import committeeData from '../../data/committee.json'
import CommitteeList from './CommitteeList'

const ProgramCommittee = () => {
  const { program } = committeeData
  
  return (
    <div id="program" className="committee-category">
      <h2 className="section-title">{program.title}</h2>
      <div className="section-underline"></div>
      {program.description && <p className="page-description">{program.description}</p>}
      
      {program.subsections && Object.entries(program.subsections).map(([key, section]) => (
        <div key={key} id={`program-${key}`} className="committee-subsection">
          <h3 className="subsection-title">{section.title}</h3>
          <CommitteeList members={section.members} />
        </div>
      ))}
    </div>
  )
}

export default ProgramCommittee