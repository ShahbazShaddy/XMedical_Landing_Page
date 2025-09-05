import React from 'react'
import { Card, CardContent } from './ui/card'
import { Code, Database, Cpu, Globe } from 'lucide-react'

const TechStack = () => {
  console.log('TechStack component rendered')

  const techCategories = [
    {
      icon: Cpu,
      title: 'Machine Learning',
      color: 'from-blue-500 to-blue-600',
      technologies: ['PyTorch', 'scikit-learn', 'DenseNet121', 'Grad-CAM', 'Transfer Learning']
    },
    {
      icon: Code,
      title: 'Development',
      color: 'from-green-500 to-green-600',
      technologies: ['Python', 'Streamlit', 'NumPy', 'Pandas', 'Matplotlib']
    },
    {
      icon: Database,
      title: 'Data & Models',
      color: 'from-purple-500 to-purple-600',
      technologies: ['Kaggle Datasets', 'Image Processing', 'Feature Engineering', 'Model Fusion']
    },
    {
      icon: Globe,
      title: 'Deployment',
      color: 'from-orange-500 to-orange-600',
      technologies: ['Streamlit Cloud', 'Groq API', 'Web Interface', 'Real-time Inference']
    }
  ]

  return (
    <section id="technology" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Cutting-Edge <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with industry-leading frameworks and tools to ensure reliability, 
            scalability, and state-of-the-art performance in medical AI applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techCategories.map((category, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200"
            >
              <CardContent className="p-6">
                <div className={`mb-4 mx-auto w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center group-hover:animate-pulse-glow`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-4 text-center text-gray-900">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.technologies.map((tech, techIndex) => (
                    <li 
                      key={techIndex}
                      className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-center hover:bg-medical-light transition-colors"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Multimodal AI Architecture
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Clinical Data Path */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-20 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-sm font-medium text-blue-700">Clinical Data</span>
              </div>
              <div className="w-1 h-8 bg-blue-300"></div>
              <div className="w-32 h-16 bg-blue-200 rounded-lg flex items-center justify-center">
                <span className="text-xs text-blue-700">ML Models</span>
              </div>
            </div>

            {/* Medical Imaging Path */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-20 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-sm font-medium text-green-700">X-ray Images</span>
              </div>
              <div className="w-1 h-8 bg-green-300"></div>
              <div className="w-32 h-16 bg-green-200 rounded-lg flex items-center justify-center">
                <span className="text-xs text-green-700">DenseNet121</span>
              </div>
            </div>

            {/* Fusion */}
            <div className="flex flex-col items-center">
              <div className="w-2 h-8 bg-gray-300 lg:hidden"></div>
              <div className="w-32 h-20 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-sm font-medium text-purple-700">Late Fusion</span>
              </div>
            </div>

            {/* Output */}
            <div className="flex flex-col items-center">
              <div className="w-2 h-8 bg-gray-300 lg:hidden"></div>
              <div className="w-32 h-20 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-sm font-medium text-orange-700">Explainable Results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack