import React from 'react';
import DocumentPage from '../components/DocumentPage';

const TermsAndConditions = () => {
  return (
    <DocumentPage 
      title="Terms and Conditions"
     
    >
      {/* PASTE YOUR ACTUAL TERMS AND CONDITIONS CONTENT HERE */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">1. Agreement to Terms</h2>
        <p className="mb-4">
          Acceptance of Terms and Intellectual Property Rights
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">2. User Responsibilities</h2>
        <p className="mb-4">
        By using our website, dartsunity.com (the "Website"), you agree to comply with these terms and conditions ("Terms"). Please read them carefully, as they outline your rights and responsibilities when using our services.
        By accessing or using the Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you should not use the Website. The Website is intended for lawful use only, and you are expected to use it in accordance with all applicable laws.
        All content, features, and functionality on the Website, including text, graphics, logos, images, and software, are owned by DartsUnity and are protected by intellectual property laws. You are not permitted to reproduce, distribute, modify, or create derivative works of any material found on the Website without prior written consent from DartsUnity.

        </p>
        
        <h3 className="text-xl font-medium text-gray-800 mb-3">Privacy Policy, Account Security, and Third-Party Links</h3>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">3. Intellectual Property</h2>
        <p className="mb-4">
        Your use of the Website is also subject to our Privacy Policy, which explains how we collect, use, and protect your personal information. By using the Website, you agree to the terms outlined in our Privacy Policy.
        To access certain features of the Website, you may need to create an account. You are responsible for maintaining the confidentiality and security of your account credentials.
        The Website may contain links to third-party websites and services that are not owned or controlled by DartsUnity. We disclaim any liability for the content, products, or practices of these third-party websites.
        In no event shall DartsUnity be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any content, products, or services available on or through the Website.
        If you have any questions about these Terms and Conditions, please contact us at info@dartsunity.com.

        </p>
      </section>
      {/* END OF YOUR CONTENT */}
    </DocumentPage>
  );
};

export default TermsAndConditions;