import { useState } from 'react';
import { X, Download, Mail, FileText, CheckCircle } from 'lucide-react';

const CaseStudyDownload = ({ isOpen, onClose, caseStudyTitle = "B2B Lead Generation Success Story" }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes - create a dummy PDF download
      const dummyPdfUrl = '/dummy-case-study.pdf'; // This should point to your actual PDF file
      
      // Create a temporary link element to trigger download
      const link = document.createElement('a');
      link.href = dummyPdfUrl;
      link.download = `DartsUnity_${caseStudyTitle.replace(/\s+/g, '_')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsSubmitted(true);
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 5000);
      
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />
      
      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="absolute right-4 top-4 z-10 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Modal Content */}
          <div className="bg-white px-6 pb-6 pt-8 sm:p-8 sm:pb-8">
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#1110C4] to-[#0B0A8A] mb-4">
                    <Download className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Download Case Study
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Enter your email to access "{caseStudyTitle}"
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 placeholder-gray-400 focus:border-[#1110C4] focus:ring-2 focus:ring-[#1110C4]/20 focus:outline-none transition-all"
                        placeholder="you@company.com"
                        disabled={isSubmitting}
                      />
                    </div>
                    {error && (
                      <p className="mt-2 text-sm text-red-600">{error}</p>
                    )}
                  </div>

                  {/* Privacy Notice */}
                  <div className="rounded-xl bg-gray-50 p-4">
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-gray-600">
                        <p className="font-medium text-gray-900 mb-1">What happens next?</p>
                        <ul className="space-y-1">
                          <li>• You'll receive the case study PDF immediately</li>
                          <li>• We'll add you to our insights newsletter (you can unsubscribe anytime)</li>
                          <li>• Your data is protected by our privacy policy</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3.5 bg-gradient-to-r from-[#1110C4] to-[#0B0A8A] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#1110C4]/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Download className="h-5 w-5" />
                        Download Case Study
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-8">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Download Started!
                </h3>
                <p className="text-gray-600 mb-6">
                  Your case study should download shortly. Check your email for more insights.
                </p>
                <div className="space-y-4">
                  <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-4 border border-green-200">
                    <p className="text-sm text-green-800">
                      <span className="font-medium">Next:</span> Explore how our strategies can work for your business.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-full px-6 py-3 bg-white border-2 border-[#1110C4] text-[#1110C4] font-semibold rounded-xl hover:bg-[#1110C4] hover:text-white transition-all duration-300"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 sm:px-8 rounded-b-2xl border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              By downloading, you agree to our{" "}
              <a href="/privacy" className="text-[#1110C4] hover:underline font-medium">
                Privacy Policy
              </a>{" "}
              and consent to receive occasional insights from DartsUnity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDownload;