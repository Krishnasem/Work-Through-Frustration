import React from 'react';

export type ProblemIconType = 
  | 'classroom-disruption' 
  | 'academic-disengagement' 
  | 'peer-conflict' 
  | 'emotional-dysregulation' 
  | 'emotional-shutdown'
  | 'increased-referrals';

interface ProblemCardProps {
  title: string;
  iconType: ProblemIconType;
  description?: string;
  className?: string;
  onClick?: () => void;
}

export const ProblemCardIcon: React.FC<{ type: ProblemIconType; className?: string }> = ({ type, className = 'w-10 h-10 sm:w-11 sm:h-11' }) => {
  switch (type) {
    case 'classroom-disruption':
      return (
        <svg className={`${className} text-[#2165AD]`} viewBox="0 0 100 100" fill="none" aria-hidden="true">
          {/* Teacher */}
          <circle cx="30" cy="30" r="6" fill="#2165AD" />
          <path d="M 23 41 C 23 38 37 38 37 41 L 37 56 C 37 58 33 60 30 60 C 27 60 23 58 23 56 Z" fill="#2165AD" />
          {/* Pointer arm */}
          <path d="M 32 43 C 36 43 42 41 49 38 L 66 32" stroke="#2165AD" strokeWidth="4.5" strokeLinecap="round" />
          {/* Board */}
          <rect x="44" y="24" width="34" height="26" rx="3" fill="#2165AD" />
          <path d="M 46 43 L 68 32" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          {/* Students */}
          <circle cx="34" cy="65" r="4.5" fill="#2165AD" />
          <path d="M 27 79 C 27 71 41 71 41 79 Z" fill="#2165AD" />
          <circle cx="51" cy="65" r="4.5" fill="#2165AD" />
          <path d="M 44 79 C 44 71 58 71 58 79 Z" fill="#2165AD" />
          <circle cx="68" cy="65" r="4.5" fill="#2165AD" />
          <path d="M 61 79 C 61 71 75 71 75 79 Z" fill="#2165AD" />
        </svg>
      );

    case 'academic-disengagement':
      return (
        <svg className={`${className} text-[#2165AD]`} viewBox="0 0 100 100" fill="none" aria-hidden="true">
          {/* Mortarboard Diamond Top */}
          <path d="M 18 42 L 50 30 L 82 42 L 50 54 Z" fill="#2165AD" />
          {/* Cap Base */}
          <path d="M 32 49 L 32 60 C 32 69 68 69 68 60 L 68 49 C 62 52 56 54 50 54 C 44 54 38 52 32 49 Z" fill="#2165AD" />
          {/* Tassel Cord & Pendant */}
          <path d="M 50 42 L 76 48 L 76 66" stroke="#2165AD" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="71" y="66" width="10" height="15" rx="5" fill="#2165AD" />
        </svg>
      );

    case 'peer-conflict':
      return (
        <svg className={`${className} text-[#2165AD]`} viewBox="0 0 100 100" fill="none" aria-hidden="true">
          {/* Left Person */}
          <circle cx="30" cy="40" r="7" fill="#2165AD" />
          <path d="M 18 68 C 18 55 42 55 42 68 Z" fill="#2165AD" />
          {/* Right Person */}
          <circle cx="70" cy="40" r="7" fill="#2165AD" />
          <path d="M 58 68 C 58 55 82 55 82 68 Z" fill="#2165AD" />
          {/* Dynamic Conflict Spark */}
          <path d="M 52 24 L 45 40 L 53 40 L 47 56 L 57 38 L 50 38 Z" fill="#2165AD" />
        </svg>
      );

    case 'emotional-dysregulation':
    case 'emotional-shutdown':
      return (
        <svg className={`${className} text-[#2165AD]`} viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <g fill="#2165AD">
            {/* Left Brain Hemisphere */}
            <path d="M 47 24 C 41 24 37 27 35 30 C 31 29 27 32 25 36 C 22 40 23 45 26 48 C 23 52 23 57 26 61 C 24 65 26 70 30 73 C 34 76 39 76 43 74 C 45 75 47 75 48 74 L 48 64 C 47 62 46 60 44 59 C 41 57 37 54 37 47 C 37 42 41 38 46 38 C 47 38 48 38 49 39 L 49 24 C 48 24 48 24 47 24 Z" />
            {/* Right Brain Hemisphere */}
            <path d="M 53 24 C 59 24 63 27 65 30 C 69 29 73 32 75 36 C 78 40 77 45 74 48 C 77 52 77 57 74 61 C 76 65 74 70 70 73 C 66 76 61 76 57 74 C 55 75 53 75 52 74 L 52 64 C 53 62 54 60 56 59 C 59 57 63 54 63 47 C 63 42 59 38 54 38 C 53 38 52 38 51 39 L 51 24 C 52 24 52 24 53 24 Z" />
            {/* Center Heart cutout */}
            <path d="M 50 63 L 42 54 C 38 50 38 43 43 39 C 47 36 50 38 50 41 C 50 38 53 36 57 39 C 62 43 62 50 58 54 Z" fill="none" stroke="#2165AD" strokeWidth="4.5" strokeLinejoin="round" />
            <rect x="47.5" y="62" width="5" height="12" rx="2.5" />
            <rect x="47.5" y="24" width="5" height="10" rx="2.5" />
          </g>
        </svg>
      );

    case 'increased-referrals':
      return (
        <svg className={`${className} text-[#2165AD]`} viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <g fill="#2165AD">
            <rect x="22" y="72" width="56" height="4" rx="2" />
            <rect x="26" y="60" width="9" height="12" rx="2.5" />
            <rect x="39" y="50" width="9" height="22" rx="2.5" />
            <rect x="52" y="40" width="9" height="32" rx="2.5" />
            <rect x="65" y="30" width="9" height="42" rx="2.5" />
            <path d="M 24 55 C 38 48 54 36 72 24" stroke="#2165AD" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M 62 23 L 76 22 L 74 36 Z" fill="#2165AD" />
          </g>
        </svg>
      );

    default:
      return null;
  }
};

export const ProblemCard: React.FC<ProblemCardProps> = ({
  title,
  iconType,
  description,
  className = '',
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-gradient-to-b from-[#F7FCFE] to-[#E2F8FC] border border-[#d6f0f7]/80 rounded-t-2xl rounded-b-[30px] p-8 flex flex-col items-center text-center justify-center min-h-[220px] sm:min-h-[240px] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Sky Blue Circular Icon Container */}
      <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#B8EEFC] flex items-center justify-center mb-6 shadow-xs transition-transform duration-300 group-hover:scale-105">
        <ProblemCardIcon type={iconType} />
      </div>

      {/* Dark Navy Title */}
      <h3 className="text-lg sm:text-xl font-bold text-[#24364B] leading-snug tracking-tight">
        {title}
      </h3>

      {/* Optional Description */}
      {description && (
        <p className="mt-2 text-sm sm:text-base text-[#24364B]/80 font-normal leading-relaxed max-w-xs">
          {description}
        </p>
      )}
    </div>
  );
};