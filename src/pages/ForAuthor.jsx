import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const ForAuthor = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="for-author-page">
      <div className="container" style={{ marginTop: '100px' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default ForAuthor