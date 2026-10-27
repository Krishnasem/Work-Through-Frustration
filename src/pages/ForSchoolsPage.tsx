import React from 'react';
import { BannerHero } from '../components/BannerHero.tsx';
import { StarIconTitle } from '../components/icons.tsx';
import { OrangeCTA } from '../components/OrangeCTA.tsx';
import { FadeIn } from '../components/FadeIn.tsx';

interface ForSchoolsPageProps {
  onNavigate: (page: string) => void;
}

export const ForSchoolsPage: React.FC<ForSchoolsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#fbfcff] pb-16">
      {/* 1. Hero Banner */}
      <FadeIn duration={0.6}>
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
      </FadeIn>

      {/* 2. Feature Section 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div style={{ marginTop: '-27px' }} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div style={{ height: '385.6px' }} className="w-full rounded-[2.5rem] overflow-hidden shadow-lg border border-neutral-200/80 bg-neutral-100">
              <img
                src="/assets/images/Support-Emotional-Regulation-Across-Your-School-System.webp"
                alt="Father and son having fun together"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div style={{ marginTop: '-90px', marginLeft: '-17px' }} className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Support Emotional Regulation Across Your School System
            </h2>
            <p style={{ fontSize: '17px' }} className="text-neutral-700 leading-relaxed text-base sm:text-lg">
              Create a consistent, evidence–informed emotional regulation framework that supports students, teachers, and leadership teams. Our structured approach integrates seamlessly into existing school systems, helping you build a healthier, more resilient learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Feature Section 2 with 3 challenges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-26">
        <div style={{ marginTop: '-48px' }} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div style={{ marginTop: '50px' }} className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Growing Emotional & Behavioral <br className="hidden sm:inline" />Demands in Schools
            </h2>
            <p style={{ fontSize: '17px' }} className="text-neutral-700 leading-relaxed text-base sm:text-lg">
              Disruptions, emotional dysregulation, and reduced student focus impact both classroom climate and academic performance. W.T.F. provides a preventative framework designed to proactively build emotional skills, reduce reactive interventions, and create a stable, supportive learning culture.
            </p>

            <div className="grid grid-cols-3 gap-3 sm:gap-5 pt-3">
              <div
                style={{
                  marginTop: '-18px',
                  height: '153px',
                  marginBottom: '-5px',
                }}
                className="bg-[#e0faff] rounded-2xl sm:rounded-[22px] p-4 sm:py-6 sm:px-4 text-center flex flex-col items-center justify-center min-h-[160px] sm:min-h-[175px]"
              >
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center mb-3 sm:mb-3.5 shadow-xs">
                  <img
                    src="/assets/icons/teacher_badge_clean.png"
                    alt="Teachers"
                    className="w-9 h-9 object-contain"
                  />
                </div>
                <span className="text-sm sm:text-base font-semibold text-neutral-900 tracking-tight">Teachers</span>
              </div>

              <div
                style={{ marginTop: '-18px', height: '177px' }}
                className="bg-[#e0faff] rounded-2xl sm:rounded-[22px] p-4 sm:py-6 sm:px-4 text-center flex flex-col items-center justify-center min-h-[160px] sm:min-h-[175px]"
              >
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center mb-3 sm:mb-3.5 shadow-xs">
                  <img
                    src="/assets/icons/admin_badge_clean.png"
                    alt="Administrators"
                    className="w-9 h-9 object-contain"
                  />
                </div>
                <span className="text-sm sm:text-base font-semibold text-neutral-900 tracking-tight">Administrators</span>
              </div>

              <div
                style={{ marginTop: '-18px' }}
                className="bg-[#e0faff] rounded-2xl sm:rounded-[22px] p-4 sm:py-6 sm:px-4 text-center flex flex-col items-center justify-center min-h-[160px] sm:min-h-[175px]"
              >
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center mb-3 sm:mb-3.5 shadow-xs">
                  <img
                    src="/assets/icons/staff_badge_clean.png"
                    alt="Support staff"
                    className="w-9 h-9 object-contain"
                  />
                </div>
                <span className="text-sm sm:text-base font-semibold text-neutral-900 tracking-tight">Support staff</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="w-full rounded-[2.5rem] overflow-hidden shadow-lg border border-neutral-200/80 bg-neutral-100">
              <img
                src="/assets/images/for_schools_counselor_cards.png"
                alt="Parent teaching emotion regulation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Outcomes for Schools */}
      <section style={{ marginTop: '-67px' }} className="w-full bg-[#fff7ea] py-16 sm:py-20">
        <div style={{ height: '300.438px', marginTop: '-47px' }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 style={{ marginTop: '-28px' }} className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2.5 tracking-tight">
              <StarIconTitle className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffae58] inline-block" />
              <span style={{ fontWeight: 'bold' }}>Outcomes for Schools</span>
              <StarIconTitle className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffae58] inline-block" />
            </h2>
          </div>

          <div style={{ marginTop: '-25px' }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* Card 1 */}
            <div
              style={{ width: '397px', height: '108px' }}
              className="bg-white rounded-full p-3 pl-4 pr-6 flex items-center gap-4 shadow-xs border border-[#eedbbd]"
            >
              <div className="w-[72px] h-[72px] shrink-0 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/icons/r1_c1_circle.png"
                  alt="Reduced classroom disruption"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-neutral-900 font-semibold text-base sm:text-[17px] leading-snug">
                Reduced classroom disruption
              </span>
            </div>

            {/* Card 2 */}
            <div
              style={{ height: '108px' }}
              className="bg-white rounded-full p-3 pl-4 pr-6 flex items-center gap-4 shadow-xs border border-[#eedbbd]"
            >
              <div className="w-[72px] h-[72px] shrink-0 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/icons/r1_c2_circle.png"
                  alt="Stronger emotional literacy among students"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-neutral-900 font-semibold text-base sm:text-[17px] leading-snug">
                Stronger emotional literacy among students
              </span>
            </div>

            {/* Card 3 */}
            <div
              style={{ height: '108px' }}
              className="bg-white rounded-full p-3 pl-4 pr-6 flex items-center gap-4 shadow-xs border border-[#eedbbd]"
            >
              <div className="w-[72px] h-[72px] shrink-0 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/icons/r1_c3_circle.png"
                  alt="Consistent emotional language across staff"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-neutral-900 font-semibold text-base sm:text-[17px] leading-snug">
                Consistent emotional language across staff
              </span>
            </div>

            {/* Card 4 */}
            <div
              style={{ width: '397px', height: '108px' }}
              className="bg-white rounded-full p-3 pl-4 pr-6 flex items-center gap-4 shadow-xs border border-[#eedbbd]"
            >
              <div className="w-[72px] h-[72px] shrink-0 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/icons/r2_c1_circle.png"
                  alt="Improved academic engagement"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-neutral-900 font-semibold text-base sm:text-[17px] leading-snug">
                Improved academic engagement
              </span>
            </div>

            {/* Card 5 */}
            <div
              style={{ height: '108px' }}
              className="bg-white rounded-full p-3 pl-4 pr-6 flex items-center gap-4 shadow-xs border border-[#eedbbd]"
            >
              <div className="w-[72px] h-[72px] shrink-0 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/icons/r2_c2_circle.png"
                  alt="Scalable district–wide deployment"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-neutral-900 font-semibold text-base sm:text-[17px] leading-snug">
                Scalable district–wide deployment
              </span>
            </div>

            {/* Card 6 */}
            <div
              style={{ height: '108px' }}
              className="bg-white rounded-full p-3 pl-4 pr-6 flex items-center gap-4 shadow-xs border border-[#eedbbd]"
            >
              <div className="w-[72px] h-[72px] shrink-0 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/icons/r2_c3_circle.png"
                  alt="Emotional regulation skills"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-neutral-900 font-semibold text-base sm:text-[17px] leading-snug">
                Emotional regulation skills
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Flexible Implementation Models */}
      <section style={{ marginTop: '0px' }} className="w-full bg-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1a202c] flex items-center justify-center flex-wrap gap-2.5 tracking-tight">
                <StarIconTitle className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffae58] inline-block" />
                <span>Flexible Implementation Models</span>
                <StarIconTitle className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffae58] inline-block" />
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
            {/* Model Card 1 */}
            <FadeIn delay={0.1} direction="up">
              <div className="flex flex-col hover:-translate-y-1 transition-all duration-300">
                <div className="w-full rounded-[24px] sm:rounded-[28px] overflow-hidden bg-neutral-100">
                  <img
                    src="/assets/images/model_school_license.png"
                    alt="School–Level License"
                    className="w-full h-[240px] sm:h-[268px] object-cover block"
                  />
                </div>
                <div
                  style={{ marginTop: '-47px' }}
                  className="relative bg-[#e0faff] rounded-[24px] sm:rounded-[28px] p-5 sm:py-6 sm:px-6 text-center flex flex-col items-center justify-center min-h-[120px] sm:min-h-[128px]"
                >
                  <h3 className="text-lg sm:text-[20px] font-semibold text-[#1e293b] mb-1.5 tracking-tight">
                    School–Level License
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#475569] leading-snug font-normal">
                    Full access for one institution
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Model Card 2 */}
            <FadeIn delay={0.2} direction="up">
              <div className="flex flex-col hover:-translate-y-1 transition-all duration-300">
                <div className="w-full rounded-[24px] sm:rounded-[28px] overflow-hidden bg-neutral-100">
                  <img
                    src="/assets/images/model_district_wide.png"
                    alt="District–Wide Implementation"
                    className="w-full h-[240px] sm:h-[268px] object-cover block"
                  />
                </div>
                <div
                  style={{ marginTop: '-47px' }}
                  className="relative bg-[#e0faff] rounded-[24px] sm:rounded-[28px] p-5 sm:py-6 sm:px-6 text-center flex flex-col items-center justify-center min-h-[120px] sm:min-h-[128px]"
                >
                  <h3 className="text-lg sm:text-[20px] font-semibold text-[#1e293b] mb-1.5 tracking-tight">
                    District–Wide Implementation
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#475569] leading-snug font-normal">
                    Multi–school deployment with centralized oversight
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Model Card 3 */}
            <FadeIn delay={0.3} direction="up">
              <div className="flex flex-col hover:-translate-y-1 transition-all duration-300">
                <div className="w-full rounded-[24px] sm:rounded-[28px] overflow-hidden bg-neutral-100">
                  <img
                    src="/assets/images/model_hybrid_bundle.png"
                    alt="Hybrid Digital + Curriculum Bundle"
                    className="w-full h-[240px] sm:h-[268px] object-cover block"
                  />
                </div>
                <div
                  style={{ marginTop: '-47px' }}
                  className="relative bg-[#e0faff] rounded-[24px] sm:rounded-[28px] p-5 sm:py-6 sm:px-6 text-center flex flex-col items-center justify-center min-h-[120px] sm:min-h-[128px]"
                >
                  <h3 className="text-lg sm:text-[20px] font-semibold text-[#1e293b] mb-1.5 tracking-tight">
                    Hybrid Digital + Curriculum Bundle
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#475569] leading-snug font-normal">
                    Integrated digital tools with structured classroom curriculum
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. Orange CTA Banner */}
      <FadeIn direction="up" delay={0.15}>
        <OrangeCTA
          title="Transform Your School’s Emotional Ecosystem"
          subtitle="Partner with us to implement a structured emotional regulation solution that supports your entire school community."
          primaryButtonText="Schedule a Demo"
          onPrimaryClick={() => onNavigate('contact-us')}
          containerStyle={{ marginTop: '-26px' }}
          imageSrc="/assets/aistudio/Banner-BG_fb7937b7.webp"
        />
      </FadeIn>
    </div>
  );
};
