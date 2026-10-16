import React, { useState } from 'react';
import { WTFLogo } from './icons.tsx';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about-us', label: 'About Us' },
    { id: 'our-solution', label: 'Our Solution' },
    { id: 'for-schools', label: 'For Schools' },
    { id: 'for-parents', label: 'For Parents' },
    { id: 'for-investors', label: 'For Investors' },
    { id: 'pricing', label: 'Pricing' },
  ];

  const isHome = currentPage === 'home';

  return (
    <header 
      style={{ 
        border: 'none',
        borderTop: 'none',
        borderBottom: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderStyle: 'none',
        borderWidth: 0,
        boxShadow: 'none',
        backgroundColor: isHome ? '#D5FBFD' : '#ffffff',
      }}
      className={`w-full z-50 transition-colors border-none shadow-none ${
        isHome ? 'bg-[#D5FBFD]' : 'bg-white'
      }`}
    >
      <div 
        style={{ backgroundColor: isHome ? 'transparent' : '#ffffff' }}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isHome ? '' : 'bg-white'}`}
      >
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <div 
            onClick={() => onNavigate('home')} 
            className="cursor-pointer transition-transform hover:scale-[1.01]"
          >
            <WTFLogo />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`text-[15px] font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#145d9e] font-semibold'
                      : 'text-neutral-700 hover:text-[#145d9e]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Contact Us CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-6 py-2.5 rounded-full font-semibold text-[15px] text-white bg-[#ea580c] hover:bg-[#d84803] transition-all shadow-sm hover:shadow cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-neutral-700 hover:text-neutral-900"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md border-none px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                currentPage === link.id
                  ? 'bg-blue-50 text-[#145d9e] font-semibold'
                  : 'text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                onNavigate('contact-us');
                setMobileMenuOpen(false);
              }}
              className="w-full text-center px-4 py-2.5 rounded-full font-semibold text-white bg-[#ea580c] hover:bg-[#d84803]"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
