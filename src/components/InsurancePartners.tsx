import React from 'react';
import { StarIconTitle } from './icons.tsx';

interface InsurancePartnersProps {
  showTitle?: boolean;
}

export const InsurancePartners: React.FC<InsurancePartnersProps> = ({ showTitle = true }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {showTitle && (
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 flex items-center justify-center flex-wrap gap-2">
            <StarIconTitle />
            <span>Our insurance Partner</span>
            <StarIconTitle />
          </h2>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-center justify-items-center">
        <img
          src="/src/assets/images/Logo-01.webp"
          alt="UnitedHealthcare"
          className="w-full max-w-[225px] h-auto object-contain select-none transition-transform hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <img
          src="/src/assets/images/Logo-02.webp"
          alt="Community Health Choice"
          className="w-full max-w-[225px] h-auto object-contain select-none transition-transform hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <img
          src="/src/assets/images/Logo-03.webp"
          alt="Humana"
          className="w-full max-w-[225px] h-auto object-contain select-none transition-transform hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <img
          src="/src/assets/images/Logo-04.webp"
          alt="Texas Children's Hospital"
          className="w-full max-w-[225px] h-auto object-contain select-none transition-transform hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <img
          src="/src/assets/images/Logo-05.webp"
          alt="Blue Cross Blue Shield"
          className="w-full max-w-[225px] h-auto object-contain select-none transition-transform hover:scale-105 col-span-2 sm:col-span-1"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
};
