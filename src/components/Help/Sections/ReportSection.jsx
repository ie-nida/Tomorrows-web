import React, { useState } from 'react';
import { AlertTriangle, Send, User, MessageSquare, Calendar, Flag } from 'lucide-react';

const ReportSection = () => {
  const [reportData, setReportData] = useState({
    username: '',
    userReporting: '',
    email: '',
    reportType: '',
    description: '',
    dateOfIncident: '',
    evidence: '',
    agreeToFollowUp: false,
    submitted: false,
    submitting: false,
    error: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReportData({
      ...reportData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setReportData({
      ...reportData,
      [name]: checked
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!reportData.username || !reportData.email || !reportData.reportType || !reportData.description) {
      setReportData({
        ...reportData,
        error: 'Please fill in all required fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(reportData.email)) {
      setReportData({
        ...reportData,
        error: 'Please enter a valid email address.'
      });
      return;
    }

    setReportData({
      ...reportData,
      submitting: true,
      error: ''
    });

    try {
      // Simulate API call - in a real app, this would send data to a server
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real implementation, we'd send this data to an endpoint
      console.log('Report submitted:', { 
        to: 'nida.nidashahzad@gmail.com',
        subject: `OSU Abuse Report: ${reportData.reportType}`,
        body: {
          reportedUser: reportData.username,
          reportingUser: reportData.userReporting,
          contactEmail: reportData.email,
          type: reportData.reportType,
          description: reportData.description,
          date: reportData.dateOfIncident,
          evidence: reportData.evidence,
          allowFollowUp: reportData.agreeToFollowUp
        }
      });
      
      // Show success state
      setReportData({
        ...reportData,
        submitted: true,
        submitting: false
      });
    } catch (error) {
      setReportData({
        ...reportData,
        submitting: false,
        error: 'There was an error submitting your report. Please try again.'
      });
    }
  };

  const resetForm = () => {
    setReportData({
      username: '',
      userReporting: '',
      email: '',
      reportType: '',
      description: '',
      dateOfIncident: '',
      evidence: '',
      agreeToFollowUp: false,
      submitted: false,
      submitting: false,
      error: ''
    });
  };

  if (reportData.submitted) {
    return (
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 pb-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-pink-800 via-white to-indigo-100 bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(139,0,78,0.7)] [animation:bounceSlow_3s_ease-in-out_infinite]">
          Report Abuse
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Report Submitted Successfully</h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Thank you for your report. Our moderation team has been notified and will review your submission as soon as possible. If you provided your email and opted to allow follow-ups, we'll contact you with any updates.
          </p>
          
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg mb-6 text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Report Type:</p>
            <p className="font-medium text-gray-800 dark:text-gray-200 mb-3">{reportData.reportType}</p>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Reported User:</p>
            <p className="font-medium text-gray-800 dark:text-gray-200">{reportData.username}</p>
          </div>
          
          <button
            onClick={resetForm}
            className="px-6 py-2 bg-pink-800 hover:bg-pink-9s00 text-white rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-opacity-50"
          >
            Submit Another Report
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className=" md:text-4xl  mb-6 pb-4 border-b border-gray-200 dark:border-gray-700 text-5xl font-extrabold bg-gradient-to-r from-pink-800 via-white to-indigo-100 bg-clip-text text-transparent drop-shadow-[0_5px_10px_rgba(139,0,78,0.7)] ">
        Report Abuse
      </h1>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-md mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-6 w-6 text-yellow-500" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700 dark:text-yellow-400 font-medium">Important</p>
            <p className="text-yellow-700 dark:text-yellow-500 mt-1">
              Please only report genuine rule violations. False or malicious reports may result in actions against your account. 
              Be sure to include as much detail as possible to help our moderation team investigate.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-8">
        <form onSubmit={handleSubmit}>
          {reportData.error && (
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-md mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
                <div className="ml-3">
                  <p className="text-red-700 dark:text-red-400 font-medium">Error</p>
                  <p className="text-red-700 dark:text-red-400 mt-1">{reportData.error}</p>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="username">
                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  Username to Report <span className="text-red-500">*</span>
                </div>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={reportData.username}
                onChange={handleInputChange}
                placeholder="Enter username"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-900"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="userReporting">
                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  Your Username (Optional)
                </div>
              </label>
              <input
                type="text"
                id="userReporting"
                name="userReporting"
                value={reportData.userReporting}
                onChange={handleInputChange}
                placeholder="Your username (if applicable)"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-900"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={reportData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-900"
              required
            />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Your email is required for verification and potential follow-up.
            </p>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="reportType">
              <div className="flex items-center">
                <Flag size={16} className="mr-1" />
                Type of Report <span className="text-red-500">*</span>
              </div>
            </label>
            <select
              id="reportType"
              name="reportType"
              value={reportData.reportType}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-900"
              required
            >
              <option value="">Select a reason</option>
              <option value="Inappropriate Chat">Inappropriate Chat</option>
              <option value="Harassment">Harassment</option>
              <option value="Cheating">Cheating</option>
              <option value="Inappropriate Username">Inappropriate Username</option>
              <option value="Inappropriate Avatar">Inappropriate Avatar</option>
              <option value="Multi-accounting">Multi-accounting</option>
              <option value="Account Sharing">Account Sharing</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="dateOfIncident">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                Date of Incident
              </div>
            </label>
            <input
              type="date"
              id="dateOfIncident"
              name="dateOfIncident"
              value={reportData.dateOfIncident}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-900"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="description">
              <div className="flex items-center">
                <MessageSquare size={16} className="mr-1" />
                Description <span className="text-red-500">*</span>
              </div>
            </label>
            <textarea
              id="description"
              name="description"
              value={reportData.description}
              onChange={handleInputChange}
              rows={5}
              placeholder="Please provide as much detail about the incident as possible..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-900"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="evidence">
              Evidence (URLs to screenshots, chat logs, etc.)
            </label>
            <textarea
              id="evidence"
              name="evidence"
              value={reportData.evidence}
              onChange={handleInputChange}
              rows={3}
              placeholder="Add links to any evidence (screenshots, videos, etc.)"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-900"
            />
          </div>
          
          <div className="mb-8">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreeToFollowUp"
                name="agreeToFollowUp"
                checked={reportData.agreeToFollowUp}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-pink-800 focus:ring-pink-900 border-gray-300 rounded"
              />
              <label htmlFor="agreeToFollowUp" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                I agree to be contacted for follow-up information if needed
              </label>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={reportData.submitting}
              className="px-6 py-3 bg-pink-800 hover:bg-pink-800 text-white rounded-full flex items-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-900 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {reportData.submitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Submit Report
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-gray-200">What Happens Next?</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Our moderation team will review your report within 24-48 hours</li>
          <li>We may contact you for additional information if necessary</li>
          <li>The reported user may be contacted depending on the nature of the report</li>
          <li>Action will be taken if the report is substantiated, ranging from warnings to account termination</li>
          <li>You may be notified of the outcome if you opted to allow follow-ups</li>
        </ol>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          We take all reports seriously and appreciate your help in maintaining a positive community.
        </p>
      </div>
    </div>
  );
};

export default ReportSection;