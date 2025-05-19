import React, { useState } from 'react';
import { MessageCircle, Mail, LifeBuoy, ExternalLink, Clock, AlertTriangle } from 'lucide-react';

const NeedHelpSection = () => {
  const [selectedContact, setSelectedContact] = useState('');
  
  const contactOptions = [
    {
      id: 'email',
      title: 'Email Support',
      icon: <Mail size={24} className="text-blue-500" />,
      description: 'Send us an email and receive a response within 24-48 hours.',
      supportTime: '24-48 hours',
      action: 'Email Us',
      actionUrl: 'mailto:support@osu.ppy.sh'
    },
    {
      id: 'chat',
      title: 'Community Discord',
      icon: <MessageCircle size={24} className="text-indigo-500" />,
      description: 'Join our Discord server to get help from the community and staff members.',
      supportTime: 'Real-time during active hours',
      action: 'Join Discord',
      actionUrl: '#discord'
    },
    {
      id: 'urgent',
      title: 'Urgent Help',
      icon: <AlertTriangle size={24} className="text-red-500" />,
      description: 'For account security issues, payment problems, or other urgent matters.',
      supportTime: 'ASAP during business hours',
      action: 'Get Urgent Help',
      actionUrl: '#urgent'
    }
  ];

  const showContactDetails = (id) => {
    setSelectedContact(id);
  };

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 pb-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-pink-800 via-white to-indigo-100 bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(139,0,78,0.7)] ">
        No, Really, I Do Need Help
      </h1>

      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm mb-4 md:mb-0 md:mr-6">
            <LifeBuoy size={32} className="text-pink-900" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-pink-900 dark:text-pink-800 mb-2">
              We're Here To Help
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you've checked the Wiki and FAQ and still need assistance, you've come to the right place. 
              We have multiple support channels to help you resolve your issue as quickly as possible.
            </p>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-pink-900 dark:text-pink-800">Choose a Support Option</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactOptions.map(option => (
            <div 
              key={option.id}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 border-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md ${
                selectedContact === option.id 
                  ? 'border-purple-500 dark:border-purple-400 shadow-md' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}
              onClick={() => showContactDetails(option.id)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {option.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">{option.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{option.description}</p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Clock size={14} className="mr-1" />
                  <span>Response time: {option.supportTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedContact && (
        <section className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-8 animate-fade-in">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            {contactOptions.find(o => o.id === selectedContact)?.title}
          </h3>
          
          {selectedContact === 'email' && (
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our support team is standing by to help you with any issues. Please provide as much detail as possible about your problem so we can assist you efficiently.
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Tips for faster support:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Include your OSU username</li>
                  <li>Describe the issue in detail</li>
                  <li>Mention any steps you've already tried</li>
                  <li>Attach screenshots if applicable</li>
                  <li>Include system specifications for technical issues</li>
                </ul>
              </div>
              
              <div className="flex justify-center">
                <a
                  href="mailto:support@osu.ppy.sh"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center transition-colors duration-200"
                >
                  <Mail size={18} className="mr-2" />
                  Email Support Team
                </a>
              </div>
            </div>
          )}
          
          {selectedContact === 'chat' && (
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The OSU Discord community is active 24/7 with players and staff members who can help with most issues. Join our server to get real-time assistance.
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Discord channels:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li><span className="font-medium">#help</span> - General assistance for any OSU-related questions</li>
                  <li><span className="font-medium">#technical-support</span> - Help with technical issues and bugs</li>
                  <li><span className="font-medium">#mapping-help</span> - Support for beatmap creation</li>
                  <li><span className="font-medium">#modding</span> - Beatmap feedback and improvement</li>
                  <li><span className="font-medium">#gameplay</span> - Tips and advice for improving your skills</li>
                </ul>
              </div>
              
              <div className="flex justify-center">
                <a
                  href="#discord"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center transition-colors duration-200"
                >
                  <ExternalLink size={18} className="mr-2" />
                  Join Discord Server
                </a>
              </div>
            </div>
          )}
          
          {selectedContact === 'urgent' && (
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our urgent support channel is reserved for critical issues that require immediate attention. This includes account security compromises, payment issues, or serious violations.
              </p>
              
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-md mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-red-700 dark:text-red-400 font-medium">Please note:</p>
                    <p className="text-red-700 dark:text-red-500 mt-1">
                      This channel is strictly for urgent matters. For general help, please use our standard support channels. Misuse of urgent support may result in delayed responses for your future inquiries.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                <h4 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Urgent issues include:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Account compromised or unauthorized access</li>
                  <li>Payment processing issues or billing disputes</li>
                  <li>Reporting harmful content that requires immediate removal</li>
                  <li>Serious violations that impact game integrity</li>
                  <li>Technical issues affecting large numbers of players</li>
                </ul>
              </div>
              
              <div className="flex justify-center">
                <a
                  href="mailto:urgent@osu.ppy.sh"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center transition-colors duration-200"
                >
                  <AlertTriangle size={18} className="mr-2" />
                  Contact Urgent Support
                </a>
              </div>
            </div>
          )}
        </section>
      )}

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-pink-900 dark:text-pink-800">Account Recovery</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you're having trouble accessing your account, our recovery process can help:
          </p>
          
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
            <li>Visit the <a href="#" className="text-pink-900 dark:text-pink-800 hover:underline">password reset page</a></li>
            <li>Enter the email address associated with your account</li>
            <li>Follow the instructions sent to your email</li>
            <li>If you no longer have access to your email, use the <a href="#" className="text-pink-900 dark:text-pink-800 hover:underline">account recovery form</a></li>
          </ol>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md">
            <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-400">Account verification</h4>
            <p className="text-gray-700 dark:text-gray-300">
              For account recovery without email access, you'll need to provide information that proves ownership, such as payment receipts, registration details, or other account information only the owner would know.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-pink-900 dark:text-pink-800">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-gray-200">Community Forums</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our forums have a wealth of information and a helpful community that can assist with many issues.
            </p>
            <a 
              href="#" 
              className="text-pink-900 dark:text-pink-800 hover:underline inline-flex items-center"
            >
              Visit Forums <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-gray-200">Video Tutorials</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our official YouTube channel features tutorials on gameplay, mapping, and troubleshooting common issues.
            </p>
            <a 
              href="#" 
              className="text-pink-900 dark:text-pink-800 hover:underline inline-flex items-center"
            >
              Watch Tutorials <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NeedHelpSection;