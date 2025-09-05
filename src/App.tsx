import React from 'react'
import LandingPage from './components/LandingPage'
import { Toaster } from './components/ui/sonner'

function App() {
  console.log('App component rendered')
  
  return (
    <div className="min-h-screen bg-background">
      <LandingPage />
      <Toaster />
    </div>
  )
}

export default App