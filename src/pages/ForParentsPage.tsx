import React from 'react';
import { BannerHero } from '../components/BannerHero.tsx';
import { StarIconTitle } from '../components/icons.tsx';
import { OrangeCTA } from '../components/OrangeCTA.tsx';
import { FadeIn } from '../components/FadeIn.tsx';

interface ForParentsPageProps {
  onNavigate: (page: string) => void;
}

export const ForParentsPage: React.FC<ForParentsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#fbfcff] pb-16">
      {/* 1. Hero Banner */}
      <FadeIn duration={0.6}>
        <BannerHero
          title="For Parents"
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
                src="/assets/images/Mask-group-1.webp"
                alt="Father and son having fun together"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div style={{ marginTop: '-90px', marginLeft: '-17px' }} className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Help Your Child Navigate Big Emotions with Confidence
            </h2>
            <p style={{ fontSize: '17px' }} className="text-neutral-700 leading-relaxed text-base sm:text-lg">
              Every child faces moments of frustration, disappointment, anger, or self–doubt. Without the right tools, these emotions can lead to meltdowns, withdrawal, or avoidance. Our emotional regulation platform helps children understand what they feel, why they feel it, and how to respond in healthy, constructive ways — all within a supportive home environment.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Feature Section 2 with 4 challenges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div style={{ marginTop: '-48px' }} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div style={{ marginTop: '50px' }} className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Investing in Preventative Emotional Infrastructure
            </h2>
            <p style={{ fontSize: '17px' }} className="text-neutral-700 leading-relaxed text-base sm:text-lg">
              Emotional reactions don’t just affect behavior they shape confidence, relationships, and academic performance. When children lack the vocabulary and tools to manage emotions, small problems can feel overwhelming. Teaching emotional skills early builds resilience, independence, and stronger family communication.
            </p>

            <div style={{ marginTop: '-30px' }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div style={{ marginTop: '0px' }} className="bg-[#ddf4f7] rounded-2xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white text-[#145d9e] flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <span className="text-sm font-bold text-neutral-800">Avoid difficult tasks or challenges</span>
              </div>

              <div className="bg-[#ddf4f7] rounded-2xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white text-[#145d9e] flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <span className="text-sm font-bold text-neutral-800">Shut down or withdraw socially</span>
              </div>

              <div className="bg-[#ddf4f7] rounded-2xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white text-[#145d9e] flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
                <span className="text-sm font-bold text-neutral-800">React aggressively when upset</span>
              </div>

              <div className="bg-[#ddf4f7] rounded-2xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white text-[#145d9e] flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <span className="text-sm font-bold text-neutral-800">Lose focus and struggle academically</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div style={{ marginTop: '-20px', height: '407.6px', width: '610px' }} className="w-full rounded-[2.5rem] overflow-hidden shadow-lg border border-neutral-200/80 bg-neutral-100">
              <img
                src="/assets/images/Why-Emotiona.webp"
                alt="Parent teaching emotion regulation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. How the app supports families (4 Hexagons) */}
      <section className="w-full bg-[#e4fbff] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2.5 tracking-tight">
                <StarIconTitle className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffae58] inline-block" />
                <span>How the app supports families</span>
                <StarIconTitle className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffae58] inline-block" />
              </h2>
            </div>
          </FadeIn>

          {/* Desktop & Tablet: Full interlocking honeycomb cards matching exact design */}
          <FadeIn delay={0.15} direction="up">
            <div className="hidden md:block w-full max-w-[1240px] mx-auto">
              <img
                src="/assets/images/family_support_hexagons.png"
                alt="How the app supports families: Guided emotional learning lessons, Interactive self-regulation exercises, Structured conversation prompts, Reinforcement activities"
                className="w-full h-auto object-contain mx-auto select-none"
              />
            </div>

            {/* Mobile: Responsive hexagon cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:hidden max-w-xl mx-auto">
              <img
                src="/assets/images/family_support_card_1.png"
                alt="Guided, age-appropriate emotional learning lessons"
                className="w-full h-auto object-contain mx-auto"
              />
              <img
                src="/assets/images/family_support_card_2.png"
                alt="Interactive exercises that build self-regulation skills"
                className="w-full h-auto object-contain mx-auto"
              />
              <img
                src="/assets/images/family_support_card_3.png"
                alt="Structured conversation prompts for deeper connection"
                className="w-full h-auto object-contain mx-auto"
              />
              <img
                src="/assets/images/family_support_card_4.png"
                alt="Reinforcement activities for daily real-life practice"
                className="w-full h-auto object-contain mx-auto"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. Real Life impact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          style={{ marginTop: '-27px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Real Life impact
            </h2>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
              Emotional intelligence is one of the most important life skills a child can develop. By practicing consistently at home, children strengthen the foundation that supports success in school, friendships, and future professional environments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2">
                <StarIconTitle className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-neutral-800 font-semibold text-base">Stronger self–confidence</span>
              </div>
              <div className="flex items-center gap-2">
                <StarIconTitle className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-neutral-800 font-semibold text-base">Healthier peer relationships</span>
              </div>
              <div className="flex items-center gap-2">
                <StarIconTitle className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-neutral-800 font-semibold text-base">Improved stress management</span>
              </div>
              <div className="flex items-center gap-2">
                <StarIconTitle className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-neutral-800 font-semibold text-base">Greater academic persistence</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div
              style={{ height: '325.6px', marginTop: '0px' }}
              className="w-full rounded-[2.5rem] overflow-hidden shadow-lg border border-neutral-200/80 bg-neutral-100"
            >
              <img
                src="/assets/images/REAL-LIFE-IMPACT.webp"
                alt="Two people working collaboratively"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Emotional Skills Matter More Than Ever */}
      <section style={{ width: '1311px' }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <FadeIn direction="up">
          {/* Desktop & Tablet: Exact visual banner from design attachment */}
          <div
            style={{ width: '1590px', marginLeft: '-196px', marginTop: '-86px' }}
            className="hidden sm:block relative w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-neutral-200/60 bg-neutral-100"
          >
            <img
              src="/assets/images/why_emotional_skills_banner.png"
              alt="Why Emotional Skills Matter More Than Ever - When children feel understood and supported, homes become more peaceful. Fewer emotional outbursts. More productive conversations. Greater mutual respect. Empower your child with the tools they need and gain the confidence you need as a parent."
              className="w-full h-auto object-cover select-none block rounded-[2.5rem]"
            />
          </div>

          {/* Mobile: Stacked responsive card for optimal readability */}
          <div className="sm:hidden w-full rounded-[2rem] overflow-hidden shadow-xl border border-neutral-200/60 bg-[#185fa7] text-white">
            <div className="w-full h-56 overflow-hidden bg-neutral-100">
              <img
                src="/assets/images/why_emotional_skills_mobile_person.png"
                alt="Parent holding green smiley face"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6 space-y-3">
              <h2 className="text-2xl font-bold tracking-tight leading-tight">
                Why Emotional Skills Matter More Than Ever
              </h2>
              <p className="text-white/90 text-sm leading-relaxed">
                When children feel understood and supported, homes become more peaceful. Fewer emotional outbursts. More productive conversations. Greater mutual respect. Empower your child with the tools they need and gain the confidence you need as a parent.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 7. Orange CTA Banner */}
      <OrangeCTA
        title="Start Building Emotional Strength Today"
        subtitle="Give your child the skills that last a lifetime."
        primaryButtonText="Start at Home"
        onPrimaryClick={() => onNavigate('pricing')}
        containerStyle={{ marginTop: '-50px' }}
        imageSrc="/assets/aistudio/Banner-BG_fb7937b7.webp"
      />
    </div>
  );
};
