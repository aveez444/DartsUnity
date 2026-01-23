import React from 'react';
import DocumentPage from '../components/DocumentPage';

const CCPA = () => {
  return (
    <DocumentPage 
      title="CCPA"
      
    >
      {/* PASTE YOUR ACTUAL PRIVACY POLICY CONTENT HERE */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">CCPA Privacy Notice (California Residents)</h2>
        <p className="mb-4">
        This CCPA Notice applies solely to visitors, users, and others who reside in the State of California (“consumers” or “you”).
        DartsUnity adopts this notice to comply with the California Consumer Privacy Act of 2018 (CCPA).

        </p>
        
        <h3 className="text-xl font-medium text-gray-800 mb-3">Information We Collect</h3>

        <p className="mb-4">
        DartsUnity may collect the following categories of personal information:
        	Identifiers (name, email address, phone number, company name)
        	Internet activity (IP address, browser type, pages visited)
        	Professional or employment-related information (job title, business details)
        	Any other information you voluntarily provide through forms or communication
        We collect this information directly from you when you:
        	Visit our website
        	Fill out a contact or inquiry form
        	Communicate with us via email or phone

        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">How We Use Your Information</h2>
        <p className="mb-4">
        We use personal information to:
        	Provide and improve our services
        	Respond to inquiries and requests
        	Communicate business updates
        	Maintain website security and performance
        	Comply with legal obligations


        </p>
        
        <h3 className="text-xl font-medium text-gray-800 mb-3"> Sharing of Personal Information</h3>
        <p className="mb-4">
        DartsUnity does not sell personal information.
        We may share personal information with:
        	Service providers supporting our business operations
        	Legal or regulatory authorities if required by law

        </p>

      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Your Rights Under CCPA</h2>
        <p className="mb-4">
        California residents have the right to:
        	Right to Know: Request details about the personal information we collect and use
        	Right to Delete: Request deletion of your personal information
        	Right to Opt-Out: Opt out of the sale of personal information (DartsUnity does not sell data)
        	Right to Non-Discrimination: Receive equal service regardless of exercising your CCPA rights

        </p>
        
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">How to Exercise Your Rights</h2>
        <p className="mb-4">
        You can submit a request by:
        	Email: info@dartsunity.com
        	Website: dartsunity.com
        We may verify your identity before processing your request.


        </p>
        
      </section>

      
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Data Retention</h2>
        <p className="mb-4">
        We retain personal information only for as long as necessary to fulfill business or legal purposes.

        </p>
        
      </section>

            
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Changes to This Notice</h2>
        <p className="mb-4">
        DartsUnity reserves the right to update this CCPA Notice. Any changes will be posted on this page.
        </p>
        
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Contact Information</h2>
        <p className="mb-4">
        If you have any questions regarding this CCPA Notice, contact us at:
        DartsUnity <br></br>
        📧 Email: info@dartsunity.com
        🌐 Website: www.dartsunity.com

        </p>
        
      </section>


      {/* END OF YOUR CONTENT */}
    </DocumentPage>
  );
};

export default CCPA;