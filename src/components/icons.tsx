import React from 'react';

export const StarIconTitle: React.FC<{ className?: string }> = ({ className = "w-5 h-5 text-amber-500 inline-block mx-2" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
  </svg>
);

export const WTFLogo: React.FC<{ className?: string; textClassName?: string }> = ({ className = "h-14 sm:h-16 lg:h-[68px] w-auto" }) => (
  <img
    src="/src/assets/WTF-Logo.svg"
    alt="WTF - Work Through Frustrations"
    className={`h-14 sm:h-16 lg:h-[68px] w-auto object-contain select-none block ${className}`}
  />
);

// Problem Icons
export const IconClassroomDisruption: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <circle cx="12" cy="7" r="3" />
    <path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
    <path d="M19 8l2 2m0 0l2-2m-2 2v6" stroke="currentColor" />
  </svg>
);

export const IconAcademicDisengagement: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

export const IconEmotionalDysregulation: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M12 21a9 9 0 0 1-9-9c0-3.5 2-6.5 5-7.8A9 9 0 0 1 12 3a9 9 0 0 1 4 1.2c3 1.3 5 4.3 5 7.8a9 9 0 0 1-9 9z" />
    <path d="M9 12h.01M15 12h.01M10 16c1-1 3-1 4 0" />
  </svg>
);

export const IconBehavioralReferrals: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M18 20V10M12 20V4M6 20v-6" />
    <path d="M4 4l8 8 6-6 4 4" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 5 SEL Competencies Icons
export const IconSelfAwareness: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 13c-2.67 0-8 1.34-8 4v.5h16v-.5c0-2.66-5.33-4-8-4z" />
  </svg>
);

// Insurance Partner SVGs
export const LogoUnitedHealthcare: React.FC = () => (
  <div className="flex items-center justify-center p-2.5 h-full">
    <div className="flex items-center gap-2">
      <svg className="w-8 h-8 text-[#002677]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 4h3v16H3zm5 0h3v16H8zm5 0h3v16h-3zm5 0h3v16h-3z" opacity="0.3"/>
        <path d="M4 2v20h2V6h4v16h2V10h4v12h2V14h4v8h2V2H4z" fill="#002677"/>
      </svg>
      <div className="text-left font-sans font-bold text-xs tracking-tight text-[#002677] leading-none">
        United<br /><span className="font-semibold text-[11px]">Healthcare</span>
      </div>
    </div>
  </div>
);

export const LogoCommunityHealth: React.FC = () => (
  <div className="flex items-center justify-center p-2.5 h-full">
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-1.5">
        <div className="w-6 h-6 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-orange-50">
          <span className="text-[10px] font-black text-emerald-600">✚</span>
        </div>
      </div>
      <span className="text-[9px] font-extrabold text-[#1565c0] tracking-wider mt-1">COMMUNITY HEALTH</span>
    </div>
  </div>
);

export const LogoHumana: React.FC = () => (
  <div className="flex items-center justify-center p-2.5 h-full">
    <span className="text-2xl font-black text-[#588e14] font-sans tracking-tight">Humana</span>
  </div>
);

export const LogoTexasChildrens: React.FC = () => (
  <div className="flex items-center justify-center p-2.5 h-full">
    <div className="flex flex-col items-center leading-none">
      <svg className="w-6 h-6 text-[#d9222a] mb-1" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L6 8h12zM6 9l-4 4h20l-4-4zM2 14l-2 3h24l-2-3z" />
      </svg>
      <span className="text-[10px] font-bold text-neutral-800 text-center">Texas Children's<br /><span className="font-normal text-[8.5px]">Hospital®</span></span>
    </div>
  </div>
);

export const LogoBlueCross: React.FC = () => (
  <div className="flex items-center justify-center p-2.5 h-full">
    <div className="flex items-center gap-1.5">
      <div className="w-6 h-6 bg-[#005ea6] text-white flex items-center justify-center rounded-sm font-bold text-xs">✚</div>
      <div className="w-6 h-6 bg-[#005ea6] text-white flex items-center justify-center rounded-sm">
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
      </div>
      <div className="text-left font-sans font-bold text-[10px] text-[#005ea6] leading-none ml-1">
        BlueCross<br />BlueShield
      </div>
    </div>
  </div>
);
