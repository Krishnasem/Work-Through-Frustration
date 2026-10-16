import React from 'react';

interface BannerHeroProps {
  title: string;
  subtitle?: string;
  actionButton?: {
    label: string;
    onClick: () => void;
  };
  cardStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  subtitleStyle?: React.CSSProperties;
  imageSrc?: string;
}

export const BannerHero: React.FC<BannerHeroProps> = ({
  title,
  subtitle,
  actionButton,
  cardStyle,
  titleStyle,
  subtitleStyle,
  imageSrc,
}) => {
  const isImageVariant = Boolean(imageSrc);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
      <div
        style={{
          borderTopLeftRadius: '2.5rem',
          borderBottomRightRadius: '2.5rem',
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 0,
          backgroundColor: '#D5FBFD',
          ...cardStyle,
        }}
        className={`relative overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-none rounded-bl-none py-16 px-6 sm:px-12 text-center flex flex-col items-center justify-center min-h-[175px] bg-[#D5FBFD] ${
          isImageVariant 
            ? 'shadow-sm' 
            : 'border border-cyan-100/50'
        }`}
      >
        {isImageVariant ? (
          /* Banner Image Background */
          <img
            src={imageSrc}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
          />
        ) : (
          <>
            {/* Left 4-petal clover floral watermark */}
            <div className="absolute left-6 sm:left-10 lg:left-14 top-1/2 -translate-y-1/2 pointer-events-none select-none">
              <svg className="w-24 h-24 sm:w-32 sm:h-32 text-[#bde6cb] opacity-90" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="27" r="23" />
                <circle cx="50" cy="73" r="23" />
                <circle cx="27" cy="50" r="23" />
                <circle cx="73" cy="50" r="23" />
                <circle cx="50" cy="50" r="20" />
              </svg>
            </div>

            {/* Right 4-armed rounded cross watermark */}
            <div className="absolute right-6 sm:right-10 lg:right-14 top-1/2 -translate-y-1/2 pointer-events-none select-none">
              <svg className="w-24 h-24 sm:w-32 sm:h-32 text-[#b0e8fb] opacity-90" viewBox="0 0 100 100" fill="currentColor">
                <rect x="36" y="8" width="28" height="84" rx="14" />
                <rect x="10" y="36" width="80" height="28" rx="14" />
              </svg>
            </div>
          </>
        )}

        <h1
          style={titleStyle}
          className={`relative z-10 text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight leading-tight max-w-4xl ${
            isImageVariant 
              ? 'text-[#eaf0f3] drop-shadow-sm' 
              : 'text-[#145d9e]'
          }`}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            style={subtitleStyle}
            className={`relative z-10 mt-4 text-base sm:text-lg max-w-2xl leading-relaxed ${
              isImageVariant 
                ? 'text-[#060606] drop-shadow-xs' 
                : 'text-neutral-600'
            }`}
          >
            {subtitle}
          </p>
        )}

        {actionButton && (
          <div className="relative z-10 mt-6">
            <button
              onClick={actionButton.onClick}
              className="px-8 py-3 rounded-full font-semibold text-white bg-[#ea580c] hover:bg-[#d84803] transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              {actionButton.label}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
