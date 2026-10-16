import React from 'react';
import { BannerHero } from '../components/BannerHero.tsx';
import { StarIconTitle } from '../components/icons.tsx';
import { OrangeCTA } from '../components/OrangeCTA.tsx';

interface ForParentsPageProps {
  onNavigate: (page: string) => void;
}

export const ForParentsPage: React.FC<ForParentsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#fbfcff] pb-16">
      {/* 1. Hero Banner */}
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

      {/* 2. Feature Section 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="w-full rounded-[2.5rem] overflow-hidden shadow-lg border border-neutral-200/80 bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                alt="Father and son having fun together"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[440px] object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Help Your Child Navigate Big Emotions with Confidence
            </h2>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
              Every child faces moments of frustration, disappointment, anger, or self–doubt. Without the right tools, these emotions can lead to meltdowns, withdrawal, or avoidance. Our emotional regulation platform helps children understand what they feel, why they feel it, and how to respond in healthy, constructive ways — all within a supportive home environment.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Feature Section 2 with 4 challenges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Investing in Preventative Emotional Infrastructure
            </h2>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
              Emotional reactions don’t just affect behavior they shape confidence, relationships, and academic performance. When children lack the vocabulary and tools to manage emotions, small problems can feel overwhelming. Teaching emotional skills early builds resilience, independence, and stronger family communication.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-[#ddf4f7] rounded-2xl p-4 flex items-center gap-3">
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
            <div className="w-full rounded-[2.5rem] overflow-hidden shadow-lg border border-neutral-200/80 bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Parent teaching emotion regulation"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[440px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. How the app supports families (4 Hexagons) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#e4f8fb] rounded-[3rem] p-8 sm:p-14 border border-cyan-100/70">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
              <StarIconTitle />
              <span>How the app supports families</span>
              <StarIconTitle />
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-8 border-2 border-blue-600/70 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#dcf3f8] text-[#145d9e] flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <p className="text-sm font-bold text-neutral-800 leading-snug">
                Guided, age–appropriate emotional learning lessons
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border-2 border-blue-600/70 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#dcf3f8] text-[#145d9e] flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>
              </div>
              <p className="text-sm font-bold text-neutral-800 leading-snug">
                Interactive exercises that build self–regulation skills
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border-2 border-blue-600/70 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#dcf3f8] text-[#145d9e] flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </div>
              <p className="text-sm font-bold text-neutral-800 leading-snug">
                Structured conversation prompts for deeper connection
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border-2 border-blue-600/70 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#dcf3f8] text-[#145d9e] flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2m-7 0H4a2 2 0 00-2 2v6a2 2 0 002 2h3" /></svg>
              </div>
              <p className="text-sm font-bold text-neutral-800 leading-snug">
                Reinforcement activities for daily real–life practice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Real Life impact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
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
            <div className="w-full rounded-[2.5rem] overflow-hidden shadow-lg border border-neutral-200/80 bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Two people working collaboratively"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[440px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Emotional Skills Matter More Than Ever */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative rounded-[3rem] overflow-hidden bg-[#14589d] text-white p-8 sm:p-14 shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Why Emotional Skills Matter More Than Ever
            </h2>
            <p className="text-white/90 leading-relaxed text-base sm:text-lg">
              When children feel understood and supported, homes become more peaceful. Fewer emotional outbursts. More productive conversations. Greater mutual respect. Empower your child with the tools they need and gain the confidence you need as a parent.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Orange CTA Banner */}
      <OrangeCTA
        title="Start Building Emotional Strength Today"
        subtitle="Give your child the skills that last a lifetime."
        primaryButtonText="Start at Home"
        onPrimaryClick={() => onNavigate('pricing')}
      />
    </div>
  );
};
