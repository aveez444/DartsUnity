import { ArrowRight, TrendingUp, Users, Zap, ChevronDown, Calendar, ChevronRight, Building2, Shield, Target, Mail, BarChart3, HeadphonesIcon, PlayCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import leadDiscoveryImg from "../assets/LeadDiscovery.jpg";
import realtimeImg from "../assets/realtime.jpg";
import emailImg from "../assets/Email.jpg";
import managedServiceImg from "../assets/ManagedService.jpg";
import officeBg from "../assets/officebg.jpg";
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  const [activeService, setActiveService] = useState(null);
  const [animatedCardsVisible, setAnimatedCardsVisible] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  // AnimatedCounter Component
  const AnimatedCounter = ({ end, duration = 2000, suffix = "", decimals = 0 }) => {
    const [count, setCount] = useState(0);
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1
    });

    useEffect(() => {
      if (!inView) return;

      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }, [inView, end, duration]);

    return (
      <span ref={ref}>
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
      </span>
    );
  };

  // Hero section animations
  useEffect(() => {
    // Trigger hero animations on page load
    setTimeout(() => {
      setHeroLoaded(true);
      
      // Text reveal animation
      setTimeout(() => {
        setTextRevealed(true);
      }, 800);
      
      // Stats animation
      setTimeout(() => {
        setStatsVisible(true);
      }, 1200);
    }, 300);
  }, []);

  // Intersection Observer for Results Section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setAnimatedCardsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Carousel interval
  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const industries = [
    { name: "Real Estate", description: "Property developers & agencies" },
    { name: "Healthcare", description: "Hospitals & medical providers" },
    { name: "Insurance", description: "Insurance companies & brokers" },
    { name: "Automotive", description: "Auto manufacturers & dealers" },
    { name: "Retail & E-commerce", description: "Online stores & retailers" },
    { name: "Education", description: "Schools & training platforms" },
    { name: "Manufacturing", description: "Industrial manufacturers" },
    { name: "Technology", description: "Software & IT companies" },
    { name: "Finance", description: "Banks & financial services" },
  ];

  // Enhanced IndustryCard Component
  const EnhancedIndustryCard = ({ industry, index, color, stats, isMobile = false }) => {
    const colorClasses = {
      blue: "border-blue-200 hover:border-blue-500 bg-gradient-to-br from-white to-blue-50/30",
      indigo: "border-indigo-200 hover:border-indigo-500 bg-gradient-to-br from-white to-indigo-50/30",
      cyan: "border-cyan-200 hover:border-cyan-500 bg-gradient-to-br from-white to-cyan-50/30",
      gray: "border-gray-200 hover:border-gray-400 bg-gradient-to-br from-white to-gray-50/30"
    };

    const bgClasses = {
      blue: "bg-blue-100",
      indigo: "bg-indigo-100",
      cyan: "bg-cyan-100",
      gray: "bg-gray-100"
    };

    const textClasses = {
      blue: "text-blue-700",
      indigo: "text-indigo-700",
      cyan: "text-cyan-700",
      gray: "text-gray-700"
    };

    const accentClasses = {
      blue: "bg-gradient-to-r from-blue-600 to-blue-500",
      indigo: "bg-gradient-to-r from-indigo-600 to-indigo-500",
      cyan: "bg-gradient-to-r from-cyan-600 to-cyan-500",
      gray: "bg-gradient-to-r from-gray-600 to-gray-500"
    };

    return (
      <div className={`relative border-2 ${colorClasses[color]} rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-500 group ${isMobile ? 'mx-2' : ''}`}>
        {/* Accent Line */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 ${accentClasses[color]} rounded-t-2xl`}></div>
        
        {/* Floating Number for Mobile */}
        {isMobile && (
          <div className="absolute -top-3 -left-3 z-20">
            <div className={`w-10 h-10 ${bgClasses[color]} rounded-xl flex items-center justify-center shadow-lg`}>
              <span className={`text-lg font-black ${textClasses[color]}`}>{index + 1}</span>
            </div>
          </div>
        )}

        <div className="flex items-start gap-4 mb-6">
          {!isMobile && (
            <div className={`w-12 h-12 ${bgClasses[color]} rounded-xl flex items-center justify-center flex-shrink-0`}>
              <span className={`text-xl font-black ${textClasses[color]}`}>{index + 1}</span>
            </div>
          )}
          <div className="flex-1">
            <h3 className={`text-xl md:text-2xl font-semibold text-gray-900 mb-2 group-hover:${textClasses[color]} transition-colors`}>
              {industry.name}
            </h3>
            <p className="text-gray-700 font-medium leading-relaxed">
              {industry.description}
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 pt-6 border-t border-gray-200/50">
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{stats.leads}</div>
            <div className="text-xs md:text-sm text-gray-600 font-bold uppercase tracking-wide">Leads Generated</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-black text-green-700 mb-1">{stats.growth}</div>
            <div className="text-xs md:text-sm text-gray-600 font-bold uppercase tracking-wide">YoY Growth</div>
          </div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-black text-gray-900 mb-1">{stats.clients}</div>
            <div className="text-xs md:text-sm text-gray-600 font-bold uppercase tracking-wide">Active Clients</div>
          </div>
        </div>

        {/* Hover Effects */}
        <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Geometric Pattern Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(30deg, #1e40af 12%, transparent 12.5%, transparent 87%, #1e40af 87.5%, #1e40af),
            linear-gradient(150deg, #1e40af 12%, transparent 12.5%, transparent 87%, #1e40af 87.5%, #1e40af),
            linear-gradient(30deg, #1e40af 12%, transparent 12.5%, transparent 87%, #1e40af 87.5%, #1e40af),
            linear-gradient(150deg, #1e40af 12%, transparent 12.5%, transparent 87%, #1e40af 87.5%, #1e40af)
          `,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
        }}></div>
      </div>

      {/* Hero Section with Enhanced Animations */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Background with animation */}
        <div className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-grey-900 to-slate-800 overflow-hidden transition-all duration-1500 ${
          heroLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-1000 delay-300"></div>
          
          {/* Desktop: 4-Image Grid with staggered reveal */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:grid-rows-2 absolute inset-0">
            {[
              { img: leadDiscoveryImg, label: "Lead Discovery", delay: 100 },
              { img: realtimeImg, label: "Real-time Analytics", delay: 200 },
              { img: emailImg, label: "Email Campaigns", delay: 300 },
              { img: managedServiceImg, label: "Managed Service", delay: 400 }
            ].map((item, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden group"
                style={{
                  transform: heroLoaded ? 'translateY(0)' : 'translateY(100%)',
                  opacity: heroLoaded ? 1 : 0,
                  transition: `transform 1s cubic-bezier(0.4, 0, 0.2, 1) ${item.delay}ms, opacity 0.8s ease ${item.delay}ms`
                }}
              >
                <img 
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover transform transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-80"></div>
              </div>
            ))}
          </div>

          {/* Mobile: Carousel */}
          <div className="lg:hidden relative w-full h-full overflow-hidden">
            <div className="absolute inset-0 flex transition-transform duration-700 ease-out" 
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {[leadDiscoveryImg, realtimeImg, emailImg, managedServiceImg].map((img, index) => (
                <div 
                  key={index} 
                  className="relative min-w-full h-full"
                  style={{
                    opacity: heroLoaded ? 1 : 0,
                    transition: `opacity 1s ease ${index * 200}ms`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10"></div>
                  <img 
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Animated Background Glow */}
          <div className={`absolute inset-0 z-0 transition-all duration-2000 ${
            heroLoaded ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" 
                 style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Main Content with Text Animations */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full z-30">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              {/* Animated Badge */}
              <div className={`inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 transform transition-all duration-1000 ${
                heroLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
              }`}>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold tracking-wide">B2B LEAD GENERATION PLATFORM</span>
              </div>
              
              {/* Animated Main Heading - Simplified */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                {/* First Line */}
                <div className={`block overflow-hidden`}>
                  <span className={`block transform transition-all duration-800 delay-300 ${
                    textRevealed ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                  }`}>
                    Transform Your
                  </span>
                </div>
                
                {/* Second Line with Special Effect */}
                <div className={`block mt-3 overflow-hidden`}>
                  <span className={`block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent transform transition-all duration-800 delay-700 ${
                    textRevealed ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-4 opacity-0 scale-95'
                  }`}>
                    Sales Pipeline
                  </span>
                </div>
              </h1>
              
                {/* Animated Description Text - Smoother */}
                <p className={`text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl transform transition-all duration-700 delay-1000 ${
                  textRevealed ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  DartsUnity delivers precision-targeted lead generation with verified contact data, 
                  automated outreach, and real-time analytics to accelerate your business growth.
                </p>

              {/* Animated Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 mb-12 transform transition-all duration-1000 ${
                textRevealed ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: '1200ms' }}>
                <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105">
                  <PlayCircle className="h-5 w-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Key Metrics with Staggered Animation */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: TrendingUp, value: "3x", label: "Faster Conversion" },
                  { icon: Target, value: "95%", label: "Data Accuracy" },
                  { icon: Users, value: "500+", label: "Active Clients" },
                  { icon: Zap, value: "24/7", label: "Support" }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center transform transition-all duration-700 ${
                      statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${1400 + (index * 200)}ms` }}
                  >
                    <stat.icon className="w-6 h-6 text-blue-400 mx-auto mb-2 animate-bounce" 
                               style={{ animationDelay: `${index * 200}ms` }} />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Stats Dashboard with Animation */}
            <div className={`hidden lg:block transform transition-all duration-1000 ${
              heroLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="transform transition-all duration-1000" 
                       style={{ 
                         transform: statsVisible ? 'translateY(0)' : 'translateY(-20px)',
                         opacity: statsVisible ? 1 : 0,
                         transitionDelay: '1000ms'
                       }}>
                    <div className="text-sm text-gray-400 mb-1">Performance Metrics</div>
                    <div className="text-4xl font-bold text-white">Live Dashboard</div>
                  </div>
                  <div className={`w-3 h-3 bg-green-400 rounded-full ${
                    statsVisible ? 'animate-pulse' : 'opacity-0'
                  }`} style={{ transitionDelay: '1200ms' }}></div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className={`bg-white/10 rounded-xl p-5 transform transition-all duration-700 ${
                    statsVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                  }`} style={{ transitionDelay: '1200ms' }}>
                    <div className="text-sm text-gray-400 mb-2">Lead Quality</div>
                    <div className="text-3xl font-bold text-white mb-3">98%</div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className={`h-full bg-blue-500 rounded-full transition-all duration-2000 ${
                        statsVisible ? 'w-[98%]' : 'w-0'
                      }`} style={{ transitionDelay: '1400ms' }}></div>
                    </div>
                  </div>

                  <div className={`bg-white/10 rounded-xl p-5 transform transition-all duration-700 ${
                    statsVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                  }`} style={{ transitionDelay: '1400ms' }}>
                    <div className="text-sm text-gray-400 mb-2">Response Time</div>
                    <div className="text-3xl font-bold text-white mb-3">15min</div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className={`h-full bg-green-500 rounded-full transition-all duration-2000 ${
                        statsVisible ? 'w-[90%]' : 'w-0'
                      }`} style={{ transitionDelay: '1600ms' }}></div>
                    </div>
                  </div>
                </div>

                <div className={`bg-gradient-to-r from-blue-600/20 to-transparent rounded-xl p-5 border border-blue-500/30 transform transition-all duration-1000 ${
                  statsVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                }`} style={{ transitionDelay: '1600ms' }}>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                      <div className="text-sm text-gray-400">Uptime</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white mb-1">10M+</div>
                      <div className="text-sm text-gray-400">Contacts</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-1000 ${
          heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '2000ms' }}>
          <div className="flex flex-col items-center gap-2">
            <div className="text-white/60 text-sm animate-pulse">Explore More</div>
            <ChevronDown className="w-6 h-6 text-white/60 animate-bounce" />
          </div>
        </div>

        {/* Mobile Carousel Indicators */}
        <div className={`lg:hidden absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2 z-30 transition-all duration-1000 ${
          heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '1800ms' }}>
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
        
        {/* Floating Particles Animation */}
        <div className={`absolute inset-0 pointer-events-none z-20 transition-opacity duration-1000 ${
          heroLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0.3 + Math.random() * 0.4
              }}
            />
          ))}
        </div>
      </section>

      {/* Enhanced Results Section */}
      <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-50/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 text-blue-700 text-sm font-bold rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              PROVEN RESULTS
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Measurable Business Impact
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-medium">
              Delivering tangible growth through data-driven lead generation
            </p>
          </div>

          {/* Animated Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {/* Card 1 - From Left */}
            <div className={`transform transition-all duration-700 ease-out ${
              animatedCardsVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`} style={{ transitionDelay: '100ms' }}>
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 h-full group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                
                {/* Animated Counter */}
                <div className="text-5xl md:text-6xl font-black text-gray-900 mb-2">
                  <AnimatedCounter end={500} duration={2000} suffix="+" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  Enterprise Clients
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Leading companies trust us to transform their lead generation strategy
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-gray-500 font-medium">Growth Rate</span>
                  <span className="font-bold text-green-600 text-lg flex items-center gap-2">
                    <AnimatedCounter end={24} duration={2000} />% YoY
                  </span>
                </div>
                
                {/* Animated Border Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
              </div>
            </div>

            {/* Card 2 - From Bottom */}
            <div className={`transform transition-all duration-700 ease-out ${
              animatedCardsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '300ms' }}>
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 h-full group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                
                {/* Animated Counter */}
                <div className="text-5xl md:text-6xl font-black text-gray-900 mb-2">
                  $<AnimatedCounter end={50} duration={2000} />M+
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  Pipeline Generated
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Qualified pipeline created for our clients across industries
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-gray-500 font-medium">Avg. ROI</span>
                  <span className="font-bold text-green-600 text-lg flex items-center gap-2">
                    <AnimatedCounter end={4.2} duration={2000} decimals={1} />x
                  </span>
                </div>
                
                {/* Animated Border Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
              </div>
            </div>

            {/* Card 3 - From Right */}
            <div className={`transform transition-all duration-700 ease-out ${
              animatedCardsVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`} style={{ transitionDelay: '500ms' }}>
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 h-full group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                
                {/* Animated Counter */}
                <div className="text-5xl md:text-6xl font-black text-gray-900 mb-2">
                  <AnimatedCounter end={10} duration={2000} />M+
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  Verified Contacts
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  High-quality, accurate contact data with industry-leading verification
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-gray-500 font-medium">Accuracy</span>
                  <span className="font-bold text-green-600 text-lg flex items-center gap-2">
                    <AnimatedCounter end={98.7} duration={2000} decimals={1} />%
                  </span>
                </div>
                
                {/* Animated Border Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Performance Benchmarks */}
          <div className="relative">
            {/* Section Header for Benchmarks */}
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Outperforming Industry Standards
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                How DartsUnity consistently exceeds industry benchmarks across key performance indicators
              </p>
            </div>

            {/* Performance Grid */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Visual Comparison */}
              <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset -0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>
                
                {/* Glow Effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    Performance Comparison
                  </h4>
                  
                  {/* Comparison Bars */}
                  <div className="space-y-10">
                    {[
                      { metric: "Client Retention", industry: 78, darts: 95, color: "blue" },
                      { metric: "Lead Quality Score", industry: 67, darts: 92, color: "cyan" },
                      { metric: "Campaign Success Rate", industry: 62, darts: 88, color: "indigo" },
                      { metric: "Data Accuracy", industry: 85, darts: 98.7, color: "green" }
                    ].map((item, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{item.metric}</span>
                          <div className="flex items-center gap-4">
                            <span className="text-gray-300 text-sm">Industry Avg: {item.industry}%</span>
                            <span className="text-white font-bold">DartsUnity: {item.darts}%</span>
                          </div>
                        </div>
                        
                        {/* Comparison Bar */}
                        <div className="relative h-4 bg-gray-800/50 rounded-full overflow-hidden">
                          {/* Industry Average */}
                          <div 
                            className="absolute left-0 top-0 h-full bg-gray-600/50 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${item.industry}%` }}
                          ></div>
                          
                          {/* DartsUnity Performance */}
                          <div 
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1500 ease-out delay-300"
                            style={{ width: `${item.darts}%` }}
                          >
                            {/* Glow Effect */}
                            <div className="absolute right-0 top-0 w-2 h-full bg-white/30 blur-sm"></div>
                          </div>
                          
                          {/* Improvement Indicator */}
                          <div 
                            className="absolute w-3 h-3 bg-white rounded-full border-2 border-blue-500 -top-1 animate-pulse"
                            style={{ left: `calc(${item.darts}% - 6px)` }}
                          ></div>
                        </div>
                        
                        {/* Improvement Percentage */}
                        <div className="text-right">
                          <span className="text-green-400 font-bold text-lg">
                            +{Math.round(item.darts - item.industry)}% above industry average
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Detailed Metrics */}
              <div className="space-y-8">
                {/* Metric Card 1 */}
                <div className={`transform transition-all duration-700 ease-out ${
                  animatedCardsVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-10'
                }`} style={{ transitionDelay: '700ms' }}>
                  <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="text-5xl font-black text-blue-600 mb-2">
                          <AnimatedCounter end={95} duration={2000} suffix="%" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">Client Retention</h4>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Exceptional long-term partnerships through consistent value delivery
                    </p>
                    <div className="flex items-center gap-2 text-sm text-green-600 font-semibold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      17% higher than industry average
                    </div>
                  </div>
                </div>

                {/* Metric Card 2 */}
                <div className={`transform transition-all duration-700 ease-out ${
                  animatedCardsVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-10'
                }`} style={{ transitionDelay: '900ms' }}>
                  <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="text-5xl font-black text-blue-600 mb-2">
                          <AnimatedCounter end={92} duration={2000} suffix="%" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">Lead Quality Score</h4>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Verified, intent-driven data that converts at higher rates
                    </p>
                    <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      25% higher than industry average
                    </div>
                  </div>
                </div>

                {/* Metric Card 3 */}
                <div className={`transform transition-all duration-700 ease-out ${
                  animatedCardsVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-10'
                }`} style={{ transitionDelay: '1100ms' }}>
                  <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="text-5xl font-black text-blue-600 mb-2">
                          <AnimatedCounter end={88} duration={2000} suffix="%" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">Campaign Success</h4>
                      </div>
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Optimized outreach strategies delivering consistent results
                    </p>
                    <div className="flex items-center gap-2 text-sm text-purple-600 font-semibold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      26% higher than industry average
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Summary */}
            <div className={`mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-8 md:p-12 transform transition-all duration-700 ease-out ${
              animatedCardsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '1300ms' }}>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { value: "4.2x", label: "Average ROI", sublabel: "Client investment return" },
                  { value: "98.7%", label: "Data Accuracy", sublabel: "Verified contact rate" },
                  { value: "95%", label: "Client Satisfaction", sublabel: "Net promoter score" },
                  { value: "24%", label: "YoY Growth", sublabel: "Client expansion rate" }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-4xl md:text-5xl font-black text-blue-700 mb-2 group-hover:scale-105 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-lg font-bold text-gray-900 mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.sublabel}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

 {/* About Section */}
<section className="relative py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
  
  {/* Background Pattern */}
  <div className="absolute inset-0 pointer-events-none">
    <div
      className="absolute inset-0 opacity-[0.18]"
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(37,99,235,0.35) 1px, transparent 1px)
        `,
        backgroundSize: '28px 28px',
      }}
    />
    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      
      {/* Left Content */}
      <div>
        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-blue-100 text-blue-700 text-sm font-bold tracking-wide rounded-full mb-8">
          ABOUT DARTSUNITY
        </div>

        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
          A Smarter Way to
          <span className="block text-blue-600 mt-2">
            Build Revenue Pipelines
          </span>
        </h2>

        <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed mb-6 max-w-2xl">
          DartsUnity helps modern businesses scale predictable revenue using
          verified B2B data, intelligent outreach, and performance-driven execution.
        </p>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
          Since 2018, we’ve partnered with fast-growing teams and enterprises to
          eliminate guesswork from lead generation and replace it with systems
          that consistently convert.
        </p>

        {/* Value Pillars */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {[
            {
              title: "Precision Data",
              desc: "Verified contacts enriched with firmographic and intent signals."
            },
            {
              title: "Revenue-Focused Strategy",
              desc: "Every campaign is designed to drive pipeline, not vanity metrics."
            },
            {
              title: "Execution at Scale",
              desc: "Automated systems that grow with your sales team."
            },
            {
              title: "Hands-On Expertise",
              desc: "Dedicated specialists optimizing performance continuously."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <div>
                <div className="text-lg font-bold text-gray-900 mb-1">
                  {item.title}
                </div>
                <div className="text-gray-600 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="group px-9 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center">
            Learn More About Us
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="px-9 py-4 border-2 border-gray-300 hover:border-blue-600 text-gray-900 hover:text-blue-600 rounded-xl font-semibold text-lg transition-all">
            Talk to Our Team
          </button>
        </div>
      </div>

      {/* Right Visual */}
      <div className="relative">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={officeBg}
            alt="DartsUnity Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Floating Stats */}
        <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl px-8 py-6 border border-gray-200">
          <div className="text-sm font-semibold text-gray-500 mb-1">
            Founded
          </div>
          <div className="text-4xl font-extrabold text-blue-600">
            2018
          </div>
        </div>

        <div className="absolute -top-8 -right-8 bg-blue-600 text-white rounded-2xl shadow-xl px-8 py-6">
          <div className="text-sm font-medium opacity-80 mb-1">
            Trusted by
          </div>
          <div className="text-3xl font-extrabold">
            500+ Companies
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Zig-Zag Alternating Services Section */}
<section className="relative py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Header */}
    <div className="text-center mb-20">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-6">
        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
        <span className="text-sm font-semibold text-gray-700">OUR SOLUTIONS</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Strategic Growth Services
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Specialized solutions designed to accelerate your sales pipeline and drive measurable revenue growth
      </p>
    </div>

    {/* Zig-Zag Layout Container */}
    <div className="relative">
      {/* Connecting Lines (Desktop only) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {/* Line from Service 1 to Service 2 */}
        <svg className="absolute left-1/2 top-0" style={{ width: '50%', height: '100%' }}>
          <path
            d="M0,100 Q250,100 250,250 L500,250"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.3"
          />
        </svg>
        
        {/* Line from Service 2 to Service 3 */}
        <svg className="absolute right-1/2 top-0" style={{ width: '50%', height: '100%' }}>
          <path
            d="M500,250 Q250,250 250,400 L0,400"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Service 1 - Left Side */}
      <div className="relative mb-20 lg:mb-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="lg:pr-12 mb-10 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              SERVICE 01
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Lead Qualification</h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Sales-ready leads aligned with your ideal customer profile using structured qualification 
              frameworks and intent-driven validation.
            </p>
            
            <div className="space-y-3 mb-8">
              {["HQL/MQL/SQL Segmentation", "BANT Qualification", "Intent Validation", "Industry Targeting", "Double-touch Verification"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => setActiveService("leadQualification")}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Visual Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="text-5xl font-bold text-gray-300">01</div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-gray-900 mb-2">Lead Quality Score</div>
                <div className="text-5xl font-bold text-blue-600">98.7%</div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>ICP Match Rate</span>
                    <span>95%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Validation Accuracy</span>
                    <span>97%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '97%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Tag */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
              Most Popular
            </div>
          </div>
        </div>
      </div>

      {/* Service 2 - Right Side */}
      <div className="relative mb-20 lg:mb-0 lg:mt-40">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Visual Card (Left on desktop) */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="text-5xl font-bold text-gray-300">02</div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-gray-900 mb-2">Call Performance</div>
                <div className="text-5xl font-bold text-blue-600">52%</div>
                <div className="text-sm text-gray-600 mt-1">Connection Rate</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xl font-bold text-gray-900">25-35%</div>
                  <div className="text-sm text-gray-600">Qualification Rate</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xl font-bold text-gray-900">15-25%</div>
                  <div className="text-sm text-gray-600">Appointment Set</div>
                </div>
              </div>
            </div>
            
            {/* Floating Tag */}
            <div className="absolute -top-4 -left-4 bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold">
              High Impact
            </div>
          </div>
          
          {/* Content (Right on desktop) */}
          <div className="order-1 lg:order-2 lg:pl-12 mb-10 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full mb-4">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              SERVICE 02
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Telemarketing</h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Direct conversations with decision-makers to qualify interest, identify opportunities, 
              and create real pipeline value.
            </p>
            
            <div className="space-y-3 mb-8">
              {["Live Qualification", "Intent Discovery", "Appointment Setting", "Real-time Feedback", "Competitor Insights"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => setActiveService("telemarketing")}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Service 3 - Left Side */}
      <div className="relative mb-20 lg:mb-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="lg:pr-12 mb-10 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              SERVICE 03
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Account Based Marketing</h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Highly targeted engagement for high-value accounts using personalized multi-channel 
              outreach and strategic alignment.
            </p>
            
            <div className="space-y-3 mb-8">
              {["Target Account Selection", "Personalized Campaigns", "Multi-channel Outreach", "ROI Tracking", "Sales-Marketing Alignment"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => setActiveService("abm")}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Visual Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="text-5xl font-bold text-gray-300">03</div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-gray-900 mb-2">Target Account Success</div>
                <div className="text-5xl font-bold text-blue-600">88%</div>
                <div className="text-sm text-gray-600 mt-1">Engagement Rate</div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Response Rate</span>
                    <span>42%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Conversion Rate</span>
                    <span>18%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '18%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Tag */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
              Strategic
            </div>
          </div>
        </div>
      </div>

      {/* Service 4 - Right Side */}
      <div className="relative lg:mt-40">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Visual Card (Left on desktop) */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="text-5xl font-bold text-gray-300">04</div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-gray-900 mb-2">Meeting Success</div>
                <div className="text-5xl font-bold text-blue-600">75%</div>
                <div className="text-sm text-gray-600 mt-1">Show-up Rate</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xl font-bold text-gray-900">68%</div>
                  <div className="text-sm text-gray-600">Qualified Meetings</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xl font-bold text-gray-900">34%</div>
                  <div className="text-sm text-gray-600">Conversion to Deal</div>
                </div>
              </div>
            </div>
            
            {/* Floating Tag */}
            <div className="absolute -top-4 -left-4 bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold">
              High ROI
            </div>
          </div>
          
          {/* Content (Right on desktop) */}
          <div className="order-1 lg:order-2 lg:pl-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full mb-4">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              SERVICE 04
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Appointment Generation</h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Secure qualified meetings with verified decision-makers who show genuine buying intent 
              and immediate business need.
            </p>
            
            <div className="space-y-3 mb-8">
              {["Calendar Coordination", "Pre-meeting Briefings", "Follow-up Scheduling", "Conversion Tracking", "Pipeline Integration"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => setActiveService("appointment")}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Stats Summary */}
    <div className="mt-20 pt-12 border-t border-gray-300">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Service Performance Summary</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Average performance metrics across all service offerings based on client results
        </p>
      </div>
      
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">4.2x</div>
          <div className="text-gray-700 font-semibold">Average ROI</div>
          <div className="text-sm text-gray-500 mt-1">Across all services</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
          <div className="text-gray-700 font-semibold">Client Retention</div>
          <div className="text-sm text-gray-500 mt-1">Year-over-year</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
          <div className="text-gray-700 font-semibold">Active Clients</div>
          <div className="text-sm text-gray-500 mt-1">Global enterprise</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">98.7%</div>
          <div className="text-gray-700 font-semibold">Data Accuracy</div>
          <div className="text-sm text-gray-500 mt-1">Verified contacts</div>
        </div>
      </div>
    </div>

    {/* Final CTA */}
    <div className="mt-20 text-center">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 text-white">
        <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Pipeline?</h3>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Get a personalized assessment and discover which service combination will drive maximum growth for your business
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors">
            Schedule Free Assessment
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-colors">
            Download Service Catalog
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Simplified Service Detail Modal */}
{activeService && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    {/* Backdrop */}
    <div 
      className="absolute inset-0 bg-black/50"
      onClick={() => setActiveService(null)}
    />
    
    {/* Modal */}
    <div className="relative bg-white rounded-xl max-w-md w-full shadow-2xl">
      {/* Modal Header */}
      <div className="border-b border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900">
            {activeService === "leadQualification" && "Lead Qualification"}
            {activeService === "telemarketing" && "Telemarketing"}
            {activeService === "abm" && "Account Based Marketing"}
            {activeService === "appointment" && "Appointment Generation"}
          </h3>
          <button
            onClick={() => setActiveService(null)}
            className="text-gray-500 hover:text-gray-900 text-2xl"
          >
            ×
          </button>
        </div>
      </div>

      {/* Modal Content */}
      <div className="p-6">
        {activeService === "leadQualification" && (
          <div className="space-y-4">
            <p className="text-gray-700">
              Our comprehensive lead qualification framework ensures every lead meets strict criteria before entering your sales pipeline.
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Qualification Models:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700"><strong>HQL:</strong> ICP-aligned leads with verified decision-makers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700"><strong>MQL:</strong> Engaged prospects with behavioral signals</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700"><strong>SQL:</strong> Sales-ready leads with validated intent</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700"><strong>BANT:</strong> Budget, Authority, Need & Timeline qualified</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeService === "telemarketing" && (
          <div className="space-y-4">
            <p className="text-gray-700">
              Our telemarketing specialists engage decision-makers through structured conversations to qualify needs and identify opportunities.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center bg-gray-50 rounded-lg p-3">
                <div className="text-xl font-bold text-blue-600">45-55%</div>
                <div className="text-sm text-gray-600">Connection Rate</div>
              </div>
              <div className="text-center bg-gray-50 rounded-lg p-3">
                <div className="text-xl font-bold text-blue-600">25-35%</div>
                <div className="text-sm text-gray-600">Qualification Rate</div>
              </div>
            </div>
          </div>
        )}

        {activeService === "abm" && (
          <div className="space-y-4">
            <p className="text-gray-700">
              Focused engagement for high-value accounts using deep research, personalized messaging, and coordinated outreach strategies.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Key Features:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Target account selection</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Personalized multi-channel campaigns</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Sales-marketing alignment</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeService === "appointment" && (
          <div className="space-y-4">
            <p className="text-gray-700">
              Secure qualified meetings with verified decision-makers using targeted research and personalized outreach strategies.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Process:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Target identification & research</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Personalized outreach</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Calendar coordination</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Follow-up scheduling</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-gray-200">
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
            Request Service Details
          </button>
        </div>
      </div>
    </div>
  </div>
)}
{/* Enhanced Industries Section */}
<section className="relative py-24 bg-white overflow-hidden">
  {/* Background Pattern - Enhanced */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Gradient Overlays */}
    <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-blue-50/70 to-transparent"></div>
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-3xl"></div>
    <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
    
    {/* Geometric Grid Pattern */}
    <div className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, #3b82f6 1.5px, transparent 1.5px),
          radial-gradient(circle at 80% 70%, #3b82f6 1.5px, transparent 1.5px),
          radial-gradient(circle at 40% 90%, #3b82f6 1.5px, transparent 1.5px),
          radial-gradient(circle at 60% 10%, #3b82f6 1.5px, transparent 1.5px)
        `,
        backgroundSize: '120px 120px',
        backgroundPosition: '0 0, 60px 60px'
      }}
    />
    
    {/* Diagonal Lines Pattern */}
    <div className="absolute inset-0 opacity-[0.015]"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            #3b82f6 10px,
            #3b82f6 11px
          )
        `,
        backgroundSize: '40px 40px'
      }}
    />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Enhanced Section Header */}
    <div className="text-center mb-20">
      <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-full mb-8">
        <div className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse"></div>
        <span className="text-sm font-bold text-gray-800 tracking-wider uppercase">INDUSTRIES WE SERVE</span>
      </div>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
        Specialized Solutions for 
        <span className="block text-blue-700 mt-4">Every Sector</span>
      </h2>
      <p className="text-xl md:text-2xl font-medium text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Tailored lead generation strategies designed for the unique challenges and opportunities of each industry
      </p>
    </div>

    {/* Enhanced Industries Grid with Mobile Improvements */}
    <div className="relative mb-24">
      {/* Mobile Specific Layout */}
      <div className="lg:hidden">
        <div className="space-y-6">
          {industries.map((industry, index) => {
            const colors = ["blue", "indigo", "cyan", "gray"];
            const color = colors[index % colors.length];
            const stats = [
              { leads: "2.1M+", growth: "24%", clients: "85+" },
              { leads: "1.5M+", growth: "32%", clients: "120+" },
              { leads: "3.2M+", growth: "18%", clients: "95+" },
              { leads: "4.8M+", growth: "28%", clients: "210+" },
              { leads: "5.3M+", growth: "45%", clients: "185+" },
              { leads: "2.7M+", growth: "22%", clients: "150+" },
              { leads: "3.9M+", growth: "31%", clients: "110+" },
              { leads: "6.1M+", growth: "38%", clients: "240+" },
              { leads: "4.5M+", growth: "26%", clients: "175+" }
            ];
            
            return (
              <div key={index} className="relative">
                {/* Connection line for mobile */}
                {index < industries.length - 1 && (
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-0">
                    <div className="w-0.5 h-6 bg-blue-200"></div>
                  </div>
                )}
                
                <div className="relative z-10">
                  <EnhancedIndustryCard 
                    industry={industry}
                    index={index}
                    color={color}
                    stats={stats[index]}
                    isMobile={true}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Desktop Grid - Hexagonal Layout */}
      <div className="hidden lg:grid lg:grid-cols-9 gap-6">
        {/* Top Row */}
        <div className="lg:col-span-3 transform hover:-translate-y-2 transition-transform duration-300">
          <EnhancedIndustryCard 
            industry={industries[0]}
            index={0}
            color="blue"
            stats={{ leads: "2.1M+", growth: "24%", clients: "85+" }}
          />
        </div>
        <div className="lg:col-span-3 lg:col-start-4 transform hover:-translate-y-2 transition-transform duration-300">
          <EnhancedIndustryCard 
            industry={industries[1]}
            index={1}
            color="indigo"
            stats={{ leads: "1.5M+", growth: "32%", clients: "120+" }}
          />
        </div>
        <div className="lg:col-span-3 lg:col-start-7 transform hover:-translate-y-2 transition-transform duration-300">
          <EnhancedIndustryCard 
            industry={industries[2]}
            index={2}
            color="cyan"
            stats={{ leads: "3.2M+", growth: "18%", clients: "95+" }}
          />
        </div>

        {/* Middle Row (Offset) */}
        <div className="lg:col-span-3 lg:col-start-2 transform hover:-translate-y-2 transition-transform duration-300">
          <EnhancedIndustryCard 
            industry={industries[3]}
            index={3}
            color="gray"
            stats={{ leads: "4.8M+", growth: "28%", clients: "210+" }}
          />
        </div>
        <div className="lg:col-span-3 lg:col-start-5 transform hover:-translate-y-2 transition-transform duration-300">
          <EnhancedIndustryCard 
            industry={industries[4]}
            index={4}
            color="blue"
            stats={{ leads: "5.3M+", growth: "45%", clients: "185+" }}
          />
        </div>
        <div className="lg:col-span-3 lg:col-start-8 transform hover:-translate-y-2 transition-transform duration-300">
          <EnhancedIndustryCard 
            industry={industries[5]}
            index={5}
            color="indigo"
            stats={{ leads: "2.7M+", growth: "22%", clients: "150+" }}
          />
        </div>

        {/* Bottom Row */}
        <div className="lg:col-span-3 transform hover:-translate-y-2 transition-transform duration-300">
          <EnhancedIndustryCard 
            industry={industries[6]}
            index={6}
            color="cyan"
            stats={{ leads: "3.9M+", growth: "31%", clients: "110+" }}
          />
        </div>
        <div className="lg:col-span-3 lg:col-start-4 transform hover:-translate-y-2 transition-transform duration-300">
          <EnhancedIndustryCard 
            industry={industries[7]}
            index={7}
            color="gray"
            stats={{ leads: "6.1M+", growth: "38%", clients: "240+" }}
          />
        </div>
        <div className="lg:col-span-3 lg:col-start-7 transform hover:-translate-y-2 transition-transform duration-300">
          <EnhancedIndustryCard 
            industry={industries[8]}
            index={8}
            color="blue"
            stats={{ leads: "4.5M+", growth: "26%", clients: "175+" }}
          />
        </div>
      </div>
    </div>

    {/* Enhanced Industry Spotlight */}
    <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-white border border-gray-200/50 rounded-3xl p-10 md:p-12 mb-20 overflow-hidden">
      {/* Spotlight Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Industry-Specific Expertise
            </h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Vertical Specialization",
                  desc: "Deep understanding of industry terminology, pain points, and decision-making processes"
                },
                {
                  title: "Regulatory Compliance",
                  desc: "Industry-specific compliance requirements built into all data handling and outreach processes"
                },
                {
                  title: "Decision Maker Mapping",
                  desc: "Specialized knowledge of industry-specific roles, hierarchies, and buying committees"
                },
                {
                  title: "Seasonal Optimization",
                  desc: "Campaign timing aligned with industry-specific buying cycles and budget planning periods"
                }
              ].map((item, i) => (
                <div key={i} className="space-y-4 group">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed pl-8">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-black text-gray-900 mb-6">Industry Coverage</h4>
            <div className="space-y-8">
              {[
                { label: "Enterprise Coverage", value: "92%", color: "bg-blue-600" },
                { label: "SMB Coverage", value: "87%", color: "bg-blue-500" },
                { label: "Geographic Reach", value: "45 countries", color: "bg-cyan-500" }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-700 font-bold text-sm">{item.label}</span>
                    <span className="font-black text-gray-900">{item.value}</span>
                  </div>
                  <div className="h-3 bg-gray-200/50 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: item.label.includes("countries") ? '100%' : item.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Enhanced Industry Breakdown */}
    <div className="mb-20">
      <h3 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12">
        Industry Performance Breakdown
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "High-Growth Industries",
            industries: ["Technology", "Healthcare", "E-commerce"],
            metric: "32% avg. YoY growth",
            icon: "🚀",
            color: "blue"
          },
          {
            title: "Enterprise Focus",
            industries: ["Finance", "Manufacturing", "Real Estate"],
            metric: "85% enterprise penetration",
            icon: "🏢",
            color: "indigo"
          },
          {
            title: "Emerging Sectors",
            industries: ["EdTech", "CleanTech", "SaaS"],
            metric: "45% new client acquisition",
            icon: "⚡",
            color: "cyan"
          }
        ].map((group, index) => (
        <div 
          key={index} 
          className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 group"
        >
          {/* Icon and Title Row */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-12 h-12 bg-${group.color}-100 rounded-xl flex items-center justify-center text-2xl`}>
              {group.icon}
            </div>
            
            {/* Card Title - font-bold for prominent but not overwhelming */}
            <h4 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
              {group.title}
            </h4>
          </div>
          
          {/* Industry List */}
          <div className="space-y-4 mb-8">
            {group.industries.map((industry, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={`w-3 h-3 bg-${group.color}-600 rounded-full`}></div>
                
                {/* Industry Names - font-semibold for medium emphasis */}
                <span className="text-gray-800 font-semibold text-lg">{industry}</span>
              </div>
            ))}
          </div>
          
          {/* Metric - font-bold to make it stand out */}
          <div className="text-lg font-bold text-blue-700 border-t border-gray-100 pt-6">
            {group.metric}
          </div>
        </div>
        ))}
      </div>
    </div>

    {/* Enhanced CTA */}
    <div className="text-center">
      <div className="inline-flex flex-col items-center gap-8 max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-white border border-gray-200 rounded-3xl p-10 md:p-12">
        <div>
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            Need Industry-Specific Solutions?
          </h3>
          <p className="text-xl text-gray-700 font-medium">
            Get a customized industry analysis and discover how our specialized approach can accelerate your growth
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
         <button className="px-10 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105">
            Request Industry Analysis
          </button>
          <button className="px-10 py-4 bg-white border-2 border-gray-300 hover:border-blue-700 text-gray-900 hover:text-blue-700 font-bold text-lg rounded-xl transition-all duration-300">
            View Case Studies
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Standards Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
              QUALITY & COMPLIANCE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your data security and privacy are our top priorities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Data Quality</h3>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { label: "Data Accuracy", value: "99.7%" },
                  { label: "Verification Rate", value: "98.5%" },
                  { label: "Update Frequency", value: "Daily" }
                ].map((metric, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900">{metric.label}</span>
                      <span className="font-bold text-blue-600">{metric.value}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: metric.value }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Security & Compliance</h3>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["GDPR", "CCPA", "SOC 2", "ISO 27001"].map((standard, i) => (
                  <div key={i} className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="font-bold text-gray-900 mb-1">{standard}</div>
                    <div className="text-xs text-gray-600">Certified</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Lead Generation?</h3>
              <p className="text-gray-300 mb-8">
                Join hundreds of successful companies using DartsUnity to grow their business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

          {/* Add CSS animations in global styles or style tag */}
          <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-20px) translateX(-5px); }
          75% { transform: translateY(-10px) translateX(5px); }
        }
        
        .text-gradient-animate {
          background: linear-gradient(45deg, #60a5fa, #22d3ee, #60a5fa);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .letter-reveal {
          animation: letterReveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes letterReveal {
          0% {
            opacity: 0;
            transform: translateY(30px) rotateX(-90deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }
      `}</style>


    </div>
  );
};

export default Home;