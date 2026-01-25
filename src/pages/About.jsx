import { ArrowRight, Target, Database, Users, TrendingUp, CheckCircle2, Award, Globe, BarChart3, Shield, Sparkles, Clock, Zap, Eye, Lightbulb } from 'lucide-react';
import { useNavigate } from "react-router-dom";

// Import images
import officeTeamImage from '../assets/B2Bimg.jpg'; // Modern office with team collaborating
import dataAnalyticsImage from '../assets/data-analytics-illustration.jpg'; // AI-generated illustration of data/analytics
import cultureImage from '../assets/company-culture.jpg'; // Office interior showing company culture
import processIllustration from '../assets/vision-board.jpg'; // AI-generated workflow/process illustration
import yourWorldMapImage from '../assets/WorldMapImage.jpg'; // AI-generated workflow/process illustration


const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">

  {/* ===================== OUR STORY - Bento Box Layout ===================== */}

<section className="relative bg-gray-50 py-32 overflow-hidden">

    {/* Diagonal gradient wave layer */}
    <div className="absolute inset-0 pointer-events-none">
      <svg
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-40 left-0 w-full rotate-[-4deg]"
        preserveAspectRatio="none"
      >
        <defs>
        <linearGradient id="diagWave" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1110C4" stopOpacity="0.14" />
          <stop offset="55%" stopColor="#1110C4" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#1AD603" stopOpacity="0.10" />
        </linearGradient>

        </defs>

        <path
          d="M0,300 C200,180 420,220 640,260 C900,320 1120,240 1440,180 L1440,0 L0,0 Z"
          fill="url(#diagWave)"
        />
      </svg>
    </div>


        {/* Soft diagonal wave */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            viewBox="0 0 1440 600"
            className="absolute bottom-0 left-0 w-full rotate-[3deg]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,120 C240,200 480,80 720,140 C960,200 1200,100 1440,140 L1440,600 L0,600 Z"
              fill="#1110C4"
              opacity="0.04"
            />
          </svg>
        </div>

        {/* Radial gradient background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-[#1110C4]/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#1AD603]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Curved lines pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="curvedLines" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0,50 Q25,25 50,50 T100,50" stroke="#1110C4" fill="none" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#curvedLines)"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="relative">      
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
             About{' '}
              <span className="bg-gradient-to-r from-[#1110C4] via-[#1110C4]/85 to-[#0B0A8A] bg-clip-text text-transparent">
               Us
              </span>
            </h2>
              </div>
            
            </div>
        
          </div>

          {/* Bento Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-6">
            
            {/* Large text card */}
            <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-10 lg:p-14 shadow-xl border border-gray-200 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#1110C4]/5 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  DartsUnity is a B2B data and growth solutions company
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  We support organizations with structured, research-led sales and marketing execution. 
                  Our services connect businesses with relevant decision-makers through account-based marketing, 
                  lead generation, and email outreach.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Every engagement is grounded in accurate data validation, industry-specific research, and clearly 
                  defined ICPs—ensuring long-term value creation over short-term volume.
                </p>
              </div>
            </div>

            {/* Image card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-gray-100 to-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-200 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1110C4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src={dataAnalyticsImage}
                alt="Data Analytics"
                className="w-full h-full object-cover min-h-[400px] lg:min-h-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                  e.target.parentElement.innerHTML = '<div class="text-center p-12"><div class="text-7xl mb-4">📊</div><div class="text-gray-600 text-lg">Data analytics illustration</div></div>';
                }}
              />
            </div>

            {/* Stats cards row */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#1110C4] to-[#0B0A8A] rounded-[2.5rem] p-8 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-5xl font-bold mb-2">100M+</div>
                <div className="text-white/80 text-sm uppercase tracking-wider">Business Emails</div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-[2.5rem] p-8 shadow-xl border-2 border-[#1110C4]/20 relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1110C4] opacity-5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="text-5xl font-bold text-[#1110C4] mb-2">2.5M+</div>
                <div className="text-gray-600 text-sm uppercase tracking-wider">Interactions</div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-green-600 to-green-500 rounded-[2.5rem] p-8 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1AD603] opacity-10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-5xl font-bold mb-2">84%</div>
                <div className="text-white/80 text-sm uppercase tracking-wider">Client Retention</div>
              </div>
            </div>

            {/* Values cards */}
            {[
              { title: 'Data Integrity', desc: 'Multi-layer validation ensures accuracy', icon: '🎯' },
              { title: 'Compliance First', desc: 'Transparency & regulatory adherence', icon: '🛡️' },
              { title: 'Long-Term Value', desc: 'Sustainable growth over volume', icon: '📈' }
            ].map((item, i) => (
              <div key={i} className="lg:col-span-4 bg-white rounded-[2.5rem] p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:border-[#1110C4]/30 transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wavy divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,64 C240,90 480,40 720,64 C960,88 1200,38 1440,64 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>
{/* ===================== MISSION & VISION ===================== */}
<section className="relative bg-gradient-to-br from-blue-50 to-white py-24 lg:py-32 overflow-hidden">
  {/* Background path line */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="relative h-full max-w-6xl mx-auto">
      <div className="absolute left-1/4 top-1/3 w-1/2 h-0.5 bg-blue-100"></div>
      <div className="absolute left-3/4 top-1/3 w-0.5 h-1/3 bg-blue-100"></div>
      <div className="absolute left-1/4 top-1/3 w-0.5 h-1/3 bg-blue-100"></div>
    </div>
  </div>

  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* ===================== OUR MISSION ===================== */}
    <div className="mb-24 lg:mb-32">
      <div className="flex flex-col lg:flex-row lg:items-start gap-12">
        {/* Title Section - Left aligned */}
        <div className="lg:w-2/5">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm">
            <Target className="w-5 h-5 text-blue-700" />
            <span className="text-lg font-bold text-gray-900 tracking-wide">OUR MISSION</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Driving Growth Through Quality Data
          </h2>
        </div>
        
        {/* Card - Right aligned */}
        <div className="lg:w-3/5">
          <div className="bg-white rounded-3xl p-10 lg:p-12 shadow-lg border-2 border-gray-100 hover:border-green-500 transition-all duration-300 hover:shadow-xl">
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Our mission is to enable B2B organizations to achieve consistent growth through high-quality data, structured execution, and measurable outcomes. We aim to support sales and marketing teams by delivering reliable, decision-ready leads and scalable demand programs. DartsUnity is committed to maintaining accuracy, integrity, and operational excellence in every engagement.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* ===================== OUR VISION ===================== */}
    <div className="lg:ml-24">
      <div className="flex flex-col lg:flex-row lg:items-start gap-12">
        {/* Title Section - Right aligned */}
        <div className="lg:w-2/5 lg:order-2">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm">
            <Globe className="w-5 h-5 text-blue-700" />
            <span className="text-lg font-bold text-gray-900 tracking-wide">OUR VISION</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Setting Global Benchmarks
          </h2>
        </div>
        
        {/* Card - Left aligned */}
        <div className="lg:w-3/5 lg:order-1">
          <div className="bg-white rounded-3xl p-10 lg:p-12 shadow-lg border-2 border-gray-100 hover:border-green-500 transition-all duration-300 hover:shadow-xl">
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Our vision is to be a trusted global partner for B2B data and growth execution. We strive to set industry benchmarks for data quality, compliance, and process-driven delivery. By continuously refining our methodologies, we aim to help organizations build sustainable pipelines and long-term revenue growth.
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

{/* ===================== OUR APPROACH - Modern Process Flow ===================== */}
<section className="relative bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
  
  {/* Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-96 h-96 bg-[#1110C4]/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1AD603]/5 rounded-full blur-3xl"></div>
    
    {/* Subtle grid */}
    <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: `linear-gradient(to right, #1110C4 1px, transparent 1px),
                       linear-gradient(to bottom, #1110C4 1px, transparent 1px)`,
      backgroundSize: '40px 40px'
    }}></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Header */}
    <div className="text-center mb-12 lg:mb-20">
    <div className="inline-block mb-4">
            <div className="inline-flex items-center gap-2 bg-[#1AD603]/10 px-4 py-2 rounded-full mb-6">
             <span className="w-2 h-2 bg-[#1AD603] rounded-full"></span>
                <span className="text-sm font-semibold text-[#1110C4]">Our Process</span>
              </div>
            </div>
      
      <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
        A Results-Driven{' '}
        <span className="bg-gradient-to-r from-[#1110C4] to-[#0B0A8A] bg-clip-text text-transparent">
          Methodology
        </span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-base lg:text-lg">
        Our six-step framework transforms complex challenges into measurable outcomes
      </p>
    </div>

    {/* Desktop Layout - Side by side */}
    <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Left: Process Steps */}
      <div className="space-y-8">
        {[
          { 
            title: 'Research & Discovery', 
            desc: 'Deep ICP analysis, market positioning, and strategic foundation building',
            icon: '🔍'
          },
          { 
            title: 'Strategic Planning', 
            desc: 'Goal alignment, roadmap development, and impact planning',
            icon: '📋'
          },
          { 
            title: 'Data Validation', 
            desc: 'Multi-layer verification ensuring accuracy and decision-maker identification',
            icon: '✅'
          },
          { 
            title: 'Campaign Execution', 
            desc: 'Personalized multi-channel outreach for maximum engagement',
            icon: '🚀'
          },
          { 
            title: 'Performance Tracking', 
            desc: 'Real-time analytics and KPI monitoring for measurable results',
            icon: '📊'
          },
          { 
            title: 'Optimization', 
            desc: 'Continuous refinement and reporting to maximize ROI',
            icon: '⚡'
          }
        ].map((step, index) => (
          <div 
            key={index} 
            className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-[#1AD603] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex items-start gap-5">
              {/* Step Indicator */}
              <div className="flex-shrink-0 relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1110C4] to-[#0B0A8A] flex items-center justify-center group-hover:from-[#1AD603] group-hover:to-[#2BEC06] transition-all duration-300">
                  <span className="text-xl text-white font-medium">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">
                  {index + 1}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1110C4] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
            
            {/* Hover Indicator */}
            <div className="mt-4 pl-17 relative">
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-[#1AD603] to-[#2BEC06] transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Right: Process Image */}
      <div className="relative">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
          <div className="aspect-[4/5] relative">
            <img 
              src={processIllustration}
              alt="Our Process Methodology"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-[#1110C4]/10', 'to-[#1AD603]/10');
                e.target.parentElement.innerHTML = `
                  <div class="text-center p-8">
                    <div class="grid grid-cols-2 gap-4 mb-6">
                      ${[1,2,3,4,5,6].map(num => `
                        <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1110C4] to-[#0B0A8A] flex items-center justify-center mx-auto">
                          <span class="text-white text-2xl">${['🔍','📋','✅','🚀','📊','⚡'][num-1]}</span>
                        </div>
                      `).join('')}
                    </div>
                    <div class="text-xl text-gray-800 font-semibold">Process Workflow</div>
                    <div class="text-gray-600 mt-2">6-Step Methodology</div>
                  </div>
                `;
              }}
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1110C4]/20 via-transparent to-transparent"></div>

          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-[#1110C4]/20 rounded-3xl -z-10"></div>
        <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-[#1AD603]/20 rounded-full -z-10"></div>
      </div>
    </div>

{/* Process Steps - Zigzag Pattern for Mobile */}
<div className="lg:hidden space-y-6 relative">
  
  {/* Connecting line */}
  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1110C4]/20 via-[#1110C4]/40 to-[#1110C4]/20 -z-10"></div>
  
  {[
    { 
      title: 'Research & Discovery', 
      desc: 'Deep ICP analysis, market positioning, and strategic foundation building',
      icon: '🔍',
      side: 'left'
    },
    { 
      title: 'Strategic Planning', 
      desc: 'Goal alignment, roadmap development, and impact planning',
      icon: '📋',
      side: 'right'
    },
    { 
      title: 'Data Validation', 
      desc: 'Multi-layer verification ensuring accuracy and decision-maker identification',
      icon: '✅',
      side: 'left'
    },
    { 
      title: 'Campaign Execution', 
      desc: 'Personalized multi-channel outreach for maximum engagement',
      icon: '🚀',
      side: 'right'
    },
    { 
      title: 'Performance Tracking', 
      desc: 'Real-time analytics and KPI monitoring for measurable results',
      icon: '📊',
      side: 'left'
    },
    { 
      title: 'Optimization', 
      desc: 'Continuous refinement and reporting to maximize ROI',
      icon: '⚡',
      side: 'right'
    }
  ].map((step, index) => (
    <div 
      key={index} 
      className={`relative flex items-start gap-4 ${step.side === 'left' ? 'pr-8' : 'pl-8'}`}
    >
      {/* Step Number Indicator - Left side */}
      <div className={`flex-shrink-0 absolute ${step.side === 'left' ? 'left-0' : 'right-0'} top-0`}>
        <div className="w-8 h-8 rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1110C4] to-[#0B0A8A] flex items-center justify-center">
            <span className="text-xs font-bold text-white">{index + 1}</span>
          </div>
        </div>
      </div>
      
      {/* Content Card - Alternating sides */}
      <div className={`flex-1 ${step.side === 'left' ? 'ml-12' : 'mr-12'}`}>
        <div className="bg-white rounded-2xl p-5 border-2 border-gray-100 shadow-sm hover:shadow-md active:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1110C4] to-[#0B0A8A] flex items-center justify-center">
                <span className="text-lg text-white">{step.icon}</span>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

  {/* CTA Note */}
  <div className="text-center mt-20 lg:mt-28">
    <div className="inline-flex flex-col sm:flex-row items-center gap-5 px-10 py-8 bg-gradient-to-r from-white to-gray-50/80 rounded-3xl border-2 border-[#1110C4]/10 shadow-xl backdrop-blur-sm">
      {/* Animated Icon */}
      <div className="flex-shrink-0">
        <div className="relative">

         
        </div>
      </div>
      
      {/* Text Content */}
      <div className="text-left">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
          Every Step is <span className="bg-gradient-to-r from-[#1110C4] to-[#0B0A8A] bg-clip-text text-transparent">Evidence-Based</span>
        </h3>
        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
          Backed by <span className="font-bold text-[#1110C4]">data-driven insights</span> and 
          validated through <span className="font-bold text-[#1AD603]">proven methodologies</span> for 
          measurable, scalable results.
        </p>
      </div>
    </div>
  </div>
  </div>
</section>
{/* ===================== WHERE WE SERVE ===================== */}
<section className="relative bg-gradient-to-b from-white to-gray-50 py-24 lg:py-32 overflow-hidden">
  
  {/* Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-64 h-64 bg-[#1110C4]/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#1AD603]/5 rounded-full blur-3xl"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Header */}
    <div className="text-center mb-16 lg:mb-20">
      <div className="inline-block mb-4">
        <div className="inline-flex items-center gap-2 bg-[#1AD603]/10 px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-[#1AD603] rounded-full"></span>
          <span className="text-sm font-semibold text-[#1110C4]">Global Reach</span>
        </div>
      </div>
      
      <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
        Where We{' '}
        <span className="bg-gradient-to-r from-[#1110C4] to-[#0B0A8A] bg-clip-text text-transparent">
          Serve
        </span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-base lg:text-lg">
        DartsUnity delivers services across key global markets, supporting clients with region-specific research and outreach strategies.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      
      {/* Left: World Map Image - Fixed for mobile */}
      <div className="relative order-1 lg:order-1">
        <div className="rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-xl lg:shadow-2xl border-4 lg:border-8 border-white relative group">
          <img 
            src={yourWorldMapImage}
            alt="Global Coverage Map"
            className="w-full h-auto aspect-[4/3] lg:aspect-auto lg:min-h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-blue-50', 'to-gray-100');
              e.target.parentElement.innerHTML = `
                <div class="text-center p-8 lg:p-12 w-full aspect-[4/3] lg:aspect-auto lg:min-h-[500px] flex items-center justify-center">
                  <div>
                    <div class="text-5xl lg:text-7xl mb-4 lg:mb-6">🌍</div>
                    <div class="text-xl lg:text-2xl font-bold text-gray-800 mb-2">Global Coverage</div>
                    <div class="text-gray-600 text-sm lg:text-base">World Map Illustration</div>
                  </div>
                </div>
              `;
            }}
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1110C4]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="hidden lg:block absolute -top-4 -right-4 w-20 h-20 border-2 border-[#1110C4]/20 rounded-full -z-10"></div>
        <div className="hidden lg:block absolute -bottom-4 -left-4 w-16 h-16 border-2 border-[#1AD603]/20 rounded-full -z-10"></div>
      </div>

      {/* Right: Content */}
      <div className="space-y-6 lg:space-y-8 order-2 lg:order-2">
        
        <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-10 shadow-lg border-2 border-gray-100 hover:border-[#1110C4]/30 transition-all duration-300">
          <h3 className="text-xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">
            Primary Markets
          </h3>
          
          <div className="space-y-4 lg:space-y-6">
            {[
              {
                region: "North America",
                description: "Comprehensive coverage across United States and Canada with specialized outreach strategies for diverse industries.",
                stats: "Enterprise, Tech, Finance focus"
              },
              {
                region: "Europe",
                description: "Tailored approaches for EU and UK markets with GDPR-compliant data practices and localized engagement.",
                stats: "GDPR-compliant execution"
              },
              {
                region: "APAC",
                description: "Strategic support across Asia-Pacific markets including Australia, Singapore, Japan, and emerging economies.",
                stats: "Rapid growth markets"
              }
            ].map((market, index) => (
              <div key={index} className="flex items-start gap-3 lg:gap-4 group">
                <div className="flex-shrink-0 w-2 h-2 lg:w-3 lg:h-3 mt-3 rounded-full bg-gradient-to-r from-[#1110C4] to-[#0B0A8A] group-hover:scale-125 transition-transform"></div>
                <div className="flex-1">
                  <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">{market.region}</h4>
                  <p className="text-gray-600 text-sm lg:text-base mb-2">{market.description}</p>
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs lg:text-sm font-medium rounded-full">
                    {market.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl lg:rounded-3xl p-6 lg:p-10 shadow-lg border-2 border-gray-100">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#1110C4] to-[#0B0A8A] rounded-xl flex items-center justify-center">
              <Globe className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">Global Delivery Model</h4>
              <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                Our global delivery model ensures consistency, compliance, and relevance across industries and geographies. 
                We maintain standardized quality benchmarks while adapting to regional nuances.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Consistent Quality', 'Regional Adaptation', 'Compliance Focus', 'Local Expertise'].map((tag, i) => (
                  <span key={i} className="px-2 lg:px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs lg:text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>

  </div>
</section>

{/* ===================== WHY CHOOSE US - Staggered Cards ===================== */}

<section className="relative bg-gradient-to-b from-gray-50 to-white py-32 overflow-hidden">

      {/* Unique top wave cut */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full pointer-events-none">
        <svg
          viewBox="0 0 1440 160"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-40"
        >
          <path
            d="M0,120 C180,60 360,140 540,100 C720,60 900,140 1080,100 C1260,60 1350,80 1440,60 L1440,160 L0,160 Z"
            fill="#f9fafb"
          />
        </svg>
      </div>

      {/* Main flowing wave layer */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-full"
        >
          <defs>
            <linearGradient id="whyWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1110C4" stopOpacity="0.06" />
              <stop offset="50%" stopColor="#1110C4" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#1AD603" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          <path
            d="M0,180 C240,260 480,140 720,200 C960,260 1200,140 1440,200 L1440,600 L0,600 Z"
            fill="url(#whyWave)"
          />
        </svg>
      </div>

      {/* Secondary depth wave */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full"
        >
          <path
            d="M0,420 C300,360 600,460 900,420 C1200,380 1320,420 1440,400 L1440,600 L0,600 Z"
            fill="#1110C4"
            opacity="0.035"
          />
        </svg>
      </div>

            
        {/* Mesh gradient background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-[#1110C4]/5 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-tl from-[#1AD603]/5 via-transparent to-transparent"></div>
        </div>

        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, #1110C4 1.5px, transparent 1.5px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="inline-flex items-center gap-2 bg-[#1AD603]/10 px-4 py-2 rounded-full mb-6">
             <span className="w-2 h-2 bg-[#1AD603] rounded-full"></span>
                <span className="text-sm font-semibold text-[#1110C4]">Why Darts Unity</span>
              </div>
            
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              The DartsUnity{' '}
              <span className="bg-gradient-to-r from-[#1110C4] via-[#1110C4]/85 to-[#0B0A8A] bg-clip-text text-transparent">
                Difference
              </span>
            </h2>
          </div>

          {/* Staggered grid - Desktop */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Data Integrity', desc: 'Every lead validated through multiple verification layers ensuring accuracy and relevance', shift: 'md:mt-0' },
              { title: 'Industry Expertise', desc: 'Specialized knowledge across tech, healthcare, finance, manufacturing, and professional services', shift: 'md:mt-12' },
              { title: 'Dedicated Support', desc: 'Committed account teams focused on understanding and achieving your specific goals', shift: 'md:mt-0' },
              { title: 'Scalable Solutions', desc: 'Infrastructure that grows seamlessly from pilot programs to enterprise-wide campaigns', shift: 'md:mt-12' },
              { title: 'Compliance First', desc: 'Full adherence to GDPR, CAN-SPAM, and industry regulations protecting both parties', shift: 'md:mt-24' },
              { title: 'Proven Results', desc: 'Years delivering measurable outcomes with 84% client retention rate', shift: 'md:mt-12' }
            ].map((item, i) => (
              <div key={i} className={`${item.shift} group`}>
                <div className="bg-white rounded-[2rem] p-10 border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-[#1110C4]/40 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1110C4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative">
                    {/* Number indicator */}
                    <div className="text-7xl font-bold text-[#1110C4]/10 mb-4 group-hover:text-[#1110C4]/20 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    
                    {/* Hover accent line */}
                    <div className="mt-6 w-0 h-1 bg-gradient-to-r from-[#1110C4] to-[#0B0A8A] group-hover:w-16 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Simple grid - Mobile */}
          <div className="md:hidden space-y-6">
            {[
              { title: 'Data Integrity', desc: 'Every lead validated through multiple verification layers' },
              { title: 'Industry Expertise', desc: 'Specialized knowledge across multiple B2B verticals' },
              { title: 'Dedicated Support', desc: 'Committed teams focused on your success' },
              { title: 'Scalable Solutions', desc: 'Infrastructure that grows with your needs' },
              { title: 'Compliance First', desc: 'Full regulatory adherence and protection' },
              { title: 'Proven Results', desc: 'Years with 84% client retention' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg">
                <div className="text-5xl font-bold text-[#1110C4]/10 mb-3">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA SECTION ===================== */}
      <section className="relative bg-gradient-to-br from-gray-900 via-[#1110C4] to-[#0B0A8A] py-28 overflow-hidden">
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1AD603] rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-10">
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Transform Your{' '}
              <span className="block mt-3 text-[#1AD603]">
                B2B Growth Strategy?
              </span>
            </h2>

            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how DartsUnity can help you achieve predictable, scalable revenue growth 
              through precision-targeted campaigns and data-driven execution.
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

              
            <button
              onClick={() => navigate("/services")}
              className="px-12 py-6 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/40 hover:bg-white/20 hover:border-white/60 transition-all duration-300"
            >
              View Our Services
            </button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-white/20">
              {[
                { value: '10+', label: 'Industries Served' },
                { value: '100M+', label: 'Business Emails' },
                { value: '2.5M+', label: 'Interactions' },
                { value: '84%', label: 'Retention Rate' }
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-white/70 text-sm uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top wave divider */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="white"/>
          </svg>
        </div>
      </section>

      <style>{`
        @keyframes pulse-ring {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.1;
          }
        }
        
        @keyframes slow-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default About;