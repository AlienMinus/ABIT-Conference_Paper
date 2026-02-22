import React from 'react'
import { Outlet } from 'react-router-dom'

const ForAuthor = () => {
  return (
    <div className="for-author-page">
      <div className="container" style={{ marginTop: '100px' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default ForAuthor