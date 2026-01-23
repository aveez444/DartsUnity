import React from 'react';
import DocumentPage from '../components/DocumentPage';

const Info = () => {
  return (
    <DocumentPage 
      title="Do Not Sell My Personal Information"
      
    >
      {/* PASTE YOUR ACTUAL PRIVACY POLICY CONTENT HERE */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">DartsUnity  </h2>
        <p className="mb-4">
        Under the California Consumer Privacy Act (CCPA), California residents have the right to opt out of the sale of their personal information.

        </p>
        
        <h3 className="text-xl font-medium text-gray-800 mb-3">Our Policy</h3>

        <p className="mb-4">
        DartsUnity does not sell your personal information to third parties for monetary value.
        However, we may share limited data with trusted service providers (such as analytics, hosting, or marketing tools) strictly for business operations.
        These partners are contractually required to protect your data and use it only for permitted purposes.


        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Your Rights</h2>
        <p className="mb-4">
        You have the right to:
        	Request confirmation that your personal information is not sold
        	Opt out of any future sale of personal information (if applicable)
        	Request access to or deletion of your personal data


        </p>
        
        <h3 className="text-xl font-medium text-gray-800 mb-3"> How to Submit a Request</h3>
        <p className="mb-4">
        If you wish to submit a request related to your personal information, you can contact us using the details below:
        📧 Email: info@dartsunity.com <br></br>
        📞 Phone: +91 9270918089
        Please include:
        	Your full name
        	Contact details
        	The request type (Do Not Sell / Access / Delete)
        We will respond within the time frame required by law.


        </p>

      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Authorized Agents</h2>
        <p className="mb-4">
        You may designate an authorized agent to make a request on your behalf. Proof of authorization may be required.

        </p>
        
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-2">Updates</h2>
        <p className="mb-4">
        This page may be updated periodically to reflect changes in legal or business requirements. Any updates will be posted on this page.
        </p>
        
      </section>



      {/* END OF YOUR CONTENT */}
    </DocumentPage>
  );
};

export default Info;