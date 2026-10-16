import React from 'react';

interface OrangeCTAProps {
  title: string;
  subtitle?: string;
  primaryButtonText?: string;
  onPrimaryClick?: () => void;
  secondaryButtonText?: string;
  onSecondaryClick?: () => void;
}

export const OrangeCTA: React.FC<OrangeCTAProps> = ({
  title,
  subtitle,
  primaryButtonText,
  onPrimaryClick,
  secondaryButtonText,
  onSecondaryClick,
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div
        style={{ width: '1221px', marginLeft: '-3px', height: '246.2px' }}
        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#ea580c] via-[#ea580c] to-[#f97316] text-white py-14 px-6 sm:px-12 text-center shadow-lg"
      >
        {/* Left floral watermark */}
        <div className="absolute left-6 sm:left-14 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none select-none">
          <svg className="w-24 h-24 sm:w-36 sm:h-36 text-amber-200" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C40 25 25 40 0 50 C25 60 40 75 50 100 C60 75 75 60 100 50 C75 40 60 25 50 0 Z" />
          </svg>
        </div>

        {/* Right floral watermark */}
        <div className="absolute right-6 sm:right-14 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none select-none">
          <svg className="w-24 h-24 sm:w-36 sm:h-36 text-amber-200" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C40 25 25 40 0 50 C25 60 40 75 50 100 C60 75 75 60 100 50 C75 40 60 25 50 0 Z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-tight leading-tight">
            {title}
          </h2>

          {subtitle && (
            <p className="text-base sm:text-lg text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            {primaryButtonText && onPrimaryClick && (
              <button
                onClick={onPrimaryClick}
                className="px-8 py-3 rounded-full font-semibold text-neutral-800 bg-white hover:bg-neutral-50 transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                {primaryButtonText}
              </button>
            )}

            {secondaryButtonText && onSecondaryClick && (
              <button
                onClick={onSecondaryClick}
                className="px-8 py-3 rounded-full font-semibold text-white bg-transparent border-2 border-white hover:bg-white/10 transition-all shadow-sm cursor-pointer"
              >
                {secondaryButtonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
