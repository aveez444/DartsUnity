import { ArrowRight, CheckCircle2, Target, Mail, Phone, TrendingUp, Users, FileText, Zap } from 'lucide-react';
import { useNavigate } from "react-router-dom";

// Import images
import servicesTelemarketingImage from '../assets/ManagedService.jpg';
import servicesABMImage from '../assets/AccountBasedMarket1.jpg';
import servicesAppointmentImage from '../assets/AppointmentGeneration.jpg';

const Services = () => {
  const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white">
          
          {/* ===================== HERO SECTION ===================== */}
          <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-16 md:pt-0 bg-gradient-to-br from-[#0a1628] via-[#1110C4] to-[#0B0A8A]">
            
            {/* Animated Matrix Grid Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 opacity-15" style={{
                backgroundImage: `linear-gradient(rgba(26, 214, 3, 0.2) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(26, 214, 3, 0.2) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
              }}></div>
              
              {/* Animated Moving Lines - Left Side Only */}
              <div className="absolute left-0 top-0 bottom-0 w-1/4 overflow-hidden">
                <div className="relative h-full">
                  
                  {/* Sequential Vertical Lines */}
                  <div className="absolute left-1/4 h-full w-0.5 bg-gradient-to-b from-transparent via-[#1AD603] to-transparent animate-scan-vertical"></div>
                  <div className="absolute left-1/3 h-full w-0.5 bg-gradient-to-b from-transparent via-[#1AD603]/80 to-transparent animate-scan-vertical" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-[#1AD603]/60 to-transparent animate-scan-vertical" style={{animationDelay: '1s'}}></div>
                  
                  {/* Horizontal connecting lines at grid intersections */}
                  <div className="absolute top-1/4 left-1/4 right-0 h-0.5 bg-gradient-to-r from-[#1AD603]/30 to-transparent animate-connect-horizontal" style={{animationDelay: '0.8s'}}></div>
                  <div className="absolute top-2/4 left-1/3 right-0 h-0.5 bg-gradient-to-r from-[#1AD603]/40 to-transparent animate-connect-horizontal" style={{animationDelay: '1.3s'}}></div>
                  <div className="absolute top-3/4 left-1/2 right-0 h-0.5 bg-gradient-to-r from-[#1AD603]/50 to-transparent animate-connect-horizontal" style={{animationDelay: '1.8s'}}></div>
                  
                  {/* More connecting lines at different heights */}
                  <div className="absolute top-1/3 left-1/4 right-0 h-0.5 bg-gradient-to-r from-[#1AD603]/20 to-transparent animate-connect-horizontal" style={{animationDelay: '2.2s'}}></div>
                  <div className="absolute top-2/3 left-1/3 right-0 h-0.5 bg-gradient-to-r from-[#1AD603]/25 to-transparent animate-connect-horizontal" style={{animationDelay: '2.7s'}}></div>
                  
                  {/* Subtle grid node pulses at intersection points */}
                  <div className="absolute top-1/4 left-1/4 w-[2px] h-[2px] bg-[#1AD603] rounded-full animate-pulse-slow"></div>
                  <div className="absolute top-1/2 left-1/3 w-[2px] h-[2px] bg-[#1AD603] rounded-full animate-pulse-slow" style={{animationDelay: '0.4s'}}></div>
                  <div className="absolute top-3/4 left-1/2 w-[2px] h-[2px] bg-[#1AD603] rounded-full animate-pulse-slow" style={{animationDelay: '0.8s'}}></div>
                  <div className="absolute top-1/3 left-1/4 w-[2px] h-[2px] bg-[#1AD603]/70 rounded-full animate-pulse-slow" style={{animationDelay: '1.2s'}}></div>
                  
                  {/* Horizontal grid line pulses */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1AD603]/20 to-transparent animate-grid-pulse"></div>
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1AD603]/15 to-transparent animate-grid-pulse" style={{animationDelay: '2s'}}></div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1AD603]/10 to-transparent animate-grid-pulse" style={{animationDelay: '4s'}}></div>
                </div>
              </div>
            </div>
      
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
              <div className="text-center max-w-4xl mx-auto">
                
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
                  <span className="w-2 h-2 bg-[#1AD603] rounded-full animate-pulse"></span>
                  <span className="text-sm font-semibold text-white/90 tracking-wider">OUR SOLUTIONS</span>
                </div>
      
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Services That Drive
                  <span className="block mt-2 bg-gradient-to-r from-[#1AD603] to-[#2BEC06] bg-clip-text text-transparent">
                    Measurable Growth
                  </span>
                </h1>
      
                <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                  From lead qualification to full-scale demand generation, we provide end-to-end B2B solutions 
                  tailored to your growth objectives and market dynamics.
                </p>
      
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <button
                  onClick={() => navigate("/contact")}
                  className="group px-8 py-4 bg-white text-[#1110C4] rounded-full font-semibold hover:shadow-2xl hover:shadow-[#1AD603]/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Schedule Consultation
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigate("/contact")}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                >
                  Get Pricing
                </button>
                </div>
              </div>
            </div>
      
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 -mb-px">
        <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
        >
            <path
            d="M0,64 C360,120 1080,0 1440,64 L1440,120 L0,120 Z"
            fill="white"
            />
        </svg>
        </div>

      
            {/* CSS Animations */}
            <style jsx>{`
              @keyframes scan-vertical {
                0%, 100% {
                  transform: translateY(-100%);
                  opacity: 0;
                }
                10% {
                  opacity: 0.7;
                }
                90% {
                  opacity: 0.7;
                }
                100% {
                  transform: translateY(100vh);
                  opacity: 0;
                }
              }
              
              @keyframes connect-horizontal {
                0%, 100% {
                  transform: translateX(-100%);
                  opacity: 0;
                }
                20% {
                  opacity: 0.3;
                }
                80% {
                  opacity: 0.3;
                }
                100% {
                  transform: translateX(0);
                  opacity: 0;
                }
              }
              
              @keyframes grid-pulse {
                0%, 100% {
                  opacity: 0;
                }
                50% {
                  opacity: 0.3;
                }
              }
              
              @keyframes pulse-slow {
                0%, 100% {
                  opacity: 0.3;
                  transform: scale(1);
                }
                50% {
                  opacity: 1;
                  transform: scale(1.2);
                }
              }
              
              .animate-scan-vertical {
                animation: scan-vertical 3s ease-in-out infinite;
              }
              
              .animate-connect-horizontal {
                animation: connect-horizontal 4s ease-in-out infinite;
              }
              
              .animate-grid-pulse {
                animation: grid-pulse 8s ease-in-out infinite;
              }
              
              .animate-pulse-slow {
                animation: pulse-slow 2s ease-in-out infinite;
              }
            `}</style>
          </section>


{/* ===================== SERVICES OVERVIEW (ALT LAYOUT) ===================== */}
<section className="relative bg-white py-24 overflow-hidden">

  {/* Subtle Background Pattern */}
  <div className="absolute inset-0 opacity-[0.025]">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `linear-gradient(90deg, #1110C4 1px, transparent 1px),
                          linear-gradient(#1110C4 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }}
    />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Comprehensive B2B Solutions
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Nine core services designed to address every stage of your growth journey
      </p>
    </div>

    {/* Services Layout */}
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-12 lg:gap-8">

      {[
        { num: '01', title: 'Lead Qualification', icon: Target },
        { num: '02', title: 'Telemarketing', icon: Phone },
        { num: '03', title: 'Account-Based Marketing', icon: Users },
        { num: '04', title: 'Appointment Generation', icon: CheckCircle2 },
        { num: '05', title: 'Demand Generation', icon: TrendingUp },
        { num: '06', title: 'Email Campaigns', icon: Mail },
        { num: '07', title: 'Lead Generation', icon: Zap },
        { num: '08', title: 'Content Syndication', icon: FileText },
        { num: '09', title: 'White Papers', icon: FileText }
      ].map((service, i) => (
        <div
          key={i}
          className={`
            relative group
            lg:col-span-4
            ${i === 4 ? 'lg:col-span-4 lg:translate-y-10' : ''}
            ${i === 1 || i === 7 ? 'lg:translate-y-6' : ''}
          `}
        >
          <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300
                          hover:shadow-2xl hover:-translate-y-1">

            {/* Vertical Accent */}
            <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full
                            bg-gradient-to-b from-[#1110C4] to-[#1AD603]
                            opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-xl
                              bg-gradient-to-br from-[#1110C4] to-[#0B0A8A]
                              group-hover:from-[#1AD603] group-hover:to-[#2BEC06]
                              flex items-center justify-center transition-all duration-300">
                <service.icon className="h-7 w-7 text-white" />
              </div>
              <span className="text-4xl font-bold text-gray-100 group-hover:text-[#1AD603]/30 transition-colors">
                {service.num}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#1110C4] transition-colors">
              {service.title}
            </h3>

            {/* Bottom Indicator */}
            <div className="mt-6 h-1 w-10 rounded-full bg-gray-200
                            group-hover:w-16 group-hover:bg-gradient-to-r
                            group-hover:from-[#1110C4] group-hover:to-[#1AD603]
                            transition-all duration-500" />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


{/* ===================== SERVICE 1: LEAD QUALIFICATION ===================== */}
<section className="relative bg-gray-50 py-20 overflow-hidden">
        
        {/* Wave Background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
            <path d="M0,200 C240,260 480,140 720,200 C960,260 1200,140 1440,200 L1440,600 L0,600 Z" fill="#1110C4" opacity="0.03"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1110C4] to-[#0B0A8A] flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Lead Qualification
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl">
              Delivering verified, sales-ready leads that match your Ideal Customer Profile with precision
            </p>
          </div>

          {/* Lead Types */}
          <div className="space-y-8">
            
            {/* HQL */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-[#1110C4] shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#1110C4]/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#1110C4]">HQL</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">High Quality Leads</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Leads that match the approved ICP with verified decision-maker details, validated company 
                    information, and relevance to the target industry and geography.
                  </p>
                </div>
              </div>
            </div>

            {/* MQL */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-[#1AD603] shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#1AD603]/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#1AD603]">MQL</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Marketing Qualified Leads</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A prospect who has engaged with marketing campaigns and shows potential interest. Leads are 
                    evaluated based on fit with the Ideal Customer Profile and behavioral indicators. MQLs help 
                    sales teams focus on prospects most likely to convert.
                  </p>
                </div>
              </div>
            </div>

            {/* SQL */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-[#1110C4] shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#1110C4]/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#1110C4]">SQL</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Sales Qualified Leads</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A prospect vetted for sales readiness, demonstrating clear need, authority, and intent to purchase. 
                    SQLs have been validated through interactions or engagement, making them ready for direct sales 
                    follow-up. Focusing on SQLs ensures efficient pipeline management and higher conversion potential.
                  </p>
                </div>
              </div>
            </div>

            {/* Touch Leads */}
            <div className="space-y-8">
              {/* Single Touch Leads - Blue */}
              <div className="bg-white rounded-2xl p-8 border-l-4 border-[#1110C4] shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#1110C4]/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#1110C4]">ST</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Single Touch Leads</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Contacts validated through one direct outreach attempt (email or LinkedIn), confirming accuracy 
                      and role relevance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Double Touch Leads - Green */}
              <div className="bg-white rounded-2xl p-8 border-l-4 border-[#1AD603] shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#1AD603]/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#1AD603]">DT</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Double Touch Leads</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Contacts validated through multiple outreach demonstrated by two touchpoints (email, LinkedIn, or 
                      follow-up), improving engagement confidence and lead reliability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BANT - Blue (alternating pattern) */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-[#1110C4] shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#1110C4]/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#1110C4]">BANT</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">BANT Qualified Leads</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    BANT (Budget, Authority, Need, Timeline) qualified leads are evaluated to ensure sales readiness 
                    and business relevance. Each lead is assessed based on budget availability, decision-making authority, 
                    identified business need, and expected purchase timeline.
                  </p>
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { title: 'Budget', desc: 'Budget availability and allocation' },
                      { title: 'Authority', desc: 'Decision-making power and influence' },
                      { title: 'Need', desc: 'Identified business requirements' },
                      { title: 'Timeline', desc: 'Expected purchase timeframe' }
                    ].map((item, i) => (
                      <div key={i} className="bg-gray-50 rounded-xl p-4">
                        <div className="font-bold text-gray-900 mb-1">{item.title}</div>
                        <div className="text-sm text-gray-600">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

{/* ===================== SERVICES 2-4: ENGAGEMENT SERVICES ===================== */}
<section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Engagement & Outreach Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1110C4] to-[#1AD603] mx-auto"></div>
          </div>

          <div className="space-y-16">
            
            {/* Telemarketing - Image Left, Content Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Left */}
              <div className="relative lg:order-1 order-2">
                <div className="aspect-square rounded-2xl overflow-hidden border-4 border-gray-100 shadow-xl">
                  <img 
                    src={servicesTelemarketingImage}  
                    alt="Telemarketing Services"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-[#1110C4]/10', 'to-[#1AD603]/10');
                      e.target.parentElement.innerHTML = '<div class="text-center p-8"><div class="text-6xl mb-4">📞</div><div class="text-gray-600">Telemarketing</div></div>';
                    }}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#1110C4] rounded-full opacity-20 blur-3xl"></div>
              </div>
              
              {/* Content Right */}
              <div className="lg:order-2 order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1110C4] to-[#0B0A8A] flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Telemarketing</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  DartsUnity telemarketing services focus on engaging decision-makers through professional, 
                  targeted conversations. Using verified data and structured scripts, we help clients generate 
                  qualified opportunities and set meaningful appointments.
                </p>
                <ul className="space-y-3">
                  {[
                    'Professional, targeted conversations',
                    'Verified data and structured scripts',
                    'Real-time insights and immediate engagement',
                    'Complements other outreach channels'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#1110C4] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Account-Based Marketing (ABM) - Image Right, Content Left */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Left */}
              <div className="lg:order-1 order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1AD603] to-[#2BEC06] flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Account-Based Marketing (ABM)</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  DartsUnity ABM strategy focuses on high-value accounts, ensuring marketing and sales efforts are 
                  precisely targeted. We start with in-depth account research and identify key decision-makers to 
                  create a focused engagement plan.
                </p>
                <ul className="space-y-3">
                  {[
                    'In-depth account research and decision-maker identification',
                    'Tailored content and messaging across multiple channels',
                    'Track engagement and optimize for measurable results',
                    'Focus on high-value accounts with maximum ROI potential'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#1AD603] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Image Right */}
              <div className="relative lg:order-2 order-1">
                <div className="aspect-square rounded-2xl overflow-hidden border-4 border-gray-100 shadow-xl">
                  <img 
                    src={servicesABMImage} 
                    alt="Account-Based Marketing Services"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-[#1110C4]/10', 'to-[#1AD603]/10');
                      e.target.parentElement.innerHTML = '<div class="text-center p-8"><div class="text-6xl mb-4">🎯</div><div class="text-gray-600">Account-Based Marketing</div></div>';
                    }}
                  />
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1AD603] rounded-full opacity-20 blur-3xl"></div>
              </div>
            </div>

            {/* Appointment Generation - Image Left, Content Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Left */}
              <div className="relative lg:order-1 order-2">
                <div className="aspect-square rounded-2xl overflow-hidden border-4 border-gray-100 shadow-xl">
                  <img 
                    src={servicesAppointmentImage} 
                    alt="Appointment Generation Services"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-[#1110C4]/10', 'to-[#1AD603]/10');
                      e.target.parentElement.innerHTML = '<div class="text-center p-8"><div class="text-6xl mb-4">📅</div><div class="text-gray-600">Appointment Generation</div></div>';
                    }}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#1110C4] rounded-full opacity-20 blur-3xl"></div>
              </div>
              
              {/* Content Right */}
              <div className="lg:order-2 order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1110C4] to-[#0B0A8A] flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Appointment Generation</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  We secure meetings with verified decision-makers through targeted research and personalized 
                  outreach. Every appointment is relevant and valuable, connecting your sales team with prospects 
                  who have genuine interest and buying potential.
                </p>
                <ul className="space-y-3">
                  {[
                    'Verified decision-maker meetings',
                    'Targeted research and personalized outreach',
                    'Qualified prospects with genuine interest',
                    'Calendar sync and meeting coordination'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#1110C4] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

{/* ===================== SERVICES 5-7: MARKETING SERVICES ===================== */}
<section className="relative bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Marketing & Campaign Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1110C4] to-[#1AD603] mx-auto"></div>
          </div>

          {/* Timeline Layout */}
          <div className="relative">
            
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1110C4] via-[#1AD603] to-[#1110C4]"></div>

            <div className="space-y-16">
              
              {/* Demand Generation */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right md:pr-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Demand Generation</h3>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1110C4] to-[#0B0A8A] flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    DartsUnity Demand Generation services focus on creating awareness and interest among high-value 
                    prospects. By leveraging targeted campaigns, content distribution, and research-driven outreach, 
                    we generate leads that are actively engaged and sales-ready.
                  </p>
                </div>
                <div className="md:pl-12">
                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                    <ul className="space-y-3">
                      {[
                        'Targeted awareness campaigns',
                        'Content distribution strategies',
                        'Research-driven outreach',
                        'Sales-ready lead generation'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#1110C4] rounded-full"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Email Marketing */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2 md:pl-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1AD603] to-[#2BEC06] flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Email Marketing Campaigns</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We deliver end-to-end email campaign management with personalized messaging for decision-makers. 
                    Our data-driven approach optimizes deliverability, open rates, and responses to ensure predictable 
                    pipeline growth.
                  </p>
                </div>
                <div className="md:order-1 md:pr-12 md:text-right">
                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                    <ul className="space-y-3">
                      {[
                        'End-to-end campaign management',
                        'Personalized messaging',
                        'A/B testing and optimization',
                        'Performance tracking and ROI'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center justify-end gap-3">
                          <span className="text-gray-700">{item}</span>
                          <div className="w-2 h-2 bg-[#1AD603] rounded-full"></div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Lead Generation */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right md:pr-12">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Lead Generation</h3>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1110C4] to-[#0B0A8A] flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Lead Generation is the process of identifying and capturing prospects who fit the Ideal Customer 
                    Profile (ICP). Leads are validated for accuracy, relevance, and potential interest in your products 
                    or services. This ensures a steady flow of qualified opportunities for the sales team to engage and convert.
                  </p>
                </div>
                <div className="md:pl-12">
                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                    <ul className="space-y-3">
                      {[
                        'ICP-matched prospects',
                        'Validated for accuracy',
                        'Steady qualified flow',
                        'Higher conversion rates'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#1110C4] rounded-full"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

{/* ===================== SERVICES 8-9: CONTENT SERVICES ===================== */}
<section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Content & Thought Leadership
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1110C4] to-[#1AD603] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Content Syndication - Green Background */}
            <div className="bg-gradient-to-br from-[#1AD603] to-[#2BEC06] rounded-3xl p-8 text-black">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <FileText className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold">Content Syndication</h3>
              </div>
              
              <p className="text-black leading-relaxed mb-6">
                Content Syndication is the process of distributing your marketing assets, such as whitepapers, 
                case studies, and reports, to a targeted audience. It helps generate qualified leads by engaging 
                prospects who have shown interest in relevant content.
              </p>

              <div className="space-y-3">
                {[
                  'Enhanced visibility across multiple channels',
                  'Connect with prospects showing genuine interest',
                  'Generate sales-ready leads from content engagement',
                  'Distribute marketing assets to targeted audiences'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-900 flex-shrink-0 mt-1" />
                    <span className="text-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* White Papers - Blue Background */}
            <div className="bg-gradient-to-br from-[#1110C4] to-[#0B0A8A] rounded-3xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">White Papers</h3>
              </div>
              
              <p className="text-white/90 leading-relaxed mb-6">
                A White Paper is a detailed, authoritative report that educates prospects on industry trends, 
                challenges, or solutions. It is used to generate qualified leads by providing valuable insights 
                to decision-makers.
              </p>

              <div className="space-y-3">
                {[
                  'Establish thought leadership and industry authority',
                  'Build trust and credibility with prospects',
                  'Support informed buying decisions with detailed insights',
                  'Generate high-quality, sales-ready leads'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-100 flex-shrink-0 mt-1" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm text-white/70 italic">
                  White Papers position your organization as an industry authority while creating meaningful 
                  engagement opportunities with decision-makers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      
 
      {/* ===================== CTA SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1110C4] to-[#0B0A8A] py-24 overflow-hidden">
        
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1AD603] rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-10">
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Transform Your{' '}
              <span className="block mt-3 text-[#1AD603]">
                B2B Growth Strategy?
              </span>
            </h2>

            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our comprehensive suite of services can help you achieve predictable, 
              scalable revenue growth through data-driven execution.
            </p>

       
          {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
          <button
            onClick={() => navigate("/contact")}
            className="group px-12 py-6 bg-white text-[#1110C4] rounded-full font-bold text-lg shadow-2xl hover:shadow-white/30 hover:scale-105 hover:bg-gradient-to-r hover:from-[#1110C4] hover:to-[#1AD603] hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
          >
            Schedule a Consultation
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-white/20">
              {[
                { value: '9', label: 'Core Services' },
                { value: '100M+', label: 'Business Emails' },
                { value: '2.5M+', label: 'Interactions' },
                { value: '84%', label: 'Retention Rate' }
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-white/70 text-sm uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;