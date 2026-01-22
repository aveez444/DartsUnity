import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route click
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-[#1110C4]/5'
          : 'bg-white/90 backdrop-blur-lg'}
        border-b border-[#1110C4]/10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="DartsUnity" className="h-10 w-auto" />
            <span className="text-xl font-bold bg-gradient-to-r from-[#1110C4] to-[#1AD603] bg-clip-text text-transparent">
              DartsUnity
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="/" className="nav-link">Home</a>
            <a href="/services" className="nav-link">Services</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/contact" className="nav-link">Contact</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
          
            <a
              href="/get-started"
              className="px-6 py-2.5 bg-gradient-to-r from-[#1110C4] to-[#1AD603]
              text-white rounded-full font-medium hover:shadow-xl hover:shadow-[#1110C4]/30
              transition"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-[#1110C4]/5 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#1110C4]/10">
          <div className="max-h-[calc(100vh-80px)] overflow-y-auto px-6 py-8 space-y-6">

          <a href="/" onClick={closeMenu} className="mobile-link">
              Home
            </a>

            <a href="/services" onClick={closeMenu} className="mobile-link">
              Services
            </a>

            <a href="/about" onClick={closeMenu} className="mobile-link">
              About
            </a>

            <a href="/contact" onClick={closeMenu} className="mobile-link">
              Contact
            </a>

            <div className="pt-6 space-y-4 border-t border-[#1110C4]/10">
            

              <a
                href="/get-started"
                onClick={closeMenu}
                className="block text-center py-3 rounded-full bg-gradient-to-r
                from-[#1110C4] to-[#1AD603] text-white font-medium transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        .nav-link {
          font-weight: 500;
          color: #1f2937;
          position: relative;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #1110C4;
        }

        .mobile-link {
          display: block;
          font-size: 1.125rem;
          font-weight: 500;
          color: #111827;
          padding: 0.75rem 0;
          transition: color 0.2s;
        }
        .mobile-link:hover {
          color: #1110C4;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
