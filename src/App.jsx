import React from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop/BackToTop';
import AppRouter from './Router';
import './static/LightMode.css'
import './static/mobile.css'

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <BackToTop />
      <AppRouter />
    </Layout>
  )
}

export default App
