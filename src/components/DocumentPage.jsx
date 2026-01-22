import React from 'react';

const DocumentPage = ({ title, lastUpdated, children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            {title}
          </h1>
          {lastUpdated && (
            <p className="text-gray-600 text-sm md:text-base">
              Last updated: {lastUpdated}
            </p>
          )}
        </div>

        {/* Document Container with Border Effect */}
        <div className="relative">
          {/* Outer glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl blur-sm opacity-75"></div>
          
          {/* Main document card */}
          <div className="relative bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-10">
            {/* Decorative corner elements */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-400 rounded-tl-lg"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-blue-400 rounded-tr-lg"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-blue-400 rounded-bl-lg"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-blue-400 rounded-br-lg"></div>
            
            {/* Document content */}
            <div className="prose prose-lg max-w-none text-gray-700">
              {/* 
                =============================================
                REPLACE THE CONTENT BELOW WITH YOUR ACTUAL TEXT
                =============================================
              */}
              {children || (
                <div className="space-y-6">
                  <p className="text-gray-600 italic">
                    Replace this content with your actual document text. Structure it using the following examples:
                  </p>
                  
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Section Title Example</h2>
                    <p className="mb-4">This is a paragraph. Add your content here. Make sure to break it into logical sections.</p>
                    
                    <h3 className="text-xl font-medium text-gray-800 mb-3">Subsection Example</h3>
                    <p className="mb-4">More detailed content can go here under subsections.</p>
                    
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>List item example 1</li>
                      <li>List item example 2</li>
                      <li>List item example 3</li>
                    </ul>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Another Section</h2>
                    <p className="mb-4">Add more sections as needed for your document.</p>
                  </section>
                </div>
              )}
              {/* 
                =============================================
                END OF CONTENT REPLACEMENT AREA
                =============================================
              */}
            </div>
            
            {/* Footer note */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                For questions about this document, please contact our support team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;