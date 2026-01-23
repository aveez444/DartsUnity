import { ArrowRight, Target, Database, Users, TrendingUp, CheckCircle2, Award, Globe, BarChart3, Shield, Sparkles, Clock, Zap, Eye, Lightbulb } from 'lucide-react';
import { useNavigate } from "react-router-dom";

// Import images
import officeTeamImage from '../assets/B2Bimg.jpg'; // Modern office with team collaborating
import dataAnalyticsImage from '../assets/data-analytics-illustration.jpg'; // AI-generated illustration of data/analytics
import cultureImage from '../assets/company-culture.jpg'; // Office interior showing company culture
import processIllustration from '../assets/process-illustration.jpg'; // AI-generated workflow/process illustration

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* ===================== HERO SECTION - Blueprint Architecture Design ===================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-0">
        
        {/* Blueprint Grid Background with Animated DU Letters */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-white">
          
          {/* Main Blueprint Grid */}
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 95%, rgba(59, 130, 246, 0.3) 95%),
              linear-gradient(0deg, transparent 95%, rgba(59, 130, 246, 0.3) 95%)
            `,
            backgroundSize: '60px 60px'
          }}></div>
          
          {/* Animated DU Letters - Neon Blue Tracing Effect */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            {/* Letter D - Left side */}
            <div className="absolute top-1/4 left-1/4">
              {/* D - Outer curve */}
              <div className="relative w-48 h-48">
                {/* Vertical stroke */}
                <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-green-400 via-green-500 to-green-400 rounded-full animate-d-stroke-1"></div>
                {/* Top curve */}
                <div className="absolute left-2 top-0 w-44 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-d-stroke-2"></div>
                {/* Bottom curve */}
                <div className="absolute left-2 bottom-0 w-44 h-2 bg-gradient-to-r from-green-500 to-green-400 rounded-full animate-d-stroke-3"></div>
                {/* Right curve */}
                {/* <div className="absolute right-0 top-2 w-2 h-44 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-500 rounded-full animate-d-stroke-4"></div> */}
                {/* Glow effect */}
                <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full opacity-0 animate-d-glow"></div>
              </div>
            </div>

          

            {/* Connecting lines between letters */}
            <div className="absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-connect-letters"></div>
          </div>

          {/* Secondary Diagonal Grid */}
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 97%, rgba(37, 99, 235, 0.2) 97%),
              linear-gradient(-45deg, transparent 97%, rgba(37, 99, 235, 0.2) 97%)
            `,
            backgroundSize: '80px 80px'
          }}></div>
  
          {/* Architectural Blueprint Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Corner Measurement Lines with Green Accents */}
            <div className="absolute top-10 left-10 w-20 h-20">
              <div className="absolute top-0 left-0 w-12 h-px bg-blue-400/30"></div>
              <div className="absolute top-0 left-0 h-12 w-px bg-blue-400/30"></div>
              <div className="absolute top-0 left-0 w-2 h-2 border border-blue-400/50"></div>
              {/* Green dot accent */}
              <div className="absolute top-1 left-1 w-1 h-1 bg-green-400/60 rounded-full animate-pulse"></div>
            </div>
            
            <div className="absolute bottom-10 right-10 w-20 h-20">
              <div className="absolute bottom-0 right-0 w-12 h-px bg-blue-400/30"></div>
              <div className="absolute bottom-0 right-0 h-12 w-px bg-blue-400/30"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border border-blue-400/50"></div>
              {/* Green dot accent */}
              <div className="absolute bottom-1 right-1 w-1 h-1 bg-green-400/60 rounded-full animate-pulse"></div>
            </div>
  
            {/* Dimension Lines with Green Highlights */}
            <div className="absolute top-1/2 left-10 w-16">
              <div className="h-px w-full bg-gradient-to-r from-blue-300/40 to-transparent"></div>
              <div className="absolute top-1/2 left-0 w-1 h-3 -translate-y-1/2 bg-blue-400/50"></div>
              <div className="absolute top-1/2 right-0 w-1 h-3 -translate-y-1/2 bg-blue-400/50"></div>
              {/* Green glow effect */}
              <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-green-400/20 blur-sm -translate-y-1/2"></div>
            </div>
  
            <div className="absolute right-10 top-1/3 h-16">
              <div className="w-px h-full bg-gradient-to-b from-blue-300/40 to-transparent"></div>
              <div className="absolute top-0 left-1/2 h-1 w-3 -translate-x-1/2 bg-blue-400/50"></div>
              <div className="absolute bottom-0 left-1/2 h-1 w-3 -translate-x-1/2 bg-blue-400/50"></div>
              {/* Green glow effect */}
              <div className="absolute left-1/2 top-1/4 w-4 h-4 bg-green-400/20 blur-sm -translate-x-1/2"></div>
            </div>
  
            {/* Blueprint Circles with Green Highlights */}
            <div className="absolute top-20 right-20 opacity-10">
              <div className="w-16 h-16 border border-blue-400/50 rounded-full"></div>
              <div className="absolute top-1/2 left-full h-px w-8 bg-blue-400/40 -translate-y-1/2"></div>
              {/* Green inner circle */}
              <div className="absolute top-1/2 left-1/2 w-8 h-8 border border-green-400/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            </div>
  
            <div className="absolute bottom-32 left-32 opacity-10">
              <div className="w-12 h-12 border border-blue-400/50 rounded-full"></div>
              <div className="absolute top-full left-1/2 w-px h-8 bg-blue-400/40 -translate-x-1/2"></div>
              {/* Green center dot */}
              <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-green-400/40 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
  
          {/* Green Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/3 rounded-full blur-3xl"></div>
          
          {/* Subtle Green Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 99%, rgba(52, 211, 153, 0.1) 99%),
              linear-gradient(0deg, transparent 99%, rgba(52, 211, 153, 0.1) 99%)
            `,
            backgroundSize: '100px 100px'
          }}></div>
  
          {/* Gradient Overlays with Green Tint */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-green-500/10 via-blue-500/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-green-400/8 via-transparent to-transparent"></div>
        </div>
  
        {/* Content Section */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
          
          {/* MOBILE Layout */}
          <div className="md:hidden w-full">
            <div className="max-w-2xl mx-auto space-y-12">
              {/* Badge with Blueprint Style and Green Accent */}
              <div className="inline-block relative">
                <div className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-xl border border-blue-200/80 shadow-md">
                  <span className="text-sm font-bold text-blue-700 tracking-wider relative z-10">
                    ARCHITECTS OF GROWTH
                  </span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-blue-400/60"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-blue-400/60"></div>
                {/* Green corner accent */}
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-green-400/50 rounded-full"></div>
              </div>
  
              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                  Building Digital
                  <span className="block text-blue-700 mt-2">
                    Foundations
                  </span>
                  for B2B Success
                </h1>
                
                <div className="pt-4">
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-green-400 to-green-300 rounded-full mt-1 ml-4"></div>
                </div>
              </div>
  
              {/* Description */}
              <p className="text-lg leading-relaxed text-gray-700">
                We engineer data-driven pipelines with architectural precision, 
                transforming complex challenges into scalable revenue solutions.
              </p>
  
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                {[
                  { value: "10+", label: "Years Building", icon: "🏗️" },
                  { value: "100M+", label: "Business Emails", icon: "📐" },
                  { value: "2.5M+", label: "Connections Engineered", icon: "⚙️" },
                  { value: "94%", label: "Structural Integrity", icon: "🔧" }
                ].map((stat, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-blue-100/80 hover:border-green-300/50 transition-all duration-300 shadow-sm hover:shadow-md">
                      <div className="flex items-start space-x-3">
                        <div className="text-xl mt-1">{stat.icon}</div>
                        <div>
                          <div className="text-2xl font-bold text-blue-700">{stat.value}</div>
                          <div className="text-xs text-gray-600 font-medium leading-tight pt-1">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                    {/* Green glow on hover */}
                    <div className="absolute inset-0 rounded-xl bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-1 blur-sm"></div>
                  </div>
                ))}
              </div>
  
              {/* Team Image with Blueprint Frame */}
              <div className="pt-10 relative">
                <div className="relative rounded-2xl overflow-hidden border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50/30">
                  <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-blue-400/50 z-10"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-blue-400/50 z-10"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-blue-400/50 z-10"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-blue-400/50 z-10"></div>
                  
                  {/* Green corner accents */}
                  <div className="absolute top-3 left-3 w-2 h-2 bg-green-400/40 rounded-full z-10"></div>
                  <div className="absolute top-3 right-3 w-2 h-2 bg-green-400/40 rounded-full z-10"></div>
                  
                  <div className="aspect-[4/3] relative">
                    <img 
                      src={officeTeamImage}
                      alt="DartsUnity Team"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-blue-50', 'to-green-50');
                        e.target.parentElement.innerHTML = '<div class="text-center p-8"><div class="text-6xl mb-4">🏢</div><div class="text-gray-700 font-medium">Our Architectural Team</div></div>';
                      }}
                    />
                  </div>
                  
                  {/* Blueprint overlay effect with green accents */}
                  <div className="absolute inset-0 pointer-events-none opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(90deg, transparent 49%, rgba(59, 130, 246, 0.3) 49%, rgba(59, 130, 246, 0.3) 51%, transparent 51%),
                        linear-gradient(0deg, transparent 49%, rgba(59, 130, 246, 0.3) 49%, rgba(59, 130, 246, 0.3) 51%, transparent 51%)
                      `,
                      backgroundSize: '40px 40px'
                    }}></div>
                    {/* Green grid overlay */}
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(45deg, transparent 49.5%, rgba(52, 211, 153, 0.1) 49.5%, rgba(52, 211, 153, 0.1) 50.5%, transparent 50.5%)
                      `,
                      backgroundSize: '60px 60px'
                    }}></div>
                  </div>
                </div>
                
                {/* Blueprint annotation with green accent */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <div className="flex items-center">
                    <div className="w-8 h-px bg-blue-400/50"></div>
                    <div className="text-xs text-blue-600 font-mono bg-white px-2 py-1 rounded border border-blue-200 shadow-sm">
                      TEAM
                      <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* DESKTOP Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content - Takes 3 columns */}
            <div className="md:col-span-1 lg:col-span-3 space-y-10 z-10">
              {/* Badge with Green Glow */}
              <div className="inline-block relative">
                <div className="px-8 py-4 bg-white/90 backdrop-blur-sm rounded-xl border border-blue-200/80 shadow-lg">
                  <span className="text-sm font-bold text-blue-700 tracking-widest relative z-10">
                    ARCHITECTS OF GROWTH
                  </span>
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-blue-400/60"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-blue-400/60"></div>
                {/* Green glow effect */}
                <div className="absolute -inset-1 bg-green-400/10 blur-sm rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
  
              {/* Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Building Digital
                  <br />
                  <span className="text-blue-700">
                    Foundations
                  </span>
                  <br />
                  for B2B Success
                </h1>
                
                <div className="pt-2">
                  <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-300 rounded-full mt-2 ml-8 opacity-80"></div>
                </div>
              </div>
  
              {/* Description */}
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl">
                We engineer data-driven pipelines with architectural precision, 
                transforming complex challenges into scalable revenue solutions through 
                strategic design and systematic execution.
              </p>
  
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
                {[
                  { value: '10+', label: 'Years Building', desc: 'Experience' },
                  { value: '10M+', label: 'Business', desc: 'Emails' },
                  { value: '2.5M+', label: 'Connections', desc: 'Engineered' },
                  { value: '94%', label: 'Structural', desc: 'Integrity' }
                ].map((stat, i) => (
                  <div key={i} className="group relative">
                    <div className="relative">
                      <div className="text-4xl lg:text-5xl font-bold text-blue-700 mb-2 group-hover:translate-y-[-4px] transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 uppercase tracking-wide font-semibold">{stat.label}</div>
                      <div className="text-xs text-gray-500 mt-1">{stat.desc}</div>
                    </div>
                    {/* Green hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Right Image - Takes 2 columns */}
            <div className="md:col-span-1 lg:col-span-2 relative z-10">
              <div className="relative group">
                {/* Blueprint frame with green accents */}
                <div className="relative rounded-[2rem] overflow-hidden border-4 border-blue-100 bg-gradient-to-br from-white to-blue-50/30 shadow-2xl">
                  {/* Corner markers */}
                  <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-blue-400/60 z-10"></div>
                  <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-blue-400/60 z-10"></div>
                  <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-blue-400/60 z-10"></div>
                  <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-blue-400/60 z-10"></div>
                  
                  {/* Green corner accents */}
                  <div className="absolute top-5 left-5 w-3 h-3 bg-green-400/30 rounded-full z-10 animate-pulse"></div>
                  <div className="absolute top-5 right-5 w-3 h-3 bg-green-400/30 rounded-full z-10 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  
                  {/* Main image */}
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img 
                      src={officeTeamImage}
                      alt="DartsUnity Team"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-blue-50', 'to-green-50');
                        e.target.parentElement.innerHTML = '<div class="text-center p-12"><div class="text-8xl mb-6">🏢</div><div class="text-2xl text-gray-800 font-semibold">Architectural Team</div><div class="text-gray-600 mt-2">Building digital foundations</div></div>';
                      }}
                    />
                    {/* Gradient overlay with green tint */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-green-900/5"></div>
                  </div>
                  
                  {/* Blueprint grid overlay with green accents */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(90deg, transparent 49.5%, rgba(59, 130, 246, 0.4) 49.5%, rgba(59, 130, 246, 0.4) 50.5%, transparent 50.5%),
                        linear-gradient(0deg, transparent 49.5%, rgba(59, 130, 246, 0.4) 49.5%, rgba(59, 130, 246, 0.4) 50.5%, transparent 50.5%)
                      `,
                      backgroundSize: '60px 60px'
                    }}></div>
                    {/* Green diagonal grid */}
                    <div className="absolute inset-0 opacity-[0.04]" style={{
                      backgroundImage: `
                        linear-gradient(45deg, transparent 49%, rgba(52, 211, 153, 0.2) 49%, rgba(52, 211, 153, 0.2) 51%, transparent 51%)
                      `,
                      backgroundSize: '80px 80px'
                    }}></div>
                  </div>
                </div>
                
                {/* Green glow effect on hover */}
                <div className="absolute -inset-4 bg-green-400/10 blur-xl rounded-[2.5rem] opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
                
                {/* Background architectural elements with green */}
                <div className="absolute -z-10 top-10 -right-10 w-40 h-40 border border-green-200/30 rounded-lg transform rotate-12 opacity-30"></div>
                <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 border border-green-200/20 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS Animations for DU Letters */}
        <style jsx>{`
          @keyframes d-stroke-1 {
            0% { height: 0; opacity: 0; }
            10% { opacity: 1; }
            90% { height: 100%; opacity: 1; }
            100% { height: 100%; opacity: 0; }
          }
          
          @keyframes d-stroke-2 {
            0%, 10% { width: 0; opacity: 0; }
            20% { opacity: 1; }
            90% { width: 44rem; opacity: 1; }
            100% { width: 44rem; opacity: 0; }
          }
          
          @keyframes d-stroke-3 {
            0%, 30% { width: 0; opacity: 0; }
            40% { opacity: 1; }
            90% { width: 44rem; opacity: 1; }
            100% { width: 44rem; opacity: 0; }
          }
          
          @keyframes d-stroke-4 {
            0%, 40% { height: 0; opacity: 0; }
            50% { opacity: 1; }
            90% { height: 44rem; opacity: 1; }
            100% { height: 44rem; opacity: 0; }
          }
          
          @keyframes d-glow {
            0%, 60% { opacity: 0; }
            70% { opacity: 0.5; }
            80% { opacity: 0.3; }
            90% { opacity: 0.1; }
            100% { opacity: 0; }
          }
          
          @keyframes u-stroke-1 {
            0% { height: 0; opacity: 0; }
            10% { opacity: 1; }
            90% { height: 40rem; opacity: 1; }
            100% { height: 40rem; opacity: 0; }
          }
          
          @keyframes u-stroke-2 {
            0%, 15% { height: 0; opacity: 0; }
            25% { opacity: 1; }
            90% { height: 40rem; opacity: 1; }
            100% { height: 40rem; opacity: 0; }
          }
          
          @keyframes u-stroke-3 {
            0%, 40% { width: 0; opacity: 0; }
            50% { opacity: 1; }
            90% { width: 100%; opacity: 1; }
            100% { width: 100%; opacity: 0; }
          }
          
          @keyframes u-glow {
            0%, 70% { opacity: 0; }
            80% { opacity: 0.5; }
            90% { opacity: 0.3; }
            100% { opacity: 0; }
          }
          
          @keyframes connect-letters {
            0%, 80% { opacity: 0; }
            85% { opacity: 0.5; }
            95% { opacity: 0.2; }
            100% { opacity: 0; }
          }
          
          .animate-d-stroke-1 {
            animation: d-stroke-1 6s ease-in-out infinite;
          }
          
          .animate-d-stroke-2 {
            animation: d-stroke-2 6s ease-in-out infinite;
          }
          
          .animate-d-stroke-3 {
            animation: d-stroke-3 6s ease-in-out infinite;
          }
          
          .animate-d-stroke-4 {
            animation: d-stroke-4 6s ease-in-out infinite;
          }
          
          .animate-d-glow {
            animation: d-glow 6s ease-in-out infinite;
          }
          
          .animate-u-stroke-1 {
            animation: u-stroke-1 6s ease-in-out infinite;
          }
          
          .animate-u-stroke-2 {
            animation: u-stroke-2 6s ease-in-out infinite;
          }
          
          .animate-u-stroke-3 {
            animation: u-stroke-3 6s ease-in-out infinite;
          }
          
          .animate-u-glow {
            animation: u-glow 6s ease-in-out infinite;
          }
          
          .animate-connect-letters {
            animation: connect-letters 6s ease-in-out infinite;
          }
        `}</style>
      </section>
      
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
                <div className="inline-flex items-center gap-2 bg-[#1AD603]/10 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#1AD603] rounded-full"></span>
                  <span className="text-sm font-semibold text-[#1110C4]">Our Foundation</span>
              </div>
              </div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Built on{' '}
              <span className="bg-gradient-to-r from-[#1110C4] via-[#1110C4]/85 to-[#0B0A8A] bg-clip-text text-transparent">
                Precision & Trust
              </span>
            </h2>
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
                <div className="text-gray-600 text-sm uppercase tracking-wider">Leads Generated</div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-green-600 to-green-500 rounded-[2.5rem] p-8 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1AD603] opacity-10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="text-5xl font-bold mb-2">94%</div>
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



{/* ===================== OUR APPROACH - Circular Flow ===================== */}
<section className="relative bg-white py-32 overflow-hidden">
  
  {/* Diagonal stripes background */}
  <div className="absolute inset-0 opacity-[0.015]">
    <div className="absolute inset-0" style={{
      backgroundImage: `repeating-linear-gradient(45deg, #1110C4 0px, #1110C4 2px, transparent 2px, transparent 60px)`
    }}></div>
  </div>

  {/* Floating accent shapes */}
  <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#1AD603] opacity-5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="text-center mb-24">
      <div className="inline-block mb-6">
        <div className="px-8 py-4 bg-gradient-to-r from-[#1110C4]/5 to-[#1AD603]/5 rounded-full border-2 border-[#1110C4]/20">
          <span className="text-sm font-bold text-[#1110C4] tracking-widest">OUR METHODOLOGY</span>
        </div>
      </div>
      <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        How We{' '}
        <span className="bg-gradient-to-r from-[#1110C4] via-[#1110C4]/85 to-[#0B0A8A] bg-clip-text text-transparent">
          Drive Results
        </span>
      </h2>
    </div>

    {/* Desktop: Circular flow with central image */}
    <div className="hidden lg:block relative" style={{ minHeight: '700px' }}>
      
      {/* Central image */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          {/* Rotating ring */}
          <div className="absolute inset-0 -m-6">
            <div className="w-full h-full rounded-full border-2 border-dashed border-[#1110C4]/30 animate-[spin_30s_linear_infinite]"></div>
          </div>
          
          {/* Image */}
          <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white relative">
            <img 
              src={processIllustration}
              alt="Process"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-[#1110C4]/10', 'to-[#1AD603]/10');
                e.target.parentElement.innerHTML = '<div class="text-center p-8"><div class="text-6xl">⚙️</div><div class="text-gray-600 mt-2">Process flow</div></div>';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1110C4]/20 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Process cards in circular layout - NOW WITH 6 CARDS */}
      {[
        { pos: 'top-0 left-1/2 -translate-x-1/2', num: '01', title: 'Research & Discovery', desc: 'Deep ICP analysis & market positioning' }, 
        { pos: 'top-1/4 right-0 ', num: '02', title: 'Data Validation', desc: 'Multi-layer verification for accuracy' },
        { pos: 'bottom-1/4 right-0', num: '03', title: 'Campaign Execution', desc: 'Personalized multi-channel outreach' },
        { pos: 'bottom-0 left-1/2 -translate-x-1/2', num: '04', title: 'Optimization', desc: 'Continuous refinement & reporting' },
        { pos: 'top-1/4 left-0 -translate-y-10', num: '06', title: 'Strategic Planning', desc: 'Goal alignment & roadmap development' },
        { pos: 'bottom-1/4 left-0 translate-y-10', num: '05', title: 'Performance Tracking', desc: 'Real-time analytics & KPI monitoring' },
        
      ].map((item, i) => (
        <div key={i} className={`absolute ${item.pos} group`}>
          <div className="w-72 bg-white rounded-3xl p-7 shadow-xl border-2 border-gray-100 hover:border-[#1110C4]/40 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1110C4] to-[#0B0A8A] flex items-center justify-center flex-shrink-0 text-white font-bold text-lg group-hover:scale-110 transition-transform">
                {item.num}
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Mobile: Grid layout - NOW WITH 6 CARDS */}
    <div className="lg:hidden space-y-6 mb-12">
      {[
        { num: '01', title: 'Research & Discovery', desc: 'Deep ICP analysis & market positioning' },
        { num: '02', title: 'Data Validation', desc: 'Multi-layer verification for accuracy' },
        { num: '03', title: 'Campaign Execution', desc: 'Personalized multi-channel outreach' },
        { num: '04', title: 'Optimization', desc: 'Continuous refinement & reporting' },
        { num: '05', title: 'Performance Tracking', desc: 'Real-time analytics & KPI monitoring' },
        { num: '06', title: 'Strategic Planning', desc: 'Goal alignment & roadmap development' }
      ].map((item, i) => (
        <div key={i} className="bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-100">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1110C4] to-[#0B0A8A] flex items-center justify-center flex-shrink-0 text-white font-bold">
              {item.num}
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Mobile image */}
    <div className="lg:hidden">
      <div className="aspect-square max-w-md mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
        <img 
          src={processIllustration}
          alt="Process"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-[#1110C4]/10', 'to-[#1AD603]/10');
            e.target.parentElement.innerHTML = '<div class="text-center p-8"><div class="text-7xl">⚙️</div><div class="text-gray-600 mt-4">Process workflow</div></div>';
          }}
        />
      </div>
    </div>
  </div>
</section>

      {/* ===================== CULTURE - Offset Layout ===================== */}
      <section className="relative bg-white py-32 overflow-hidden">
        
        {/* Organic blob shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-0 left-0 w-1/2 h-1/2 opacity-5" viewBox="0 0 200 200">
            <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.1,73.1,42.3C64.8,55.4,53.8,67.1,40.3,74.3C26.8,81.5,10.8,84.1,-4.9,82.8C-20.6,81.5,-36.1,76.2,-49.3,68.4C-62.5,60.6,-73.4,50.2,-80.1,37.4C-86.8,24.6,-89.3,9.4,-87.8,-5.2C-86.3,-19.8,-80.8,-33.8,-72.6,-46.2C-64.4,-58.6,-53.5,-69.4,-40.4,-77.2C-27.3,-85,-12.1,-89.8,2.4,-93.8C16.9,-97.8,30.6,-83.6,44.7,-76.4Z" 
                  fill="#1110C4"/>
          </svg>
          <svg className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-5" viewBox="0 0 200 200">
            <path d="M39.9,-65.6C51.4,-58.1,60.3,-46.7,67.4,-34C74.5,-21.3,79.8,-7.3,79.7,6.8C79.6,20.9,74.1,35.1,65.3,46.8C56.5,58.5,44.4,67.7,30.9,73.1C17.4,78.5,2.5,80.1,-12.8,78.3C-28.1,76.5,-43.8,71.3,-56.8,62.4C-69.8,53.5,-80.1,40.9,-84.7,26.4C-89.3,11.9,-88.2,-4.5,-82.8,-18.7C-77.4,-32.9,-67.7,-44.9,-55.6,-52.2C-43.5,-59.5,-29,-62.1,-15.5,-64.8C-2,-67.5,10.5,-70.3,22.4,-69.2C34.3,-68.1,28.4,-73.1,39.9,-65.6Z" 
                  fill="#1AD603"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Content - Desktop left, Mobile top */}
            <div className="lg:col-span-7 order-2 lg:order-1 space-y-8">
              <div className="inline-block">
                <div className="px-8 py-4 bg-gradient-to-r from-[#1110C4]/10 to-[#1AD603]/10 rounded-full border border-[#1110C4]/20">
                  <span className="text-sm font-bold text-[#1110C4] tracking-widest">OUR CULTURE</span>
                </div>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Built on{' '}
                <span className="bg-gradient-to-r from-[#1110C4] via-[#1110C4]/85 to-[#0B0A8A] bg-clip-text text-transparent">
                  Excellence & Integrity
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                At DartsUnity, sustainable growth comes from transparency, accountability, 
                and genuine partnership with our clients.
              </p>

              {/* Value cards */}
              <div className="space-y-5 pt-6">
                {[
                  { icon: '🎯', title: 'Client-Centric Mindset', desc: 'Every strategy and decision prioritizes your success objectives' },
                  { icon: '💡', title: 'Continuous Innovation', desc: 'Leveraging latest technologies and industry best practices' },
                  { icon: '🛡️', title: 'Ethical Standards', desc: 'Non-negotiable commitment to compliance and data privacy' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:border-[#1110C4]/30 transition-all duration-300 group">
                    <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image - Desktop right, Mobile bottom */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative">
                {/* Main image */}
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white transform lg:translate-x-12 hover:translate-x-0 transition-transform duration-500">
                  <img 
                    src={cultureImage}
                    alt="Company Culture"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-[#1110C4]/10', 'to-[#1AD603]/10');
                      e.target.parentElement.innerHTML = '<div class="text-center p-8"><div class="text-7xl mb-4">🏢</div><div class="text-gray-600 text-lg">Office culture</div></div>';
                    }}
                  />
                </div>

                {/* Floating accent card */}
                <div className="hidden lg:block absolute -bottom-8 -left-8 bg-gradient-to-br from-[#1110C4] to-[#0B0A8A] rounded-3xl p-8 shadow-2xl text-white max-w-xs">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-white/90 text-sm uppercase tracking-wide">Years of Excellence</div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#1AD603] rounded-full opacity-20 blur-3xl"></div>
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
            <div className="inline-block mb-6">
              <div className="px-8 py-4 bg-white rounded-full shadow-xl border border-gray-200">
                <span className="text-sm font-bold text-[#1110C4] tracking-widest">WHY DARTSUNITY</span>
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
              { title: 'Proven Results', desc: '10+ years delivering measurable outcomes with 94% client retention rate', shift: 'md:mt-12' }
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
              { title: 'Proven Results', desc: '10+ years with 94% client retention' }
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
              className="group px-12 py-6 bg-white text-[#1110C4] rounded-full font-bold text-lg shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
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
                { value: '10+', label: 'Years Experience' },
                { value: '100M+', label: 'Business Emails' },
                { value: '2.5M+', label: 'Leads Delivered' },
                { value: '94%', label: 'Retention Rate' }
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