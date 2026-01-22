import React from 'react';
import DocumentPage from '../components/DocumentPage';

const PrivacyPolicy = () => {
  return (
    <DocumentPage 
      title="Privacy Policy"
      lastUpdated="January 1, 2024"
    >
      {/* PASTE YOUR ACTUAL PRIVACY POLICY CONTENT HERE */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Collection of Information</h2>
        <p className="mb-4">
        You may visit DartsUnity website without revealing your identity. However, there may be instances where we request information to better serve you as a current or prospective client.
        We may collect personal and business-related information when you:
        	Fill out a contact or inquiry form
        	Subscribe to newsletters or updates
        	Register for events, surveys, or research activities
        This information may include your name, job title, company name, business email address, phone number, and industry details. The information is collected solely to improve communication, provide services, and deliver relevant content. We are committed to protecting all personally identifiable information shared with us.

        </p>
        
        <h3 className="text-xl font-medium text-gray-800 mb-3">Definition of Personal Information</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>	Name</li>
          <li>	Organization name</li>
          <li>	Designation</li>
          <li>	Business email address</li>
          <li>	Phone or mobile number</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Collection of Information</h2>
        <p className="mb-4">
          We collect information you provide directly to us, such as when you create an account, 
          subscribe to our newsletter, or contact us for support.
        </p>
        
        <h3 className="text-xl font-medium text-gray-800 mb-3">Use of Information</h3>
        <p className="mb-4">
        DartsUnity does not sell, rent, or distribute personal information to third parties without your knowledge or consent, except under the following circumstances:
        </p>

        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>	To deliver services or information you have requested</li>
          <li>	When working with trusted third-party vendors or service providers under strict confidentiality agreements</li>
          <li>	To comply with legal obligations, court orders, or regulatory requirements</li>
          <li>	To protect the rights, property, or safety of DartsUnity, its clients, or others</li>
          <li>	In the event of a merger, acquisition, or business transfer, subject to the terms of this Privacy Policy</li>
        </ul>
        <p className="mb-4">
        We may also use your information to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>	Communicate updates about services or offerings</li>
          <li>	Respond to inquiries or support requests</li>
          <li>	Improve our research methodologies and website experience</li>
        </ul>
        <p className="mb-4">
        You may opt out of marketing communications at any time.
        </p>

      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">How We Protect Your Information</h2>
        <p className="mb-4">
        DartsUnity takes appropriate technical and organizational measures to safeguard personal information. Access to data is limited strictly to authorized personnel on a need-to-know basis.
        While we may collaborate with third-party partners for specific services, DartsUnity is not responsible for the privacy practices of external websites or vendors. Users are encouraged to review third-party privacy policies separately.
        We strictly comply with applicable anti-spam laws and do not engage in unsolicited email communications.
        To request deletion or modification of your personal data, please email info@dartsunity.com with “REMOVE” in the subject line.

        </p>
        
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Your Rights</h2>
        <p className="mb-4">
        Subject to applicable laws, you may have the right to:
        	Request access to your personal information
        	Request correction of inaccurate or incomplete data
        	Request deletion of your personal information
        	Object to processing for marketing purposes
        	Request restriction of data processing
        	Request transfer of your personal information
        These rights are not absolute, and certain requests may be declined where legally permitted. We will provide explanations where applicable.

        </p>
        
      </section>

      
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Use of Cookies and Similar Technologies</h2>
        <p className="mb-4">
        DartsUnity uses cookies and analytics tools to collect information such as IP address, browser type, operating system, referring website, and visit timestamps.
        Cookies are used to:
        	Improve website functionality
        	Analyze visitor behavior
        	Deliver relevant content
        You may manage or disable cookies through your browser settings. Disabling cookies may affect certain website features.

        </p>
        
      </section>

            
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Nature of Internet Data Transmission</h2>
        <p className="mb-4">
        While DartsUnity takes reasonable steps to protect your information,
        data transmission over the Internet is not completely secure.
        By submitting information online, you acknowledge a minimal risk inherent in Internet communications. 
        Users are encouraged to take appropriate security measures, including updated software and secure browsing practices.
        
        </p>
        
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Notification of Changes</h2>
        <p className="mb-4">
        DartsUnity reserves the right to modify or update this Privacy Policy at any time. 
        Changes will be posted on this page, and continued use of our website constitutes acceptance of the updated policy.
        </p>
        
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Contact Information</h2>
        <p className="mb-4">
        For privacy-related inquiries, please contact:
        DartsUnity
        📧 Email: info@dartsunity.com
        🌐 Website: www.dartsunity.com

        
        </p>
        
      </section>


      {/* END OF YOUR CONTENT */}
    </DocumentPage>
  );
};

export default PrivacyPolicy;