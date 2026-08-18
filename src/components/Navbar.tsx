import React, { useState, useEffect } from 'react';
import { Menu, X, Ticket, Sparkles, Calendar, MapPin } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenRegister
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'events', label: 'Events' },
    { id: 'artists', label: 'Artists' },
    { id: 'about', label: 'About' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'gallery', label: 'Gallery' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-nav py-3.5 shadow-2xl shadow-black/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate('hero')}
          className="group text-left flex items-center space-x-3 focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8F3D52] via-[#C98F91]/40 to-[#D8B99A]/20 border border-[#C98F91]/30 flex items-center justify-center font-cinzel font-bold text-lg text-white shadow-lg shadow-[#8F3D52]/30 group-hover:border-[#D8B99A] transition-all duration-300">
            A
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-widest text-chrome">
                AURA
              </span>
              <span className="text-xs font-mono-code text-[#C98F91] border border-[#C98F91]/30 px-1.5 py-0.5 rounded">
                '26
              </span>
            </div>
            <p className="text-[10px] font-mono-code text-[#F4EFE8]/50 tracking-wider hidden sm:block">
              SRMIST CULTURAL FESTIVAL
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 glass-panel px-4 py-2 rounded-full border border-white/10 shadow-xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-mono-code tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[#F4EFE8]/70 hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-[#8F3D52]/60 rounded-full border border-[#C98F91]/40 shadow-md shadow-[#8F3D52]/50 -z-10" />
                )}
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Live Indicator */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-[11px] font-mono-code text-[#D8B99A] bg-[#16111C]/80 px-3 py-1.5 rounded-full border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C98F91] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8F3D52]"></span>
            </span>
            <span>24–26 OCT 2026</span>
          </div>

          <button
            onClick={onOpenRegister}
            className="glass-pill px-5 py-2.5 rounded-full text-xs font-mono-code font-bold tracking-wider text-white flex items-center space-x-2 group transition-all duration-300"
          >
            <Ticket className="w-4 h-4 text-[#D8B99A] group-hover:rotate-12 transition-transform" />
            <span>REGISTER NOW</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={onOpenRegister}
            className="glass-pill px-3.5 py-1.5 rounded-full text-[11px] font-mono-code font-bold text-white flex items-center space-x-1.5"
          >
            <Ticket className="w-3.5 h-3.5 text-[#D8B99A]" />
            <span>REGISTER</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl glass-panel text-[#F4EFE8] border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[70px] bg-[#0D0B10]/95 backdrop-blur-2xl border-b border-[#C98F91]/20 shadow-2xl p-6 transition-all animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-xl font-mono-code text-sm tracking-wider flex items-center justify-between transition-all ${
                  activeSection === link.id
                    ? 'bg-[#8F3D52]/40 text-white border border-[#C98F91]/30'
                    : 'text-[#F4EFE8]/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#C98F91]">0{navLinks.indexOf(link) + 1}</span>
              </button>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
              <div className="flex items-center justify-between text-xs font-mono-code text-[#D8B99A]">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-[#C98F91]" />
                  <span>24–26 OCT 2026</span>
                </span>
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C98F91]" />
                  <span>SRMIST</span>
                </span>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#8F3D52] to-[#B84D6A] text-white font-mono-code font-bold text-sm tracking-wider shadow-lg shadow-[#8F3D52]/40 flex items-center justify-center space-x-2"
              >
                <Ticket className="w-4 h-4" />
                <span>REGISTER FOR AURA '26</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
