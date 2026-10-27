import React from 'react';

interface OrangeCTAProps {
  title: string;
  subtitle?: string;
  primaryButtonText?: string;
  onPrimaryClick?: () => void;
  secondaryButtonText?: string;
  onSecondaryClick?: () => void;
  imageSrc?: string;
  cardStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

export const OrangeCTA: React.FC<OrangeCTAProps> = ({
  title,
  subtitle,
  primaryButtonText,
  onPrimaryClick,
  secondaryButtonText,
  onSecondaryClick,
  imageSrc,
  cardStyle,
  containerStyle,
}) => {
  return (
    <div style={containerStyle} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div
        style={{ width: '1221px', marginLeft: '-3px', height: '246.2px', ...cardStyle }}
        className={`relative overflow-hidden rounded-[2.5rem] ${
          imageSrc ? '' : 'bg-gradient-to-r from-[#ea580c] via-[#ea580c] to-[#f97316]'
        } text-white flex flex-col items-center justify-center px-6 sm:px-12 text-center shadow-lg`}
      >
        {imageSrc ? (
          /* Background image */
          <img
            src={imageSrc}
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0"
          />
        ) : (
          <>
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
          </>
        )}

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-snug">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-3 text-sm sm:text-[15px] lg:text-base text-white/95 font-normal max-w-4xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mt-6">
            {primaryButtonText && onPrimaryClick && (
              <button
                onClick={onPrimaryClick}
                className={
                  secondaryButtonText
                    ? "px-7 py-2.5 sm:px-8 sm:py-2.5 rounded-full font-medium text-sm sm:text-base text-white border border-white hover:bg-white/15 transition-all cursor-pointer whitespace-nowrap"
                    : "px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base text-neutral-900 bg-white hover:bg-neutral-100 transition-all shadow-sm cursor-pointer whitespace-nowrap"
                }
              >
                {primaryButtonText}
              </button>
            )}

            {secondaryButtonText && onSecondaryClick && (
              <button
                onClick={onSecondaryClick}
                className="px-7 py-2.5 sm:px-8 sm:py-2.5 rounded-full font-medium text-sm sm:text-base text-neutral-900 bg-white hover:bg-neutral-100 transition-all shadow-sm cursor-pointer whitespace-nowrap"
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
