import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import '../components/Committee/Committee.css'

const Committee = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="committee-page">
      <div className="container" style={{ marginTop: '100px' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default Committee