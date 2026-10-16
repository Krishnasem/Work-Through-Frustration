import React from 'react';
import { BannerHero } from '../components/BannerHero.tsx';
import { StarIconTitle } from '../components/icons.tsx';
import { OrangeCTA } from '../components/OrangeCTA.tsx';

interface ForInvestorsPageProps {
  onNavigate: (page: string) => void;
}

export const ForInvestorsPage: React.FC<ForInvestorsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#fbfcff] pb-16">
      {/* 1. Hero Banner */}
      <BannerHero
        title="For Investors"
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
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                alt="Mother supporting child education with science equipment"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[440px] object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Investing in Preventative Emotional Infrastructure
            </h2>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
              We are building the foundational layer that supports emotional regulation, resilience, and long–term mental wellness for students.
            </p>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
              Rather than reacting to crises, W.T.F. focuses on early intervention and proactive skill–building positioning emotional wellbeing as essential infrastructure within education systems.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Market Opportunities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#fef8eb] rounded-[3rem] p-8 sm:p-14 border border-amber-100/60">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
              <StarIconTitle />
              <span>Market Opportunities</span>
              <StarIconTitle />
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-5 shadow-xs border border-neutral-100 flex flex-col">
              <div className="w-full h-40 rounded-2xl overflow-hidden mb-4 bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1541178735493-479c1a27ed24?auto=format&fit=crop&w=600&q=80"
                  alt="Student facing anxiety"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                Growing K12 mental health concerns
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Schools globally are reporting increased anxiety, emotional dysregulation, and behavioral challenges among students.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-5 shadow-xs border border-neutral-100 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2 mt-2">
                  Expanding SEL mandates
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  Governments and school boards are integrating Social–Emotional Learning into formal curriculum frameworks.
                </p>
              </div>
              <div className="w-full h-36 rounded-2xl overflow-hidden bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80"
                  alt="Business team reviewing policies"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-5 shadow-xs border border-neutral-100 flex flex-col">
              <div className="w-full h-40 rounded-2xl overflow-hidden mb-4 bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
                  alt="EdTech growth trajectory"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                EdTech growth trajectory
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                The global education technology market continues to scale rapidly, driven by digital adoption in schools.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-3xl p-5 shadow-xs border border-neutral-100 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2 mt-2">
                  Shift toward preventative wellness
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  Institutions and parents are increasingly investing in proactive mental health solutions than reactive therapy models.
                </p>
              </div>
              <div className="w-full h-36 rounded-2xl overflow-hidden bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80"
                  alt="Preventative wellness journal"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Competitive Positioning */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
            <StarIconTitle />
            <span>Competitive Positioning</span>
            <StarIconTitle />
          </h2>
          <p className="mt-4 text-neutral-600 leading-relaxed text-base sm:text-lg">
            Our early–intervention approach differentiates us from reactive counseling models and standalone content providers. With scalable deployment and institutional adaptability, W.T.F. is positioned as infrastructure not a supplementary tool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#ddf4f7] rounded-3xl p-6 shadow-xs flex flex-col text-center">
            <div className="w-full h-52 rounded-2xl overflow-hidden mb-5 bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
                alt="Education students studying on laptop"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Education</h3>
            <p className="text-sm text-neutral-700">Structured SEL–aligned curriculum</p>
          </div>

          <div className="bg-[#ddf4f7] rounded-3xl p-6 shadow-xs flex flex-col text-center">
            <div className="w-full h-52 rounded-2xl overflow-hidden mb-5 bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
                alt="Mental health therapist consultation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Mental Health</h3>
            <p className="text-sm text-neutral-700">Evidence–informed emotional frameworks</p>
          </div>

          <div className="bg-[#ddf4f7] rounded-3xl p-6 shadow-xs flex flex-col text-center">
            <div className="w-full h-52 rounded-2xl overflow-hidden mb-5 bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
                alt="Scalable digital technology"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Technology</h3>
            <p className="text-sm text-neutral-700">Scalable digital platform with outcomes</p>
          </div>
        </div>
      </section>

      {/* 5. Orange CTA Banner */}
      <OrangeCTA
        title="Partner in Building the Emotional Backbone of Education"
        subtitle="We invite aligned investors who believe in preventative systems, measurable impact, and scalable innovation."
        primaryButtonText="Schedule a Demo"
        onPrimaryClick={() => onNavigate('contact-us')}
      />
    </div>
  );
};
