import React from 'react'
import { Outlet } from 'react-router-dom'

const Program = () => {
  return (
    <div className="program-page">
      <div className="container" style={{ marginTop: '100px' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default Program