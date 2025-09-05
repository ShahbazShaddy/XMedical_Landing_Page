import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Features from './Features'
import TechStack from './TechStack'
import About from './About'
import ContactModal from './ContactModal'
import Footer from './Footer'

const LandingPage = () => {
  console.log('LandingPage component rendered')

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <TechStack />
      <About />
      <ContactModal />
      <Footer />
    </div>
  )
}

export default LandingPage