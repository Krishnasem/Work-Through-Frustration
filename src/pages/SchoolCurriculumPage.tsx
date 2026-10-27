import React from 'react';
import { FadeIn } from '../components/FadeIn.tsx';
import { BannerHero } from '../components/BannerHero.tsx';
import { OrangeCTA } from '../components/OrangeCTA.tsx';

interface SchoolCurriculumPageProps {
    onNavigate: (page: string) => void;
}

export const SchoolCurriculumPage: React.FC<SchoolCurriculumPageProps> = ({ onNavigate }) => {
    return (
        <div className="w-full bg-[#fbfcff] text-neutral-900 pb-16 overflow-hidden">
            {/* 1. Page Banner Hero */}
            <FadeIn duration={2.5}>
                <BannerHero
                    title="School Curriculum"
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

            {/* 2. Intro Section: A Therapist-Informed SEL Curriculum */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    {/* Left: Image of Teacher & Student */}
                    <div className="lg:col-span-6 flex justify-center">
                        <div className="w-full max-w-xl rounded-[2rem] overflow-hidden shadow-sm">
                            <img
                                src="/assets/images/Investing-in-Preventative-Emotional-Infrastructure.webp"
                                alt="Teacher tutoring student with notebook"
                                className="w-full h-auto object-cover block rounded-[2rem]"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:col-span-6 space-y-6">
                        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-neutral-900 leading-[1.2] tracking-tight">
                            A Therapist–Informed SEL Curriculum for School Systems
                        </h2>
                        <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-normal">
                            Designed to move beyond theory into practice, our curriculum provides schools with a structured, implementation-ready model for emotional regulation, behavior support, and student well-being.
                        </p>
                        <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-normal">
                            Unlike generic SEL content, this system is grounded in therapeutic principles and adapted specifically for educational environments — ensuring both compliance and measurable impact.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Built to Integrate, Not Add Burden */}
            <section className="w-full py-16 bg-[#e6f8fa]/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                        {/* Left Content + 2x2 grid */}
                        <div className="lg:col-span-6 space-y-6">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">
                                Built to Integrate, Not Add Burden
                            </h2>
                            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
                                Our curriculum is intentionally structured to align with existing institutional frameworks, so schools can implement confidently without disrupting core academic priorities.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                {/* Item 1: MTSS */}
                                <div className="bg-white rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-xs">
                                    <div className="w-12 h-12 rounded-xl bg-[#b8eefc] text-[#145d9e] flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                            <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity={0.2} />
                                            <circle cx="6" cy="7" r="2" />
                                            <circle cx="18" cy="7" r="2" />
                                            <circle cx="6" cy="17" r="2" />
                                            <circle cx="18" cy="17" r="2" />
                                            <circle cx="12" cy="3" r="1.5" />
                                            <path strokeLinecap="round" d="M7.5 8.5L10 10.5M16.5 8.5L14 10.5M7.5 15.5L10 13.5M16.5 15.5L14 13.5M12 4.5V9" />
                                        </svg>
                                    </div>
                                    <span className="text-neutral-800 font-semibold text-sm sm:text-base leading-snug">
                                        MTSS (Multi-Tiered System of Supports) frameworks
                                    </span>
                                </div>

                                {/* Item 2: Tier 1, Tier 2 */}
                                <div className="bg-white rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-xs">
                                    <div className="w-12 h-12 rounded-xl bg-[#b8eefc] text-[#145d9e] flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 12l1.8 1.8 3.2-3.2" />
                                        </svg>
                                    </div>
                                    <span className="text-neutral-800 font-semibold text-sm sm:text-base leading-snug">
                                        Tier 1, Tier 2 behavioral support systems
                                    </span>
                                </div>

                                {/* Item 3: School counseling */}
                                <div className="bg-white rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-xs">
                                    <div className="w-12 h-12 rounded-xl bg-[#b8eefc] text-[#145d9e] flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <span className="text-neutral-800 font-semibold text-sm sm:text-base leading-snug">
                                        School counseling and well-being initiatives
                                    </span>
                                </div>

                                {/* Item 4: PBIS */}
                                <div className="bg-white rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-xs">
                                    <div className="w-12 h-12 rounded-xl bg-[#b8eefc] text-[#145d9e] flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-neutral-800 font-semibold text-sm sm:text-base leading-snug">
                                        PBIS and classroom management strategies
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Puzzle Image */}
                        <div className="lg:col-span-6 flex justify-center">
                            <div className="w-full max-w-xl rounded-[2.2rem] overflow-hidden shadow-md">
                                <img
                                    src="/assets/images/Built-to-Integrate-Not-Add-Burden.webp"
                                    alt="Connecting digital puzzle pieces"
                                    className="w-full h-auto object-cover block rounded-[2.2rem]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. What Schools Receive */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
                        What Schools Receive
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Card 1 */}
                    <div className="bg-[#edfbfd] rounded-2xl p-7 sm:p-8 flex flex-col justify-start border border-cyan-100/60 hover:shadow-sm transition-shadow">
                        <div className="w-12 h-12 rounded-xl bg-[#b8eefc] text-[#145d9e] flex items-center justify-center mb-5 shrink-0">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-3">
                            A Complete Implementation Package
                        </h3>
                        <p className="text-neutral-600 text-[15px] leading-relaxed">
                            Schools receive a comprehensive, implementation-ready toolkit designed for seamless adoption, educator confidence, and sustainable long-term impact.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#edfbfd] rounded-2xl p-7 sm:p-8 flex flex-col justify-start border border-cyan-100/60 hover:shadow-sm transition-shadow">
                        <div className="w-12 h-12 rounded-xl bg-[#b8eefc] text-[#145d9e] flex items-center justify-center mb-5 shrink-0">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-3">
                            Structured Lesson Plans
                        </h3>
                        <p className="text-neutral-600 text-[15px] leading-relaxed">
                            Age-aligned, developmentally appropriate SEL modules designed for classroom delivery across grade levels.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#edfbfd] rounded-2xl p-7 sm:p-8 flex flex-col justify-start border border-cyan-100/60 hover:shadow-sm transition-shadow">
                        <div className="w-12 h-12 rounded-xl bg-[#b8eefc] text-[#145d9e] flex items-center justify-center mb-5 shrink-0">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                <circle cx="12" cy="10" r="1.5" fill="currentColor" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-3">
                            Facilitator Guides
                        </h3>
                        <p className="text-neutral-600 text-[15px] leading-relaxed">
                            Step-by-step scripts and practical guidance for teachers, counselors, and coordinators to ensure consistent implementation.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#edfbfd] rounded-2xl p-7 sm:p-8 flex flex-col justify-start border border-cyan-100/60 hover:shadow-sm transition-shadow">
                        <div className="w-12 h-12 rounded-xl bg-[#b8eefc] text-[#145d9e] flex items-center justify-center mb-5 shrink-0">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-3">
                            Implementation Toolkit
                        </h3>
                        <p className="text-neutral-600 text-[15px] leading-relaxed">
                            A structured rollout roadmap including communication templates, planning checklists, and institutional alignment documents.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-[#edfbfd] rounded-2xl p-7 sm:p-8 flex flex-col justify-start border border-cyan-100/60 hover:shadow-sm transition-shadow">
                        <div className="w-12 h-12 rounded-xl bg-[#b8eefc] text-[#145d9e] flex items-center justify-center mb-5 shrink-0">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-3">
                            Outcome Measurement Reports
                        </h3>
                        <p className="text-neutral-600 text-[15px] leading-relaxed">
                            Clear reporting dashboards to demonstrate measurable progress for school leadership, boards, and district-level review.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-[#edfbfd] rounded-2xl p-7 sm:p-8 flex flex-col justify-start border border-cyan-100/60 hover:shadow-sm transition-shadow">
                        <div className="w-12 h-12 rounded-xl bg-[#b8eefc] text-[#145d9e] flex items-center justify-center mb-5 shrink-0">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 3v4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-3">
                            Professional Development & Staff Training
                        </h3>
                        <p className="text-neutral-600 text-[15px] leading-relaxed">
                            Onboarding sessions and structured training modules to build educator confidence, ensure fidelity of implementation, and support long-term sustainability.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. Key Features: 4-Step Process */}
            {/* 5. Key Features: Exact Pipeline Design */}
            <section className="w-full bg-white py-5 sm:py-7 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <h2 className="text-center text-[30px] sm:text-[38px] lg:text-[46px] font-medium tracking-tight text-[#111111] mb-7">
                    Key Features
                </h2>

                {/*
      Desktop: Four connected cards.
      Each SVG draws the complete outline and the thick blue accents.
    */}
                <div className="hidden lg:grid grid-cols-4 gap-[16px] max-w-[1250px] mx-auto items-stretch">
                    {[
                        {
                            step: "STEP 1",
                            title: "Onboarding",
                            description:
                                "Leadership alignment, implementation planning, and staff orientation.",
                        },
                        {
                            step: "STEP 2",
                            title: "Teacher Facilitation",
                            description:
                                "Classroom-based delivery using structured lesson modules and guided exercises.",
                        },
                        {
                            step: "STEP 3",
                            title: "Ongoing Reinforcement",
                            description:
                                "Regular emotional check-ins, skill reinforcement activities, and behavioral integration.",
                        },
                        {
                            step: "STEP 4",
                            title: "Impact Measurement",
                            description:
                                "Continuous data collection, reporting, and refinement to ensure measurable outcomes.",
                        },
                    ].map((feature, index) => (
                        <div
                            key={feature.step}
                            className="relative min-w-0 h-[375px]"
                        >
                            {/* Outer card outline and blue decorative accents */}
                            <svg
                                className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
                                viewBox="0 0 360 370"
                                preserveAspectRatio="none"
                                fill="none"
                                aria-hidden="true"
                            >
                                {/* Thin outer outline */}
                                <path
                                    d="
                            M 2 130
                            V 58
                            A 56 56 0 0 1 58 2
                            H 302
                            A 56 56 0 0 1 358 58
                            V 312
                            A 56 56 0 0 1 302 368
                            H 58
                            A 56 56 0 0 1 2 312
                            V 240
                        "
                                    stroke="#2162B1"
                                    strokeWidth="2.5"
                                    strokeLinejoin="round"
                                />

                                {/* Thick top-left accent */}
                                <path
                                    d="M 2 130 V 58 A 56 56 0 0 1 58 2 H 145"
                                    stroke="#2162B1"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                />

                                {/* Thick bottom-right accent */}
                                <path
                                    d="M 220 368 H 302 A 56 56 0 0 0 358 312 V 245"
                                    stroke="#2162B1"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                />

                                {/* Lower left accent on cards 2–4 */}
                                {index > 0 && (
                                    <path
                                        d="M 2 245 V 312"
                                        stroke="#2162B1"
                                        strokeWidth="10"
                                        strokeLinecap="round"
                                    />
                                )}

                                {/* Connector notch between consecutive cards */}
                                {index < 3 && (
                                    <path
                                        d="M 358 170 H 378 V 200 H 358"
                                        stroke="#2162B1"
                                        strokeWidth="2.5"
                                        strokeLinejoin="round"
                                    />
                                )}
                            </svg>

                            {/* Inner pale-blue panel */}
                            <div className="absolute inset-[23px] rounded-[32px] bg-[#EFFBFE]" />

                            {/* Card content */}
                            <div className="absolute inset-[23px] z-10 flex flex-col items-center justify-center text-center px-3">
                                <h3
                                    className="text-[38px] xl:text-[42px] leading-none font-black text-[#2162B1] mb-[30px] tracking-[-1.5px]"
                                    style={{
                                        fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
                                        transform: "scaleX(0.88)",
                                    }}
                                >
                                    {feature.step}
                                </h3>

                                <h4 className="text-[21px] xl:text-[24px] leading-tight font-normal text-black mb-[12px] whitespace-nowrap">
                                    {feature.title}
                                </h4>

                                <p className="text-[16px] xl:text-[20px] leading-[1.48] font-normal text-[#111111] max-w-[280px]">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Responsive cards for tablet and mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto lg:hidden">
                    {[
                        {
                            step: "STEP 1",
                            title: "Onboarding",
                            description:
                                "Leadership alignment, implementation planning, and staff orientation.",
                        },
                        {
                            step: "STEP 2",
                            title: "Teacher Facilitation",
                            description:
                                "Classroom-based delivery using structured lesson modules and guided exercises.",
                        },
                        {
                            step: "STEP 3",
                            title: "Ongoing Reinforcement",
                            description:
                                "Regular emotional check-ins, skill reinforcement activities, and behavioral integration.",
                        },
                        {
                            step: "STEP 4",
                            title: "Impact Measurement",
                            description:
                                "Continuous data collection, reporting, and refinement to ensure measurable outcomes.",
                        },
                    ].map((feature) => (
                        <div
                            key={feature.step}
                            className="relative rounded-[44px] border-[2.5px] border-[#2162B1] p-[20px] min-h-[320px]"
                        >
                            <div className="absolute top-[-2.5px] left-[-2.5px] w-[40%] h-[9px] rounded-full bg-[#2162B1]" />
                            <div className="absolute bottom-[-2.5px] right-[-2.5px] w-[40%] h-[9px] rounded-full bg-[#2162B1]" />

                            <div className="bg-[#EFFBFE] rounded-[30px] min-h-[275px] h-full px-4 py-8 flex flex-col items-center justify-center text-center">
                                <h3
                                    className="text-[36px] font-black text-[#2162B1] mb-7 leading-none"
                                    style={{
                                        fontFamily: "'Oswald', 'Arial Narrow', sans-serif",
                                    }}
                                >
                                    {feature.step}
                                </h3>

                                <h4 className="text-xl font-normal text-black mb-3">
                                    {feature.title}
                                </h4>

                                <p className="text-base leading-relaxed text-[#111111] max-w-xs">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* Tablet and Mobile Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto lg:hidden">
                {[
                    {
                        step: "STEP 1",
                        title: "Onboarding",
                        description:
                            "Leadership alignment, implementation planning, and staff orientation.",
                    },
                    {
                        step: "STEP 2",
                        title: "Teacher Facilitation",
                        description:
                            "Classroom-based delivery using structured lesson modules and guided exercises.",
                    },
                    {
                        step: "STEP 3",
                        title: "Ongoing Reinforcement",
                        description:
                            "Regular emotional check-ins, skill reinforcement activities, and behavioral integration.",
                    },
                    {
                        step: "STEP 4",
                        title: "Impact Measurement",
                        description:
                            "Continuous data collection, reporting, and refinement to ensure measurable outcomes.",
                    },
                ].map((feature) => (
                    <div
                        key={feature.step}
                        className="relative rounded-[38px] border-2 border-[#2162B1] p-4"
                    >
                        <div className="bg-[#EFFBFE] rounded-[28px] min-h-[270px] px-5 py-8 flex flex-col justify-center items-center text-center">
                            <h3
                                className="text-3xl sm:text-4xl font-black text-[#2162B1] mb-6 leading-none"
                                style={{ fontFamily: "'Oswald', 'Arial Narrow', sans-serif" }}
                            >
                                {feature.step}
                            </h3>
                            <h4 className="text-xl font-normal text-neutral-950 mb-3">
                                {feature.title}
                            </h4>
                            <p className="text-neutral-900 text-base leading-relaxed max-w-xs">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>


            {/* 6. Measurable Impact: Split Blue Banner with photo */}
            <section className="w-full bg-[#155ca2] overflow-hidden my-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[480px]">
                    {/* Left: Blue content block */}
                    <div className="lg:col-span-6 px-6 sm:px-12 lg:px-16 py-12 sm:py-16 flex flex-col justify-center text-white">
                        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight mb-5">
                            Measurable Impact
                        </h2>
                        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                            Our therapist–informed SEL curriculum is designed not only for implementation — but for measurable outcomes. Schools that adopt the program experience observable improvements across behavioral, academic, and classroom climate indicators.
                        </p>

                        <ul className="space-y-4">
                            {[
                                'Reduced behavior referrals',
                                'Improved student focus and task persistence',
                                'Positive classroom climate',
                                'Increased student engagement',
                                'Strengthened emotional regulation skills',
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    {/* 4-petal orange sparkle / floral star icon */}
                                    <svg className="w-5 h-5 text-[#ea580c] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" />
                                    </svg>
                                    <span className="text-white font-medium text-base sm:text-lg">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Team analyzing charts photo */}
                    <div className="lg:col-span-6 relative min-h-[350px] lg:min-h-full">
                        <img
                            src="/assets/images/measurable impact.png"
                            alt="Educators and team reviewing outcome measurement charts"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* 7. CTA: Schedule District Consultation */}
            <FadeIn direction="up" delay={0.15}>
                <OrangeCTA
                    title="Schedule District Consultation"
                    subtitle="Explore how this therapist-informed SEL curriculum can integrate into your school or district framework."
                    primaryButtonText="Request App Demo"
                    onPrimaryClick={() => onNavigate('contact-us')}
                    imageSrc="/assets/aistudio/Banner-BG_fb7937b7.webp"
                />
            </FadeIn>
        </div >
    );
};