import React from 'react';
import { BannerHero } from '../components/BannerHero.tsx';
import { StarIconTitle } from '../components/icons.tsx';
import FrameworkSection from '../components/FrameworkSection.tsx';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="w-full bg-[#fbfcff] pb-16">
      {/* 1. Hero Banner */}
      <BannerHero
        title="Building Emotional Infrastructure for Education"
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

      {/* 2. Co-Founders Bios */}
      <section
        style={{ marginTop: '-26px', height: '2268.91px' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24"
      >
        {/* Founder 1: Kevin Veal */}
        <div
          style={{ width: '1236px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full rounded-[2.5rem] overflow-hidden shadow-lg border border-neutral-200/80 bg-neutral-100">
              <img
                src="/src/assets/images/regenerated_image_1791578017882.png"
                alt="Kevin Veal"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[450px] object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-[#145d9e] text-center tracking-tight">
              Kevin Veal– Founder
            </h3>
          </div>

          <div
            style={{ marginTop: '-190px' }}
            className="lg:col-span-6 space-y-5 text-neutral-700 leading-relaxed text-[17px]"
          >
            <p style={{ marginLeft: '-13px', marginTop: '-20px' }}>
              Kevin Veal creator of the phrase “work through frustrations “ founder of the W.T.F. university.
            </p>
            <p style={{ marginLeft: '-11px', marginTop: '-22px' }}>
              With experience as a coach and paraprofessional in the public school system, Kevin recognized the critical need for effective frustration management skills among students and athletes. This realization inspired him to create W.T.F. University, a unique platform where individuals can confront their “WTF” moments in a supportive environment. Here, students and athletes are encouraged to articulate their frustrations while learning practical strategies to transform negative experiences into positive outcomes.
            </p>
          </div>
        </div>

        {/* Founder 2: Shashank Tripathi */}
        <div
          style={{ height: '780.75px', width: '1237px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          <div
            style={{ width: '655px', height: '670.25px', marginTop: '-22px' }}
            className="lg:col-span-6 space-y-5 text-neutral-700 leading-relaxed text-[17px] order-2 lg:order-1"
          >
            <p style={{ width: '655px' }}>
              Shashank Tripathi is a technology entrepreneur and business leader with 12+ years of experience working with U.S. organizations across healthcare, IT, and e-commerce. With a foundation in Computer Science and a career shaped by technology sales and business development, he has worked closely with CEOs, executives, and decision-makers, developing a deep understanding of the challenges that exist behind the technology, not simply within it.
            </p>
            <p style={{ height: '143.125px', marginTop: '-22px', width: '655px' }}>
              His ability to identify problems early, understand people, and translate real-world challenges into meaningful technology solutions has shaped his entrepreneurial journey. As Co-founder and President, Shashank leads the company’s strategic vision, operations, partnerships, and growth.
            </p>
            <p style={{ width: '655px', marginTop: '-54px' }}>
              The idea behind WTF University comes from a simple belief: *many of the challenges people struggle with later in life begin much earlier—and often before they know how to recognize or manage them.* Shashank is passionate about using technology to help individuals develop greater self-awareness, emotional intelligence, and healthier ways of responding to frustration, anger, stress, and other behavioral challenges.
            </p>
            <p style={{ marginTop: '36px', marginBottom: '21px', width: '655px' }}>
              His broader mission is to help build a future where emotional well-being is treated with the same importance as intellectual development—where people are equipped with the skills to understand themselves, navigate challenges, build healthier relationships, and make better choices throughout life.
            </p>
            <p style={{ marginTop: '-23px' }}>
              For Shashank, WTF University is not simply a technology platform. It is an opportunity to help shape a generation that is better equipped—not only to succeed academically and professionally, but to live healthier, more balanced, and more fulfilling lives.
            </p>
          </div>

          <div
            style={{ height: '710.588px', marginLeft: '50px' }}
            className="lg:col-span-6 flex flex-col items-center order-1 lg:order-2"
          >
            <div
              style={{
                width: '529px',
                marginLeft: '0px',
                paddingLeft: '-12px',
                height: '802.6px',
                marginTop: '0px',
                marginBottom: '-72px',
              }}
              className="w-full rounded-[2.5rem] overflow-hidden shadow-lg border border-neutral-200/80 bg-neutral-100"
            >
              <img
                src="/src/assets/images/chris_willis_portrait_1791228080324.jpg"
                alt="Chris Willis"
                referrerPolicy="no-referrer"
                style={{
                  height: '666px',
                  marginLeft: '0px',
                  width: '573.4px',
                  marginTop: '-1px',
                }}
                className="w-full h-[380px] sm:h-[450px] object-cover"
              />
            </div>
            <h3
              style={{
                marginTop: '92px',
                height: '33.9875px',
                marginBottom: '-3px',
                paddingBottom: '0px',
                marginLeft: '1px',
              }}
              className="mt-4 text-xl sm:text-2xl font-bold text-[#145d9e] text-center tracking-tight"
            >
              Shashank Tripathi– CO- Founder & President
            </h3>
          </div>
        </div>

        {/* Founder 3: Chris Willis */}
        <div
          style={{ height: '698.587px', marginTop: '91px', width: '1234px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          <div
            style={{
              marginTop: '-232px',
              height: '626.575px',
              width: '592px',
              marginBottom: '-191px',
              paddingTop: '-12px',
            }}
            className="lg:col-span-6 flex flex-col items-center"
          >
            <div
              style={{
                marginBottom: '-27px',
                marginTop: '3px',
                height: '567.6px',
              }}
              className="w-full rounded-[2.5rem] overflow-hidden shadow-lg border border-neutral-200/80 bg-neutral-100"
            >
              <img
                src="/src/assets/images/regenerated_image_1791578019935.png"
                alt="Chris Willis"
                referrerPolicy="no-referrer"
                style={{
                  height: '616px',
                  marginTop: '-43px',
                  marginLeft: '0px',
                }}
                className="w-full h-[380px] sm:h-[450px] object-cover"
              />
            </div>
            <h3
              style={{
                marginBottom: '-121px',
                height: '33.9875px',
                marginTop: '49px',
              }}
              className="mt-4 text-xl sm:text-2xl font-bold text-[#145d9e] text-center tracking-tight"
            >
              Chris Willis– Chief Clinical Officer/Co–Founder
            </h3>
          </div>

          <div
            style={{ marginTop: '-190px' }}
            className="lg:col-span-6 space-y-5 text-neutral-700 leading-relaxed text-[17px]"
          >
            <p style={{ marginTop: '112px' }}>
              Christopher A. Willis, MA, LPC-S, is a Licensed Professional Counselor Supervisor and behavioral health compliance leader with more than 14 years of experience across managed care, hospital systems, community mental health, and substance use disorder treatment settings. He has delivered direct clinical services and provided administrative oversight for Medicaid, Medicare, CHIP, and Marketplace populations, with expertise in regulatory compliance, accreditation readiness, utilization management, and clinical operations.
            </p>
            <p style={{ marginTop: '-7px' }}>
              Over the past decade, he has worked extensively with at-risk populations, including youth involved in juvenile probation and individuals with complex behavioral health needs. As a Crisis Manager for Cy-Fair ISD, he supported students experiencing depression, anxiety, defiance, and suicidal ideation, collaborating with families, schools, and community stakeholders to stabilize crises and facilitate successful transitions back into home and academic environments.
            </p>
            <p style={{ marginTop: '-22px' }}>
              He has conducted comprehensive community-based assessments to support accurate diagnosis and appropriate level-of-care determinations for children, adolescents, and adults, utilizing evidence-based practices to improve outcomes, reduce recidivism and readmissions, and promote long-term stability.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div style={{ marginTop: '-56px' }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-[#fceeee] rounded-3xl p-8 sm:p-10 flex items-start gap-5 border border-red-100/60 shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-xs text-[#145d9e]">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Our Mission</h3>
              <p className="text-neutral-700 leading-relaxed text-base">
                To equip students with foundational emotional regulation skills early before frustration evolves into long-term behavioral or academic challenges.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-[#fef8eb] rounded-3xl p-8 sm:p-10 flex items-start gap-5 border border-amber-100/60 shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-xs text-[#145d9e]">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">Our Vision</h3>
              <p className="text-neutral-700 leading-relaxed text-base">
                A future where emotional skills are embedded into mainstream education as core infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Framework Section */}
      <FrameworkSection />


      {/* 5. Advisory & Clinical Alignment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="relative overflow-hidden rounded-[3rem] p-8 sm:p-12 text-white shadow-xl bg-[#14589d]">
          {/* Background image */}
          <img
            src="/src/assets/images/bg blue.png"
            alt="Advisory & Clinical Alignment background"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0"
          />
          {/* Contrast overlays to ensure high legibility */}
          <div className="absolute inset-0 bg-[#0c3c6d]/40 mix-blend-multiply pointer-events-none select-none z-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#082849]/60 via-transparent to-[#0e3b68]/40 pointer-events-none select-none z-0" />

          <div className="relative z-10 text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center justify-center flex-wrap gap-2 text-white drop-shadow-sm">
              <StarIconTitle className="w-5 h-5 text-amber-300 inline-block mx-2" />
              <span>Advisory & Clinical Alignment</span>
              <StarIconTitle className="w-5 h-5 text-amber-300 inline-block mx-2" />
            </h2>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {/* Pillar 1 */}
            <div className="flex flex-col items-center text-center p-4">
              <img
                src="/src/assets/icons/Therapist-informed-curriculum-.svg"
                alt="Therapist–informed curriculum"
                className="w-18 h-18 sm:w-20 sm:h-20 mb-4 object-contain drop-shadow-md"
              />
              <h3 className="text-lg font-bold">Therapist–informed curriculum</h3>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col items-center text-center p-4">
              <img
                src="/src/assets/icons/Evidence-based-methodology-.svg"
                alt="Evidence–based methodology"
                className="w-18 h-18 sm:w-20 sm:h-20 mb-4 object-contain drop-shadow-md"
              />
              <h3 className="text-lg font-bold">Evidence–based methodology</h3>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col items-center text-center p-4">
              <img
                src="/src/assets/icons/SEL-aligned-structure-.svg"
                alt="SEL–aligned structure"
                className="w-18 h-18 sm:w-20 sm:h-20 mb-4 object-contain drop-shadow-md"
              />
              <h3 className="text-lg font-bold">SEL–aligned structure</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
