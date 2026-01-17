import { ArrowRight, CheckCircle2, Target, Users, TrendingUp, Sparkles, Database, Mail } from 'lucide-react';

// Import images - rename your files to match these names
import heroBgImage from '../assets/officebg.jpg'; // Image 1 - Meeting room
import heroMainImage from '../assets/team-collaboration.jpg'; // Image 2 or 3 - Dashboard/Analytics
import aboutImage from '../assets/officebg2.jpg'; // Image 6 - Office interior
import dataVisualization from '../assets/office4.jpg'; // Image 4 - Charts/Analytics

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroBgImage}
            alt="DartsUnity Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #1110C4 0%, #2A29DF 100%)';
            }}
          />
          {/* Dark gradient overlay - Adjust opacity here (95 = 95%, 90 = 90%, etc.) */}
          {/* For lighter overlay, reduce the numbers: /70 or /60 */}
          {/* For grey overlay, use: from-gray-900/70 via-gray-800/65 to-gray-900/70 */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-800/75 to-gray-900/80"></div>
        </div>

        {/* Subtle animated pattern overlay */}
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 z-10 text-white">
              <div className="inline-block">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-[#1AD603] rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Trusted by 500+ Enterprise Clients</span>
                </div>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Data-Driven Lead Generation That{' '}
                <span className="bg-gradient-to-r from-[#1AD603] to-[#2BEC06] bg-clip-text text-transparent">
                  Accelerates Growth
                </span>
              </h1>

              <p className="text-xl text-white/90 leading-relaxed">
                Transform your B2B pipeline with research-led strategies, precise targeting, 
                and account-based marketing that connects you with qualified decision-makers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group px-8 py-4 bg-white text-[#1110C4] rounded-full font-semibold hover:shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  Get Started Free
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
                  View Case Studies
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold text-[#1AD603]">500+</div>
                  <div className="text-sm text-white/70 mt-1">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1AD603]">2.5M+</div>
                  <div className="text-sm text-white/70 mt-1">Leads Generated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1AD603]">94%</div>
                  <div className="text-sm text-white/70 mt-1">Client Retention</div>
                </div>
              </div>
            </div>

            {/* Right Image with Frame */}
            <div className="relative z-10">
              <div className="relative">
                {/* Decorative frame elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#1AD603] rounded-tl-3xl"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#1AD603] rounded-br-3xl"></div>
                
                {/* Main image container */}
                <div className="relative aspect-square bg-white/10 backdrop-blur-sm rounded-3xl border-2 border-white/20 overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src={heroMainImage}
                    alt="Lead Generation Dashboard"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                      e.target.parentElement.innerHTML = '<div class="text-white/50 text-center p-8"><div class="text-6xl mb-4">📊</div><div>Replace with dashboard image</div><div class="text-sm mt-2">/assets/hero-main.jpg</div></div>';
                    }}
                  />
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1110C4] to-[#1AD603] rounded-xl flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">+347%</div>
                      <div className="text-sm text-gray-600">Pipeline Growth</div>
                    </div>
                  </div>
                </div>

                {/* Glowing accent */}
                <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-br from-[#1AD603] to-[#2BEC06] rounded-full opacity-20 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Smooth Curved Bottom Divider - seamless transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,64 C360,120 1080,0 1440,64 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* About Us Section - Enhanced Layout */}
      <section className="relative bg-white py-24 overflow-hidden">
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
      fill="#4F46E5"
      opacity="0.06"
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
      fill="#4338CA"
      opacity="0.10"
    />
  </svg>
</div>


        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 bg-[#1110C4]/5 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-[#1110C4] rounded-full"></div>
                <span className="text-sm font-semibold text-[#1110C4]">About DartsUnity</span>
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Built for Predictable,{' '}
              <span className="bg-gradient-to-r from-[#1110C4] to-[#1AD603] bg-clip-text text-transparent">
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
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
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
              <div className="absolute -bottom-12 -right-12 w-80 h-64 bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-white z-20">
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
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-[#1110C4] to-[#1AD603] rounded-2xl opacity-20"></div>
              <div className="absolute top-1/2 -right-8 w-16 h-40 bg-gradient-to-b from-[#1AD603] to-transparent opacity-10 rounded-full blur-xl"></div>
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
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1110C4] to-[#1AD603] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Database className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Data Validation</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Accurate data validation and industry-specific research drive every campaign
                  </p>
                </div>

                {/* Card 2 */}
                <div className="group bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#1110C4]/30 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1110C4] to-[#1AD603] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Defined ICPs</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Clearly defined ideal customer profiles ensure precision targeting
                  </p>
                </div>

                {/* Card 3 */}
                <div className="group bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#1110C4]/30 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1110C4] to-[#1AD603] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Process-Driven</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Structured approach focused on compliance, transparency, and consistency
                  </p>
                </div>

                {/* Card 4 */}
                <div className="group bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-[#1110C4]/30 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1110C4] to-[#1AD603] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Long-Term Value</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Emphasis on sustainable growth over short-term volume metrics
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex gap-4 pt-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-[#1110C4] to-[#1AD603] text-white rounded-full font-semibold hover:shadow-xl hover:shadow-[#1110C4]/30 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white text-[#1110C4] rounded-full font-semibold border-2 border-[#1110C4] hover:bg-[#1110C4] hover:text-white transition-all duration-300 flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Stats Banner */}
          <div className="bg-gradient-to-r from-[#1110C4] to-[#1AD603] rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
              <div>
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-white/80 text-sm">Global Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2.5M+</div>
                <div className="text-white/80 text-sm">Leads Generated</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">94%</div>
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

      {/* Services Section - Zig-Zag Layout */}
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
              <div className="flex items-center gap-2 bg-[#1110C4]/5 px-4 py-2 rounded-full border border-[#1110C4]/10">
                <div className="w-2 h-2 bg-[#1110C4] rounded-full"></div>
                <span className="text-sm font-semibold text-[#1110C4]">Our Services</span>
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Solutions That Drive{' '}
              <span className="bg-gradient-to-r from-[#1110C4] to-[#1AD603] bg-clip-text text-transparent">
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
            {/* Service 1 - Left */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#1110C4]/10 to-[#1AD603]/10 rounded-full">
                  <span className="text-sm font-bold bg-gradient-to-r from-[#1110C4] to-[#1AD603] bg-clip-text text-transparent">
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
              
              {/* Pattern decoration */}
              <div className="relative h-80 flex items-center justify-center">
                {/* Connecting thread line */}
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
                  <path d="M50,200 Q200,50 350,200" stroke="#1110C4" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                  <circle cx="50" cy="200" r="4" fill="#1110C4"/>
                  <circle cx="350" cy="200" r="4" fill="#1AD603"/>
                </svg>
                
                {/* Geometric shapes */}
                <div className="relative">
                  <div className="w-48 h-48 border-4 border-[#1110C4]/20 rounded-3xl rotate-12 absolute top-0 left-0"></div>
                  <div className="w-48 h-48 bg-gradient-to-br from-[#1110C4]/5 to-[#1AD603]/5 rounded-3xl -rotate-6"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl">🎯</div>
                </div>
              </div>
            </div>

            {/* Service 2 - Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Pattern decoration */}
              <div className="relative h-80 flex items-center justify-center lg:order-1 order-2">
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
                  <path d="M50,200 Q200,350 350,200" stroke="#1AD603" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                  <circle cx="50" cy="200" r="4" fill="#1110C4"/>
                  <circle cx="350" cy="200" r="4" fill="#1AD603"/>
                </svg>
                
                <div className="relative">
                  <div className="w-48 h-48 border-4 border-[#1AD603]/20 rounded-full -rotate-12 absolute top-0 right-0"></div>
                  <div className="w-48 h-48 bg-gradient-to-br from-[#1AD603]/5 to-[#1110C4]/5 rounded-full rotate-6"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl">📊</div>
                </div>
              </div>

              <div className="space-y-6 lg:order-2 order-1">
                <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#1110C4]/10 to-[#1AD603]/10 rounded-full">
                  <span className="text-sm font-bold bg-gradient-to-r from-[#1110C4] to-[#1AD603] bg-clip-text text-transparent">
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

            {/* Service 3 - Left */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#1110C4]/10 to-[#1AD603]/10 rounded-full">
                  <span className="text-sm font-bold bg-gradient-to-r from-[#1110C4] to-[#1AD603] bg-clip-text text-transparent">
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
              
              <div className="relative h-80 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
                  <path d="M50,200 L150,100 L250,250 L350,150" stroke="#1110C4" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                  <circle cx="50" cy="200" r="4" fill="#1110C4"/>
                  <circle cx="150" cy="100" r="4" fill="#1AD603"/>
                  <circle cx="250" cy="250" r="4" fill="#1110C4"/>
                  <circle cx="350" cy="150" r="4" fill="#1AD603"/>
                </svg>
                
                <div className="relative">
                  <div className="w-48 h-48 border-4 border-dashed border-[#1110C4]/20 rounded-2xl rotate-45 absolute top-0 left-0"></div>
                  <div className="w-48 h-48 bg-gradient-to-br from-[#1110C4]/5 to-[#1AD603]/5 rounded-2xl -rotate-12"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl">✉️</div>
                </div>
              </div>
            </div>

            {/* Service 4 - Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 flex items-center justify-center lg:order-1 order-2">
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
                  <path d="M200,50 L200,350 M50,200 L350,200" stroke="#1AD603" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                  <circle cx="200" cy="50" r="4" fill="#1110C4"/>
                  <circle cx="200" cy="350" r="4" fill="#1AD603"/>
                  <circle cx="50" cy="200" r="4" fill="#1110C4"/>
                  <circle cx="350" cy="200" r="4" fill="#1AD603"/>
                </svg>
                
                <div className="relative">
                  <div className="w-48 h-48 border-4 border-[#1AD603]/20 rounded-full rotate-12 absolute top-0 left-0"></div>
                  <div className="w-48 h-48 bg-gradient-to-br from-[#1AD603]/5 to-[#1110C4]/5 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl">📞</div>
                </div>
              </div>

              <div className="space-y-6 lg:order-2 order-1">
                <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#1110C4]/10 to-[#1AD603]/10 rounded-full">
                  <span className="text-sm font-bold bg-gradient-to-r from-[#1110C4] to-[#1AD603] bg-clip-text text-transparent">
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
                className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#1110C4] to-[#1AD603] text-white rounded-full font-semibold hover:shadow-xl hover:shadow-[#1110C4]/30 hover:scale-105 transition-all duration-300"
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
        fill="#1110C4"
        opacity="0.10"
      />

      {/* Front wave */}
      <path
        d="M0 0
           C160 140 120 300 180 420
           C240 560 160 740 260 900
           L0 900 Z"
        fill="#1110C4"
        opacity="0.18"
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
        fill="#1110C4"
        opacity="0.10"
      />

      {/* Front wave */}
      <path
        d="M400 0
           C240 140 280 300 220 420
           C160 560 240 740 140 900
           L400 900 Z"
        fill="#1110C4"
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
      <span className="bg-gradient-to-r from-[#1110C4] to-[#1AD603] bg-clip-text text-transparent">
        Key Industries
      </span>
    </h2>

    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      From technology to healthcare, we bring industry-specific expertise to every engagement.
    </p>
  </div>

  {/* ===================================================== */}
  {/* ================ DESKTOP ORBIT LAYOUT =============== */}
  {/* ===================================================== */}
  <div
    className="relative max-w-5xl mx-auto hidden lg:block"
    style={{ minHeight: "640px" }}
  >
    {/* Orbit rings */}
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 800 640"
      fill="none"
    >
      <circle
        cx="400"
        cy="340"
        r="240"
        stroke="#1110C4"
        strokeWidth="1"
        opacity="0.08"
        strokeDasharray="6 6"
      />
      <circle
        cx="400"
        cy="340"
        r="180"
        stroke="#1AD603"
        strokeWidth="1"
        opacity="0.08"
        strokeDasharray="6 6"
      />
    </svg>

  {/* Animated Center Core */}
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[35%] z-10">

    {/* Pulsing rings */}
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="absolute w-40 h-40 rounded-full border-2 border-[#1AD603]/70 animate-[pulse-ring_3s_infinite]"></span>
      <span className="absolute w-40 h-40 rounded-full border-2 border-[#1110C4]/60 animate-[pulse-ring_3s_infinite] [animation-delay:1.5s]"></span>
    </div>

    {/* Rotating dotted orbit */}
    <div className="absolute inset-[-20px] rounded-full border border-dashed border-[#1110C4]/80 animate-[slow-rotate_18s_linear_infinite]"></div>

    {/* Core circle */}
    <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-[#1110C4] to-[#1AD603] flex items-center justify-center shadow-2xl">
      <div className="text-center text-white">
        <div className="text-3xl font-bold">5+</div>
        <div className="text-sm font-medium">Industries</div>
      </div>
    </div>
  </div>


    {/* Reusable industry card */}
    {[
      {
        pos: "top-0 left-1/2 -translate-x-1/2",
        icon: "💻",
        title: "Technology & SaaS",
        desc: "Enterprise software, cloud platforms, IT services",
      },
      {
        pos: "top-24 right-6",
        icon: "🏥",
        title: "Healthcare",
        desc: "Medical devices, pharma, healthcare IT",
      },
      {
        pos: "bottom-24 right-6",
        icon: "💰",
        title: "Financial Services",
        desc: "Banking, fintech, insurance, wealth",
      },
      {
        pos: "bottom-24 left-6",
        icon: "🏭",
        title: "Manufacturing",
        desc: "Industrial automation, supply chain, logistics",
      },
      {
        pos: "top-24 left-6",
        icon: "📚",
        title: "Professional Services",
        desc: "Consulting, legal, accounting, advisory",
      },
    ].map((item, i) => (
      <div
        key={i}
        className={`absolute ${item.pos} group`}
      >
        <div className="flex flex-col items-center">
          <div className="w-36 h-36 bg-white rounded-2xl border border-gray-100 shadow-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
            <span className="text-6xl">{item.icon}</span>
          </div>
          <div className="mt-4 text-center max-w-[220px]">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              {item.title}
            </h3>
            <p className="text-xs text-gray-600">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* ===================================================== */}
  {/* ============== MOBILE / TABLET GRID UI ============== */}
  {/* ===================================================== */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:hidden mb-20">
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
        icon: "🏭",
        title: "Manufacturing",
        desc: "Industrial automation, supply chain, logistics",
      },
      {
        icon: "📚",
        title: "Professional Services",
        desc: "Consulting, legal, accounting, advisory",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 text-center hover:shadow-xl transition"
      >
        <div className="text-5xl mb-4">{item.icon}</div>
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
  <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white shadow-2xl">
    <h3 className="text-3xl font-bold mb-4">
      Industry-Specific Expertise
    </h3>
    <p className="text-white/80 max-w-2xl mx-auto mb-8">
      Proven strategies and deep vertical knowledge tailored to your industry’s challenges.
    </p>
    <button className="px-10 py-4 bg-white text-gray-900 rounded-full font-semibold hover:scale-105 transition">
      Discuss Your Industry
    </button>
  </div>
</div>
</section>

{/* ================= Contact / Send Inquiry ================= */}
<section className="relative bg-[#0F1225] py-28 overflow-hidden">

  {/* ===== Background Patterns ===== */}
  <div className="absolute inset-0 pointer-events-none">
    
    {/* Soft diagonal gradient wash */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#1110C4]/20 via-transparent to-[#1AD603]/10"></div>

    {/* Subtle diagonal grid */}
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            135deg,
            rgba(255,255,255,0.6) 0px,
            rgba(255,255,255,0.6) 1px,
            transparent 1px,
            transparent 40px
          )
        `,
      }}
    />

    {/* Soft glow accents */}
    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#1110C4]/20 rounded-full blur-[120px]"></div>
    <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#1AD603]/20 rounded-full blur-[120px]"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* ===== Section Header ===== */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
        <span className="w-2 h-2 bg-[#1AD603] rounded-full"></span>
        <span className="text-sm font-semibold text-white">Get in Touch</span>
      </div>

      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
        Let’s Discuss Your{' '}
        <span className="bg-gradient-to-r from-[#1AD603] to-[#2BEC06] bg-clip-text text-transparent">
          Growth Goals
        </span>
      </h2>

      <p className="text-lg text-white/70">
        Tell us about your requirements and our team will get back with a
        tailored strategy aligned to your business objectives.
      </p>
    </div>

    {/* ===== Main Grid ===== */}
    <div className="grid lg:grid-cols-12 gap-12 items-start">

      {/* ===== Left: Contact Details ===== */}
      <div className="lg:col-span-5 space-y-10">

        {/* Info Card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
          <h3 className="text-xl font-bold text-white mb-6">
            Contact Information
          </h3>

          <div className="space-y-6 text-white/80">
            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-sm">Email</span>
              <span className="font-medium text-white">
                contact@dartsunity.com
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-sm">Phone</span>
              <span className="font-medium text-white">
                +91 XXX XXX XXXX
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm">Working Hours</span>
              <span className="font-medium text-white">
                Mon – Fri, 9AM – 6PM IST
              </span>
            </div>
          </div>
        </div>

        {/* Trust Points */}
        <div className="grid grid-cols-2 gap-4">
          {[
            "Enterprise-focused approach",
            "Data & compliance driven",
            "Dedicated account managers",
            "Transparent reporting",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-white/80"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ===== Right: Inquiry Form ===== */}
      <div className="lg:col-span-7">
        <div className="bg-white rounded-3xl p-10 shadow-2xl">

          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Send an Inquiry
          </h3>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1110C4]/30 focus:outline-none"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Company Inc."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1110C4]/30 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1110C4]/30 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1110C4]/30 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Requirement
              </label>
              <textarea
                rows="5"
                placeholder="Tell us about your goals, target market, or challenges..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1110C4]/30 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="sm:col-span-2 pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#1110C4] to-[#1AD603] text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  {/* ===== Top Curve Divider ===== */}
  <div className="absolute top-0 left-0 right-0">
    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
      <path d="M0,0 C360,80 1080,0 1440,80 L1440,0 L0,0 Z" fill="#ffffff"/>
    </svg>
  </div>
</section>

    </div>
  );
};

export default Home;