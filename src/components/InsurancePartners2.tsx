import React from 'react';
import { StarIconTitle } from './icons.tsx';

interface InsurancePartnersProps {
  showTitle?: boolean;
}

export const InsurancePartners: React.FC<InsurancePartnersProps> = ({ showTitle = true }) => {
  return (
    <section>
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