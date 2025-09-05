import React from 'react'
import { Heart, Brain, Github, ExternalLink } from 'lucide-react'
import { Button } from './ui/button'

const Footer = () => {
  console.log('Footer component rendered')

  const handleTryDemo = () => {
    console.log('Redirecting to demo from footer')
    window.open('https://xmedical.streamlit.app/', '_blank')
  }

  const openContactModal = () => {
    console.log('Opening contact modal from footer')
    const modal = document.getElementById('contact-modal')
    if (modal) {
      modal.classList.remove('hidden')
    }
  }

  const scrollToTop = () => {
    console.log('Scrolling to top')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-medical-primary" />
                <Brain className="h-8 w-8 text-medical-accent -ml-2" />
              </div>
              <span className="text-2xl font-bold gradient-text">XMedical AI</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Revolutionary explainable multimodal AI platform for medical diagnosis. 
              Combining clinical data and medical imaging to transform healthcare outcomes.
            </p>
            <div className="flex space-x-4">
              <Button onClick={handleTryDemo} className="gradient-medical text-white hover:opacity-90">
                <ExternalLink className="mr-2 h-4 w-4" />
                Try Demo
              </Button>
              <Button onClick={openContactModal} variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={handleTryDemo} className="text-gray-400 hover:text-white transition-colors text-left">
                  Live Demo
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors text-left">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors text-left">
                  Technology
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors text-left">
                  About
                </button>
              </li>
            </ul>
          </div>

          {/* Research */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Research</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400">Breast Cancer AI</span>
              </li>
              <li>
                <span className="text-gray-400">Pneumonia Detection</span>
              </li>
              <li>
                <span className="text-gray-400">Explainable AI</span>
              </li>
              <li>
                <span className="text-gray-400">Multimodal Fusion</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 XMedical AI. Built by Harmain Iftikhar. For educational and research purposes.
          </p>
          <div className="flex items-center space-x-4">
            <button 
              onClick={openContactModal}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Contact Developer
            </button>
            <button 
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Back to Top
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-500 text-center">
            <strong>Medical Disclaimer:</strong> This tool is for educational and research purposes only. 
            It should not replace professional medical advice, diagnosis, or treatment. 
            Always consult qualified healthcare professionals for medical decisions.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer