import React from 'react';
import { BannerHero } from '../components/BannerHero.tsx';
import { StarIconTitle } from '../components/icons.tsx';
import { OrangeCTA } from '../components/OrangeCTA.tsx';
import { FadeIn } from '../components/FadeIn.tsx';

interface ForInvestorsPageProps {
  onNavigate: (page: string) => void;
}

export const ForInvestorsPage: React.FC<ForInvestorsPageProps> = ({ onNavigate }) => {
  return (
    <div style={{ height: '2277.35px' }} className="w-full bg-[#fbfcff] pb-16">
      {/* 1. Hero Banner */}
      <FadeIn duration={0.6}>
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
      </FadeIn>

      {/* 2. Feature Section 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div style={{ marginTop: '-40px' }} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div style={{ height: '326.6px' }} className="w-full rounded-[2.5rem] overflow-hidden shadow-lg border border-neutral-200/80 bg-neutral-100">
              <img
                src="/assets/images/Investing-in-Preventative-Emotional-Infrastructure.webp"
                alt="Mother supporting child education with science equipment"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div style={{ marginLeft: '-16px' }} className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Investing in Preventative Emotional Infrastructure
            </h2>
            <p style={{ fontSize: '17px' }} className="text-neutral-700 leading-relaxed text-base sm:text-lg">
              We are building the foundational layer that supports emotional regulation, resilience, and long–term mental wellness for students.
            </p>
            <p style={{ fontSize: '17px' }} className="text-neutral-700 leading-relaxed text-base sm:text-lg">
              Rather than reacting to crises, W.T.F. focuses on early intervention and proactive skill–building positioning emotional wellbeing as essential infrastructure within education systems.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Market Opportunities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          style={{
            marginTop: '-100px',
            width: '1604px',
            marginLeft: '-198px',
            height: '680.95px',
          }}
          className="bg-[#fef8eb] rounded-[3rem] p-8 sm:p-14 border border-amber-100/60"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
              <StarIconTitle />
              <span>Market Opportunities</span>
              <StarIconTitle />
            </h2>
          </div>

          <div
            style={{ height: '510.6px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Card 1 */}
            <div
              style={{
                width: '290px',
                marginLeft: '143px',
                marginTop: '0px',
                height: '441px',
              }}
              className="bg-white rounded-3xl p-5 shadow-xs border border-neutral-100 flex flex-col"
            >
              <div
                style={{
                  width: '265.4px',
                  marginLeft: '-9px',
                  marginTop: '-9px',
                  marginBottom: '12px',
                }}
                className="w-full h-40 rounded-2xl overflow-hidden mb-4 bg-neutral-100"
              >
                <img
                  src="/assets/images/Growing-K12-mental-health-concerns.webp"
                  alt="Student facing anxiety"
                  referrerPolicy="no-referrer"
                  style={{ width: '271.4px' }}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                style={{ marginTop: '33px' }}
                className="text-lg font-bold text-neutral-900 mb-2"
              >
                Growing K12 mental health concerns
              </h3>
              <p
                style={{ fontSize: '17px', marginTop: '4px' }}
                className="text-sm text-neutral-600 leading-relaxed"
              >
                Schools globally are reporting increased anxiety, emotional dysregulation, and behavioral challenges among students.
              </p>
            </div>

            {/* Card 2 */}
            <div
              style={{
                width: '290px',
                marginLeft: '73px',
                marginTop: '74px',
                height: '412px',
                marginBottom: '0px',
              }}
              className="bg-white rounded-3xl p-5 shadow-xs border border-neutral-100 flex flex-col justify-between"
            >
              <div
                style={{
                  width: '254.4px',
                  height: '204.5px',
                }}
              >
                <h3
                  style={{ marginTop: '25px', height: '28px' }}
                  className="text-lg font-bold text-neutral-900 mb-2 mt-2"
                >
                  Expanding SEL mandates
                </h3>
                <p
                  style={{ fontSize: '17px' }}
                  className="text-sm text-neutral-600 leading-relaxed mb-4"
                >
                  Governments and school boards are integrating Social–Emotional Learning into formal curriculum frameworks.
                </p>
              </div>
              <div
                style={{
                  marginTop: '0px',
                  marginLeft: '-8px',
                  width: '264.4px',
                  height: '155px',
                  marginBottom: '-8px',
                }}
                className="w-full h-36 rounded-2xl overflow-hidden bg-neutral-100"
              >
                <img
                  src="/assets/images/Expanding-SEL-mandates.webp"
                  alt="Business team reviewing policies"
                  referrerPolicy="no-referrer"
                  style={{ width: '268.4px' }}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div
              style={{
                width: '290px',
                marginLeft: '3px',
                height: '441px',
              }}
              className="bg-white rounded-3xl p-5 shadow-xs border border-neutral-100 flex flex-col"
            >
              <div
                style={{
                  marginBottom: '10px',
                  marginLeft: '-7px',
                  width: '262.4px',
                  marginTop: '-8px',
                  height: '158px',
                }}
                className="w-full h-40 rounded-2xl overflow-hidden mb-4 bg-neutral-100"
              >
                <img
                  src="/assets/images/EdTech-growth-trajectory.webp"
                  alt="EdTech growth trajectory"
                  referrerPolicy="no-referrer"
                  style={{ width: '263.4px' }}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 style={{ marginTop: '51px' }} className="text-lg font-bold text-neutral-900 mb-2">
                EdTech growth trajectory
              </h3>
              <p
                style={{ fontSize: '17px' }}
                className="text-sm text-neutral-600 leading-relaxed"
              >
                The global education technology market continues to scale rapidly, driven by digital adoption in schools.
              </p>
            </div>

            {/* Card 4 */}
            <div
              style={{
                width: '290px',
                marginLeft: '-68px',
                height: '412px',
                marginTop: '74px',
              }}
              className="bg-white rounded-3xl p-5 shadow-xs border border-neutral-100 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2 mt-2">
                  Shift toward preventative wellness
                </h3>
                <p
                  style={{ fontSize: '17px' }}
                  className="text-sm text-neutral-600 leading-relaxed mb-4"
                >
                  Institutions and parents are increasingly investing in proactive mental health solutions than reactive therapy models.
                </p>
              </div>
              <div
                style={{
                  width: '267.4px',
                  marginLeft: '-9px',
                  height: '150px',
                  marginTop: '0px',
                  marginBottom: '-10px',
                }}
                className="w-full h-36 rounded-2xl overflow-hidden bg-neutral-100"
              >
                <img
                  src="/assets/images/Shift-toward-preventative-wellness.webp"
                  alt="Preventative wellness journal"
                  referrerPolicy="no-referrer"
                  style={{ width: '268.4px' }}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Competitive Positioning */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div style={{ marginTop: '-62px' }} className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
            <StarIconTitle />
            <span>Competitive Positioning</span>
            <StarIconTitle />
          </h2>
          <p style={{ fontSize: '16px', width: '946px' }} className="mt-4 text-neutral-600 leading-relaxed text-base sm:text-lg">
            Our early–intervention approach differentiates us from reactive counseling models and standalone content providers. With scalable deployment and institutional adaptability, W.T.F. is positioned as infrastructure not a supplementary tool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div style={{ height: '360px', width: '395px', marginLeft: '2px' }} className="bg-[#ddf4f7] rounded-3xl p-6 shadow-xs flex flex-col text-center">
            <div style={{ marginLeft: '-10px', marginTop: '-10px', width: '368px' }} className="w-full h-52 rounded-2xl overflow-hidden mb-5 bg-neutral-100">
              <img
                src="/assets/images/Education.webp"
                alt="Education students studying on laptop"
                referrerPolicy="no-referrer"
                style={{ width: '324px' }}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 style={{ marginTop: '25px' }} className="text-xl font-bold text-neutral-900 mb-2">Education</h3>
            <p style={{ fontSize: '17px' }} className="text-sm text-neutral-700">Structured SEL–aligned curriculum</p>
          </div>

          <div style={{ width: '395px', marginLeft: '-4px' }} className="bg-[#ddf4f7] rounded-3xl p-6 shadow-xs flex flex-col text-center">
            <div style={{ marginLeft: '-10px', marginTop: '-10px', width: '368px' }} className="w-full h-52 rounded-2xl overflow-hidden mb-5 bg-neutral-100">
              <img
                src="/assets/images/Mental-Health.webp"
                alt="Mental health therapist consultation"
                referrerPolicy="no-referrer"
                style={{ width: '320px' }}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 style={{ marginTop: '25px' }} className="text-xl font-bold text-neutral-900 mb-2">Mental Health</h3>
            <p style={{ fontSize: '17px' }} className="text-sm text-neutral-700">Evidence–informed emotional frameworks</p>
          </div>

          <div style={{ width: '395px', marginLeft: '-11px' }} className="bg-[#ddf4f7] rounded-3xl p-6 shadow-xs flex flex-col text-center">
            <div style={{ width: '368px', marginLeft: '-10px', marginTop: '-10px' }} className="w-full h-52 rounded-2xl overflow-hidden mb-5 bg-neutral-100">
              <img
                src="/assets/images/Technology.webp"
                alt="Scalable digital technology"
                referrerPolicy="no-referrer"
                style={{ width: '318px' }}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 style={{ marginTop: '25px' }} className="text-xl font-bold text-neutral-900 mb-2">Technology</h3>
            <p style={{ fontSize: '17px' }} className="text-sm text-neutral-700">Scalable digital platform with outcomes</p>
          </div>
        </div>
      </section>

      {/* 5. Orange CTA Banner */}
      <OrangeCTA
        title="Partner in Building the Emotional Backbone of Education"
        subtitle="We invite aligned investors who believe in preventative systems, measurable impact, and scalable innovation."
        primaryButtonText="Schedule a Demo"
        onPrimaryClick={() => onNavigate('contact-us')}
        containerStyle={{ marginTop: '-65px' }}
        imageSrc="/assets/aistudio/Banner-BG_fb7937b7.webp"
      />
    </div>
  );
};
