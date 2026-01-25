import { ArrowRight, CheckCircle2, Target, Star, Users, TrendingUp, Sparkles, Database, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CaseStudyDownload from '../components/CaseStudyDownload'; // Adjust path as needed

// Import images - rename your files to match these names
import heroBgImage from '../assets/officebg.jpg'; // Image 1 - Meeting room
import heroMainImage from '../assets/B2Bimg4.jpg'; // Image 2 or 3 - Dashboard/Analytics
import aboutImage from '../assets/B2Bimg2.jpg'; // Image 6 - Office interior
import dataVisualization from '../assets/office4.jpg'; // Image 4 - Charts/Analytics

const Home = () => {
  const navigate = useNavigate();
  const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = useState(false);

  const IndustryCard = ({ icon, title, desc }) => (
    <div className="group flex flex-col items-center text-center">
      <div className="w-36 h-36 bg-white rounded-2xl border border-gray-100 shadow-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-[#1AD603]">
        <span className="text-6xl">{icon}</span>
      </div>
      <div className="mt-4 max-w-[220px]">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-xs text-gray-600">{desc}</p>
      </div>
    </div>
  );

  const handleGetStartedClick = () => {
    navigate('/contact');
  };

  const handleCaseStudyClick = () => {
    setIsCaseStudyModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Case Study Download Modal */}
      <CaseStudyDownload 
        isOpen={isCaseStudyModalOpen}
        onClose={() => setIsCaseStudyModalOpen(false)}
        caseStudyTitle="B2B Lead Generation Success Story"
      />
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-0">
        {/* Animated Background - Dark Navy Blue with Green Accents */}
        <div className="absolute inset-0 bg-[#0a1628]">
          {/* Ambient Gradient Orbs - Static, No Mouse Interaction */}
          <div 
            className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #1AD603 0%, transparent 70%)',
              top: '20%',
              left: '10%',
              animation: 'gentleFloat 25s infinite ease-in-out'
            }}
          />
          <div 
            className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
            style={{
              background: 'radial-gradient(circle, #2BEC06 0%, transparent 70%)',
              bottom: '20%',
              right: '15%',
              animation: 'gentleFloat 30s infinite ease-in-out 5s'
            }}
          />

          {/* Geometric Lines Pattern Behind Text - Growth Path Visualization */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg className="w-full h-full max-w-4xl opacity-20" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
              {/* Upward Growth Path - From bottom to top through content */}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#1AD603" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#1AD603" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#2BEC06" stopOpacity="0.9" />
                </linearGradient>
                
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Main Growth Path - Zigzag upward trend */}
              <path 
                d="M 100 550 L 200 450 L 150 350 L 300 250 L 250 150 L 400 100 L 500 50" 
                stroke="url(#lineGradient)" 
                strokeWidth="3" 
                fill="none"
                filter="url(#glow)"
                strokeLinecap="round"
              >
                <animate
                  attributeName="stroke-dasharray"
                  from="0,1000"
                  to="1000,0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Secondary parallel path */}
              <path 
                d="M 150 530 L 250 430 L 200 330 L 350 230 L 300 130 L 450 80" 
                stroke="url(#lineGradient)" 
                strokeWidth="2" 
                fill="none"
                opacity="0.5"
                strokeLinecap="round"
              >
                <animate
                  attributeName="stroke-dasharray"
                  from="0,800"
                  to="800,0"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Connecting nodes/data points */}
              <circle cx="100" cy="550" r="4" fill="#1AD603" opacity="0.6">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="450" r="5" fill="#1AD603" opacity="0.6">
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="300" cy="250" r="6" fill="#1AD603" opacity="0.7">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="400" cy="100" r="7" fill="#2BEC06" opacity="0.8">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Abstract geometric shapes scattered */}
              <polygon 
                points="600,200 650,250 600,300 550,250" 
                fill="none" 
                stroke="#1AD603" 
                strokeWidth="2" 
                opacity="0.3"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 600 250"
                  to="360 600 250"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </polygon>

              <rect 
                x="650" 
                y="400" 
                width="60" 
                height="60" 
                fill="none" 
                stroke="#1AD603" 
                strokeWidth="2" 
                opacity="0.25"
                transform="rotate(45 680 430)"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="45 680 430"
                  to="405 680 430"
                  dur="25s"
                  repeatCount="indefinite"
                />
              </rect>

              {/* Small accent lines radiating from center */}
              <line x1="400" y1="300" x2="450" y2="280" stroke="#1AD603" strokeWidth="1" opacity="0.2">
                <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="400" y1="300" x2="380" y2="250" stroke="#1AD603" strokeWidth="1" opacity="0.2">
                <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3.5s" repeatCount="indefinite" />
              </line>
              <line x1="400" y1="300" x2="350" y2="320" stroke="#1AD603" strokeWidth="1" opacity="0.2">
                <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
              </line>
            </svg>
          </div>

          {/* Minimal Floating Particles - Reduced to 8 */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full"
                style={{
                  width: '3px',
                  height: '3px',
                  background: '#1AD603',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  animation: `gentleFloat ${Math.random() * 8 + 6}s infinite ease-in-out ${Math.random() * 5}s`,
                  opacity: Math.random() * 0.3 + 0.2,
                  boxShadow: '0 0 10px rgba(26, 214, 3, 0.4)'
                }}
              />
            ))}
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(rgba(26, 214, 3, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(26, 214, 3, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Content with Better Spacing */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
          {/* Mobile Layout */}
          <div className="md:hidden w-full">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                  <span className="block text-white mb-3">
                    Data-Driven Lead
                  </span>
                  <span className="block text-white mb-3">
                    Generation That
                  </span>
                  <span className="block bg-gradient-to-r from-[#1AD603] via-[#2BEC06] to-[#1AD603] bg-clip-text text-transparent animate-gradient">
                    Accelerates Growth
                  </span>
                </h1>
                
                <div className="flex items-center justify-center space-x-2 pt-4">
                  <div className="w-10 h-0.5 bg-gradient-to-r from-transparent via-[#1AD603] to-transparent"></div>
                  <span className="text-white/70 text-xs font-semibold tracking-widest">PREMIUM B2B SOLUTIONS</span>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-transparent via-[#1AD603] to-transparent"></div>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-white/90 px-2">
                Transform your B2B pipeline with research-led strategies, precise targeting, 
                and account-based marketing that connects you with qualified decision-makers.
              </p>

              <div className="flex flex-col gap-4 pt-6">
              <button 
                  onClick={handleGetStartedClick}
                  className="group relative px-8 py-4 bg-white text-[#0a1628] rounded-2xl font-bold text-lg shadow-2xl shadow-[#1AD603]/20 hover:shadow-[#1AD603]/30 transition-all duration-300 active:scale-95"
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className="relative z-10">Get Started Free</span>
                    <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
                
                <button 
                  onClick={handleCaseStudyClick}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-2xl font-bold text-lg border-2 border-blue-400/50 hover:border-blue-300 transition-all duration-300 active:scale-95 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                >
                  View Case Studies
                </button>
              </div>

              <div className="pt-8">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "100M+", label: "Business Emails", icon: "🌍" },
                    { value: "2.5M+", label: "Interactions", icon: "📈" },
                    { value: "84%", label: "Client Retention", icon: "⭐" }
                  ].map((stat, index) => (
                    <div key={index} className="group relative">
                      <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:border-[#1AD603]/50 transition-all duration-300">
                        <div className="flex flex-col items-center space-y-2">
                          <div className="text-2xl">{stat.icon}</div>
                          <div className="text-2xl font-bold text-[#1AD603]">{stat.value}</div>
                          <div className="text-xs text-white/80 font-medium leading-tight">{stat.label}</div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1AD603]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Increased Gap for Better Spacing */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-16 xl:gap-20 items-center">
            {/* Left Content - Takes 3 columns on large screens */}
            <div className="md:col-span-1 lg:col-span-3 space-y-8 z-10 text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Data-Driven Lead Generation That{' '}
                <span className="bg-gradient-to-r from-[#1AD603] to-[#2BEC06] bg-clip-text text-transparent">
                  Accelerates Growth
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                Transform your B2B pipeline with research-led strategies, precise targeting, 
                and account-based marketing that connects you with qualified decision-makers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                  onClick={handleGetStartedClick}
                  className="group px-8 py-4 bg-white text-[#0a1628] rounded-full font-semibold hover:shadow-2xl hover:shadow-[#1AD603]/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Started Free
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={handleCaseStudyClick}
                  className="px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-700 hover:to-blue-600 text-white rounded-full font-semibold border-2 border-blue-400/50 hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                >
                  View Case Studies
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-[#1AD603]">100M+</div>
                  <div className="text-xs md:text-sm text-white/70 mt-1">Business Emails</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-[#1AD603]">2.5M+</div>
                  <div className="text-xs md:text-sm text-white/70 mt-1">Interactions</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-[#1AD603]">84%</div>
                  <div className="text-xs md:text-sm text-white/70 mt-1">Client Retention</div>
                </div>
              </div>
            </div>

            {/* Right Image - Takes 2 columns on large screens with proper spacing */}
            <div className="md:col-span-1 lg:col-span-2 relative z-10">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute -top-4 -left-4 w-20 h-20 md:w-24 md:h-24 border-t-4 border-l-4 border-[#1AD603] rounded-tl-3xl"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 border-b-4 border-r-4 border-[#1AD603] rounded-br-3xl"></div>
                
                <div className="relative aspect-square bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-[#1AD603]/30 overflow-hidden shadow-2xl shadow-[#1AD603]/20 transform hover:scale-105 transition-transform duration-500">
                  {/* Replace this div with your actual image */}
                  <img 
                    src={heroMainImage}
                    alt="Lead Generation Dashboard"
                    className="w-full h-full object-cover"
                  />
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1AD603]/20 to-[#0a1628]/40 backdrop-blur-sm"> 
                  </div>
                </div>

                <div className="absolute -bottom-12 -right-12 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#1AD603] to-[#2BEC06] rounded-full opacity-20 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Smooth Curved Bottom Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,64 C360,120 1080,0 1440,64 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
        


        {/* CSS for Animations */}
        <style>{`
          @keyframes gentleFloat {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(15px, -15px) scale(1.05);
            }
            66% {
              transform: translate(-10px, 10px) scale(0.95);
            }
          }

          @keyframes gradient {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
        `}</style>
      </section>


      {/* About Us Section - Enhanced Layout */}
      <section className="relative bg-white py-24 overflow-hidden -mt-[1px]">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#1110C4] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#1AD603] rounded-full blur-3xl"></div>
        </div>

        {/* Horizontal Diagonal Background Wave */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">
  <svg
    viewBox="0 0 1440 500"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-[35%] left-0 w-full h-[500px]"
    preserveAspectRatio="none"
  >
    {/* Back wave (lighter, wider) */}
    <path
      d="
        M0 120
        C240 200 480 60 720 120
        C960 180 1200 80 1440 140
        L1440 500
        L0 500
        Z
      "
      fill="#4CAF50"
      opacity="0.08"
    />

    {/* Front wave (slightly darker, tighter) */}
    <path
      d="
        M0 160
        C240 260 480 120 720 170
        C960 230 1200 140 1440 200
        L1440 500
        L0 500
        Z
      "
      fill="#2E7D32"
      opacity="0.12"
    />
  </svg>
</div>


        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
            <div className="inline-flex items-center gap-2 bg-[#1AD603]/10 px-4 py-2 rounded-full mb-6">
             <span className="w-2 h-2 bg-[#1AD603] rounded-full"></span>
                <span className="text-sm font-semibold text-[#1110C4]">About DartsUnity</span>
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Built for Predictable,{' '}
              <span className="bg-gradient-to-r from-[#1110C4] via-[#1110C4]/90 to-[#0B0A8A] bg-clip-text text-transparent">
                Scalable Growth
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with organizations to improve lead quality, pipeline efficiency, 
              and sales outcomes through data-driven strategies.
            </p>
          </div>

          {/* Enhanced Grid Layout with Overlapping Elements */}
          <div className="grid lg:grid-cols-12 gap-8 items-center mb-20">
            {/* Left Side - Stacked Images */}
            <div className="lg:col-span-5 relative">
              {/* Main office image */}
              <div className="relative z-10">
                <div className="aspect-[4/5] max-w-sm mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src={aboutImage}
                    alt="DartsUnity Office"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-50');
                      e.target.parentElement.innerHTML = '<div class="text-gray-400 text-center p-8"><div class="text-6xl mb-4">🏢</div><div>Office Image</div><div class="text-sm mt-2">/assets/about-office.jpg</div></div>';
                    }}
                  />
                </div>
              </div>

              {/* Overlapping data visualization card */}
              <div className="hidden lg:block absolute -bottom-12 -right-12 w-80 h-54 bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white z-20">
                <img 
                  src={dataVisualization}
                  alt="Data Analytics"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-[#1110C4]/10', 'to-[#1AD603]/10');
                    e.target.parentElement.innerHTML = '<div class="text-gray-400 text-center p-4"><div class="text-4xl mb-2">📊</div><div class="text-sm">Data Visualization</div><div class="text-xs mt-1">/assets/data-viz.jpg</div></div>';
                  }}
                />
              </div>

              {/* Accent elements */}
              <div className="hidden lg:block absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-[#1110C4] via-[#1110C4]/90 to-[#0B0A8A] rounded-2xl opacity-20"></div>
              <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-40 bg-gradient-to-b from-[#1AD603] to-transparent opacity-10 rounded-full blur-xl"></div>

            </div>

            {/* Right Side - Content with Cards */}
            <div className="lg:col-span-7 space-y-8">
              {/* Main Description */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 shadow-lg">
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  DartsUnity is a <strong className="text-gray-900">B2B data and growth solutions company</strong> supporting 
                  organizations with structured, research-led sales and marketing execution.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  We provide account-based marketing, lead generation, and email outreach services designed to connect 
                  businesses with relevant decision-makers.
                </p>
              </div>

            {/* Process Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="group bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#1110C4]/30 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#1110C4] via-[#1110C4]/90 to-[#0B0A8A] group-hover:bg-gradient-to-br group-hover:from-[#1AD603] group-hover:via-[#2BEC06] group-hover:to-[#1AD603] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <Database className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Data Validation</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Accurate data validation and industry-specific research drive every campaign
                </p>
              </div>

              {/* Card 2 */}
              <div className="group bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#1110C4]/30 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#1110C4] via-[#1110C4]/90 to-[#0B0A8A] group-hover:bg-gradient-to-br group-hover:from-[#1AD603] group-hover:via-[#2BEC06] group-hover:to-[#1AD603] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Defined ICPs</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Clearly defined ideal customer profiles ensure precision targeting
                </p>
              </div>

              {/* Card 3 */}
              <div className="group bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#1110C4]/30 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#1110C4] via-[#1110C4]/90 to-[#0B0A8A] group-hover:bg-gradient-to-br group-hover:from-[#1AD603] group-hover:via-[#2BEC06] group-hover:to-[#1AD603] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <CheckCircle2 className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Process-Driven</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Structured approach focused on compliance, transparency, and consistency
                </p>
              </div>

              {/* Card 4 */}
              <div className="group bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#1110C4]/30 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#1110C4] via-[#1110C4]/90 to-[#0B0A8A] group-hover:bg-gradient-to-br group-hover:from-[#1AD603] group-hover:via-[#2BEC06] group-hover:to-[#1AD603] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Long-Term Value</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Emphasis on sustainable growth over short-term volume metrics
                </p>
              </div>
            </div>
            
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* Learn More */}
            <button
              onClick={() => navigate("/about")}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#1110C4] via-[#1110C4]/90 to-[#0B0A8A] hover:from-[#1110C4] hover:to-[#1AD603] text-white rounded-full font-semibold hover:shadow-xl hover:shadow-[#1AD603]/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Learn More About Us
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

              {/* Contact */}
              <button
                onClick={() => navigate("/contact")}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#1110C4] rounded-full font-semibold border-2 border-[#1110C4] hover:bg-[#1AD603] hover:border-[#1AD603] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
              >
                <Mail className="h-5 w-5" />
                Contact Us
              </button>

          </div>
          </div>
          </div>

          {/* Bottom Stats Banner */}
          <div className="bg-gradient-to-r from-[#1110C4] via-[#1110C4]/90 to-[#0B0A8A] rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
              <div>
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-white/80 text-sm">Industries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100M+</div>
                <div className="text-white/80 text-sm">Business Emails</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2.5M+</div>
                <div className="text-white/80 text-sm">Interactions</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">84%</div>
                <div className="text-white/80 text-sm">Retention Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,32 C240,96 480,0 720,32 C960,64 1200,0 1440,32 L1440,120 L0,120 Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>


   {/* Services Section - Zig-Zag Layout with Animated Icons */}


<section className="relative bg-gray-50 py-24 overflow-hidden">
  {/* Geometric Background Patterns */}
  <div className="absolute inset-0 opacity-5">
    {/* Diagonal lines pattern */}
    <div className="absolute inset-0" style={{
      backgroundImage: `repeating-linear-gradient(45deg, #1110C4 0px, #1110C4 1px, transparent 1px, transparent 20px)`,
    }}></div>
    {/* Dots pattern */}
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle, #1AD603 1px, transparent 1px)`,
      backgroundSize: '40px 40px'
    }}></div>
  </div>

  {/* Curved corner accent - top left */}
  <div className="absolute top-0 left-0">
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 Q100,100 0,200 L0,0 Z" fill="#1110C4" opacity="0.05"/>
    </svg>
  </div>

  {/* Curved corner accent - bottom right */}
  <div className="absolute bottom-0 right-0">
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M200,200 Q100,100 200,0 L200,200 Z" fill="#1AD603" opacity="0.05"/>
    </svg>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-20">
      <div className="inline-block mb-4">
        <div className="inline-flex items-center gap-2 bg-[#1AD603]/10 px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-[#1AD603] rounded-full"></span>
          <span className="text-sm font-semibold text-[#1110C4]">Our Services</span>
        </div>
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Solutions That Drive{' '}
        <span className="bg-gradient-to-r from-[#1110C4] via-[#1110C4]/85 to-[#0B0A8A] bg-clip-text text-transparent">
          Real Results
        </span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        From lead qualification to ABM campaigns, we provide end-to-end solutions 
        tailored to your growth objectives.
      </p>
    </div>

    {/* Zig-Zag Services Layout */}
    <div className="space-y-24">
      {/* Service 1 - Target Icon with Radar Animation */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#1110C4]/10 to-[#1AD603]/10 rounded-full">
            <span className="text-sm font-bold bg-gradient-to-r from-[#1110C4] via-[#1110C4]/90 to-[#0B0A8A] bg-clip-text text-transparent">
              01
            </span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">Lead Qualification</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            We deliver HQL, MQL, and SQL leads that match your ICP with verified decision-maker details. 
            Our BANT-qualified leads ensure sales readiness, helping you focus on high-intent opportunities 
            and improve conversion rates.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-700">
              HQL & MQL
            </div>
            <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-700">
              SQL Validation
            </div>
            <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-700">
              BANT Qualified
            </div>
          </div>
        </div>
        
        {/* Target with Radar Animation */}
        <div className="relative h-80 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
            <path d="M50,200 Q200,50 350,200" stroke="#1110C4" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
            <circle cx="50" cy="200" r="4" fill="#1110C4"/>
            <circle cx="350" cy="200" r="4" fill="#1AD603"/>
          </svg>
          
          <div className="relative group">
            {/* Outer rings that pulse on hover */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border-2 border-[#1110C4]/20 rounded-full group-hover:animate-[ping_2s_infinite] group-hover:border-[#1AD603]/40 transition-all"></div>
              <div className="w-48 h-48 border-2 border-[#1AD603]/20 rounded-full group-hover:animate-[ping_2s_infinite] group-hover:border-[#1110C4]/40 transition-all" style={{animationDelay: '0.5s'}}></div>
            </div>
            
            {/* Target icon */}
            <div className="relative w-48 h-48 bg-gradient-to-br from-[#1110C4]/5 to-[#1AD603]/5 rounded-3xl -rotate-6 group-hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Concentric circles */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 border-4 border-[#1110C4]/30 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="absolute -top-3 -left-3 w-6 h-6 border-3 border-[#1AD603]/40 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  
                  {/* Main target center */}
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1110C4] to-[#1AD603] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <span className="text-3xl">🎯</span>
                  </div>
                  
                  {/* Scanning line that appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-64 h-0.5 bg-gradient-to-r from-transparent via-[#1AD603] to-transparent animate-[scan_3s_linear_infinite]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service 2 - Chart Icon with Data Flow Animation */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Chart with Data Flow Animation */}
        <div className="relative h-80 flex items-center justify-center lg:order-1 order-2">
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
            <path d="M50,200 Q200,350 350,200" stroke="#1AD603" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
            <circle cx="50" cy="200" r="4" fill="#1110C4"/>
            <circle cx="350" cy="200" r="4" fill="#1AD603"/>
          </svg>
          
          <div className="relative group">
            {/* Background chart grid */}
            <div className="absolute inset-0 w-48 h-48 bg-gradient-to-br from-[#1AD603]/5 to-[#1110C4]/5 rounded-full rotate-6 group-hover:rotate-12 transition-transform duration-500">
              {/* Grid lines */}
              <div className="absolute inset-4 border-t border-r border-gray-300/30 rounded-tr-full"></div>
              <div className="absolute inset-8 border-t border-r border-gray-300/20 rounded-tr-full"></div>
              
              {/* Animated bars */}
              <div className="absolute bottom-8 left-8 w-3 h-16 bg-gradient-to-t from-[#1110C4] to-[#1110C4]/70 rounded-t group-hover:animate-[grow_1.5s_ease-in-out] origin-bottom"></div>
              <div className="absolute bottom-8 left-14 w-3 h-24 bg-gradient-to-t from-[#1AD603] to-[#1AD603]/70 rounded-t group-hover:animate-[grow_1.5s_ease-in-out] origin-bottom" style={{animationDelay: '0.2s'}}></div>
              <div className="absolute bottom-8 left-20 w-3 h-20 bg-gradient-to-t from-[#1110C4] to-[#1110C4]/70 rounded-t group-hover:animate-[grow_1.5s_ease-in-out] origin-bottom" style={{animationDelay: '0.4s'}}></div>
              <div className="absolute bottom-8 left-26 w-3 h-28 bg-gradient-to-t from-[#1AD603] to-[#1AD603]/70 rounded-t group-hover:animate-[grow_1.5s_ease-in-out] origin-bottom" style={{animationDelay: '0.6s'}}></div>
              
              {/* Floating data points */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#1110C4] rounded-full group-hover:animate-[float_3s_ease-in-out_infinite]"></div>
              <div className="absolute top-4 left-0 w-3 h-3 bg-[#1AD603] rounded-full group-hover:animate-[float_3s_ease-in-out_infinite]" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-4 -right-4 w-2 h-2 bg-[#1110C4] rounded-full group-hover:animate-[float_3s_ease-in-out_infinite]" style={{animationDelay: '1s'}}></div>
            </div>
            
            {/* Chart icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">📊</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:order-2 order-1">
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#1110C4]/10 to-[#1AD603]/10 rounded-full">
            <span className="text-sm font-bold bg-gradient-to-r from-[#1110C4] via-[#1110C4]/90 to-[#0B0A8A] bg-clip-text text-transparent">
              02
            </span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">Account-Based Marketing</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our ABM strategy focuses on high-value accounts with in-depth research and personalized campaigns. 
            We align marketing and sales to deliver consistent interactions, ensuring every touchpoint moves 
            accounts toward meaningful conversations.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-700">
              Account Research
            </div>
            <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-700">
              Multi-Channel
            </div>
            <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-700">
              Personalized Content
            </div>
          </div>
        </div>
      </div>

      {/* Service 3 - Email Icon with Send Animation */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#1110C4]/10 to-[#1AD603]/10 rounded-full">
            <span className="text-sm font-bold bg-gradient-to-r from-[#1110C4] via-[#1110C4]/90 to-[#0B0A8A] bg-clip-text text-transparent">
              03
            </span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">Email Marketing Campaigns</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            We deliver end-to-end email campaign management with personalized messaging for decision-makers. 
            Our data-driven approach optimizes deliverability, open rates, and responses to ensure predictable 
            pipeline growth.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-700">
              Campaign Strategy
            </div>
            <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-700">
              A/B Testing
            </div>
            <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-700">
              Analytics & ROI
            </div>
          </div>
        </div>
        
        {/* Email with Send Animation */}
        <div className="relative h-80 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
            <path d="M50,200 L150,100 L250,250 L350,150" stroke="#1110C4" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
            <circle cx="50" cy="200" r="4" fill="#1110C4"/>
            <circle cx="150" cy="100" r="4" fill="#1AD603"/>
            <circle cx="250" cy="250" r="4" fill="#1110C4"/>
            <circle cx="350" cy="150" r="4" fill="#1AD603"/>
          </svg>
          
          <div className="relative group">
            {/* Email envelope */}
            <div className="w-48 h-48 bg-gradient-to-br from-[#1110C4]/5 to-[#1AD603]/5 rounded-2xl -rotate-12 group-hover:rotate-0 transition-transform duration-500 relative overflow-hidden">
              {/* Envelope flap */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-48 h-24 bg-gradient-to-b from-[#1110C4]/10 to-[#1AD603]/10 rounded-t-2xl group-hover:animate-[flap_1.5s_ease-in-out] origin-top"></div>
              
              {/* Paper inside */}
              <div className="absolute top-12 left-8 right-8 bottom-8 bg-white/90 rounded-lg shadow-inner group-hover:animate-[paper-rise_1.5s_ease-in-out]">
                {/* Paper lines */}
                <div className="absolute top-4 left-4 right-4 h-1 bg-gray-200 rounded"></div>
                <div className="absolute top-8 left-4 right-4 h-1 bg-gray-200 rounded"></div>
                <div className="absolute top-12 left-4 right-4 h-1 bg-gray-200 rounded"></div>
                <div className="absolute top-16 left-4 right-4 h-1 bg-gray-200 rounded"></div>
              </div>
              
              {/* Send button */}
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-[#1110C4] to-[#1AD603] rounded-full flex items-center justify-center shadow-lg group-hover:animate-[send-pulse_2s_infinite]">
                <span className="text-xl">✉️</span>
              </div>
            </div>
            
            {/* Flying emails on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 left-8 w-8 h-8 bg-white rounded shadow-lg animate-[fly-email_3s_ease-in-out_infinite]">
                <span className="text-sm">✉️</span>
              </div>
              <div className="absolute top-4 right-12 w-6 h-6 bg-white rounded shadow animate-[fly-email_3s_ease-in-out_infinite]" style={{animationDelay: '0.5s'}}>
                <span className="text-xs">✉️</span>
              </div>
              <div className="absolute bottom-8 left-16 w-7 h-7 bg-white rounded shadow animate-[fly-email_3s_ease-in-out_infinite]" style={{animationDelay: '1s'}}>
                <span className="text-xs">✉️</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service 4 - Phone Icon with Call Animation */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Phone with Call Animation */}
        <div className="relative h-80 flex items-center justify-center lg:order-1 order-2">
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
            <path d="M200,50 L200,350 M50,200 L350,200" stroke="#1AD603" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
            <circle cx="200" cy="50" r="4" fill="#1110C4"/>
            <circle cx="200" cy="350" r="4" fill="#1AD603"/>
            <circle cx="50" cy="200" r="4" fill="#1110C4"/>
            <circle cx="350" cy="200" r="4" fill="#1AD603"/>
          </svg>
          
          <div className="relative group">
            {/* Phone device */}
            <div className="w-48 h-48 bg-gradient-to-br from-[#1AD603]/5 to-[#1110C4]/5 rounded-full group-hover:animate-[ringing_2s_ease-in-out_infinite]">
              {/* Phone screen */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl shadow-inner flex items-center justify-center">
                {/* Call interface */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1AD603] to-[#1110C4] rounded-full flex items-center justify-center mx-auto mb-2 group-hover:animate-[call-pulse_2s_infinite]">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div className="text-white text-sm font-semibold">Call..</div>
                  <div className="text-gray-400 text-xs mt-1"></div>
                </div>
                
                {/* Signal waves */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-48 h-48 border-2 border-[#1AD603]/30 rounded-full animate-[signal-wave_3s_linear_infinite]"></div>
                    <div className="w-48 h-48 border-2 border-[#1110C4]/30 rounded-full animate-[signal-wave_3s_linear_infinite]" style={{animationDelay: '0.5s'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call buttons */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#1110C4] to-[#1AD603] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">📞</span>
              </div>
            </div>
            
            {/* Incoming call indicator */}
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 animate-[blink_1s_ease-in-out_infinite] transition-opacity duration-300">
              <span className="text-xs text-white font-bold">1</span>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:order-2 order-1">
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#1110C4]/10 to-[#1AD603]/10 rounded-full">
            <span className="text-sm font-bold bg-gradient-to-r from-[#1110C4] via-[#1110C4]/90 to-[#0B0A8A] bg-clip-text text-transparent">
              04
            </span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">Appointment Generation</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            We secure meetings with verified decision-makers through targeted research and personalized outreach. 
            Every appointment is relevant and valuable, connecting your sales team with prospects who have genuine 
            interest and buying potential.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-700">
              Decision-Maker Access
            </div>
            <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-700">
              Qualified Meetings
            </div>
            <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 text-sm font-medium text-gray-700">
              Calendar Sync
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CTA to Services Page */}
    <div className="mt-20 text-center">
      <div className="inline-block bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl border-2 border-gray-100 shadow-xl">
        <p className="text-gray-600 mb-6 text-lg">
          Explore our full suite of services including Demand Generation, Content Syndication, and more
        </p>
        <a 
          href="/services" 
          className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#1110C4] via-[#1110C4]/90 to-[#0B0A8A] hover:bg-gradient-to-r hover:from-[#1110C4] hover:to-[#1AD603] text-white rounded-full font-semibold hover:shadow-xl hover:shadow-[#1AD603]/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
        >
          View All Services
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />                      
        </a>
      </div>
    </div>
  </div>



  {/* Curved Bottom Divider */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
      <path d="M0,64 C360,120 1080,0 1440,64 L1440,120 L0,120 Z" fill="white"/>
    </svg>
  </div>
</section>



{/* ================= Industries We Serve ================= */}
<section className="relative bg-white py-24 overflow-hidden">

{/* ===== Side Wave Decorations ===== */}
<div className="absolute inset-0 pointer-events-none hidden lg:block">

  {/* LEFT WAVE */}
  <div className="absolute top-0 left-0 h-full w-[420px]">
    <svg
      viewBox="0 0 400 900"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      preserveAspectRatio="none"
    >
      {/* Back wave */}
      <path
        d="M0 0
           C120 100 80 260 140 380
           C200 520 120 700 200 900
           L0 900 Z"
           fill="#60C5F1" 
        opacity="0.12"
      />

      {/* Front wave */}
      <path
        d="M0 0
           C160 140 120 300 180 420
           C240 560 160 740 260 900
           L0 900 Z"
           fill="#3AA8D8"
        opacity="0.20"
      />
    </svg>
  </div>

  {/* RIGHT WAVE */}
  <div className="absolute top-0 right-0 h-full w-[420px]">
    <svg
      viewBox="0 0 400 900"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      preserveAspectRatio="none"
    >
      {/* Back wave */}
      <path
        d="M400 0
           C280 100 320 260 260 380
           C200 520 280 700 200 900
           L400 900 Z"
           fill="#60C5F1" 
        opacity="0.10"
      />

      {/* Front wave */}
      <path
        d="M400 0
           C240 140 280 300 220 420
           C160 560 240 740 140 900
           L400 900 Z"
           fill="#3AA8D8"
        opacity="0.18"
      />
    </svg>
  </div>

</div>


{/* Soft background accents */}
<div className="absolute inset-0 pointer-events-none">
  <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full border border-[#1110C4]/10"></div>
  <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full border border-[#1AD603]/10"></div>
</div>

<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

  {/* ---------- Section Header ---------- */}
  <div className="text-center mb-20">
    <div className="inline-flex items-center gap-2 bg-[#1AD603]/10 px-4 py-2 rounded-full mb-6">
      <span className="w-2 h-2 bg-[#1AD603] rounded-full"></span>
      <span className="text-sm font-semibold text-[#1110C4]">
        Industries We Serve
      </span>
    </div>

    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
      Powering Growth Across{" "}
      <span className="bg-gradient-to-r from-[#1110C4] via-[#1110C4]/85 to-[#0B0A8A] bg-clip-text text-transparent">
        Key Industries
      </span>
    </h2>

    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      From technology to healthcare, we bring industry-specific expertise to every engagement.
    </p>
  </div>

{/* ===================================================== */}
{/* ================ DESKTOP SQUARE LAYOUT ============== */}
{/* ===================================================== */}
<div className="relative max-w-6xl mx-auto hidden lg:block" style={{ minHeight: "720px" }}>

  {/* Square guide (kept subtle, no rotation) */}
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 900 720" fill="none">
    <rect
      x="120"
      y="100"
      width="660"
      height="520"
      rx="24"
      stroke="#1110C4"
      strokeDasharray="6 6"
      opacity="0.08"
    />
  </svg>

  {/* ===== GRID WRAPPER ===== */}
  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 place-items-center">

    {/* ---------- TOP ROW ---------- */}
    <IndustryCard
      icon="💻"
      title="Technology & SaaS"
      desc="Enterprise software, cloud platforms, IT services"
    />

    <IndustryCard
      icon="🏥"
      title="Healthcare"
      desc="Medical devices, pharma, healthcare IT"
    />

    <IndustryCard
      icon="💰"
      title="Financial Services"
      desc="Banking, fintech, insurance, wealth"
    />

    {/* ---------- MIDDLE ROW ---------- */}
    <IndustryCard
      icon="📚"
      title="Professional Services"
      desc="Consulting, legal, accounting, advisory"
    />

    {/* ===== CENTER CORE ===== */}
    <div className="relative z-10">
      {/* soft pulse */}
      <span className="absolute inset-0 rounded-full border-2 border-[#1AD603]/40 animate-ping"></span>

      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#1110C4] via-[#1110C4]/85 to-[#0B0A8A] flex items-center justify-center shadow-2xl">
        <div className="text-center text-white">
          <div className="text-4xl font-bold">8+</div>
          <div className="text-sm font-medium tracking-wide">Industries</div>
        </div>
      </div>
    </div>

    <IndustryCard
      icon="📡"
      title="Telecom & Media"
      desc="Wireless networks, broadcasting, digital media"
    />

    {/* ---------- BOTTOM ROW ---------- */}
    <IndustryCard
      icon="🏭"
      title="Manufacturing"
      desc="Industrial automation, supply chain, logistics"
    />

    <IndustryCard
      icon="🛒"
      title="E-commerce"
      desc="Online retail, marketplaces, digital commerce"
    />

    <IndustryCard
      icon="🏘️"
      title="Real Estate"
      desc="Property tech, development, commercial real estate"
    />
  </div>
</div>

  {/* ===================================================== */}
  {/* ============== MOBILE / TABLET GRID UI ============== */}
  {/* ===================================================== */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:hidden mb-20">
    {[
      {
        icon: "💻",
        title: "Technology & SaaS",
        desc: "Enterprise software, cloud platforms, IT services",
      },
      {
        icon: "🏥",
        title: "Healthcare",
        desc: "Medical devices, pharma, healthcare IT",
      },
      {
        icon: "💰",
        title: "Financial Services",
        desc: "Banking, fintech, insurance, wealth",
      },
      {
        icon: "📡",
        title: "Telecom & Media",
        desc: "Wireless networks, broadcasting, digital media",
      },
      {
        icon: "🏭",
        title: "Manufacturing",
        desc: "Industrial automation, supply chain, logistics",
      },
      {
        icon: "🛒",
        title: "E-commerce",
        desc: "Online retail, marketplaces, digital commerce",
      },
      {
        icon: "🏘️",
        title: "Real Estate",
        desc: "Property tech, development, commercial real estate",
      },
      {
        icon: "📚",
        title: "Professional Services",
        desc: "Consulting, legal, accounting, advisory",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-[#1AD603]"
      >
        <div className="text-4xl mb-4">{item.icon}</div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600">
          {item.desc}
        </p>
      </div>
    ))}
  </div>

  {/* ---------- Bottom CTA ---------- */}
  <div className="bg-gradient-to-br from-[#1110C4] via-[#1110C4]/85 to-[#0B0A8A] rounded-3xl p-12 text-center text-white shadow-2xl">
    <h3 className="text-3xl font-bold mb-4">
      Industry-Specific Expertise
    </h3>
    <p className="text-white/80 max-w-2xl mx-auto mb-8">
      Proven strategies and deep vertical knowledge tailored to your industry's challenges.
    </p>
    <button
      onClick={() => navigate("/contact")}
      className="px-10 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#1110C4] hover:to-[#1AD603] hover:text-white hover:scale-105 transition-all duration-300"
    >
      Discuss Your Industry
    </button>
  </div>
 </div>
</section>


{/* ================= Contact / Send Inquiry (Modern Light Theme) ================= */}
<section className="relative bg-[#F9FAFB] py-16 md:py-28 overflow-hidden">

  {/* ===== Background Patterns ===== */}
  <div className="absolute inset-0 pointer-events-none">
    {/* Animated gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F0F7FF] to-white"></div>
    
    {/* Animated floating orbs - smaller on mobile */}
    <div className="absolute top-1/4 -left-10 md:-left-20 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-[#1110C4]/[0.15] to-[#1AD603]/[0.15] rounded-full blur-[50px] md:blur-[100px] animate-pulse"></div>
    <div className="absolute bottom-1/4 -right-10 md:-right-20 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-l from-[#1110C4]/[0.15] to-[#1AD603]/[0.15] rounded-full blur-[50px] md:blur-[100px] animate-pulse"></div>
    
    {/* Geometric pattern overlay */}
    <div className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `radial-gradient(circle at 25px 25px, #1110C4 2px, transparent 0),
                         radial-gradient(circle at 75px 75px, #1AD603 2px, transparent 0)`,
        backgroundSize: '100px 100px',
      }}
    />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* ===== Section Header ===== */}
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1110C4]/10 to-[#1AD603]/10 px-3 py-2 md:px-4 md:py-2.5 rounded-full mb-4 md:mb-6 border border-white/50 backdrop-blur-sm shadow-lg">
        <div className="relative flex items-center">
          <span className="absolute w-3 h-3 md:w-4 md:h-4 bg-[#1AD603] rounded-full animate-ping opacity-75"></span>
          <span className="relative w-1.5 h-1.5 md:w-2 md:h-2 bg-[#1AD603] rounded-full"></span>
        </div>
        <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-[#1110C4] to-[#1AD603] bg-clip-text text-transparent">
          Get in Touch
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
        Let's Discuss Your{" "}
        <span className="relative">
          <span className="bg-gradient-to-r from-[#1110C4] via-[#1AD603] to-[#1110C4] bg-clip-text text-transparent bg-[length:200%] animate-gradient">
            Growth Goals
          </span>
          <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-[#1110C4] to-[#1AD603] rounded-full"></span>
        </span>
      </h2>

      <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
        Share your vision with us. We'll craft a bespoke strategy that aligns perfectly with your business objectives.
      </p>
    </div>

    {/* ===== Main Grid ===== */}
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 md:gap-12">

{/* ===== Left: Contact Details ===== */}
<div className="lg:col-span-5 space-y-6 md:space-y-8 order-2 lg:order-1">
  {/* Modern Info Card - Fixed layout for mobile */}
  <div className="relative group">
    {/* Glow effect behind card */}
    <div className="absolute -inset-0.5 md:-inset-1 bg-gradient-to-r from-[#1110C4]/30 to-[#1AD603]/30 rounded-2xl md:rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
    
    <div className="relative bg-white/80 backdrop-blur-sm border border-white/30 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6 md:mb-8">
        <div className="p-2 md:p-2.5 bg-gradient-to-br from-[#1110C4]/10 to-[#1AD603]/10 rounded-lg md:rounded-xl">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-[#1110C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Contact Information
        </h3>
      </div>

      {/* Email Item - Fixed inline layout */}
      <div className="flex items-center justify-between p-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-white to-gray-50/50 hover:from-gray-50/80 hover:to-white transition-all duration-300 group/item mb-4">
        <div className="flex items-center gap-3">
          <span className="text-base md:text-lg">✉️</span>
          <span className="font-medium text-gray-700 text-sm md:text-base">Email</span>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <span className="hidden md:inline text-gray-400">•</span>
          <span className="font-semibold text-gray-900 text-sm md:text-base group-hover/item:text-[#1110C4] transition-colors break-words text-right">
           info@dartsunity.com
          </span>
        </div>
      </div>

      {/* Phone Item - Added below email */}
      <div className="flex items-center justify-between p-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-white to-gray-50/50 hover:from-gray-50/80 hover:to-white transition-all duration-300 group/item">
        <div className="flex items-center gap-3">
          <span className="text-base md:text-lg">📱</span>
          <span className="font-medium text-gray-700 text-sm md:text-base">Phone</span>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <span className="hidden md:inline text-gray-400">•</span>
          <span className="font-semibold text-gray-900 text-sm md:text-base group-hover/item:text-[#1AD603] transition-colors break-words text-right">
            7855965423
          </span>
        </div>
      </div>


            {/* Optional: Add more contact methods here if needed */}
         
          </div>
        </div>

        {/* Trust Badges Grid - Responsive adjustments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {[
            { text: "Enterprise-focused", color: "from-[#1110C4]/10 to-[#1110C4]/5" },
            { text: "Data & Compliance", color: "from-[#1AD603]/10 to-[#1AD603]/5" },
            { text: "Dedicated Managers", color: "from-[#1110C4]/10 to-[#1AD603]/10" },
            { text: "Transparent Reporting", color: "from-[#1AD603]/10 to-[#1110C4]/10" }
          ].map((item, i) => (
            <div key={i} className={`relative overflow-hidden group/badge`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl md:rounded-2xl p-4 md:p-5 text-center hover:border-transparent transition-all duration-300">
                <div className="text-xs md:text-sm font-medium text-gray-800">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Right: Inquiry Form with Enhanced Glow ===== */}
      <div className="lg:col-span-7 relative order-1 lg:order-2">
        {/* Animated Glow Effects for Form - Adjusted for mobile */}
        <div className="absolute -inset-2 md:-inset-4">
          {/* Blue glow layer */}
          <div className="absolute top-1/4 -left-4 md:-left-8 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-r from-[#1110C4]/40 to-transparent rounded-full blur-[40px] md:blur-[80px] animate-float-slow"></div>
          
          {/* Green glow layer */}
          <div className="absolute bottom-1/4 -right-4 md:-right-8 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-l from-[#1AD603]/40 to-transparent rounded-full blur-[40px] md:blur-[80px] animate-float-slower"></div>
          
          {/* Combined glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1110C4]/20 via-transparent to-[#1AD603]/20 rounded-3xl md:rounded-4xl blur-xl opacity-30"></div>
        </div>

        {/* Form Container */}
        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl md:rounded-4xl p-6 md:p-10 shadow-2xl border border-white/30">
          {/* Form Header */}
          <div className="flex items-start md:items-center justify-between mb-8 md:mb-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Send an Inquiry
              </h3>
              <p className="text-sm md:text-base text-gray-500 mt-1 hidden md:block">
                Fill out the form below
              </p>
            </div>
            <div className="p-2.5 md:p-3 bg-gradient-to-br from-[#1110C4]/10 to-[#1AD603]/10 rounded-xl md:rounded-2xl">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-[#1110C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { label: "Full Name",  type: "text" },
                { label: "Company Name",  type: "text" },
                { label: "Business Email",  type: "email" },
                { label: "Phone Number", type: "tel" }
              ].map((field, i) => (
                <div key={i} className="group/field">
                  <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl border-2 border-gray-200 bg-white/50 focus:border-[#1110C4]/50 focus:ring-4 focus:ring-[#1110C4]/20 focus:bg-white transition-all duration-300 outline-none group-hover/field:border-gray-300 text-sm md:text-base"
                  />
                </div>
              ))}
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                Your Requirement
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your goals, target market, or challenges..."
                className="w-full px-4 py-3 md:px-5 md:py-4 rounded-xl md:rounded-2xl border-2 border-gray-200 bg-white/50 focus:border-[#1110C4]/50 focus:ring-4 focus:ring-[#1110C4]/20 focus:bg-white transition-all duration-300 resize-none outline-none hover:border-gray-300 text-sm md:text-base"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4 md:pt-6">
              <button
                type="submit"
                className="group relative w-full px-8 py-4 md:px-12 md:py-5 bg-gradient-to-r from-[#1110C4] via-[#1AD603] to-[#1110C4] bg-[length:200%] text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-gradient hover:bg-right"
              >
                <span className="relative z-10">Send Inquiry →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1110C4] to-[#1AD603] rounded-xl md:rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  {/* ===== Top Curve Divider ===== */}
  <div className="absolute top-0 left-0 right-0">
    <svg
      viewBox="0 0 1440 120"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="w-full"
    >
      <path
        d="M0,0 C360,120 1080,40 1440,120 L1440,0 L0,0 Z"
        fill="url(#gradient)"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1110C4" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#1AD603" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#1110C4" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</section>

    </div>
  );
};

export default Home;