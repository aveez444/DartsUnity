import React from 'react';
import DocumentPage from '../components/DocumentPage';

const GDPR = () => {
  return (
    <DocumentPage 
      title="GDPR"
     
    >
      {/* PASTE YOUR ACTUAL PRIVACY POLICY CONTENT HERE */}
      <section>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">GDPR</h2>
      </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">GDPR Compliance Statement</h2>
        <p className="mb-4">
        At DartsUnity, we are committed to protecting your personal data and complying with the General Data Protection Regulation (GDPR) (EU Regulation 2016/679).
        This section explains how DartsUnity collects, uses, stores, and protects personal data of users located in the European Economic Area (EEA).

        </p>
        
        <h3 className="text-xl font-medium text-gray-800 mb-3">Lawful Basis for Processing Data</h3>

        <p className="mb-4">
       DartsUnity processes personal data only when legally permitted, including:
        	When you provide explicit consent
        	When data is required to perform a contract or service
        	To comply with legal obligations
        	For legitimate business interests, without overriding your rights

        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Personal Data We Collect</h2>
        <p className="mb-4">
        DartsUnity may collect the following information:
        	Full name
        	Email address
        	Phone number
        	Company name
        	Job title
        	IP address
        	Website usage data (cookies & analytics)
        Personal data is collected only when voluntarily submitted through forms, emails, or inquiries.

        </p>
        
        <h3 className="text-xl font-medium text-gray-800 mb-3"> How We Use Your Data</h3>
        <p className="mb-4">
        Your data may be used to:
        	Respond to inquiries and business requests
        	Provide research and consulting services
    	    Share proposals or service-related information
        	Improve website performance and user experience

        </p>

      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Data Retention</h2>
        <p className="mb-4">
        DartsUnity retains personal data only for as long as necessary to fulfill the purpose for which it was collected or as required by law.
        </p>
        
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Data Sharing & Third Parties</h2>
        <p className="mb-4">
        DartsUnity does not sell, rent, or trade personal data.
            Data may be shared only with trusted third-party service providers such as:
        	Website hosting providers
            Email communication tools
            Analytics platforms
            All third parties are required to comply with GDPR standards.

        </p>
        
      </section>

      
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Your Rights Under GDPR</h2>
        <p className="mb-4">
            Under GDPR, you have the right to:
            Access your personal data
            Request correction of inaccurate information
            Request deletion of your data
            Restrict or object to processing
            Withdraw consent at any time
            Request data portability
            File a complaint with a data protection authority

        </p>
        
      </section>

            
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Data Security</h2>
        <p className="mb-4">
        DartsUnity uses appropriate technical and organizational measures to protect personal data from unauthorized access, alteration, disclosure, or destruction.
        
        </p>
        
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Cookies & Tracking Technologies</h2>
        <p className="mb-4">
        DartsUnity may use cookies to analyze traffic and improve user experience.
        You can manage or disable cookies through your browser settings.

        </p>
        
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">International Data Transfers</h2>
        <p className="mb-4">
        If personal data is transferred outside the EEA, DartsUnity ensures appropriate safeguards are in place to protect your data.
        </p>
        
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Contact Information</h2>
        <p className="mb-4">
        For GDPR-related questions or requests, please contact:
        DartsUnity <br></br>
        📧 Email: info@dartsunity.com
        🌐 Website: www.dartsunity.com

        
        </p>
        
      </section>


      {/* END OF YOUR CONTENT */}
    </DocumentPage>
  );
};

export default GDPR;