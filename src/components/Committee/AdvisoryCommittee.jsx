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
      
      <CommitteeList members={advisory.members} />
    </div>
  )
}

export default AdvisoryCommittee