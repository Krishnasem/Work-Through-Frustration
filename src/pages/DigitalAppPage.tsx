import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn.tsx';
import { OrangeCTA } from '../components/OrangeCTA.tsx';
import { BannerHero } from '../components/BannerHero.tsx';

interface DigitalAppPageProps {
  onNavigate: (page: string) => void;
}

export const DigitalAppPage: React.FC<DigitalAppPageProps> = ({ onNavigate }) => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [demoForm, setDemoForm] = useState({ name: '', email: '', role: 'School / District', notes: '' });
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitted(true);
    setTimeout(() => {
      setDemoSubmitted(false);
      setShowDemoModal(false);
      setDemoForm({ name: '', email: '', role: 'School / District', notes: '' });
    }, 2500);
  };

  const handleRequestDemo = () => {
    setShowDemoModal(true);
  };

  return (
    <div className="w-full bg-[#fbfcff] pb-16">
      {/* 1. Hero Banner: Cyan background with clover watermarks & bold title */}
        <FadeIn duration={2.5}>
          <BannerHero
            title="Digital App Platform"
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

      {/* 2. Intro Section: 2 columns (Text & Button on Left, Students Reading on Right) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column */}
          <FadeIn direction="right" duration={0.6} className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-neutral-900 tracking-tight leading-[1.2]">
              A Structured Emotional Regulation Platform for Students
            </h2>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
              A therapist–informed digital environment that helps students recognize, process, and regulate frustration through guided, age–appropriate emotional skill development.
            </p>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
              Designed for consistent reinforcement at home, in classrooms, and across institutional environments.
            </p>
            <div className="pt-2">
              <button
                onClick={handleRequestDemo}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-white bg-[#ea580c] hover:bg-[#d84803] active:scale-[0.98] transition-all shadow-md hover:shadow-lg cursor-pointer text-base"
              >
                Request App Demo
              </button>
            </div>
          </FadeIn>

          {/* Right Column: Students photo */}
          <FadeIn direction="left" duration={0.6} delay={0.1} className="lg:col-span-6">
            <div className="overflow-hidden rounded-3xl shadow-sm bg-neutral-100 border border-neutral-200/60">
              <img
                src="/assets/aistudio/digital_app_students_reading.png"
                alt="Students studying and reading together"
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[460px] object-cover block"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. How It Works Section: Light Cyan Card with Girls on Left & 4 White Feature Cards on Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <FadeIn duration={0.6}>
          <div className="rounded-[32px] sm:rounded-[36px] bg-[#EBFDFF] p-6 sm:p-10 lg:p-12 border border-cyan-100/80 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left: Image of two girls */}
              <div className="lg:col-span-5 flex">
                <div className="w-full h-full min-h-[380px] lg:min-h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-100 shadow-sm">
                  <img
                    src="/assets/aistudio/digital_app_girls_phone.png"
                    alt="Two students using the digital app together"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>

              {/* Right: How It Works & 4 Cards */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-neutral-900 tracking-tight mb-3">
                    How It Works
                  </h2>
                  <p className="text-neutral-700 text-sm sm:text-[15px] lg:text-base leading-relaxed">
                    The W.T.F. Digital App guides students through structured emotional skill development using age-aligned lessons and therapist-informed exercises. Each interaction builds awareness, strengthens regulation strategies, and reinforces adaptive habits over time.
                  </p>
                </div>

                <div className="space-y-3.5">
                  {/* Card 1 */}
                  <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-cyan-100/70 flex items-start sm:items-center gap-4 transition-all hover:shadow-md">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#cbf6fc] text-[#0d738a] flex items-center justify-center shrink-0">
                      {/* Gauge / Speedometer with +/- */}
                      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 14v-4" />
                        <path d="M3.34 17a10 10 0 1 1 17.32 0" />
                        <line x1="6.5" y1="13.5" x2="8.5" y2="13.5" />
                        <line x1="15.5" y1="13.5" x2="17.5" y2="13.5" />
                        <line x1="16.5" y1="12.5" x2="16.5" y2="14.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                        Age-Based SEL Modules
                      </h3>
                      <p className="text-neutral-600 text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Developmentally structured lessons aligned to emotional and cognitive growth stages.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-cyan-100/70 flex items-start sm:items-center gap-4 transition-all hover:shadow-md">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#cbf6fc] text-[#0d738a] flex items-center justify-center shrink-0">
                      {/* Hand holding lightbulb / skills */}
                      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="7" r="3.5" />
                        <path d="M9.5 10.5L9 12h6l-.5-1.5" />
                        <path d="M18 13c-1.5 0-3 1.5-4 2.5l-2-1c-1.5-.75-3.5 0-4.5 1.5L4 20h16l-2-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                        Therapeutic Skill Application
                      </h3>
                      <p className="text-neutral-600 text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Evidence-informed exercises that translate emotional awareness into practical regulation tools.
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-cyan-100/70 flex items-start sm:items-center gap-4 transition-all hover:shadow-md">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#cbf6fc] text-[#0d738a] flex items-center justify-center shrink-0">
                      {/* Network / Pattern nodes */}
                      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="6" cy="6" r="2.5" />
                        <circle cx="6" cy="18" r="2.5" />
                        <circle cx="18" cy="12" r="2.5" />
                        <path d="M8.5 7.5L15.5 10.5" />
                        <path d="M8.5 16.5L15.5 13.5" />
                        <circle cx="18" cy="6" r="1.5" />
                        <path d="M8.5 6H16.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                        Pattern Recognition Tools
                      </h3>
                      <p className="text-neutral-600 text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Check-in systems that build early awareness of frustration triggers and responses.
                      </p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-cyan-100/70 flex items-start sm:items-center gap-4 transition-all hover:shadow-md">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#cbf6fc] text-[#0d738a] flex items-center justify-center shrink-0">
                      {/* Microchip / reinforcement circuit */}
                      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="5" width="14" height="14" rx="2.5" />
                        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                        <path d="M12 2v3m0 14v3M2 12h3m14 0h3M7 2v3m10-3v3M7 19v3m10-3v3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                        Ongoing Reinforcement
                      </h3>
                      <p className="text-neutral-600 text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Consistent engagement designed to support long-term emotional habit formation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 4. 4-Step Visual Flow Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <FadeIn duration={0.6}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 flex items-center justify-center gap-3">
              <span className="text-[#f59e0b] text-2xl sm:text-3xl">✦</span>
              <span>4–Step Visual Flow</span>
              <span className="text-[#f59e0b] text-2xl sm:text-3xl">✦</span>
            </h2>
          </div>

          {/* 4 Concentric Circular Steps with connecting arrows */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="relative rounded-full p-2 border border-[#145d9e]/30 bg-transparent flex items-center justify-center">
                <div className="w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full border-[6px] border-[#145d9e] bg-white flex flex-col items-center justify-center p-4 text-center shadow-sm">
                  {/* Icon badge */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#cbf6fc] text-[#145d9e] flex items-center justify-center mb-2.5">
                    {/* 3 blocks / cubes */}
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l-4.5 2.5v5L12 12l4.5-2.5v-5L12 2zm-5.5 8.5L2 13v5l4.5 2.5 4.5-2.5v-5L6.5 10.5zm11 0L13 13v5l4.5 2.5 4.5-2.5v-5l-4.5-2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-tight">
                    Age-Based SEL<br />Modules
                  </h3>
                </div>
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:flex items-center justify-center text-[#145d9e]">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
            <div className="md:hidden text-[#145d9e] py-1 rotate-90">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="relative rounded-full p-2 border border-[#145d9e]/30 bg-transparent flex items-center justify-center">
                <div className="w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full border-[6px] border-[#145d9e] bg-white flex flex-col items-center justify-center p-4 text-center shadow-sm">
                  {/* Icon badge */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#cbf6fc] text-[#145d9e] flex items-center justify-center mb-2.5">
                    {/* Open book with info circle */}
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      <circle cx="12" cy="8.5" r="1.2" fill="currentColor" />
                      <line x1="12" y1="11" x2="12" y2="14" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-tight">
                    Guided Therapeutic<br />Exercises
                  </h3>
                </div>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:flex items-center justify-center text-[#145d9e]">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
            <div className="md:hidden text-[#145d9e] py-1 rotate-90">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="relative rounded-full p-2 border border-[#145d9e]/30 bg-transparent flex items-center justify-center">
                <div className="w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full border-[6px] border-[#145d9e] bg-white flex flex-col items-center justify-center p-4 text-center shadow-sm">
                  {/* Icon badge */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#cbf6fc] text-[#145d9e] flex items-center justify-center mb-2.5">
                    {/* Brain & Heart */}
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-tight">
                    Emotional<br />Check-Ins
                  </h3>
                </div>
              </div>
            </div>

            {/* Arrow 3 */}
            <div className="hidden md:flex items-center justify-center text-[#145d9e]">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
            <div className="md:hidden text-[#145d9e] py-1 rotate-90">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="relative rounded-full p-2 border border-[#145d9e]/30 bg-transparent flex items-center justify-center">
                <div className="w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full border-[6px] border-[#145d9e] bg-white flex flex-col items-center justify-center p-4 text-center shadow-sm">
                  {/* Icon badge */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#cbf6fc] text-[#145d9e] flex items-center justify-center mb-2.5">
                    {/* User with orbital activities */}
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
                      <circle cx="12" cy="12" r="3" />
                      <circle cx="12" cy="4" r="1.5" fill="currentColor" />
                      <circle cx="20" cy="12" r="1.5" fill="currentColor" />
                      <circle cx="12" cy="20" r="1.5" fill="currentColor" />
                      <circle cx="4" cy="12" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-tight">
                    Reinforcement<br />Activities
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 5. Engagement Model: Deep Blue Container with Girl Using Tablet on Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <FadeIn duration={0.6}>
          <div className="rounded-[32px] sm:rounded-[36px] bg-[#155a9c] p-8 sm:p-12 lg:p-14 text-white shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-5">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
                  ENGAGEMENT MODEL
                </h2>
                <h3 className="text-lg sm:text-xl font-semibold text-white/95 leading-snug">
                  Designed for Consistent Reinforcement, Not One-Time Exposure
                </h3>
                <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                  Emotional regulation develops through repetition and reflection. The W.T.F. Digital App is structured for ongoing engagement, allowing students to build adaptive habits gradually and sustainably.
                </p>

                {/* 4 bullet points with orange 4-point stars */}
                <div className="pt-2 space-y-3.5">
                  <div className="flex items-center gap-3">
                    <span className="text-[#f59e0b] text-xl font-bold shrink-0">✦</span>
                    <span className="text-white font-medium text-sm sm:text-base">Encourages daily micro–engagement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#f59e0b] text-xl font-bold shrink-0">✦</span>
                    <span className="text-white font-medium text-sm sm:text-base">Supports long–term habit formation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#f59e0b] text-xl font-bold shrink-0">✦</span>
                    <span className="text-white font-medium text-sm sm:text-base">Aligns with classroom and home reinforcement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#f59e0b] text-xl font-bold shrink-0">✦</span>
                    <span className="text-white font-medium text-sm sm:text-base">Scales across families and institutions</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Girl using glowing tablet */}
              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-md border border-white/10">
                  <img
                    src="/assets/aistudio/digital_app_girl_tablet.png"
                    alt="Student engaged in digital learning with tablet"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[440px] object-cover block"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 6. Key Features Section: 3-column layout (2 cards left, smartphone center, 2 cards right) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <FadeIn duration={0.6}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-3">
              Key Features
            </h2>
            <p className="text-neutral-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              The W.T.F. Digital Platform is built as scalable emotional infrastructure combining structured learning architecture, measurable engagement, and institutional-grade reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left 2 Cards (lg:col-span-4) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6">
              {/* Feature 1 */}
              <div className="bg-[#eef9fb] rounded-3xl p-6 sm:p-7 border border-cyan-100/70 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#cbf6fc] text-[#0d738a] flex items-center justify-center mb-5">
                    {/* Person reading book */}
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
                      <circle cx="12" cy="5" r="2.5" />
                      <path d="M4 19a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4" />
                      <path d="M8 12l4-2 4 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 leading-snug">
                    Modular Emotional Learning Engine
                  </h3>
                </div>
                <p className="text-neutral-600 text-[15px] leading-relaxed mt-2">
                  Developmentally sequenced lesson architecture designed to support structured skill progression across age groups.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#eef9fb] rounded-3xl p-6 sm:p-7 border border-cyan-100/70 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#cbf6fc] text-[#0d738a] flex items-center justify-center mb-5">
                    {/* Collaboration / Team */}
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 leading-snug">
                    Engagement & Progress Analytics Dashboard
                  </h3>
                </div>
                <p className="text-neutral-600 text-[15px] leading-relaxed mt-2">
                  Real-time visibility into usage patterns, skill milestones, and reinforcement consistency.
                </p>
              </div>
            </div>

            {/* Center Image: Smartphone with 3D UI cards (lg:col-span-4) */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="w-full h-full min-h-[380px] lg:min-h-full rounded-3xl overflow-hidden bg-black shadow-md flex items-center justify-center">
                <img
                  src="/assets/aistudio/digital_app_center_phone.png"
                  alt="Interactive smartphone application interface"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>

            {/* Right 2 Cards (lg:col-span-4) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6">
              {/* Feature 3 */}
              <div className="bg-[#eef9fb] rounded-3xl p-6 sm:p-7 border border-cyan-100/70 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#cbf6fc] text-[#0d738a] flex items-center justify-center mb-5">
                    {/* Applied framework / Checklist */}
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
                      <rect x="4" y="3" width="16" height="18" rx="2" />
                      <line x1="8" y1="8" x2="16" y2="8" />
                      <line x1="8" y1="12" x2="16" y2="12" />
                      <circle cx="8" cy="16" r="1" fill="currentColor" />
                      <circle cx="16" cy="16" r="1.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 leading-snug">
                    Applied Regulation Framework
                  </h3>
                </div>
                <p className="text-neutral-600 text-[15px] leading-relaxed mt-2">
                  Therapist-informed exercises that translate emotional awareness into repeatable behavioral strategies.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-[#eef9fb] rounded-3xl p-6 sm:p-7 border border-cyan-100/70 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#cbf6fc] text-[#0d738a] flex items-center justify-center mb-5">
                    {/* Bar chart / Interface */}
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
                      <path d="M18 20V10" />
                      <path d="M12 20V4" />
                      <path d="M6 20v-6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 leading-snug">
                    Family Insight Interface
                  </h3>
                </div>
                <p className="text-neutral-600 text-[15px] leading-relaxed mt-2">
                  Structured reporting tools that extend emotional reinforcement beyond the classroom environment
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 7. Who It's Ideal For Section: Warm Cream Container with 4 Audience Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <FadeIn duration={0.6}>
          <div className="rounded-[32px] sm:rounded-[36px] bg-[#FAF5EE] p-8 sm:p-12 lg:p-14 border border-[#F2ECE1] shadow-sm">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 flex items-center justify-center gap-3">
                <span className="text-[#f59e0b] text-2xl sm:text-3xl">✦</span>
                <span>Who it’s ideal for</span>
                <span className="text-[#f59e0b] text-2xl sm:text-3xl">✦</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              {/* Audience 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-neutral-200 shadow-sm mb-4">
                  <img
                    src="/assets/aistudio/digital_app_ideal_1.png"
                    alt="Families seeking emotional tools at home"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover block"
                  />
                </div>
                <h3 className="text-base sm:text-[17px] font-semibold text-neutral-800 leading-snug max-w-xs">
                  Families seeking structured emotional tools at home
                </h3>
              </div>

              {/* Audience 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-neutral-200 shadow-sm mb-4">
                  <img
                    src="/assets/aistudio/digital_app_ideal_2.png"
                    alt="Schools supplementing SEL programs"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover block"
                  />
                </div>
                <h3 className="text-base sm:text-[17px] font-semibold text-neutral-800 leading-snug max-w-xs">
                  Schools supplementing existing SEL programs
                </h3>
              </div>

              {/* Audience 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-neutral-200 shadow-sm mb-4">
                  <img
                    src="/assets/aistudio/digital_app_ideal_3.png"
                    alt="After-school enrichment programs"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover block"
                  />
                </div>
                <h3 className="text-base sm:text-[17px] font-semibold text-neutral-800 leading-snug max-w-xs">
                  After–school enrichment programs
                </h3>
              </div>

              {/* Audience 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-neutral-200 shadow-sm mb-4">
                  <img
                    src="/assets/aistudio/digital_app_ideal_4.png"
                    alt="Districts piloting preventative frameworks"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover block"
                  />
                </div>
                <h3 className="text-base sm:text-[17px] font-semibold text-neutral-800 leading-snug max-w-xs">
                  Districts piloting preventative emotional frameworks
                </h3>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 8. Orange CTA Banner */}
      <section className="pt-6">
        <OrangeCTA
          title="Strengthen Emotional Regulation Through Consistent Practice"
          primaryButtonText="Request App Demo"
          onPrimaryClick={handleRequestDemo}
          cardStyle={{
            width: '100%',
            maxWidth: '1220px',
            marginLeft: 'auto',
            marginRight: 'auto',
            height: 'auto',
            minHeight: '230px',
            paddingTop: '48px',
            paddingBottom: '48px',
          }}
          imageSrc="/assets/aistudio/Banner-BG_fb7937b7.webp"
        />
      </section>

      {/* Request Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-100">
            <button
              onClick={() => setShowDemoModal(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {demoSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Demo Request Received</h3>
                <p className="text-neutral-600 text-sm">
                  Thank you! Our platform specialist will contact you shortly to schedule your personalized walkthrough of the W.T.F. Digital App.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Request Digital App Demo</h3>
                <p className="text-neutral-600 text-sm mb-6">
                  Experience how W.T.F. equips students with structured emotional regulation skills.
                </p>

                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-neutral-600 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={demoForm.name}
                      onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#145d9e] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-neutral-600 mb-1">
                      Work / School Email
                    </label>
                    <input
                      type="email"
                      required
                      value={demoForm.email}
                      onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                      placeholder="jane@school.org"
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#145d9e] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-neutral-600 mb-1">
                      Role / Organization
                    </label>
                    <select
                      value={demoForm.role}
                      onChange={(e) => setDemoForm({ ...demoForm, role: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#145d9e] text-sm bg-white"
                    >
                      <option value="School / District">School / District Administrator</option>
                      <option value="Teacher / Counselor">Teacher / Counselor / Educator</option>
                      <option value="Parent">Parent / Family</option>
                      <option value="Healthcare Provider">Healthcare / Mental Health Provider</option>
                      <option value="After-school Program">After-school / Community Program</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-neutral-600 mb-1">
                      Specific Areas of Interest (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={demoForm.notes}
                      onChange={(e) => setDemoForm({ ...demoForm, notes: e.target.value })}
                      placeholder="e.g. elementary grade rollout, progress analytics, home reinforcement"
                      className="w-full px-4 py-2 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#145d9e] text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setShowDemoModal(false)}
                      className="px-5 py-2.5 rounded-full text-neutral-700 text-sm font-medium hover:bg-neutral-100 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-[#ea580c] hover:bg-[#d84803] text-white text-sm font-semibold transition-all shadow-md"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
