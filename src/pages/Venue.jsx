import React from 'react'
import { Outlet } from 'react-router-dom'

const Venue = () => {
  return (
    <div className="venue-page">
      <div className="container" style={{ marginTop: '100px' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default Venue