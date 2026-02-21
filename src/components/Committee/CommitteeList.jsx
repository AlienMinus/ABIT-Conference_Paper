import React from 'react'
import { BsCheck2Circle } from 'react-icons/bs'

const CommitteeList = ({ members }) => {
  return (
    <ul className="committee-list">
      {members.map((member, index) => (
        <li key={index} className="committee-list-item">
          <BsCheck2Circle className="committee-icon" />
          <div className="committee-info">
            <span className="committee-member-name">{member.name}</span>, <span className="committee-member-affiliation">{member.affiliation}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default CommitteeList