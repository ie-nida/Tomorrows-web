import React, { useState, useEffect } from 'react';
import { installationSteps } from '../data/constants';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const GuideSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const nextStep = () => {
    setActiveStep(prev => (prev === installationSteps.length - 1 ? 0 : prev + 1));
  };
  
  const prevStep = () => {
    setActiveStep(prev => (prev === 0 ? installationSteps.length - 1 : prev - 1));
  };
  
  // Auto advance every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextStep();
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 bg-gradient-to-b from-[#261038] via-[#151226] to-[#0F0F1A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-pink-600 via-gray-300 to-indigo-600 bg-clip-text drop-shadow-[0_5px_10px_rgba(139,0,78,0.7)] mb-4">Quick Installation Guide</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get up and running with osu! in just a few simple steps.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-[#151528] shadow-xl">
            {/* Step Progress */}
            <div className="flex border-b border-[#2A2A3E]">
              {installationSteps.map((step, index) => (
                <button
                  key={index}
                  className={`flex-1 py-4 text-center relative transition-all ${
                    activeStep === index ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full mb-2 flex items-center justify-center ${
                      activeStep === index ? 'bg-gradient-to-r from-pink-900 to-indigo-900' : 'bg-[#2A2A3E]'
                    }`}>
                      {step.id}
                    </div>
                    <div className="font-medium text-sm md:text-base">{step.title}</div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-pink-900 to-indigo-900 transition-all duration-500 ${
                    activeStep === index ? 'w-full' : 'w-0'
                  }`} />
                </button>
              ))}
            </div>
            
            {/* Step Content */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {installationSteps[activeStep].title}
                </h3>
                <p className="text-gray-300 mb-8">
                  {installationSteps[activeStep].description}
                </p>
                
                <div className="flex space-x-4">
                  <button 
                    onClick={prevStep}
                    className="p-3 rounded-full bg-[#2A2A3E] text-white hover:bg-[#3A3A4E] transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={nextStep}
                    className="p-3 rounded-full bg-[#2A2A3E] text-white hover:bg-[#3A3A4E] transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="relative h-64 md:h-auto overflow-hidden md:order-last">
                {installationSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      activeStep === index ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      backgroundImage: `url(${step.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#151528] via-transparent to-transparent md:hidden" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
