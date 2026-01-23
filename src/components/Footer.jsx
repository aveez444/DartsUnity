import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react';
import logo from '../assets/logo1.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="text-white/80 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#press" className="text-white/80 hover:text-white transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a href="#lead-discovery" className="text-white/80 hover:text-white transition-colors">
                  Lead Discovery
                </a>
              </li>
              <li>
                <a href="#email-outreach" className="text-white/80 hover:text-white transition-colors">
                  Email Outreach
                </a>
              </li>
              <li>
                <a href="#analytics" className="text-white/80 hover:text-white transition-colors">
                  Analytics & Insights
                </a>
              </li>
              <li>
                <a href="#managed-services" className="text-white/80 hover:text-white transition-colors">
                  Managed Services
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
                Terms of Service
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
