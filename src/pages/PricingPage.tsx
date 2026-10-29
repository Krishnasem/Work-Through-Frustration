import React from 'react';
import { BannerHero } from '../components/BannerHero.tsx';
import { StarIconTitle } from '../components/icons.tsx';
import { OrangeCTA } from '../components/OrangeCTA.tsx';
import { FadeIn } from '../components/FadeIn.tsx';
import { InsurancePartners } from '../components/InsurancePartners2.tsx';

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#fbfcff] pb-16">
      {/* 1. Hero Banner */}
      <FadeIn duration={0.6}>
        <BannerHero
          title="Program Pricing & Enrollment Options"
          subtitle="Access the complete 16–week Frustration Management program designed to build emotional resilience, focus, and self–regulation."
          imageSrc="assets/images/Pricing banner.png"
          cardStyle={{
            width: '1492.2px',
            marginLeft: '-135px',
            height: '398.5px',
            marginTop: '-19px',
            backgroundColor: '#D5FBFD',
          }}
          titleStyle={{
            color: '#145d9e',
            borderStyle: 'none',
            fontSize: '47px',
            width: '631px',
            fontWeight: 'bold',
            lineHeight: '60px',
            borderRadius: '-33px',
          }}
          subtitleStyle={{
            fontSize: '16px',
            width: '649px',
          }}
          actionButton={{
            label: "Enroll Now",
            onClick: () => onNavigate('contact-us'),
          }}
        />
      </FadeIn>

      {/* 2. Simple, Transparent Pricing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
              <StarIconTitle />
              <span>Simple, Transparent Pricing</span>
              <StarIconTitle />
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Plan 1: Basic */}
          <FadeIn delay={0.1} direction="up" className="flex">
            <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-md flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full">
              <div>
                <div className="w-16 h-16 rounded-full bg-[#e4f8fb] text-[#145d9e] flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 text-center mb-2">
                  Basic Subscription
                </h3>
                <p className="text-neutral-600 text-center text-sm mb-6 leading-relaxed">
                  Access to all 16 weeks of core modules, exercises, and progress tracking tools.
                </p>

                <div className="border-t border-neutral-100 pt-6">
                  <span className="text-sm font-bold text-neutral-900 mb-4 block">Features</span>
                  <ul className="space-y-3.5 text-sm text-neutral-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#145d9e] font-bold">✓</span>
                      <span>Full access to SEL core curriculum</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#145d9e] font-bold">✓</span>
                      <span>Weekly frustration management lessons</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#145d9e] font-bold">✓</span>
                      <span>Interactive exercises</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#145d9e] font-bold">✓</span>
                      <span>Progress tracking dashboard</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onNavigate('contact-us')}
                  className="w-full py-3 rounded-full font-semibold text-white bg-[#ea580c] hover:bg-[#d84803] transition-colors shadow-sm cursor-pointer hover:-translate-y-0.5"
                >
                  Start Basic Plan
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Plan 2: Premium */}
          <FadeIn delay={0.2} direction="up" className="flex">
            <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-md flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full">
              <div>
                <div className="w-16 h-16 rounded-full bg-[#e4f8fb] text-[#145d9e] flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 text-center mb-2">
                  Premium Subscription
                </h3>
                <p className="text-neutral-600 text-center text-sm mb-6 leading-relaxed">
                  Includes everything in Basic, plus deeper learning tools.
                </p>

                <div className="border-t border-neutral-100 pt-6">
                  <span className="text-sm font-bold text-neutral-900 mb-4 block">Features</span>
                  <ul className="space-y-3.5 text-sm text-neutral-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#145d9e] font-bold">✓</span>
                      <span>All Basic features</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#145d9e] font-bold">✓</span>
                      <span>Guided audio lessons</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#145d9e] font-bold">✓</span>
                      <span>Downloadable worksheets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#145d9e] font-bold">✓</span>
                      <span>Optional live group check–ins</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#145d9e] font-bold">✓</span>
                      <span>Deeper emotional skill development.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onNavigate('contact-us')}
                  className="w-full py-3 rounded-full font-semibold text-white bg-[#ea580c] hover:bg-[#d84803] transition-colors shadow-sm cursor-pointer hover:-translate-y-0.5"
                >
                  Start Premium Plan
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Plan 3: Full Program Access */}
          <FadeIn delay={0.3} direction="up" className="flex">
            <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-md flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full">
              <div>
                <div className="w-16 h-16 rounded-full bg-[#e4f8fb] text-[#145d9e] flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 text-center mb-2">
                  Full Program Access
                </h3>
                <p className="text-neutral-600 text-center text-sm mb-6 leading-relaxed">
                  Get lifetime access to the complete 16–week course with a single payment.
                </p>

                <div className="border-t border-neutral-100 pt-6">
                  <span className="text-sm font-bold text-neutral-900 mb-4 block">Features</span>
                  <ul className="space-y-3.5 text-sm text-neutral-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#145d9e] font-bold">✓</span>
                      <span>Full course access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#145d9e] font-bold">✓</span>
                      <span>All learning materials included</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#145d9e] font-bold">✓</span>
                      <span>No recurring payments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#145d9e] font-bold">✓</span>
                      <span>Lifetime access</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onNavigate('contact-us')}
                  className="w-full py-3 rounded-full font-semibold text-white bg-[#ea580c] hover:bg-[#d84803] transition-colors shadow-sm cursor-pointer hover:-translate-y-0.5"
                >
                  Get Full Access
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. Insurance Coverage Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn direction="up">
          <div className="bg-[#e4f8fb] rounded-[3rem] p-8 sm:p-14 border border-cyan-100/70">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
                Reduce Your Program Cost with Insurance
              </h2>
              <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
                Enroll in our Frustration Management Course with confidence. By using approved insurance providers, you may significantly reduce the cost of enrollment. This makes it easier to invest in the emotional skills needed for personal and professional success.
              </p>
            </div>

            <div className="bg-cyan-100/70">
              <InsurancePartners />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 4. Orange CTA Banner */}
      <FadeIn direction="up" delay={0.15}>
        <OrangeCTA
          title="Start Building Emotional Strength Today"
          subtitle="Join thousands of learners developing skills for focus, discipline, and emotional regulation."
          primaryButtonText="Talk to Expert"
          onPrimaryClick={() => onNavigate('contact-us')}
          imageSrc="/assets/aistudio/Banner-BG_fb7937b7.webp"
        />
      </FadeIn>
    </div>
  );
};
