import React from 'react';
import { ArrowUpRight, Sparkles, MapPin, Mail, Phone, Heart, Globe } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';

interface FooterProps {
  onOpenRegister: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegister, onNavigate }) => {
  return (
    <footer className="relative pt-20 pb-12 overflow-hidden bg-[#07050A] border-t border-white/10">
      {/* Background Wine Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-96 bg-[#8F3D52]/20 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Large Final Call To Action Banner */}
        <div className="glass-panel p-8 sm:p-12 lg:p-16 rounded-3xl border border-[#C98F91]/30 text-center relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8F3D52]/20 via-transparent to-[#D8B99A]/10 group-hover:opacity-100 transition-opacity" />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <span className="inline-flex items-center space-x-2 glass-pill px-4 py-1.5 rounded-full text-xs font-mono-code text-[#D8B99A]">
              <Sparkles className="w-3.5 h-3.5 text-[#C98F91]" />
              <span>BE PART OF THE CREATIVE REVOLUTION</span>
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-cinzel text-chrome tracking-tight leading-tight">
              REGISTER FOR AURA ’26
            </h2>

            <p className="text-sm sm:text-base text-[#F4EFE8]/70 font-normal">
              Secure your place among 10,000+ creators, artists, and innovators at SRM Institute of Science and Technology.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenRegister}
                className="px-10 py-4 rounded-full bg-gradient-to-r from-[#8F3D52] via-[#B84D6A] to-[#8F3D52] text-white font-mono-code text-xs font-bold tracking-widest uppercase hover:scale-105 transition-all shadow-2xl shadow-[#8F3D52]/50 inline-flex items-center space-x-3"
              >
                <span>CLAIM YOUR FESTIVAL PASS</span>
                <ArrowUpRight className="w-4 h-4 text-[#D8B99A]" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-8 border-t border-white/5 font-mono-code text-xs">
          {/* Col 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2">
              <span className="font-cinzel text-2xl font-bold text-chrome">AURA '26</span>
            </div>
            <p className="text-[#F4EFE8]/60 text-xs leading-relaxed font-sans">
              Where Creativity Comes Alive. The annual national cultural festival of SRMIST Kattankulathur.
            </p>
            <div className="text-[11px] text-[#C98F91]">
              COORD: {FESTIVAL_INFO.coordinates}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <div className="text-[#D8B99A] uppercase tracking-wider font-bold">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-[#F4EFE8]/70">
              <li><button onClick={() => onNavigate('hero')} className="hover:text-white">Home</button></li>
              <li><button onClick={() => onNavigate('events')} className="hover:text-white">Events & Competitions</button></li>
              <li><button onClick={() => onNavigate('artists')} className="hover:text-white">Headline Artists</button></li>
              <li><button onClick={() => onNavigate('schedule')} className="hover:text-white">Festival Schedule</button></li>
              <li><button onClick={() => onNavigate('gallery')} className="hover:text-white">Gallery & Archive</button></li>
            </ul>
          </div>

          {/* Col 3: Domains */}
          <div className="space-y-3">
            <div className="text-[#D8B99A] uppercase tracking-wider font-bold">
              CREATIVE DOMAINS
            </div>
            <ul className="space-y-2 text-[#F4EFE8]/60">
              <li>Music & Sound Synthesis</li>
              <li>Choreonite & Dance Motion</li>
              <li>Vogue Avant-Garde Fashion</li>
              <li>Street Play & Improv Theater</li>
              <li>Generative Art & Creative Code</li>
            </ul>
          </div>

          {/* Col 4: Venue & Contact */}
          <div className="space-y-3">
            <div className="text-[#D8B99A] uppercase tracking-wider font-bold">
              VENUE & INQUIRIES
            </div>
            <p className="text-[#F4EFE8]/60 text-xs font-sans">
              {FESTIVAL_INFO.venue}<br />
              {FESTIVAL_INFO.location}
            </p>
            <div className="space-y-1 text-[#C98F91]">
              <div>Email: aura2026@srmist.edu.in</div>
              <div>Phone: +91 (044) 2741 7000</div>
            </div>
          </div>
        </div>

        {/* Bottom Micro Footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-code text-[#F4EFE8]/40 gap-4">
          <div>
            © 2026 AURA FESTIVAL COMMITTEE // SRM INSTITUTE OF SCIENCE & TECHNOLOGY
          </div>

          <div className="flex items-center space-x-6">
            <span>TERMS & CONDITIONS</span>
            <span>CODE OF CONDUCT</span>
            <span>PRIVACY POLICY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
