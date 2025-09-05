import React, { useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Linkedin, Mail, X, ExternalLink } from 'lucide-react'
import { toast } from 'sonner'

const ContactModal = () => {
  console.log('ContactModal component rendered')

  const [isOpen, setIsOpen] = React.useState(false)

  useEffect(() => {
    const modal = document.getElementById('contact-modal')
    if (modal) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const hasHidden = modal.classList.contains('hidden')
            setIsOpen(!hasHidden)
          }
        })
      })
      observer.observe(modal, { attributes: true })
      return () => observer.disconnect()
    }
  }, [])

  const handleLinkedInClick = () => {
    console.log('Opening LinkedIn profile')
    window.open('https://www.linkedin.com/in/dementor-abdul-saboor/', '_blank')
    toast.success('Opening LinkedIn profile...')
  }

  const handleEmailClick = () => {
    console.log('Opening email client')
    window.location.href = 'mailto:2022cs10@gmail.com'
    toast.success('Opening email client...')
  }

  const closeModal = () => {
    console.log('Closing contact modal')
    const modal = document.getElementById('contact-modal')
    if (modal) {
      modal.classList.add('hidden')
    }
  }

  return (
    <div id="contact-modal" className="hidden">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold gradient-text">
              Get in Touch
            </DialogTitle>
            <button 
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <X className="h-4 w-4" />
            </button>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <p className="text-center text-gray-600 mb-6">
              Ready to explore the future of medical AI? Let's connect and discuss how 
              XMedical AI can transform healthcare diagnostics.
            </p>

            <div className="grid gap-4">
              {/* LinkedIn Card */}
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={handleLinkedInClick}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center group-hover:animate-pulse-glow">
                      <Linkedin className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 flex items-center">
                        LinkedIn Profile
                        <ExternalLink className="h-4 w-4 ml-2 text-gray-400" />
                      </h3>
                      <p className="text-sm text-gray-600">Connect professionally</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={handleEmailClick}>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-medical-primary to-medical-accent rounded-full flex items-center justify-center group-hover:animate-pulse-glow">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 flex items-center">
                        Email Direct
                        <ExternalLink className="h-4 w-4 ml-2 text-gray-400" />
                      </h3>
                      <p className="text-sm text-gray-600">2022cs10@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Abdul Saboor • AI Researcher & Founder of XMedical AI
                <br />
                Specializing in Explainable Medical AI Solutions
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ContactModal