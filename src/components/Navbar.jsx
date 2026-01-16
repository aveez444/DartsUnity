import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const solutions = [
    { 
      name: 'Lead Discovery', 
      href: '#lead-discovery',
      description: 'Find qualified leads with AI-powered search',
      icon: '🔍'
    },
    { 
      name: 'Email Outreach', 
      href: '#email-outreach',
      description: 'Automated personalized email campaigns',
      icon: '✉️'
    },
    { 
      name: 'Analytics & Insights', 
      href: '#analytics',
      description: 'Real-time performance tracking',
      icon: '📊'
    },
    { 
      name: 'Managed Services', 
      href: '#managed-services',
      description: 'Full-service campaign management',
      icon: '🎯'
    }
  ];

  const resources = [
    { 
      name: 'Blog', 
      href: '#blog',
      description: 'Latest trends and insights',
      icon: '📝'
    },
    { 
      name: 'Case Studies', 
      href: '#case-studies',
      description: 'Success stories from clients',
      icon: '🏆'
    },
    { 
      name: 'Whitepapers', 
      href: '#whitepapers',
      description: 'In-depth research reports',
      icon: '📚'
    },
    { 
      name: 'Webinars', 
      href: '#webinars',
      description: 'Live sessions with experts',
      icon: '🎥'
    }
  ];

  // Handle dropdown hover with timeout for smoother transition
  const handleDropdownEnter = (dropdown) => {
    clearTimeout(window.dropdownTimeout);
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    window.dropdownTimeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Small delay to allow movement to dropdown
  };

  return (
    <nav 
      ref={dropdownRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-[#1110C4]/5' 
          : 'bg-white/90 backdrop-blur-lg'
      } border-b border-[#1110C4]/10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
            <img src={logo} alt="DartsUnity" className="h-10 w-auto" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#1110C4] to-[#1AD603] bg-clip-text text-transparent">
                DartsUnity
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('solutions')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center px-5 py-3 text-gray-800 hover:text-[#1110C4] transition-all duration-200 group">
                <span className="font-medium relative">
                  Solutions
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1110C4] to-[#1AD603] group-hover:w-full transition-all duration-300"></span>
                </span>
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                  activeDropdown === 'solutions' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {/* Enhanced Dropdown */}
              {activeDropdown === 'solutions' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#1110C4]/10 overflow-hidden animate-fadeIn"
                  onMouseEnter={() => handleDropdownEnter('solutions')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="p-4">
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">Our Solutions</h3>
                      <p className="text-sm text-gray-600 mt-1">Everything you need for growth</p>
                    </div>
                    {solutions.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="flex items-start p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#1110C4]/5 hover:to-[#1AD603]/5 group transition-all duration-200 mb-1 last:mb-0"
                      >
                        <span className="text-2xl mr-3">{item.icon}</span>
                        <div>
                          <div className="font-medium text-gray-900 group-hover:text-[#1110C4] transition-colors">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            {item.description}
                          </div>
                        </div>
                        <ArrowRight className="ml-auto h-4 w-4 text-gray-400 group-hover:text-[#1110C4] group-hover:translate-x-1 transition-all" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('resources')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center px-5 py-3 text-gray-800 hover:text-[#1110C4] transition-all duration-200 group">
                <span className="font-medium relative">
                  Resources
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1110C4] to-[#1AD603] group-hover:w-full transition-all duration-300"></span>
                </span>
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                  activeDropdown === 'resources' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'resources' && (
                <div 
                  className="absolute top-full left-0 mt-1 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#1110C4]/10 overflow-hidden animate-fadeIn"
                  onMouseEnter={() => handleDropdownEnter('resources')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="p-4">
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
                      <p className="text-sm text-gray-600 mt-1">Learn and grow with us</p>
                    </div>
                    {resources.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="flex items-center p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#1110C4]/5 hover:to-[#1AD603]/5 group transition-all duration-200 mb-1 last:mb-0"
                      >
                        <span className="text-xl mr-3">{item.icon}</span>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 group-hover:text-[#1110C4] transition-colors">
                            {item.item}
                          </div>
                          <div className="text-sm text-gray-600">
                            {item.description}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Simple Links */}
            <a 
              href="/about" 
              className="px-5 py-3 text-gray-800 hover:text-[#1110C4] transition-all duration-200 font-medium relative group"
            >
              <span className="relative">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1110C4] to-[#1AD603] group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
            <a 
              href="#contact" 
              className="px-5 py-3 text-gray-800 hover:text-[#1110C4] transition-all duration-200 font-medium relative group"
            >
              <span className="relative">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1110C4] to-[#1AD603] group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-6 py-2.5 text-[#1110C4] hover:text-[#2A29DF] transition-all duration-200 font-medium rounded-full hover:bg-[#1110C4]/5">
              Sign In
            </button>
            <button className="px-6 py-2.5 bg-gradient-to-r from-[#1110C4] to-[#1AD603] text-white rounded-full hover:shadow-xl hover:shadow-[#1110C4]/30 hover:scale-[1.02] transition-all duration-300 font-medium group relative overflow-hidden">
              <span className="relative z-10">Get Started Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#2A29DF] to-[#2BEC06] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-[#1110C4]/5 hover:to-[#1AD603]/5 transition-all duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#1110C4]/10 animate-slideDown">
          <div className="px-4 py-6 space-y-6">
            {/* Solutions Mobile */}
            <div className="space-y-3">
              <div className="font-semibold text-lg text-[#1110C4] mb-2">Solutions</div>
              {solutions.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 hover:from-[#1110C4]/5 hover:to-[#1AD603]/5 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{item.description}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </a>
              ))}
            </div>

            {/* Resources Mobile */}
            <div className="space-y-3">
              <div className="font-semibold text-lg text-[#1110C4] mb-2">Resources</div>
              {resources.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 hover:from-[#1110C4]/5 hover:to-[#1AD603]/5 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-xl mr-3">{item.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-600">{item.description}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Simple Links Mobile */}
            <div className="space-y-3 pt-2">
              <a 
                href="#about" 
                className="block py-3 text-gray-900 font-medium hover:text-[#1110C4] transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="block py-3 text-gray-900 font-medium hover:text-[#1110C4] transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="pt-6 space-y-3">
              <button 
                className="w-full px-6 py-3.5 text-[#1110C4] border-2 border-[#1110C4] rounded-full font-medium hover:bg-[#1110C4] hover:text-white transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </button>
              <button 
                className="w-full px-6 py-3.5 bg-gradient-to-r from-[#1110C4] to-[#1AD603] text-white rounded-full font-medium hover:shadow-xl hover:shadow-[#1110C4]/30 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add custom animations to global CSS or tailwind config */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;