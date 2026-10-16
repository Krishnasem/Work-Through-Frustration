import React from 'react';
import { BannerHero } from '../components/BannerHero.tsx';
import { StarIconTitle } from '../components/icons.tsx';
import { OrangeCTA } from '../components/OrangeCTA.tsx';

interface ForSchoolsPageProps {
  onNavigate: (page: string) => void;
}

export const ForSchoolsPage: React.FC<ForSchoolsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#fbfcff] pb-16">
      {/* 1. Hero Banner */}
      <BannerHero
        title="For Schools"
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

      {/* 2. Feature Section 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="w-full rounded-[2.5rem] overflow-hidden shadow-lg border border-neutral-200/80 bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
                alt="Teacher giving high five to student"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[440px] object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Support Emotional Regulation Across Your School System
            </h2>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
              Create a consistent, evidence–informed emotional regulation framework that supports students, teachers, and leadership teams. Our structured approach integrates seamlessly into existing school systems, helping you build a healthier, more resilient learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Feature Section 2 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Growing Emotional & Behavioral Demands in Schools
            </h2>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
              Disruptions, emotional dysregulation, and reduced student focus impact both classroom climate and academic performance. W.T.F. provides a preventative framework designed to proactively build emotional skills, reduce reactive interventions, and create a stable, supportive learning culture.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-[#ddf4f7] rounded-2xl p-4 text-center flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white text-[#145d9e] flex items-center justify-center mb-2 shadow-xs">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <span className="text-sm font-bold text-neutral-800">Teachers</span>
              </div>

              <div className="bg-[#ddf4f7] rounded-2xl p-4 text-center flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white text-[#145d9e] flex items-center justify-center mb-2 shadow-xs">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/></svg>
                </div>
                <span className="text-sm font-bold text-neutral-800">Administrators</span>
              </div>

              <div className="bg-[#ddf4f7] rounded-2xl p-4 text-center flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white text-[#145d9e] flex items-center justify-center mb-2 shadow-xs">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                </div>
                <span className="text-sm font-bold text-neutral-800">Support staff</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="w-full rounded-[2.5rem] overflow-hidden shadow-lg border border-neutral-200/80 bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                alt="School counselor working with student"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[440px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Outcomes for Schools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
            <StarIconTitle />
            <span>Outcomes for Schools</span>
            <StarIconTitle />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-full p-4 pl-5 pr-6 flex items-center gap-4 border border-neutral-200/80 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#dcf3f8] text-[#145d9e] flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <span className="text-neutral-800 font-semibold text-sm sm:text-base">Reduced classroom disruption</span>
          </div>

          <div className="bg-white rounded-full p-4 pl-5 pr-6 flex items-center gap-4 border border-neutral-200/80 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#dcf3f8] text-[#145d9e] flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <span className="text-neutral-800 font-semibold text-sm sm:text-base">Stronger emotional literacy among students</span>
          </div>

          <div className="bg-white rounded-full p-4 pl-5 pr-6 flex items-center gap-4 border border-neutral-200/80 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#dcf3f8] text-[#145d9e] flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
            </div>
            <span className="text-neutral-800 font-semibold text-sm sm:text-base">Consistent emotional language across staff</span>
          </div>

          <div className="bg-white rounded-full p-4 pl-5 pr-6 flex items-center gap-4 border border-neutral-200/80 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#dcf3f8] text-[#145d9e] flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </div>
            <span className="text-neutral-800 font-semibold text-sm sm:text-base">Improved academic engagement</span>
          </div>

          <div className="bg-white rounded-full p-4 pl-5 pr-6 flex items-center gap-4 border border-neutral-200/80 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#dcf3f8] text-[#145d9e] flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            </div>
            <span className="text-neutral-800 font-semibold text-sm sm:text-base">Scalable district–wide deployment</span>
          </div>

          <div className="bg-white rounded-full p-4 pl-5 pr-6 flex items-center gap-4 border border-neutral-200/80 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#dcf3f8] text-[#145d9e] flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
            </div>
            <span className="text-neutral-800 font-semibold text-sm sm:text-base">Emotional regulation skills</span>
          </div>
        </div>
      </section>

      {/* 5. Flexible Implementation Models */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
            <StarIconTitle />
            <span>Flexible Implementation Models</span>
            <StarIconTitle />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#ddf4f7] rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col">
            <div className="h-56 overflow-hidden bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
                alt="School level license"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">School–Level License</h3>
              <p className="text-sm text-neutral-600">Full access for one institution</p>
            </div>
          </div>

          <div className="bg-[#ddf4f7] rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col">
            <div className="h-56 overflow-hidden bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
                alt="District wide implementation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">District–Wide Implementation</h3>
              <p className="text-sm text-neutral-600">Multi–school deployment with centralized oversight</p>
            </div>
          </div>

          <div className="bg-[#ddf4f7] rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col">
            <div className="h-56 overflow-hidden bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
                alt="Hybrid digital curriculum"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Hybrid Digital + Curriculum Bundle</h3>
              <p className="text-sm text-neutral-600">Integrated digital tools with structured classroom curriculum</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Orange CTA Banner */}
      <OrangeCTA
        title="Transform Your School’s Emotional Ecosystem"
        subtitle="Partner with us to implement a structured emotional regulation solution that supports your entire school community."
        primaryButtonText="Schedule a Demo"
        onPrimaryClick={() => onNavigate('contact-us')}
      />
    </div>
  );
};
