import React, { useState } from 'react'
import { Button } from './ui/button'
import { Menu, X, Heart, Brain } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  console.log('Header component rendered, isMenuOpen:', isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to section:', sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleTryDemo = () => {
    console.log('Redirecting to demo application')
    window.open('https://xmedical.streamlit.app/', '_blank')
  }

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-medical-primary" />
              <Brain className="h-8 w-8 text-medical-accent -ml-2" />
            </div>
            <span className="text-2xl font-bold gradient-text">XMedical AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-medical-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="text-gray-600 hover:text-medical-primary transition-colors"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-medical-primary transition-colors"
            >
              About
            </button>
            <Button 
              onClick={handleTryDemo}
              className="gradient-medical text-white hover:opacity-90 transition-opacity"
            >
              Try Demo
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left text-gray-600 hover:text-medical-primary transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('technology')}
                className="text-left text-gray-600 hover:text-medical-primary transition-colors"
              >
                Technology
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-600 hover:text-medical-primary transition-colors"
              >
                About
              </button>
              <Button 
                onClick={handleTryDemo}
                className="gradient-medical text-white hover:opacity-90 transition-opacity w-fit"
              >
                Try Demo
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header