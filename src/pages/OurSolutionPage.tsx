import React from 'react';
import { BannerHero } from '../components/BannerHero.tsx';
import { StarIconTitle } from '../components/icons.tsx';
import { OrangeCTA } from '../components/OrangeCTA.tsx';
import { FadeIn } from '../components/FadeIn.tsx';
import { ProblemCard } from '../components/ProblemCard.tsx';

interface OurSolutionPageProps {
  onNavigate: (page: string) => void;
}

export const OurSolutionPage: React.FC<OurSolutionPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#fbfcff] pb-16">
      {/* 1. Hero Banner */}
      <FadeIn duration={2.5}>
        <BannerHero
          title="An Integrated Platform for Emotional Regulation"
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

      {/* 2. How the Ecosystem Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
            <StarIconTitle />
            <span>How the Ecosystem Works</span>
            <StarIconTitle />
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Student */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/assets/images/Digital-Reinforcement.webp"
              alt="Student"
              style={{ borderStyle: 'none', borderRadius: '0px', borderColor: '#ffffff' }}
              className="w-full h-auto rounded-none object-contain shadow-xs hover:shadow-md transition-all hover:scale-[1.02]"
            />
            <h3 className="text-lg font-bold text-neutral-900 mt-4 mb-1">Student</h3>
            <p style={{ width: '248px', fontSize: '16px' }} className="text-neutral-600 leading-relaxed mx-auto">
              Engaging in digital emotional regulation activities.
            </p>
          </div>

          {/* Card 2: Digital Reinforcement */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/assets/images/Classroom-Integration.webp"
              alt="Digital Reinforcement"
              style={{ borderStyle: 'none', borderRadius: '0px', borderColor: '#ffffff' }}
              className="w-full h-auto rounded-none object-contain shadow-xs hover:shadow-md transition-all hover:scale-[1.02]"
            />
            <h3 className="text-lg font-bold text-neutral-900 mt-4 mb-1">Digital Reinforcement</h3>
            <p style={{ fontSize: '16px' }} className="text-neutral-600 leading-relaxed max-w-xs mx-auto">
              Interactive SEL lessons and therapeutic tools.
            </p>
          </div>

          {/* Card 3: Classroom Integration */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/assets/images/Measurable-Outcomes.webp"
              alt="Classroom Integration"
              style={{ borderStyle: 'none', borderRadius: '0px', borderColor: '#ffffff' }}
              className="w-full h-auto rounded-none object-contain shadow-xs hover:shadow-md transition-all hover:scale-[1.02]"
            />
            <h3 className="text-lg font-bold text-neutral-900 mt-4 mb-1">Classroom Integration</h3>
            <p style={{ width: '244px', fontSize: '16px' }} className="text-neutral-600 leading-relaxed mx-auto">
              SEL curriculum delivered directly in class.
            </p>
          </div>

          {/* Card 4: Measurable Outcomes */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/assets/images/Student.webp"
              alt="Measurable Outcomes"
              style={{ borderStyle: 'none', borderRadius: '0px', borderColor: '#ffffff' }}
              className="w-full h-auto rounded-none object-contain shadow-xs hover:shadow-md transition-all hover:scale-[1.02]"
            />
            <h3 className="text-lg font-bold text-neutral-900 mt-4 mb-1">Measurable Outcomes</h3>
            <p style={{ width: '192px', fontSize: '16px' }} className="text-neutral-600 leading-relaxed mx-auto">
              Monitoring and validating skill development.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Core Focus: Frustration Management */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
            <StarIconTitle />
            <span>The Core Focus: Frustration Management</span>
            <StarIconTitle />
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Academic disengagement */}
          <ProblemCard
            title="Academic disengagement"
            iconType="academic-disengagement"
          />

          {/* Card 2: Peer conflict */}
          <ProblemCard
            title="Peer conflict"
            iconType="peer-conflict"
          />

          {/* Card 3: Classroom disruption */}
          <ProblemCard
            title="Classroom disruption"
            iconType="classroom-disruption"
          />

          {/* Card 4: Emotional shutdown */}
          <ProblemCard
            title="Emotional shutdown"
            iconType="emotional-shutdown"
          />
        </div>
      </section>

      {/* 4. Dual Delivery Model */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          style={{
            marginTop: '-64px',
            marginBottom: '12px',
            height: '580.6px',
          }}
          className="bg-[#e4f8fb] rounded-[3rem] p-8 sm:p-14 border border-cyan-100/70"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
              <StarIconTitle />
              <span>Dual Delivery Model</span>
              <StarIconTitle />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col justify-between">
              <div
                style={{ height: '327px' }}
                className="w-full rounded-2xl overflow-hidden mb-5 bg-neutral-100"
              >
                <img
                  style={{ height: '334px' }}
                  src="/assets/images/regenerated_image_1792570597405.webp"
                  alt="Young student using digital learning app"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                style={{
                  marginTop: '-4px',
                  height: '60px',
                }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">Digital App Platform</h3>
                  <p className="text-sm text-neutral-600 mt-1">Ongoing, interactive reinforcement.</p>
                </div>
                <button
                  onClick={() => onNavigate('digital-app')}
                  className="px-6 py-2.5 rounded-full font-semibold text-white bg-[#ea580c] hover:bg-[#d84803] transition-colors whitespace-nowrap cursor-pointer shrink-0"
                >
                  View Digital App
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col justify-between">
              <div
                style={{ height: '327px' }}
                className="w-full rounded-2xl overflow-hidden mb-5 bg-neutral-100"
              >
                <img
                  style={{ height: '327px' }}
                  src="/src/assets/images/regenerated_image_1792570588293.webp"
                  alt="Student using tablet and notebook in curriculum"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">School Curriculum</h3>
                  <p className="text-sm text-neutral-600 mt-1">Structured in-class implementation.</p>
                </div>
                <button
                  onClick={() => onNavigate('contact-us')}
                  className="px-6 py-2.5 rounded-full font-semibold text-white bg-[#ea580c] hover:bg-[#d84803] transition-colors whitespace-nowrap cursor-pointer shrink-0"
                >
                  View Our Solution
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why This Model Scales */}
      <section style={{ height: '346px', marginTop: '-90px' }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 flex items-center justify-center flex-wrap gap-2">
            <StarIconTitle />
            <span>Why This Model Scales</span>
            <StarIconTitle />
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
          <div className="flex flex-col items-center text-center p-4">
            <img
              src="/assets/aistudio/Recurring-engagement_c76565ff.svg"
              alt="Recurring engagement"
              className="w-20 h-20 mb-4 object-contain"
            />
            <h3 className="text-lg font-bold text-neutral-800">Recurring engagement</h3>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <img
              src="/assets/aistudio/Institutional-adoption_2882573b.svg"
              alt="Institutional adoption"
              className="w-20 h-20 mb-4 object-contain"
            />
            <h3 className="text-lg font-bold text-neutral-800">Institutional adoption</h3>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <img
              src="/assets/aistudio/Data-informed-tracking_1f5850b1.svg"
              alt="Data–informed tracking"
              className="w-20 h-20 mb-4 object-contain"
            />
            <h3 className="text-lg font-bold text-neutral-800">Data–informed tracking</h3>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <img
              src="/assets/aistudio/Flexible-implementation_a13e77bd.svg"
              alt="Flexible implementation"
              className="w-20 h-20 mb-4 object-contain"
            />
            <h3 className="text-lg font-bold text-neutral-800">Flexible implementation</h3>
          </div>
        </div>
      </section>

      {/* 6. Orange CTA Banner */}
      <OrangeCTA
        title="Turn Emotional Skills Into Measurable Results"
        subtitle="From digital reinforcement to classroom integration, W.T.F. provides a scalable framework schools can confidently adopt."
        primaryButtonText="Explore Digital App"
        onPrimaryClick={() => onNavigate('digital-app')}
        secondaryButtonText="Explore School Curriculum"
        onSecondaryClick={() => onNavigate('contact-us')}
        imageSrc="/assets/aistudio/Banner-BG_fb7937b7.webp"
      />
    </div>
  );
};
