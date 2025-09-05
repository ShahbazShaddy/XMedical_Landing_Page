import React from 'react'
import { Card, CardContent } from './ui/card'
import { GraduationCap, Award, Users, Target } from 'lucide-react'

const About = () => {
  console.log('About component rendered')

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              About <span className="gradient-text">XMedical AI</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              XMedical AI represents a breakthrough in medical diagnosis technology, combining 
              cutting-edge machine learning with explainable AI to assist healthcare professionals 
              in making more accurate and informed decisions.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our multimodal approach integrates clinical data analysis with advanced medical 
              imaging processing, providing comprehensive diagnostic support for breast cancer 
              and pneumonia detection with unprecedented accuracy and transparency.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-medical-primary to-medical-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Mission</h3>
                <p className="text-sm text-gray-600">Democratize AI-powered medical diagnosis</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-medical-accent to-medical-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Impact</h3>
                <p className="text-sm text-gray-600">Improving healthcare outcomes globally</p>
              </div>
            </div>
          </div>

          {/* Right Column - Team & Achievements */}
          <div className="space-y-6">
            {/* Founder Card */}
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-medical-primary to-medical-accent rounded-full flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      Hussain Iftikhar
                    </h3>
                    <p className="text-medical-primary font-medium mb-2">Founder & Lead AI Researcher</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Passionate AI researcher specializing in medical applications of machine learning. 
                      Dedicated to creating explainable AI solutions that bridge the gap between 
                      technology and healthcare.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Award className="h-5 w-5 text-medical-accent mr-2" />
                  Key Achievements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">97.06% accuracy in breast cancer prediction</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">90.71% accuracy in pneumonia detection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">First explainable multimodal medical AI platform</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-medical-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Open-source research contribution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Research Background */}
            <Card className="border-gray-200 bg-gradient-to-br from-medical-light to-blue-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Foundation</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Built on extensive research using Kaggle datasets for breast cancer prediction 
                  and chest X-ray pneumonia classification, combining state-of-the-art deep learning 
                  techniques with explainable AI methodologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About