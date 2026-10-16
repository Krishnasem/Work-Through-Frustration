import React from 'react';
import { WTFLogo } from './icons.tsx';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full">
      {/* Upper Main Footer - Light Cyan */}
      <div className="bg-[#eaf8fa] text-neutral-700 py-16 px-4 sm:px-6 lg:px-12 border-t border-cyan-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              onClick={() => onNavigate('home')} 
              className="cursor-pointer inline-block"
            >
              <WTFLogo />
            </div>
            <p className="text-[15px] leading-relaxed text-neutral-600 max-w-sm mt-3">
              Supporting emotional regulation in students through structured, evidence-informed tools designed for schools and families.
            </p>
          </div>

          {/* Col 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-neutral-900 mb-4 tracking-tight">Quick Link</h3>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="text-neutral-600 hover:text-[#0d6efd] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about-us')} 
                  className="text-neutral-600 hover:text-[#0d6efd] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('our-solution')} 
                  className="text-neutral-600 hover:text-[#0d6efd] transition-colors cursor-pointer"
                >
                  Our Solution
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('for-schools')} 
                  className="text-neutral-600 hover:text-[#0d6efd] transition-colors cursor-pointer"
                >
                  For Schools
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('for-investors')} 
                  className="text-neutral-600 hover:text-[#0d6efd] transition-colors cursor-pointer"
                >
                  For Investors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('for-parents')} 
                  className="text-neutral-600 hover:text-[#0d6efd] transition-colors cursor-pointer"
                >
                  For Parents
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact-us')} 
                  className="text-neutral-600 hover:text-[#0d6efd] transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('pricing')} 
                  className="text-neutral-600 hover:text-[#0d6efd] transition-colors cursor-pointer"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Solution (2.5 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-neutral-900 mb-4 tracking-tight">Our Solution</h3>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <button 
                  onClick={() => onNavigate('our-solution')} 
                  className="text-neutral-600 hover:text-[#0d6efd] transition-colors cursor-pointer"
                >
                  Digital App
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('our-solution')} 
                  className="text-neutral-600 hover:text-[#0d6efd] transition-colors cursor-pointer"
                >
                  School Curriculum
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-neutral-900 mb-4 tracking-tight">Contact Information</h3>
            <ul className="space-y-4 text-[14.5px]">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center shrink-0 text-neutral-700 bg-white">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:3466057037" className="text-neutral-700 hover:text-[#0d6efd] pt-1 font-medium">
                  346–605–7037
                </a>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center shrink-0 text-neutral-700 bg-white">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:Kevin@wtfuniversity.org" className="text-neutral-700 hover:text-[#0d6efd] pt-1 font-medium break-all">
                  Kevin@wtfuniversity.org
                </a>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center shrink-0 text-neutral-700 bg-white">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-neutral-700 pt-1 leading-snug">
                  2810 North Church St. PMB 166458 Wilmington, DE 19802–4447
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Crisis Lifeline Disclaimer */}
        <div className="max-w-4xl mx-auto mt-16 text-center border-t border-cyan-200/70 pt-8">
          <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
            If you are in a life–threatening situation – don’t use this site.
          </h4>
          <p className="text-[15px] sm:text-base text-neutral-700 leading-relaxed font-normal">
            Call <span className="font-bold text-[#ea580c]">988</span> – <span className="font-bold text-[#1a5b97]">the Suicide & Crisis Lifeline</span> for immediate support from trained crisis counselors, available <span className="font-bold text-[#1a5b97]">24/7 in the United States</span>. You can reach the <span className="font-bold text-[#1a5b97]">988 Suicide & Crisis Lifeline</span> by calling (988), texting (988), or chatting via 988lifeline.org
          </p>
        </div>
      </div>

      {/* Copyright Bar - Royal Blue */}
      <div className="bg-[#155397] text-white py-4 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center relative">
          <p className="text-sm font-medium tracking-wide">
            Copyright © 2026 WTF. All rights reserved.
          </p>

          {/* Floating Scroll to Top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-white text-[#ea580c] border border-orange-200 shadow-lg flex items-center justify-center hover:bg-orange-50 transition-transform hover:-translate-y-0.5 cursor-pointer"
          >
            <svg className="w-5 h-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};
