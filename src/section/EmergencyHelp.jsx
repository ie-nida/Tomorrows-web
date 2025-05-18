import React, { useState } from 'react';
import { AlertCircle, PhoneCall, Mail, ExternalLink, MessageSquare, Clock } from 'lucide-react';

const EmergencyHelp = ({ language }) => {
  const [showCrisisInfo, setShowCrisisInfo] = useState(false);

  return (
    <div className="fade-in">
      <h1 className="text-4xl font-bold mb-6 pb-2 border-b border-[#3a3a3a] text-pink-400">
        Need Help Now
      </h1>
      
      <div className="bg-red-500/10 border-l-4 border-red-500 rounded-md p-5 mb-8">
        <div className="flex items-start">
          <AlertCircle size={24} className="text-red-400 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-semibold text-red-400 mb-2">Emergency Assistance</h2>
            <p className="text-gray-300">
              If you're experiencing a crisis or emergency situation, please reach out for help immediately. This page provides resources for urgent assistance.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center">
            <PhoneCall size={20} className="mr-2" />
            Priority Support
          </h2>
          <p className="text-gray-300 mb-4">
            For urgent account or game-related issues that require immediate attention:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Mail size={18} className="text-pink-400 mr-2 mt-1" />
              <div>
                <p className="text-gray-200">Priority Email</p>
                <a 
                  href="mailto:nida.nidashahzad@gmail.com?subject=URGENT: osu! Help Request" 
                  className="text-pink-400 hover:underline"
                >
                  nida.nidashahzad@gmail.com
                </a>
                <p className="text-sm text-gray-400 mt-1">Subject line must start with "URGENT:"</p>
              </div>
            </li>
            <li className="flex items-start">
              <MessageSquare size={18} className="text-pink-400 mr-2 mt-1" />
              <div>
                <p className="text-gray-200">Discord Support</p>
                <a 
                  href="https://discord.gg/ppy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:underline flex items-center"
                >
                  Official osu! Discord <ExternalLink size={14} className="ml-1" />
                </a>
                <p className="text-sm text-gray-400 mt-1">Use the #help channel and tag @Support</p>
              </div>
            </li>
            <li className="flex items-start">
              <Clock size={18} className="text-pink-400 mr-2 mt-1" />
              <div>
                <p className="text-gray-200">Response Time</p>
                <p className="text-sm text-gray-300">Priority requests are typically responded to within 2-4 hours during business hours.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">Common Urgent Issues</h2>
          <ul className="space-y-3">
            <li className="border-b border-[#3a3a3a] pb-3">
              <h3 className="font-medium text-pink-400 mb-1">Account Compromised/Hacked</h3>
              <p className="text-gray-300">If you believe your account has been compromised, email us immediately with details of suspicious activity.</p>
            </li>
            <li className="border-b border-[#3a3a3a] pb-3">
              <h3 className="font-medium text-pink-400 mb-1">Payment Problems</h3>
              <p className="text-gray-300">For urgent issues with supporter payments or incorrect charges.</p>
            </li>
            <li className="border-b border-[#3a3a3a] pb-3">
              <h3 className="font-medium text-pink-400 mb-1">False Restriction</h3>
              <p className="text-gray-300">If your account has been restricted and you believe it was done in error.</p>
            </li>
            <li>
              <h3 className="font-medium text-pink-400 mb-1">Serious Harassment</h3>
              <p className="text-gray-300">For cases of severe harassment, threats, or doxxing that require immediate moderator intervention.</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-[#2a2a2a] rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-yellow-400 mb-4">What to Include in Urgent Requests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-pink-400 mb-2">Required Information</h3>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Your osu! username</li>
              <li>Detailed description of the issue</li>
              <li>When the problem started</li>
              <li>Any error messages you received</li>
              <li>Steps you've already taken to resolve it</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-pink-400 mb-2">Helpful to Include</h3>
            <ul className="space-y-2 text-gray-300 list-disc list-inside">
              <li>Screenshots of the issue</li>
              <li>Your system specifications</li>
              <li>Links to specific content in question</li>
              <li>User IDs of others involved (if applicable)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <button 
          onClick={() => setShowCrisisInfo(!showCrisisInfo)}
          className="w-full bg-[#3a2a2a] hover:bg-[#4a3a3a] text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-between"
        >
          <div className="flex items-center">
            <AlertCircle size={20} className="text-red-400 mr-2" />
            <span className="text-lg">Personal Crisis Resources</span>
          </div>
          <span className="text-sm">{showCrisisInfo ? "Hide" : "Show"}</span>
        </button>
        
        {showCrisisInfo && (
          <div className="mt-4 bg-[#2a2a2a] rounded-lg p-6 animate-fadeIn">
            <p className="text-gray-300 mb-4">
              If you're experiencing a personal crisis or emergency, please contact one of these resources for immediate help:
            </p>
            
            <div className="space-y-4">
              <div className="border-b border-[#3a3a3a] pb-4">
                <h3 className="text-lg font-medium text-pink-400 mb-2">International Crisis Resources</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <PhoneCall size={18} className="text-yellow-400 mr-2 mt-1" />
                    <div>
                      <p className="text-gray-200">International Association for Suicide Prevention</p>
                      <a 
                        href="https://www.iasp.info/resources/Crisis_Centres/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:underline flex items-center"
                      >
                        Find Crisis Centers Worldwide <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <PhoneCall size={18} className="text-yellow-400 mr-2 mt-1" />
                    <div>
                      <p className="text-gray-200">Befrienders Worldwide</p>
                      <a 
                        href="https://www.befrienders.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:underline flex items-center"
                      >
                        Find Helplines by Country <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="border-b border-[#3a3a3a] pb-4">
                <h3 className="text-lg font-medium text-pink-400 mb-2">United States</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <PhoneCall size={18} className="text-yellow-400 mr-2 mt-1" />
                    <div>
                      <p className="text-gray-200">988 Suicide & Crisis Lifeline</p>
                      <p className="text-pink-400 font-bold">988</p>
                      <p className="text-sm text-gray-300">Call or text 988 (24/7)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MessageSquare size={18} className="text-yellow-400 mr-2 mt-1" />
                    <div>
                      <p className="text-gray-200">Crisis Text Line</p>
                      <p className="text-pink-400 font-bold">Text HOME to 741741</p>
                      <p className="text-sm text-gray-300">Available 24/7</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="border-b border-[#3a3a3a] pb-4">
                <h3 className="text-lg font-medium text-pink-400 mb-2">United Kingdom</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <PhoneCall size={18} className="text-yellow-400 mr-2 mt-1" />
                    <div>
                      <p className="text-gray-200">Samaritans</p>
                      <p className="text-pink-400 font-bold">116 123</p>
                      <p className="text-sm text-gray-300">Available 24/7</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-pink-400 mb-2">Online Resources</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ExternalLink size={18} className="text-yellow-400 mr-2 mt-1" />
                    <div>
                      <p className="text-gray-200">7 Cups - Online Therapy & Free Counseling</p>
                      <a 
                        href="https://www.7cups.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:underline flex items-center"
                      >
                        Visit 7 Cups <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-[#3a3a3a] rounded-md p-4">
              <p className="text-gray-300 text-center italic">
                Remember, reaching out for help is a sign of strength, not weakness. You are not alone.
              </p>
            </div>
          </div>
        )}
      </div>
      
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold text-yellow-400 mb-4">Still Need Help?</h2>
        <p className="text-gray-300 mb-6">
          If your issue doesn't require immediate attention or isn't covered above, you can also:
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'mailto:nida.nidashahzad@gmail.com';
            }}
            className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center"
          >
            <Mail size={18} className="mr-2" />
            Contact Support
          </a>
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('[href="faq"]')?.dispatchEvent(new MouseEvent('click'));
            }}
            className="bg-[#3a3a3a] hover:bg-[#4a4a4a] text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center"
          >
            <MessageSquare size={18} className="mr-2" />
            Check FAQ
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmergencyHelp;