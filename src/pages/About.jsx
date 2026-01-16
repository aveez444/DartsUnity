import { useEffect, useRef, useState } from 'react';
import { 
  Users, Target, Globe, Zap, Heart, Award, Rocket, 
  Sparkles, TrendingUp, Shield, Lightbulb, GitBranch,
  ArrowRight, ChevronRight, Star, Clock, CheckCircle,
  Building, Users as UsersIcon, Target as TargetIcon,
  Globe as GlobeIcon, Zap as ZapIcon,
  MapPin, BarChart, Cpu, Cloud, Code, Palette,
  MessageCircle, ThumbsUp, TrendingDown, Circle,
  Calendar, Eye, Brain, Target as Bullseye,
  RefreshCw, Layers, Puzzle
} from 'lucide-react';
import teamImage from '../assets/team-collaboration.jpg';
import officeSpace from '../assets/modern-office.jpg';
import missionImage from '../assets/vision-board.jpg';

const About = () => {
  const [activeSection, setActiveSection] = useState('story');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    clients: 0,
    countries: 0,
    satisfaction: 0,
    projects: 0
  });

  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  
  // Enhanced scroll progress with parallax
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
      
      // Section tracking
      const sections = ['story', 'mission', 'values', 'journey', 'team'];
      const sectionElements = sections.map(id => document.getElementById(id));
      sectionElements.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.3) {
            setActiveSection(sections[index]);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated counters
  useEffect(() => {
    const animateValue = (start, end, duration, callback) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        callback(value);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    animateValue(0, 650, 2000, (val) => setAnimatedNumbers(prev => ({...prev, clients: val})));
    animateValue(0, 45, 2000, (val) => setAnimatedNumbers(prev => ({...prev, countries: val})));
    animateValue(0, 98, 2000, (val) => setAnimatedNumbers(prev => ({...prev, satisfaction: val})));
    animateValue(0, 1200, 2000, (val) => setAnimatedNumbers(prev => ({...prev, projects: val})));
  }, []);

  // Enhanced stats with more metrics
  const enhancedStats = [
    { 
      icon: Users, 
      value: `${animatedNumbers.clients}+`, 
      label: "Happy Clients",
      description: "Global enterprises to startups",
      gradient: "from-blue-500 to-cyan-400"
    },
    { 
      icon: Globe, 
      value: `${animatedNumbers.countries}+`, 
      label: "Countries",
      description: "Active operations worldwide",
      gradient: "from-green-500 to-emerald-400"
    },
    { 
      icon: Zap, 
      value: `${animatedNumbers.satisfaction}%`, 
      label: "Satisfaction Rate",
      description: "Client retention metric",
      gradient: "from-amber-500 to-orange-400"
    },
    { 
      icon: Rocket, 
      value: `${animatedNumbers.projects}+`, 
      label: "Projects",
      description: "Successfully delivered",
      gradient: "from-violet-500 to-purple-400"
    }
  ];

  // Expanded core values
  const corePrinciples = [
    {
      icon: Heart,
      title: "Client Empathy",
      description: "We don't just serve clients - we become their strategic partners, deeply understanding their challenges to deliver solutions that drive real business value.",
      pillars: ["Deep Listening", "Proactive Support", "Continuous Feedback"],
      color: "bg-gradient-to-br from-rose-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "Intelligent Innovation",
      description: "Leveraging cutting-edge AI and machine learning to create predictive models that anticipate market trends before they happen.",
      pillars: ["AI-First Approach", "Data-Driven Decisions", "Future-Proof Solutions"],
      color: "bg-gradient-to-br from-blue-500 to-cyan-400"
    },
    {
      icon: Shield,
      title: "Uncompromising Integrity",
      description: "Transparency isn't just a policy - it's our foundation. We build trust through ethical practices and honest communication.",
      pillars: ["Radical Transparency", "Ethical AI", "Secure Operations"],
      color: "bg-gradient-to-br from-emerald-500 to-teal-400"
    },
    {
      icon: Puzzle,
      title: "Collaborative Excellence",
      description: "We believe the best solutions emerge from diverse perspectives working in harmony towards a shared vision.",
      pillars: ["Cross-Functional Teams", "Open Communication", "Shared Success"],
      color: "bg-gradient-to-br from-indigo-500 to-purple-400"
    }
  ];

  // Expanded timeline with more detail
  const journeyTimeline = [
    { 
      year: "2018", 
      title: "Foundation", 
      milestone: "DartsUnity was founded with a vision to revolutionize lead generation",
      achievements: ["First office established", "Initial team of 5", "First 10 clients"],
      icon: Building
    },
    { 
      year: "2019", 
      title: "Growth Surge", 
      milestone: "Expanded to 100+ clients and launched AI analytics platform",
      achievements: ["Team grew to 25", "Series A funding", "Patent filed"],
      icon: TrendingUp
    },
    { 
      year: "2020", 
      title: "Innovation Leap", 
      milestone: "Pioneered predictive AI models for lead scoring accuracy",
      achievements: ["AI platform v2.0", "Remote-first transition", "1000+ users"],
      icon: Cpu
    },
    { 
      year: "2021", 
      title: "Global Expansion", 
      milestone: "Opened international offices across 3 continents",
      achievements: ["EMEA HQ opened", "APAC expansion", "50+ countries served"],
      icon: MapPin
    },
    { 
      year: "2022", 
      title: "Platform Evolution", 
      milestone: "Launched integrated suite with real-time market intelligence",
      achievements: ["Unified platform", "Mobile app launch", "Enterprise tier"],
      icon: Layers
    },
    { 
      year: "2023", 
      title: "Industry Recognition", 
      milestone: "Award-winning solutions and strategic partnerships",
      achievements: ["3 industry awards", "Fortune 500 partners", "ISO certification"],
      icon: Award
    }
  ];

  // Expanded leadership team
  const leadershipTeam = [
    {
      name: "Alexandra Morgan",
      role: "CEO & Founder",
      bio: "Former Google executive with 15+ years in enterprise SaaS and AI-driven solutions. Led three successful startups to acquisition.",
      expertise: ["AI Strategy", "Scaling Startups", "Enterprise Sales"],
      initials: "AM",
      color: "bg-gradient-to-br from-blue-600 to-cyan-500",
      shape: "hexagon"
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      bio: "MIT PhD in Machine Learning. Published 20+ research papers. Leads our AI research division and innovation labs.",
      expertise: ["Machine Learning", "Research", "System Architecture"],
      initials: "SC",
      color: "bg-gradient-to-br from-emerald-600 to-teal-500",
      shape: "circle"
    },
    {
      name: "Marcus Johnson",
      role: "Head of Growth",
      bio: "Scaled three tech startups from 0 to 100M+ revenue. Expert in market expansion and customer acquisition.",
      expertise: ["Go-to-Market", "Revenue Operations", "Team Building"],
      initials: "MJ",
      color: "bg-gradient-to-br from-amber-600 to-orange-500",
      shape: "square"
    },
    {
      name: "Priya Patel",
      role: "Product Director",
      bio: "Led product teams at Salesforce and Adobe. Specializes in UX-driven product strategy and roadmap execution.",
      expertise: ["Product Strategy", "UX Design", "Agile Development"],
      initials: "PP",
      color: "bg-gradient-to-br from-violet-600 to-purple-500",
      shape: "triangle"
    }
  ];

  // Company culture highlights
  const cultureHighlights = [
    { icon: UsersIcon, title: "Diverse Team", value: "18 nationalities", color: "text-blue-600" },
    { icon: RefreshCw, title: "Remote First", value: "Flexible work", color: "text-green-600" },
    { icon: Award, title: "Learning Budget", value: "$5k/year", color: "text-amber-600" },
    { icon: Heart, title: "Wellness Focus", value: "Holistic care", color: "text-rose-600" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden" ref={containerRef}>
      {/* Navigation Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Section Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        {['story', 'mission', 'values', 'journey', 'team'].map((section, index) => (
          <button
            key={section}
            onClick={() => {
              const element = document.getElementById(section);
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="block w-3 h-3 my-4 rounded-full transition-all duration-300 hover:scale-150"
            style={{
              backgroundColor: activeSection === section 
                ? 'rgb(59 130 246)' 
                : 'rgb(209 213 219)',
              transform: activeSection === section ? 'scale(1.5)' : 'scale(1)'
            }}
          >
            <span className="sr-only">{section}</span>
          </button>
        ))}
      </div>

      {/* Hero Section - Asymmetrical Layout */}
      {/* Alternative Background - Abstract Blobs */}
      <section id="story" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
          {/* Large Background Blobs */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 via-cyan-100/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-200/20 via-teal-100/10 to-transparent rounded-full blur-3xl"></div>
          
          {/* Intersecting Lines Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/30 to-transparent"></div>
            <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-emerald-200/30 to-transparent"></div>
            
            {/* Diagonal Lines */}
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(59, 130, 246, 0.03) 10px,
                rgba(59, 130, 246, 0.03) 20px
              )`
            }}></div>
          </div>
          
          {/* Floating Cards */}
          <div className="absolute top-20 left-1/4 w-64 h-40 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg transform -rotate-6"></div>
          <div className="absolute bottom-32 right-1/4 w-56 h-32 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg transform rotate-12"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg">
                <div className="relative">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full animate-ping opacity-20"></div>
                </div>
                <span className="text-sm font-semibold text-gray-700 tracking-wide">INNOVATING SINCE 2018</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-900">Redefining</span>
                <span className="block text-transparent bg-gradient-to-r from-blue-600 via-emerald-600 to-amber-600 bg-clip-text">
                  Lead Generation
                </span>
                <span className="block text-gray-900">Through Intelligence</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                We're not just another SaaS company. We're architects of intelligent connections, 
                building bridges between businesses and their perfect customers through data-driven 
                insights and human-centered design.
              </p>

              {/* Quick Stats Row */}
              <div className="flex flex-wrap gap-6 pt-8">
                {enhancedStats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image & Floating Elements */}
            <div className="lg:col-span-5 relative">
              <div className="relative group">
                {/* Main Image with Layered Effects */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-700">
                  <img 
                    src={teamImage}
                    alt="Innovative Team Collaboration"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 mix-blend-overlay"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">98.7%</div>
                      <div className="text-xs text-gray-600">Accuracy</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-xl flex items-center justify-center">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">40%</div>
                      <div className="text-xs text-gray-600">Faster</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator with Animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm text-gray-500 mb-2 tracking-wider">EXPLORE OUR STORY</span>
            <div className="relative w-6 h-10 border-2 border-gray-300 rounded-full">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full animate-scroll-wheel"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section - Diagonal Layout */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-100/20 to-transparent -translate-y-1/2 translate-x-1/3 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-emerald-100/20 to-transparent translate-y-1/2 -translate-x-1/3 rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enhancedStats.map((stat, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className={`mb-6 w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-lg font-semibold text-gray-800">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Growing continuously
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - Split Layout with Interactive Cards */}
      <section id="mission" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-full mb-6">
              <TargetIcon className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">OUR NORTH STAR</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              More Than a Company.<br />
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text">A Movement.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Mission Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center">
                    <Bullseye className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                    <div className="text-sm text-gray-500">What drives us every day</div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  To democratize access to intelligent sales insights, empowering businesses of all sizes 
                  to make data-driven decisions that fuel sustainable growth and forge meaningful customer relationships.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {['AI-Powered', "Real-Time", "Scalable", "Accessible"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision Card with Image Overlay */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src={missionImage}
                alt="Strategic Vision"
                className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-400 rounded-xl flex items-center justify-center">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                    <div className="text-amber-100">The future we're building</div>
                  </div>
                </div>
                <p className="text-white/90 text-lg">
                  To create a world where every business decision is empowered by intelligent, 
                  accessible, and ethical AI-driven insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles - Hexagonal Grid Layout */}
      <section id="values" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our DNA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The foundational principles that shape every decision, every innovation, and every partnership
            </p>
          </div>

          <div className="relative">
            {/* Geometric Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-blue-300 rotate-45 rounded-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border-2 border-emerald-300 -rotate-12 rounded-3xl"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 relative">
              {corePrinciples.map((principle, index) => (
                <div 
                  key={index}
                  className="group perspective-1000"
                >
                  <div className="relative transform transition-all duration-500 group-hover:rotate-x-12 group-hover:-translate-y-2">
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                    <div className="relative bg-white rounded-2xl p-8 shadow-xl overflow-hidden">
                      {/* Principle Header */}
                      <div className="flex items-start gap-6 mb-8">
                        <div className={`${principle.color} w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                          <principle.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{principle.title}</h3>
                          <p className="text-gray-600">{principle.description}</p>
                        </div>
                      </div>

                      {/* Pillars */}
                      <div className="space-y-3">
                        {principle.pillars.map((pillar, i) => (
                          <div 
                            key={i}
                            className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 transform transition-all duration-300 hover:translate-x-2"
                          >
                            <div className={`w-2 h-2 rounded-full ${principle.color.split(' ')[2]}`}></div>
                            <span className="text-sm font-medium text-gray-700">{pillar}</span>
                          </div>
                        ))}
                      </div>

                      {/* Hover Effect Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline - Horizontal Scrolling */}
      <section id="journey" className="py-20 bg-white" ref={timelineRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full mb-6">
              <Calendar className="h-5 w-5 text-amber-600" />
              <span className="text-sm font-semibold text-gray-700">OUR EVOLUTION</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              The Journey So Far
            </h2>
          </div>

          <div className="relative">
            {/* Main Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 via-emerald-500 to-amber-500 transform lg:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {journeyTimeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
                >
                  {/* Year Indicator */}
                  <div className="absolute lg:static left-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">{item.year}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'} ml-20 lg:ml-0`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-400 rounded-xl flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                          <div className="text-sm text-gray-500">Key Milestone</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{item.milestone}</p>
                      
                      <div className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="lg:w-5/12 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team - Asymmetrical Cards */}
      <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Meet Our Visionaries
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The brilliant minds and passionate leaders driving our mission forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((person, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3">
                  {/* Avatar with Shape */}
                  <div className="relative mb-8">
                    <div 
                      className={`${person.color} w-24 h-24 mx-auto flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 ${person.shape === 'hexagon' ? 'clip-hexagon' : person.shape === 'triangle' ? 'clip-triangle' : ''}`}
                    >
                      <span className="text-white text-2xl font-bold">{person.initials}</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                      <Sparkles className="h-4 w-4 text-amber-500" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h3>
                      <div className="text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text font-semibold">
                        {person.role}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">{person.bio}</p>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {person.expertise.map((exp, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-gray-50 to-white text-xs font-medium text-gray-700 rounded-full border border-gray-200"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links - Appear on Hover */}
                  <div className="flex justify-center space-x-4 mt-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {['LinkedIn', 'Email', 'Twitter'].map((social) => (
                      <button
                        key={social}
                        className="text-xs px-3 py-1 bg-gray-50 text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        {social}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Culture Highlights */}
          <div className="mt-20 bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Culture in Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {cultureHighlights.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-white rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Geometric Layout */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-emerald-50/20 to-amber-50/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/20 to-cyan-100/20 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-200/20 to-teal-100/20 rounded-full translate-y-48 -translate-x-48"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Floating Elements */}
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-3xl rotate-45"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tr from-emerald-500/10 to-teal-400/10 rounded-3xl -rotate-12"></div>

            <div className="relative z-10 text-center space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Ready to Transform Your Growth?
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Join thousands of businesses already experiencing the DartsUnity difference
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-105">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-gradient-to-r from-gray-50 to-white text-gray-700 rounded-full font-semibold border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                  Schedule a Demo
                </button>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>30-day free trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>24/7 support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for Shapes and Animations */}
      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll-wheel {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(10px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradient-flow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-scroll-wheel {
          animation: scroll-wheel 1.5s ease-in-out infinite;
        }

        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 3s ease infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }

        /* Staggered animations for cards */
        .animate-stagger > * {
          opacity: 0;
          animation: fade-up 0.6s ease-out forwards;
        }

        .animate-stagger > *:nth-child(1) { animation-delay: 0.1s; }
        .animate-stagger > *:nth-child(2) { animation-delay: 0.2s; }
        .animate-stagger > *:nth-child(3) { animation-delay: 0.3s; }
        .animate-stagger > *:nth-child(4) { animation-delay: 0.4s; }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default About;