import React from 'react'
import { Button } from './ui/button'
import { ArrowRight, Play, Shield, Zap, Award } from 'lucide-react'

const Hero = () => {
  console.log('Hero component rendered')

  const handleTryDemo = () => {
    console.log('Redirecting to demo application from hero')
    window.open('https://xmedical-demo.streamlit.app//', '_blank')
  }

  const openContactModal = () => {
    console.log('Opening contact modal')
    const modal = document.getElementById('contact-modal')
    if (modal) {
      modal.classList.remove('hidden')
    }
  }

  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-medical-light via-white to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-5 w-5 text-medical-accent" />
              <span className="text-sm font-medium text-medical-primary bg-blue-50 px-3 py-1 rounded-full">
                FDA-Grade AI Technology
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">Explainable AI</span>
              <br />
              <span className="text-gray-900">for Medical Diagnosis</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Revolutionary multimodal AI platform combining clinical data and medical imaging 
              for accurate breast cancer and pneumonia prediction with human-interpretable explanations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={handleTryDemo}
                size="lg" 
                className="gradient-medical text-white hover:opacity-90 transition-all transform hover:scale-105 animate-pulse-glow"
              >
                <Play className="mr-2 h-5 w-5" />
                Try Live Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                onClick={openContactModal}
                variant="outline" 
                size="lg"
                className="border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white transition-all"
              >
                Contact Us
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="h-5 w-5 text-medical-accent mr-2" />
                  <span className="text-2xl font-bold text-medical-primary">97%</span>
                </div>
                <p className="text-sm text-gray-600">Accuracy Rate</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-5 w-5 text-medical-accent mr-2" />
                  <span className="text-2xl font-bold text-medical-primary">2</span>
                </div>
                <p className="text-sm text-gray-600">AI Modalities</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-5 w-5 text-medical-accent mr-2" />
                  <span className="text-2xl font-bold text-medical-primary">100%</span>
                </div>
                <p className="text-sm text-gray-600">Explainable</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-fade-in">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <img 
                src="https://www.openaccessgovernment.org/wp-content/uploads/2015/01/dreamstime_m_14138113.jpg" 
                alt="Medical AI Technology"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Breast Cancer Analysis</span>
                  <div className="w-20 h-2 bg-green-200 rounded-full">
                    <div className="w-19 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Pneumonia Detection</span>
                  <div className="w-20 h-2 bg-blue-200 rounded-full">
                    <div className="w-17 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Confidence Level</span>
                  <div className="w-20 h-2 bg-purple-200 rounded-full">
                    <div className="w-18 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-medical-primary text-white p-4 rounded-full shadow-lg animate-pulse-glow">
              <Shield className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-medical-accent text-white p-4 rounded-full shadow-lg animate-pulse-glow animation-delay-1000">
              <Zap className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero