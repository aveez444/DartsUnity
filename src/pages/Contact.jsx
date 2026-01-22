import { Mail, Phone, MapPin, Send, Clock, Globe, MessageSquare, ArrowRight, Users, Target, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-[#0a1628] via-[#1110C4] to-[#0B0A8A] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Large Floating Circles */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-[#1AD603]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-[#1AD603]/5 to-transparent rounded-full blur-3xl"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(90deg, transparent 49%, rgba(26, 214, 3, 0.3) 50%, transparent 51%),
                               linear-gradient(0deg, transparent 49%, rgba(26, 214, 3, 0.3) 50%, transparent 51%)`,
              backgroundSize: '80px 80px'
            }}></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
              <div className="flex space-x-1">
                <span className="w-2 h-2 bg-[#1AD603] rounded-full animate-pulse"></span>
                <span className="w-2 h-2 bg-[#1AD603] rounded-full animate-pulse delay-150"></span>
                <span className="w-2 h-2 bg-[#1AD603] rounded-full animate-pulse delay-300"></span>
              </div>
              <span className="text-sm font-semibold text-[#1AD603] tracking-wider">CONTACT US</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#1AD603] via-[#2BEC06] to-[#1AD603]">
                Your B2B Growth?
              </span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Connect with our experts to discuss how we can accelerate your business objectives.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1AD603] mb-2">24h</div>
                <div className="text-sm text-white/80">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1AD603] mb-2">95%</div>
                <div className="text-sm text-white/80">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1AD603] mb-2">50+</div>
                <div className="text-sm text-white/80">Industries Served</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Scrolling Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1AD603] to-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-scroll-line"></div>
        </div>
      </section>

      {/* ===================== MAIN CONTENT SECTION ===================== */}
      <section className="relative py-20 md:py-28">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1110C4 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* LEFT COLUMN - Enhanced Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 shadow-lg relative overflow-hidden">
                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#1110C4]/5 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#1AD603]/5 to-transparent rounded-tr-full"></div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-8 relative">
                  <span className="relative inline-block">
                    Get in Touch
                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#1110C4] to-[#1AD603] rounded-full"></span>
                  </span>
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      content: "contact@dartsunity.com",
                      href: "mailto:contact@dartsunity.com"
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      content: "+1 (234) 567-890",
                      href: "tel:+1234567890"
                    },
                    {
                      icon: MapPin,
                      title: "Location",
                      content: "Bhayandar, Maharashtra, IN"
                    },
                    {
                      icon: Clock,
                      title: "Business Hours",
                      content: "Mon - Fri: 9:00 AM - 6:00 PM IST"
                    }
                  ].map((item, index) => (
                    <div key={index} className="group flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#1110C4] to-[#0B0A8A] flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{item.title}</div>
                        {item.href ? (
                          <a href={item.href} className="text-gray-900 font-medium hover:text-[#1110C4] transition-colors inline-flex items-center gap-1 group/link">
                            {item.content}
                            <ArrowRight className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-all transform group-hover/link:translate-x-1" />
                          </a>
                        ) : (
                          <div className="text-gray-900 font-medium">{item.content}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Response Banner */}
                <div className="mt-8 p-4 bg-gradient-to-r from-[#1110C4]/5 to-[#1AD603]/5 rounded-xl border border-[#1110C4]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1AD603] to-[#2BEC06] flex items-center justify-center">
                      <Send className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Fast Response Guarantee</div>
                      <div className="text-sm text-gray-600">We respond within 24 business hours</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Highlight */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Expertise</h3>
                <div className="space-y-4">
                  {[
                    { icon: Target, text: "Lead Generation & Qualification" },
                    { icon: Users, text: "Account-Based Marketing" },
                    { icon: TrendingUp, text: "Demand Generation" }
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1110C4]/10 to-[#1AD603]/10 flex items-center justify-center">
                        <service.icon className="h-4 w-4 text-[#1110C4]" />
                      </div>
                      <span className="text-gray-700 font-medium">{service.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Enhanced Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl relative overflow-hidden">
                {/* Form Background Effects */}
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#1110C4]/[0.03] to-[#1AD603]/[0.03] rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#1AD603]/[0.03] to-[#1110C4]/[0.03] rounded-full blur-3xl"></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-transparent via-[#1110C4]/20 to-transparent">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-white to-white"></div>
                </div>

                <div className="relative">
                  <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1110C4] to-[#0B0A8A] flex items-center justify-center">
                        <MessageSquare className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
                        <p className="text-gray-600">Fill out the form below and we'll get back to you shortly.</p>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          label: "Full Name",
                          name: "name",
                          type: "text",
                          required: true,
                          placeholder: "John Doe"
                        },
                        {
                          label: "Email Address",
                          name: "email",
                          type: "email",
                          required: true,
                          placeholder: "john@company.com"
                        }
                      ].map((field, index) => (
                        <div key={index} className="relative">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {field.label} {field.required && <span className="text-red-500">*</span>}
                          </label>
                          <input
                            type={field.type}
                            name={field.name}
                            required={field.required}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#1110C4] focus:ring-3 focus:ring-[#1110C4]/10 bg-white/50 backdrop-blur-sm transition-all duration-300"
                            placeholder={field.placeholder}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          label: "Company Name",
                          name: "company",
                          type: "text",
                          required: true,
                          placeholder: "Your Company"
                        },
                        {
                          label: "Phone Number",
                          name: "phone",
                          type: "tel",
                          required: false,
                          placeholder: "+1 (234) 567-890"
                        }
                      ].map((field, index) => (
                        <div key={index} className="relative">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {field.label} {field.required && <span className="text-red-500">*</span>}
                          </label>
                          <input
                            type={field.type}
                            name={field.name}
                            required={field.required}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#1110C4] focus:ring-3 focus:ring-[#1110C4]/10 bg-white/50 backdrop-blur-sm transition-all duration-300"
                            placeholder={field.placeholder}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <div className="relative">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#1110C4] focus:ring-3 focus:ring-[#1110C4]/10 bg-white/50 backdrop-blur-sm appearance-none transition-all duration-300"
                        >
                          <option value="">Select a service</option>
                          <option value="lead-qualification">Lead Qualification</option>
                          <option value="telemarketing">Telemarketing</option>
                          <option value="abm">Account-Based Marketing</option>
                          <option value="appointment-generation">Appointment Generation</option>
                          <option value="demand-generation">Demand Generation</option>
                          <option value="email-campaigns">Email Marketing</option>
                          <option value="lead-generation">Lead Generation</option>
                          <option value="content-syndication">Content Syndication</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <div className="w-2 h-2 border-r-2 border-b-2 border-gray-400 transform rotate-45"></div>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#1110C4] focus:ring-3 focus:ring-[#1110C4]/10 bg-white/50 backdrop-blur-sm resize-none transition-all duration-300"
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                    </div>

                    <div className="pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#1110C4] to-[#0B0A8A] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#1110C4]/30 transition-all duration-500 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {/* Hover Gradient Overlay */}
                        <span className="absolute inset-0 bg-gradient-to-r from-[#1110C4] via-[#1AD603] to-[#0B0A8A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        
                        {/* Button Content */}
                        <span className="relative flex items-center justify-center gap-3">
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </>
                          )}
                        </span>
                        
                        {/* Animated Border */}
                        <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></span>
                      </button>
                    </div>

                    {submitStatus === 'success' && (
                      <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                            <Send className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-green-900">Message Sent Successfully!</div>
                            <div className="text-sm text-green-700">We'll get back to you within 24 business hours.</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA SECTION ===================== */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/4 w-96 h-96 bg-gradient-to-br from-[#1110C4]/[0.03] to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-10 border border-gray-100 shadow-xl text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#1110C4]/5 to-transparent rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#1AD603]/5 to-transparent rounded-tl-full"></div>
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1110C4]/10 to-[#1AD603]/10 px-5 py-2 rounded-full mb-6">
                <Globe className="h-4 w-4 text-[#1110C4]" />
                <span className="text-sm font-semibold text-gray-700">Global Reach</span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Partner with Industry Leaders
              </h3>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                Join hundreds of successful B2B companies who have accelerated their growth with our expertise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+1234567890" 
                  className="group inline-flex items-center justify-center px-8 py-3.5 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-[#1110C4] hover:text-[#1110C4] transition-all duration-300"
                >
                  <Phone className="h-5 w-5 mr-3 group-hover:animate-pulse" />
                  Schedule a Call
                </a>
                <a 
                  href="mailto:contact@dartsunity.com" 
                  className="group inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#1110C4] to-[#0B0A8A] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#1110C4]/30 transition-all duration-300"
                >
                  <Mail className="h-5 w-5 mr-3 group-hover:animate-bounce" />
                  Start Conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom animation */}
      <style jsx>{`
        @keyframes scroll-line {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-scroll-line {
          animation: scroll-line 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;