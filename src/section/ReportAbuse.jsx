import React, { useState } from 'react';
import { Send, AlertCircle, Check, X } from 'lucide-react';

const ReportCategories = [
  { id: "chat", label: "Chat Abuse", description: "Report offensive messages, harassment, or inappropriate chat behavior" },
  { id: "cheating", label: "Cheating or Hacking", description: "Report suspected cheating, hacking, or score manipulation" },
  { id: "content", label: "Inappropriate Content", description: "Report inappropriate beatmaps, avatars, or other user content" },
  { id: "harassment", label: "Harassment or Bullying", description: "Report targeted harassment, bullying, or threats" },
  { id: "impersonation", label: "Impersonation", description: "Report someone impersonating you or another user" },
  { id: "other", label: "Other Violation", description: "Report any other rule violations not covered above" }
];

const ReportAbuse = ({ language }) => {
  const [formData, setFormData] = useState({
    reporterUsername: "",
    offenderUsername: "",
    category: "",
    description: "",
    evidence: "",
    email: "",
  });
  
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const newErrors = {};
    
    if (!formData.reporterUsername.trim()) {
      newErrors.reporterUsername = "Your username is required";
    }
    
    if (!formData.offenderUsername.trim()) {
      newErrors.offenderUsername = "Offender's username is required";
    }
    
    if (!formData.category) {
      newErrors.category = "Please select a category";
    }
    
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.length < 20) {
      newErrors.description = "Description must be at least 20 characters";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    setSubmitting(true);
    
    try {
      // Simulate sending email
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real implementation, you would send the data to a server endpoint
      // that would then format and send an email to your Gmail address
      
      setSubmitted(true);
      setSubmitting(false);
      
      // Reset form after successful submission
      setFormData({
        reporterUsername: "",
        offenderUsername: "",
        category: "",
        description: "",
        evidence: "",
        email: "",
      });
    } catch (error) {
      setSubmitError("There was a problem submitting your report. Please try again.");
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setSubmitError("");
  };

  return (
    <div className="fade-in">
      <h1 className="text-4xl font-bold mb-6 pb-2 border-b border-[#3a3a3a] text-pink-400">
        Report Abuse
      </h1>
      
      <div className="bg-[#2a2a2a] rounded-lg p-5 mb-8">
        <div className="flex items-start">
          <AlertCircle size={24} className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-semibold text-yellow-400 mb-2">How the reporting process works</h2>
            <p className="text-gray-300 mb-3">
              Reports are carefully reviewed by our moderation team. To help us process your report effectively, please provide:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
              <li>Clear description of the incident</li>
              <li>Exact usernames of those involved</li>
              <li>Screenshots or links as evidence when possible</li>
              <li>Date and time of the incident</li>
            </ul>
            <p className="text-gray-300 mt-3">
              All reports are handled confidentially. We'll contact you via email if we need additional information.
            </p>
          </div>
        </div>
      </div>
      
      {submitted ? (
        <div className="bg-[#2a3a2a] rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check size={32} className="text-green-400" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-green-400 mb-4">Report Submitted Successfully</h2>
          <p className="text-gray-300 mb-6">
            Thank you for your report. Our moderation team has been notified and will review your submission. 
            We'll contact you at the provided email address if additional information is needed.
          </p>
          <button 
            onClick={resetForm}
            className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            Submit Another Report
          </button>
        </div>
      ) : submitError ? (
        <div className="bg-[#3a2a2a] rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
              <X size={32} className="text-red-400" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-red-400 mb-4">Submission Error</h2>
          <p className="text-gray-300 mb-6">{submitError}</p>
          <button 
            onClick={resetForm}
            className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Your Username */}
            <div>
              <label 
                htmlFor="reporterUsername" 
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Your Username <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="reporterUsername"
                name="reporterUsername"
                value={formData.reporterUsername}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-[#2a2a2a] border ${
                  errors.reporterUsername ? 'border-red-500' : 'border-[#3a3a3a]'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white`}
                placeholder="Enter your osu! username"
              />
              {errors.reporterUsername && (
                <p className="mt-1 text-sm text-red-400">{errors.reporterUsername}</p>
              )}
            </div>
            
            {/* Offender's Username */}
            <div>
              <label 
                htmlFor="offenderUsername" 
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Offender's Username <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="offenderUsername"
                name="offenderUsername"
                value={formData.offenderUsername}
                onChange={handleChange}
                className={`w-full px-4 py-2 bg-[#2a2a2a] border ${
                  errors.offenderUsername ? 'border-red-500' : 'border-[#3a3a3a]'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white`}
                placeholder="Enter offender's osu! username"
              />
              {errors.offenderUsername && (
                <p className="mt-1 text-sm text-red-400">{errors.offenderUsername}</p>
              )}
            </div>
          </div>
          
          {/* Report Category */}
          <div>
            <label 
              htmlFor="category" 
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Report Category <span className="text-red-400">*</span>
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-[#2a2a2a] border ${
                errors.category ? 'border-red-500' : 'border-[#3a3a3a]'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white`}
            >
              <option value="">Select a category</option>
              {ReportCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
            {errors.category ? (
              <p className="mt-1 text-sm text-red-400">{errors.category}</p>
            ) : (
              <p className="mt-1 text-sm text-gray-400">
                {formData.category 
                  ? ReportCategories.find(c => c.id === formData.category)?.description 
                  : "Please select the most appropriate category for your report"}
              </p>
            )}
          </div>
          
          {/* Description */}
          <div>
            <label 
              htmlFor="description" 
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Description <span className="text-red-400">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-2 bg-[#2a2a2a] border ${
                errors.description ? 'border-red-500' : 'border-[#3a3a3a]'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white`}
              placeholder="Describe what happened in detail..."
            />
            {errors.description ? (
              <p className="mt-1 text-sm text-red-400">{errors.description}</p>
            ) : (
              <p className="mt-1 text-sm text-gray-400">
                Please be specific and include relevant details such as date, time, and context
              </p>
            )}
          </div>
          
          {/* Evidence */}
          <div>
            <label 
              htmlFor="evidence" 
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Evidence (Optional)
            </label>
            <input
              type="text"
              id="evidence"
              name="evidence"
              value={formData.evidence}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
              placeholder="URLs to screenshots, videos, or chat logs"
            />
            <p className="mt-1 text-sm text-gray-400">
              Provide links to screenshots or relevant evidence (Imgur, YouTube, etc.)
            </p>
          </div>
          
          {/* Email */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Your Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 bg-[#2a2a2a] border ${
                errors.email ? 'border-red-500' : 'border-[#3a3a3a]'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white`}
              placeholder="Enter your email address"
            />
            {errors.email ? (
              <p className="mt-1 text-sm text-red-400">{errors.email}</p>
            ) : (
              <p className="mt-1 text-sm text-gray-400">
                We'll contact you at this address if we need more information
              </p>
            )}
          </div>
          
          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={submitting}
              className={`w-full md:w-auto px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-md transition-colors flex items-center justify-center ${
                submitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {submitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
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
          
          <p className="text-sm text-gray-400 italic">
            Reports are sent directly to <span className="text-yellow-400">nida.nidashahzad@gmail.com</span> for review by our moderation team.
          </p>
        </form>
      )}
    </div>
  );
};

export default ReportAbuse;