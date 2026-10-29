import React from 'react';
import { StarIconTitle } from '../components/icons.tsx';
import { InsurancePartners } from '../components/InsurancePartners.tsx';
import { OrangeCTA } from '../components/OrangeCTA.tsx';
import { FadeIn } from '../components/FadeIn.tsx';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* 1. Hero Section - Full width light cyan upward design exactly as in image.png */}
      <section style={{ height: '500.05px', backgroundColor: '#D5FBFD' }} className="w-full bg-[#D5FBFD] relative pt-6 sm:pt-10 pb-0">

        {/* Left Watermark: Pale green 4-petal flower shape */}
        <div className="absolute left-4 sm:left-12 lg:left-16 top-[180px] sm:top-[220px] pointer-events-none select-none z-0">
          <svg className="w-28 h-28 sm:w-44 sm:h-44 text-[#b7e5c5] opacity-70" viewBox="0 0 100 100" fill="currentColor">
            {/* 4 overlapping rounded lobes forming a clover flower */}
            <circle cx="50" cy="28" r="23" />
            <circle cx="50" cy="72" r="23" />
            <circle cx="28" cy="50" r="23" />
            <circle cx="72" cy="50" r="23" />
            <circle cx="50" cy="50" r="21" />
          </svg>
        </div>

        {/* Right Watermark: Pale blue 4-armed rounded cross shape */}
        <div className="absolute right-4 sm:right-12 lg:right-16 top-[60px] sm:top-[80px] pointer-events-none select-none z-0">
          <svg className="w-28 h-28 sm:w-44 sm:h-44 text-[#bee7f6] opacity-75" viewBox="0 0 100 100" fill="currentColor">
            {/* Vertical rounded pill */}
            <rect x="36" y="5" width="28" height="90" rx="14" />
            {/* Horizontal rounded pill */}
            <rect x="5" y="36" width="90" height="28" rx="14" />
          </svg>
        </div>

        {/* Hero Content */}
        <div style={{ height: '634.05px' }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Main Title */}
          <FadeIn delay={0.05} duration={0.65}>
            <h1 style={{ height: '152.3px', width: '1029px', fontSize: '56px', fontWeight: 600, color: 'rgb(25, 94, 170)' }} className="tracking-tight leading-normal max-w-5xl mx-auto">
              Frustration Management That Builds<br className="hidden sm:inline" /> Focus, Discipline, and Resilience
            </h1>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={0.15} duration={0.6}>
            <p className="mt-5 text-base sm:text-lg lg:text-[15px] text-neutral-800 font-bold max-w-3xl mx-auto leading-relaxed">
              A scalable mental wellness and SEL platform integrating evidence–based psychotherapy into K–12 education.
            </p>
          </FadeIn>

          {/* Dual Action Buttons */}
          <FadeIn delay={0.25} duration={0.55}>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('our-solution')}
                className="px-7 sm:px-8 py-3 rounded-full text-[15px] sm:text-base font-semibold text-white bg-[#e75a13] hover:bg-[#d24e0b] shadow-sm hover:shadow transition-all cursor-pointer hover:-translate-y-0.5"
              >
                Explore Our Solution
              </button>
              <button
                onClick={() => onNavigate('contact-us')}
                className="px-7 sm:px-8 py-3 rounded-full text-[15px] sm:text-base font-semibold text-white bg-[#e75a13] hover:bg-[#d24e0b] shadow-sm hover:shadow transition-all cursor-pointer hover:-translate-y-0.5"
              >
                Schedule a Demo
              </button>
            </div>
          </FadeIn>

          {/* Oval Capsule Photo Frame overlapping the cyan and white boundary */}
          <FadeIn delay={0.35} duration={0.7} distance={28}>
            <div className="mt-12 sm:mt-16 max-w-5xl mx-auto relative -mb-32 sm:-mb-48 lg:-mb-60 z-20 px-2 sm:px-4">
              <img
                style={{ height: '338px' }}
                src="assets/images/hero main image.png"
                alt="WTF Frustration Management K-12 students collaborating in modern classroom"
                referrerPolicy="no-referrer"
                className="w-full h-[338px] rounded-full object-cover object-center block shadow-2xl border-4 sm:border-8 border-white bg-white hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. The Problem We Solve */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-56 lg:pt-68 pb-20 bg-white">
        <FadeIn direction="up">
          <div style={{ height: '86px', marginBottom: '47px' }} className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
              <StarIconTitle />
              <span>The Problem We Solve</span>
              <StarIconTitle />
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-600 font-medium">
              Frustration Is the Hidden Barrier to Learning
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <FadeIn delay={0.08} direction="up">
            <div className="bg-[#def3f7] rounded-3xl p-8 flex flex-col items-center text-center justify-center min-h-[220px] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <img
                src="/src/assets/icons/Classroom-disruption-.svg"
                alt="Classroom disruption"
                className="w-18 h-18 sm:w-20 sm:h-20 mb-6 object-contain"
              />
              <h3 className="text-lg font-bold text-neutral-800">Classroom disruption</h3>
            </div>
          </FadeIn>

          {/* Card 2 */}
          <FadeIn delay={0.16} direction="up">
            <div className="bg-[#fef3e7] rounded-3xl p-8 flex flex-col items-center text-center justify-center min-h-[220px] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <img
                src="/src/assets/icons/Academic-disengagement-.svg"
                alt="Academic disengagement"
                className="w-18 h-18 sm:w-20 sm:h-20 mb-6 object-contain"
              />
              <h3 className="text-lg font-bold text-neutral-800">Academic disengagement</h3>
            </div>
          </FadeIn>

          {/* Card 3 */}
          <FadeIn delay={0.24} direction="up">
            <div className="bg-[#dcf0f6] rounded-3xl p-8 flex flex-col items-center text-center justify-center min-h-[220px] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <img
                src="/src/assets/icons/Emotional-dysregulation-.svg"
                alt="Emotional dysregulation"
                className="w-18 h-18 sm:w-20 sm:h-20 mb-6 object-contain"
              />
              <h3 className="text-lg font-bold text-neutral-800">Emotional dysregulation</h3>
            </div>
          </FadeIn>

          {/* Card 4 */}
          <FadeIn delay={0.32} direction="up">
            <div className="bg-[#e4f7ec] rounded-3xl p-8 flex flex-col items-center text-center justify-center min-h-[220px] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <img
                src="/src/assets/icons/Increased-behavioral-referrals-.svg"
                alt="Increased behavioral referrals"
                className="w-18 h-18 sm:w-20 sm:h-20 mb-6 object-contain"
              />
              <h3 className="text-lg font-bold text-neutral-800">Increased behavioral referrals</h3>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. What is Social Emotional Learning? */}
      <section style={{ height: '1363.55px' }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div style={{ width: '1650px', paddingTop: '41px', paddingLeft: '36px', paddingRight: '54px', marginLeft: '-210px', marginRight: '0px' }} className="bg-[#f5fae8]/70 rounded-[3rem] p-8 sm:p-12 border border-emerald-100/50">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
              <StarIconTitle />
              <span>What is Social Emotional Learning?</span>
              <StarIconTitle />
            </h2>
            <p className="mt-4 text-neutral-700 leading-relaxed text-base sm:text-lg">
              Helping students understand emotions, manage stress, build relationships, and make responsible decisions.
            </p>
            <p className="mt-2 text-neutral-700 leading-relaxed text-base sm:text-lg">
              Research shows SEL improves academic performance, behavioral stability, and emotional resilience.
            </p>
            <div className="mt-6">
              <button
                onClick={() => onNavigate('contact-us')}
                className="px-8 py-2.5 rounded-full font-semibold text-white bg-[#ea580c] hover:bg-[#d84803] transition-all cursor-pointer shadow-sm"
              >
                Talk to Experts
              </button>
            </div>
          </div>

          {/* Organic Shape Teacher Image */}
          <div className="max-w-2xl mx-auto mt-8 flex justify-center">
            <img
              src="/src/assets/images/regenerated_image_1791399892986.webp"
              alt="Teacher explaining globe to students"
              referrerPolicy="no-referrer"
              className="max-h-[820px] w-auto object-contain block"
            />
          </div>

          {/* 5 SEL Competencies Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-14">
            <div style={{ width: '220px', marginLeft: '170px', height: '285px' }} className="bg-[#ddf4f7] rounded-3xl p-6 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-white text-[#145d9e] flex items-center justify-center shadow-xs mb-4">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
              </div>
              <h4 className="text-base font-bold text-neutral-800 mb-1">Self Awareness</h4>
              <p className="text-xs text-neutral-600">Understanding emotions and triggers</p>
            </div>

            <div style={{ width: '220px', marginLeft: '103px' }} className="bg-[#daf0f7] rounded-3xl p-6 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-white text-[#145d9e] flex items-center justify-center shadow-xs mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h4 className="text-base font-bold text-neutral-800 mb-1">Self Management</h4>
              <p className="text-xs text-neutral-600">Managing frustration and stress</p>
            </div>

            <div style={{ height: '285px', width: '220px', marginLeft: '38px' }} className="bg-[#dcf1f8] rounded-3xl p-6 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-white text-[#145d9e] flex items-center justify-center shadow-xs mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h4 className="text-base font-bold text-neutral-800 mb-1">Social Awareness</h4>
              <p className="text-xs text-neutral-600">Empathy and respect for others</p>
            </div>

            <div style={{ width: '220px', marginLeft: '-28px' }} className="bg-[#f5eeff] rounded-3xl p-6 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-white text-[#145d9e] flex items-center justify-center shadow-xs mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </div>
              <h4 className="text-base font-bold text-neutral-800 mb-1">Relationship Skills</h4>
              <p className="text-xs text-neutral-600">Communication and teamwork</p>
            </div>

            <div style={{ width: '220px', marginLeft: '-95px' }} className="bg-[#fceef2] rounded-3xl p-6 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-white text-[#145d9e] flex items-center justify-center shadow-xs mb-4">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="text-base font-bold text-neutral-800 mb-1">Responsible Decisions</h4>
              <p className="text-xs text-neutral-600">Thoughtful ethical choices</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Dual-Model Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="bg-[#e4f8fb] rounded-[3rem] p-8 sm:p-14 border border-cyan-100/70">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
              <StarIconTitle />
              <span>Our Dual–Model Approach</span>
              <StarIconTitle />
            </h2>
            <p className="mt-2 text-neutral-600 text-base sm:text-lg font-medium">
              Two Integrated Delivery Models
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left image container */}
            <div className="lg:col-span-6 flex justify-center">
              <img
                src="assets/images/Dual-Model Approach.webp"
                alt="Teacher assisting students in computer lab"
                referrerPolicy="no-referrer"
                className="max-w-md w-full h-auto object-contain block"
              />
            </div>

            {/* Right content */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">
                  Digital App Platform
                </h3>
                <p className="text-neutral-700 text-base leading-relaxed">
                  Age-based SEL lessons and therapeutic tools that reinforce emotional skills inside and outside the classroom.
                </p>
              </div>

              <hr className="border-cyan-200/80" />

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">
                  School Integrated Curriculum
                </h3>
                <p className="text-neutral-700 text-base leading-relaxed">
                  Therapist-informed programs implemented directly within school systems.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('our-solution')}
                  className="px-8 py-3 rounded-full font-semibold text-white bg-[#ea580c] hover:bg-[#d84803] transition-all shadow-sm cursor-pointer"
                >
                  View Our Solution
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Impact & Outcomes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
            <StarIconTitle />
            <span>Impact & Outcomes</span>
            <StarIconTitle />
          </h2>
          <p className="mt-2 text-neutral-600 text-base sm:text-lg">
            Early Emotional Regulation Creates Long-Term Gains
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Academic focus */}
          <div
            style={{ height: '300px' }}
            className="bg-[#e2f7fa] rounded-3xl p-5 flex flex-col items-center justify-between transition-all hover:shadow-md"
          >
            <img
              style={{ height: '195px' }}
              src="assets/images/Academic focus.webp"
              alt="Academic focus"
              referrerPolicy="no-referrer"
              className="w-full h-[195px] rounded-2xl object-cover"
            />
            <h4 className="text-base sm:text-lg font-bold text-neutral-800 text-center mt-4 mb-2">
              Academic focus
            </h4>
          </div>

          {/* Card 2: Behavioral stability */}
          <div
            style={{ marginTop: '45px', marginBottom: '-45px' }}
            className="bg-[#e2f7fa] rounded-3xl p-5 flex flex-col items-center justify-between transition-all hover:shadow-md"
          >
            <h4 className="text-base sm:text-lg font-bold text-neutral-800 text-center mt-2 mb-4">
              Behavioral stability
            </h4>
            <img
              style={{ height: '195px' }}
              src="assets/images/Behavioral stability.webp"
              alt="Behavioral stability"
              referrerPolicy="no-referrer"
              className="w-full h-[195px] rounded-2xl object-cover"
            />
          </div>

          {/* Card 3: Emotional resilience */}
          <div className="bg-[#e2f7fa] rounded-3xl p-5 flex flex-col items-center justify-between transition-all hover:shadow-md">
            <img
              style={{ height: '195px' }}
              src="assets/images/Emotional resilience.webp"
              alt="Emotional resilience"
              referrerPolicy="no-referrer"
              className="w-full h-[195px] rounded-2xl object-cover"
            />
            <h4 className="text-base sm:text-lg font-bold text-neutral-800 text-center mt-4 mb-2">
              Emotional resilience
            </h4>
          </div>

          {/* Card 4: Conflict resolution */}
          <div
            style={{ marginTop: '45px', marginBottom: '-45px' }}
            className="bg-[#e2f7fa] rounded-3xl p-5 flex flex-col items-center justify-between transition-all hover:shadow-md"
          >
            <h4 className="text-base sm:text-lg font-bold text-neutral-800 text-center mt-2 mb-4">
              Conflict resolution
            </h4>
            <img
              style={{ height: '195px' }}
              src="assets/images/Conflict resolution.webp"
              alt="Conflict resolution"
              referrerPolicy="no-referrer"
              className="w-full h-[195px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* 6. We're looking to partner with */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
            <StarIconTitle />
            <span>We’re looking to partner with</span>
            <StarIconTitle />
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            style={{ width: '389px', height: '100px' }}
            className="bg-[#eef3f7] rounded-full px-6 py-4 flex items-center gap-4 border border-neutral-200/60 shadow-xs max-w-full"
          >
            <img
              style={{ width: '80px', height: '80px', marginLeft: '-10px' }}
              src="assets/icons/r1_c1_circle.png"
              alt="Seasoned Educators"
              className="rounded-full shrink-0 shadow-xs object-contain"
            />
            <span className="text-neutral-800 font-semibold text-base">Seasoned Educators</span>
          </div>

          <div
            style={{ width: '389px', height: '100px' }}
            className="bg-[#eef3f7] rounded-full px-6 py-4 flex items-center gap-4 border border-neutral-200/60 shadow-xs max-w-full"
          >
            <img
              style={{ width: '80px', height: '80px', marginLeft: '-10px' }}
              src="assets/icons/r1_c2_circle.png"
              alt="Master of Social Work (MSW)"
              className="rounded-full shrink-0 shadow-xs object-contain"
            />
            <span className="text-neutral-800 font-semibold text-base">Master of Social Work (MSW)</span>
          </div>

          <div
            style={{ width: '389px', height: '100px' }}
            className="bg-[#eef3f7] rounded-full px-6 py-4 flex items-center gap-4 border border-neutral-200/60 shadow-xs max-w-full"
          >
            <img
              style={{ width: '80px', height: '80px', marginLeft: '-10px' }}
              src="assets/icons/r1_c3_circle.png"
              alt="Licensed Mental Health Counsellor (LMHC)"
              className="rounded-full shrink-0 shadow-xs object-contain"
            />
            <span className="text-neutral-800 font-semibold text-base">Licensed Mental Health Counsellor (LMHC)</span>
          </div>

          <div
            style={{ width: '389px', height: '100px' }}
            className="bg-[#eef3f7] rounded-full px-6 py-4 flex items-center gap-4 border border-neutral-200/60 shadow-xs max-w-full"
          >
            <img
              style={{ width: '80px', height: '80px', marginLeft: '-10px' }}
              src="assets/icons/r2_c1_circle.png"
              alt="Licensed Associate Counsellor (LAC)"
              className="rounded-full shrink-0 shadow-xs object-contain"
            />
            <span className="text-neutral-800 font-semibold text-base">Licensed Associate Counsellor (LAC)</span>
          </div>

          <div
            style={{ width: '389px', height: '100px' }}
            className="bg-[#eef3f7] rounded-full px-6 py-4 flex items-center gap-4 border border-neutral-200/60 shadow-xs max-w-full"
          >
            <img
              style={{ width: '80px', height: '80px', marginLeft: '-10px' }}
              src="assets/icons/r2_c2_circle.png"
              alt="Licensed Clinical Social Worker (LCSW)"
              className="rounded-full shrink-0 shadow-xs object-contain"
            />
            <span className="text-neutral-800 font-semibold text-base">Licensed Clinical Social Worker (LCSW)</span>
          </div>

          <div
            style={{ width: '389px', height: '100px' }}
            className="bg-[#eef3f7] rounded-full px-6 py-4 flex items-center gap-4 border border-neutral-200/60 shadow-xs max-w-full"
          >
            <img
              style={{ width: '80px', height: '80px', marginLeft: '-10px' }}
              src="assets/icons/r2_c3_circle.png"
              alt="Licensed Professional Counsellor (LPC)"
              className="rounded-full shrink-0 shadow-xs object-contain"
            />
            <span className="text-neutral-800 font-semibold text-base">Licensed Professional Counsellor (LPC)</span>
          </div>
        </div>
      </section>

      {/* 7. Who We Serve */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div
          style={{ marginLeft: '-170px', marginRight: '0px', width: '1559px', height: '488.6px' }}
          className="bg-[#14589d] rounded-[3rem] p-8 sm:p-14 text-white shadow-xl"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold flex items-center justify-center flex-wrap gap-2 text-white">
              <StarIconTitle className="w-5 h-5 text-amber-300 inline-block mx-2" />
              <span>Who We Serve</span>
              <StarIconTitle className="w-5 h-5 text-amber-300 inline-block mx-2" />
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col items-center">
              <div
                style={{ marginLeft: '180px', width: '270px', height: '220px' }}
                className="w-full h-44 rounded-2xl overflow-hidden mb-4 shadow-sm relative group"
              >
                <img
                  style={{ height: '222px' }}
                  src="assets/images/High school students.webp"
                  alt="High school students"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  style={{ height: '222px', width: '303px', marginLeft: '-14px' }}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-3"
                >
                  <span className="text-white font-bold text-sm sm:text-base text-center">Schools & Districts</span>
                </div>
              </div>
              <button
                onClick={() => onNavigate('for-schools')}
                style={{ width: '150px', height: '50px', marginLeft: '177px' }}
                className="w-full py-2.5 rounded-full border border-white text-white font-semibold text-sm hover:bg-white hover:text-[#14589d] transition-colors cursor-pointer"
              >
                Let’s Connect
              </button>
            </div>

            {/* Card 2 */}
            <div
              style={{ marginLeft: '49px', width: '348.75px', height: '285.6px' }}
              className="flex flex-col items-center"
            >
              <div
                style={{ width: '270px', height: '222px', marginLeft: '-50px' }}
                className="w-full h-44 rounded-2xl overflow-hidden mb-4 shadow-sm relative group"
              >
                <img
                  style={{ width: '300px', height: '222px' }}
                  src="assets/images/Happy family.webp"
                  alt="Happy family"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  style={{ width: '300px', height: '222px', marginLeft: '-15px' }}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-3"
                >
                  <span className="text-white font-bold text-sm sm:text-base text-center">Parents & Families</span>
                </div>
              </div>
              <button
                onClick={() => onNavigate('for-parents')}
                style={{ width: '150px', height: '50px', marginLeft: '-47px' }}
                className="w-full py-2.5 rounded-full border border-white text-white font-semibold text-sm hover:bg-white hover:text-[#14589d] transition-colors cursor-pointer"
              >
                Let’s Connect
              </button>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center">
              <div
                style={{ height: '220px', width: '270px', marginLeft: '-70px' }}
                className="w-full h-44 rounded-2xl overflow-hidden mb-4 shadow-sm relative group"
              >
                <img
                  style={{ height: '222px' }}
                  src="assets/images/Bussiness partnership meeting.webp"
                  alt="Business partnership meeting"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  style={{ height: '222px', width: '287px', marginLeft: '-9px' }}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-3"
                >
                  <span className="text-white font-bold text-sm sm:text-base text-center">Investors & Partners</span>
                </div>
              </div>
              <button
                onClick={() => onNavigate('for-investors')}
                style={{ width: '150px', height: '50px', marginLeft: '-68px' }}
                className="w-full py-2.5 rounded-full border border-white text-white font-semibold text-sm hover:bg-white hover:text-[#14589d] transition-colors cursor-pointer"
              >
                Let’s Connect
              </button>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center">
              <div
                style={{ width: '270px', height: '220px', marginRight: '198px' }}
                className="w-full h-44 rounded-2xl overflow-hidden mb-4 shadow-sm relative group"
              >
                <img
                  style={{ height: '222px' }}
                  src="assets/images/Athletes on running track.webp"
                  alt="Athletes on running track"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  style={{ height: '222px', width: '300px', marginLeft: '-18px' }}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-3"
                >
                  <span className="text-white font-bold text-sm sm:text-base text-center">Athletes & Sports Programs</span>
                </div>
              </div>
              <button
                onClick={() => onNavigate('contact-us')}
                style={{ width: '150px', height: '50px', marginLeft: '-200px' }}
                className="w-full py-2.5 rounded-full border border-white text-white font-semibold text-sm hover:bg-white hover:text-[#14589d] transition-colors cursor-pointer"
              >
                Let’s Connect
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Insurance Partners */}
      <div className="bg-white">
        <InsurancePartners />
      </div>

      {/* 9. Bottom Orange CTA Banner */}
      <div className="bg-white pb-10">
        <OrangeCTA
          title="Build Emotional Resilience at Scale"
          primaryButtonText="For Schools"
          onPrimaryClick={() => onNavigate('for-schools')}
          secondaryButtonText="For Parents"
          onSecondaryClick={() => onNavigate('for-parents')}
          imageSrc="/assets/images/Banner-BG_orange.webp"
        />
      </div>
    </div>
  );
};
