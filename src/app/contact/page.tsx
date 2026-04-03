'use client';
import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send
} from 'lucide-react';
import Navbar2 from '@/components/Home/Navbar2';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    "Cinematography",
    "Commercial Direction",
    "Music Video Production",
    "Post-Production",
    "Photography"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form and show success
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Hide success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
        <Navbar2 />
      <main className="max-w-7xl mx-auto px-6 pb-10 pt-30 md:pt-40">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* LEFT SIDE: Content & Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl sm:text4xl md:text-5xl font-lime italic font-bold tracking-tighter mb-6">
                GET IN TOUCH
              </h1>
              <p className="text-zinc-400 text-sm md:text-base max-w-lg leading-normal mb-10">
                Have a project in mind? We're available for worldwide bookings and collaborations. 
                Let's bring your vision to life.
              </p>

              {/* Contact Details List */}
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="mt-1 bg-zinc-900 p-3 rounded-full">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-500 uppercase font-lime tracking-wide text-xs mb-1">Location</h3>
                    <p className="text-sm sm:text-base">LA</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="mt-1 bg-zinc-900 p-3 rounded-full">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-500 uppercase tracking-wide font-lime text-xs mb-1">Phone</h3>
                    <p className="text-sm sm:text-base">7474665773</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="mt-1 bg-zinc-900 p-3 rounded-full">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-500 uppercase tracking-wide font-lime text-xs mb-1">Email</h3>
                    <p className="text-sm sm:text-base">contact@kadirmayel.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div className="bg-zinc-900/30 p-4 md:p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-xl flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-green-400 text-sm font-medium">Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wide font-lime text-zinc-500 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-black border border-zinc-800 rounded-xl p-4 focus:outline-none focus:border-white transition-colors text-sm placeholder:text-zinc-700"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wide font-lime text-zinc-500 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-black border border-zinc-800 rounded-xl p-4 focus:outline-none focus:border-white transition-colors text-sm placeholder:text-zinc-700"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wide font-lime text-zinc-500 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="bg-black border border-zinc-800 rounded-xl p-4 focus:outline-none focus:border-white transition-colors text-sm placeholder:text-zinc-700"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-wide font-lime text-zinc-500 ml-1">Interested Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-black border border-zinc-800 rounded-xl p-4 focus:outline-none focus:border-white transition-colors text-sm appearance-none cursor-pointer text-zinc-400"
                    disabled={isSubmitting}
                  >
                    <option value="" disabled selected>Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service.toLowerCase()}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-wide font-lime text-zinc-500 ml-1">Your Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="bg-black border border-zinc-800 rounded-xl p-4 focus:outline-none focus:border-white transition-colors text-sm resize-none placeholder:text-zinc-700"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-bold py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all active:scale-[0.98] mt-4 uppercase tracking-wides text-sm font-lime cursor-pointer hover:scale-97 duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ContactPage;