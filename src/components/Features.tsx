import React from 'react'
import { Card, CardContent } from './ui/card'
import { Brain, Image, BarChart3, Shield, Microscope, FileText, Users, Clock } from 'lucide-react'

const Features = () => {
  console.log('Features component rendered')

  const features = [
    {
      icon: Brain,
      title: 'Multimodal AI',
      description: 'Combines clinical data and medical imaging through advanced late fusion techniques for comprehensive diagnosis.'
    },
    {
      icon: Shield,
      title: 'Explainable AI',
      description: 'Grad-CAM visualizations and LLM-generated explanations provide transparent, interpretable results.'
    },
    {
      icon: Microscope,
      title: 'Dual Diagnosis',
      description: 'Specialized models for breast cancer prediction and pneumonia detection with high accuracy rates.'
    },
    {
      icon: Image,
      title: 'Medical Imaging',
      description: 'DenseNet121 architecture with transfer learning for precise chest X-ray pneumonia detection.'
    },
    {
      icon: BarChart3,
      title: 'Clinical Analytics',
      description: 'Advanced machine learning on structured clinical data with demographic and tumor characteristics.'
    },
    {
      icon: FileText,
      title: 'Detailed Reports',
      description: 'Comprehensive diagnostic reports with probability scores, visualizations, and clinical interpretations.'
    },
    {
      icon: Users,
      title: 'Healthcare Ready',
      description: 'Designed for medical professionals with intuitive interface and clinical workflow integration.'
    },
    {
      icon: Clock,
      title: 'Real-time Analysis',
      description: 'Fast inference with immediate results for time-critical medical decision making.'
    }
  ]

  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Advanced <span className="gradient-text">AI Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our cutting-edge platform leverages the latest advances in machine learning and medical AI 
            to provide accurate, explainable diagnostic assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-100 hover:border-medical-primary/20"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-medical-primary to-medical-accent rounded-full flex items-center justify-center group-hover:animate-pulse-glow">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="mt-20 bg-gradient-to-r from-medical-light to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Validated Performance Metrics
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-medical-primary mb-2">97.06%</div>
              <div className="text-sm text-gray-600">Cancer Model Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-medical-primary mb-2">90.71%</div>
              <div className="text-sm text-gray-600">Pneumonia Detection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-medical-primary mb-2">97.16%</div>
              <div className="text-sm text-gray-600">AUROC Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-medical-primary mb-2">5,216</div>
              <div className="text-sm text-gray-600">Training Images</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features