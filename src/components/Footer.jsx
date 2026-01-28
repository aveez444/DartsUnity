import { Linkedin, Facebook, Mail } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6'; // Using react-icons for X/Twitter logo
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social media URLs
  const socialLinks = {
    facebook: 'https://www.facebook.com/people/Darts-Unity/pfbid02hZmJ6DH2QPn348zfQcruqtoWUPxtSZBD9hBqGamb6Mu49e17kR8GcmsiQDRYoV9dl/?mibextid=wwXIfr&rdid=1w7FcT9XXQhia0jc&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1B6SpbvTYr%2F%3Fmibextid%3DwwXIfr',
    linkedin: 'https://www.linkedin.com/company/dartsunity/',
    twitter: '#', // Add your Twitter/X URL here
    email: 'mailto:thedartsunity@gmail.com?subject=Inquiry%20from%20DartsUnity%20Website&body=Hello%20DartsUnity%20Team,'
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-[#1110C4] to-[#2A29DF] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info - Larger Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img src={logo} alt="DartsUnity" className="h-10 w-auto" />
              <span className="text-xl font-bold bg-[#1AD603] bg-clip-text text-transparent">
                DartsUnity
              </span>
            </a>
            <p className="text-white/80 mb-6 leading-relaxed max-w-sm">
              Data-driven B2B lead generation that accelerates your business growth. Trusted by worldwide enterprise clients.
            </p>
            
            {/* Social Links - Updated with actual URLs */}
            <div className="flex gap-4">
              <a 
                href={socialLinks.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href={socialLinks.twitter} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter/X"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a 
                href={socialLinks.facebook} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            
               
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="text-white/80 hover:text-white transition-colors">
                  Lead Qualification
                </a>
              </li>
              <li>
                <a href="/services" className="text-white/80 hover:text-white transition-colors">
                 Account Based Marketing 
                </a>
              </li>
              <li>
                <a href="/services" className="text-white/80 hover:text-white transition-colors">
                Email Marketing Campaigns
                </a>
              </li>
              <li>
                <a href="/services" className="text-white/80 hover:text-white transition-colors">
                Appointment Generation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-white/70 text-sm">
              © {currentYear} DartsUnity. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/privacypolicy" className="text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/termsandconditions" className="text-white/70 hover:text-white transition-colors">
                Terms and Conditions
              </a>
              <a href="/GDPR" className="text-white/70 hover:text-white transition-colors">
                GDPR
              </a>
              <a href="/CCPA" className="text-white/70 hover:text-white transition-colors">
                CCPA
              </a>
              <a href="/CASL" className="text-white/70 hover:text-white transition-colors">
                CASL
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;