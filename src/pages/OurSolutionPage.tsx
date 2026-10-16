import React from 'react';
import { BannerHero } from '../components/BannerHero.tsx';
import { StarIconTitle } from '../components/icons.tsx';
import { OrangeCTA } from '../components/OrangeCTA.tsx';

interface OurSolutionPageProps {
  onNavigate: (page: string) => void;
}

export const OurSolutionPage: React.FC<OurSolutionPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#fbfcff] pb-16">
      {/* 1. Hero Banner */}
      <BannerHero
        title="An Integrated Platform for Emotional Regulation"
        cardStyle={{
          width: '1493.2px',
          marginLeft: '-136px',
          height: '258.6px',
          marginTop: '-11px',
        }}
        titleStyle={{
          width: '778px',
        }}
      />

      {/* 2. How the Ecosystem Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
            <StarIconTitle />
            <span>How the Ecosystem Works</span>
            <StarIconTitle />
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-44 rounded-2xl overflow-hidden mb-4 relative shadow-sm bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80"
                alt="Students in classroom"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mt-2 mb-1">Student</h3>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
              Engaging in digital emotional regulation activities.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-44 rounded-2xl overflow-hidden mb-4 relative shadow-sm bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
                alt="Digital technology interface"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mt-2 mb-1">Digital Reinforcement</h3>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
              Interactive SEL lessons and therapeutic tools.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-44 rounded-2xl overflow-hidden mb-4 relative shadow-sm bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
                alt="Classroom education"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mt-2 mb-1">Classroom Integration</h3>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
              SEL curriculum delivered directly in class.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full h-44 rounded-2xl overflow-hidden mb-4 relative shadow-sm bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
                alt="Outcomes and analytics"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mt-2 mb-1">Measurable Outcomes</h3>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
              Monitoring and validating skill development.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Core Focus: Frustration Management */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
            <StarIconTitle />
            <span>The Core Focus: Frustration Management</span>
            <StarIconTitle />
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#e2f7fa] rounded-3xl p-8 flex flex-col items-center text-center justify-center min-h-[200px] border border-cyan-100 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-white text-[#145d9e] flex items-center justify-center mb-4 shadow-xs">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
            </div>
            <h3 className="text-base font-bold text-neutral-800">Academic disengagement</h3>
          </div>

          <div className="bg-[#e2f7fa] rounded-3xl p-8 flex flex-col items-center text-center justify-center min-h-[200px] border border-cyan-100 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-white text-[#145d9e] flex items-center justify-center mb-4 shadow-xs">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h3 className="text-base font-bold text-neutral-800">Peer conflict</h3>
          </div>

          <div className="bg-[#e2f7fa] rounded-3xl p-8 flex flex-col items-center text-center justify-center min-h-[200px] border border-cyan-100 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-white text-[#145d9e] flex items-center justify-center mb-4 shadow-xs">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </div>
            <h3 className="text-base font-bold text-neutral-800">Classroom disruption</h3>
          </div>

          <div className="bg-[#e2f7fa] rounded-3xl p-8 flex flex-col items-center text-center justify-center min-h-[200px] border border-cyan-100 shadow-xs">
            <div className="w-16 h-16 rounded-full bg-white text-[#145d9e] flex items-center justify-center mb-4 shadow-xs">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <h3 className="text-base font-bold text-neutral-800">Emotional shutdown</h3>
          </div>
        </div>
      </section>

      {/* 4. Dual Delivery Model */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#e4f8fb] rounded-[3rem] p-8 sm:p-14 border border-cyan-100/70">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
              <StarIconTitle />
              <span>Dual Delivery Model</span>
              <StarIconTitle />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-100 flex flex-col justify-between">
              <div className="w-full h-56 rounded-2xl overflow-hidden mb-5 bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80"
                  alt="Young student using digital learning app"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">Digital App Platform</h3>
                  <p className="text-sm text-neutral-600 mt-1">Ongoing, interactive reinforcement.</p>
                </div>
                <button
                  onClick={() => onNavigate('contact-us')}
                  className="px-6 py-2.5 rounded-full font-semibold text-white bg-[#ea580c] hover:bg-[#d84803] transition-colors whitespace-nowrap cursor-pointer shrink-0"
                >
                  View Our Solution
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-100 flex flex-col justify-between">
              <div className="w-full h-56 rounded-2xl overflow-hidden mb-5 bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80"
                  alt="Student using tablet and notebook in curriculum"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">School Curriculum</h3>
                  <p className="text-sm text-neutral-600 mt-1">Structured in-class implementation.</p>
                </div>
                <button
                  onClick={() => onNavigate('contact-us')}
                  className="px-6 py-2.5 rounded-full font-semibold text-white bg-[#ea580c] hover:bg-[#d84803] transition-colors whitespace-nowrap cursor-pointer shrink-0"
                >
                  View Our Solution
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why This Model Scales */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
            <StarIconTitle />
            <span>Why This Model Scales</span>
            <StarIconTitle />
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-16 h-16 rounded-full bg-[#e2f7fa] text-[#145d9e] flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-neutral-800">Recurring engagement</h3>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="w-16 h-16 rounded-full bg-[#e2f7fa] text-[#145d9e] flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h3 className="text-lg font-bold text-neutral-800">Institutional adoption</h3>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="w-16 h-16 rounded-full bg-[#e2f7fa] text-[#145d9e] flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-neutral-800">Data–informed tracking</h3>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="w-16 h-16 rounded-full bg-[#e2f7fa] text-[#145d9e] flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
            </div>
            <h3 className="text-lg font-bold text-neutral-800">Flexible implementation</h3>
          </div>
        </div>
      </section>

      {/* 6. Orange CTA Banner */}
      <OrangeCTA
        title="Turn Emotional Skills Into Measurable Results"
        subtitle="From digital reinforcement to classroom integration, W.T.F. provides a scalable framework schools can confidently adopt."
        primaryButtonText="Explore Digital App"
        onPrimaryClick={() => onNavigate('contact-us')}
        secondaryButtonText="Explore School Curriculum"
        onSecondaryClick={() => onNavigate('contact-us')}
      />
    </div>
  );
};
