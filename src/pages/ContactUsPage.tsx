import React, { useState } from 'react';
import { BannerHero } from '../components/BannerHero.tsx';

export const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: '', phone: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="w-full bg-[#fbfcff] pb-16">
      {/* 1. Hero Banner */}
      <BannerHero title="Contact Us" />

      {/* 2. Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                We’re here for you and your Questions
              </h2>
              <p className="mt-4 text-neutral-600 leading-relaxed text-base">
                Our digital app is designed to help students develop awareness, resilience, and self–regulation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#daf2f8] text-[#145d9e] flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <a href="tel:3466057037" className="text-lg font-semibold text-neutral-800 hover:text-[#0d6efd]">
                      346–605–7037
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#daf2f8] text-[#145d9e] flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <a href="mailto:Kevin@wtfuniversity.org" className="text-lg font-semibold text-neutral-800 hover:text-[#0d6efd]">
                      Kevin@wtfuniversity.org
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#daf2f8] text-[#145d9e] flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-base text-neutral-800 font-medium leading-relaxed block">
                      2810 North Church St. PMB 166458<br />Wilmington, DE 19802–4447
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#e2f7fa] rounded-[2.5rem] p-8 sm:p-12 shadow-xs border border-cyan-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#145d9e] text-neutral-900"
                    placeholder="Full Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#145d9e] text-neutral-900"
                    placeholder="Phone Number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#145d9e] text-neutral-900"
                    placeholder="Email Address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl bg-white border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#145d9e] text-neutral-900 resize-y"
                    placeholder="Your Message"
                  />
                </div>

                {submitted && (
                  <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 text-sm font-semibold border border-emerald-200">
                    Thank you! Your message has been sent successfully. We will get back to you shortly.
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-3.5 rounded-full font-bold text-white bg-[#145d9e] hover:bg-[#0f497d] transition-all shadow-md hover:shadow-lg cursor-pointer text-base"
                  >
                    Send a Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Location Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-[2.5rem] overflow-hidden border border-neutral-200 shadow-md">
          <iframe
            title="WTF Wilmington Delaware Location Map"
            src="https://maps.google.com/maps?q=Kalmar+Nyckel+Foundation,+1124+E+7th+St,+Wilmington,+DE+19801&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[400px] border-0"
            allowFullScreen={false}
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};
