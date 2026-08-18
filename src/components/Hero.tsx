import React from 'react';
import { ArrowUpRight, Calendar, MapPin, Sparkles, Compass, ShieldCheck, Flame } from 'lucide-react';
import { Sculpture3D } from './Sculpture3D';
import { FESTIVAL_INFO } from '../data/festivalData';

interface HeroProps {
  onExploreEvents: () => void;
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreEvents, onOpenRegister }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 overflow-hidden flex flex-col justify-between">
      {/* Background Spatial Grid & Ambient Wine Glows */}
      <div className="absolute inset-0 bg-[#0D0B10] -z-20" />

      {/* Spatial Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #C98F91 1px, transparent 1px), linear-gradient(to bottom, #C98F91 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      {/* Atmospheric Radial Ambient Light Spheres */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#8F3D52]/30 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#8F3D52]/20 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#D8B99A]/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Top Micro-Metadata Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pt-4 text-xs font-mono-code text-[#C98F91]/80 border-b border-white/5 pb-3">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center space-x-1.5 bg-[#8F3D52]/20 px-2.5 py-1 rounded border border-[#C98F91]/30 text-[#F4EFE8]">
              <Flame className="w-3.5 h-3.5 text-[#C98F91]" />
              <span>ANNUAL CULTURAL EDITION</span>
            </span>
            <span className="hidden sm:inline-block text-[#F4EFE8]/40">•</span>
            <span className="hidden sm:inline-block text-[#D8B99A]">VOL 26.0 // CREATIVE FESTIVAL</span>
          </div>

          <div className="flex items-center space-x-4 text-[11px] text-[#F4EFE8]/50">
            <span>COORD: {FESTIVAL_INFO.coordinates}</span>
            <span>STATUS: REGISTRATION OPEN</span>
          </div>
        </div>

        {/* Hero Asymmetrical Spatial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Typography & Content */}
          <div className="lg:col-span-6 space-y-8 text-left z-10">
            
            {/* Festival Date & Venue Badge */}
            <div className="inline-flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 glass-panel p-2.5 px-4 rounded-2xl border border-white/10 text-xs font-mono-code">
              <div className="flex items-center space-x-2 text-[#D8B99A]">
                <Calendar className="w-4 h-4 text-[#C98F91]" />
                <span className="font-bold text-[#F4EFE8]">{FESTIVAL_INFO.date}</span>
              </div>
              <span className="hidden sm:block text-white/20">|</span>
              <div className="flex items-center space-x-2 text-[#F4EFE8]/80">
                <MapPin className="w-4 h-4 text-[#C98F91]" />
                <span className="truncate">{FESTIVAL_INFO.venue}</span>
              </div>
            </div>

            {/* Title & Editorial Tagline */}
            <div className="space-y-3">
              <div className="inline-block text-[11px] font-mono-code text-[#C98F91] tracking-[0.3em] uppercase">
                // COLLEGE CULTURAL FESTIVAL
              </div>
              <h1 className="text-6xl sm:text-7xl xl:text-8xl font-bold font-cinzel tracking-tight text-chrome leading-[0.95] drop-shadow-2xl">
                AURA ’26
              </h1>
              <p className="text-2xl sm:text-3xl font-light text-[#F4EFE8] italic tracking-wide pt-2 font-cinzel border-l-2 border-[#8F3D52] pl-4">
                "{FESTIVAL_INFO.tagline}"
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-[#F4EFE8]/70 leading-relaxed max-w-xl font-normal">
              Step into a multidimensional creative realm where high-fashion runway, electrifying pro-nites, street theater, and generative art converge. Experience 3 days of non-stop artistic mastery at SRMIST Kattankulathur.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreEvents}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#8F3D52] via-[#B84D6A] to-[#8F3D52] text-white font-mono-code text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl shadow-[#8F3D52]/40 hover:shadow-2xl hover:shadow-[#8F3D52]/70 hover:scale-[1.02] flex items-center space-x-3 overflow-hidden"
              >
                <span className="relative z-10">EXPLORE EVENTS</span>
                <ArrowUpRight className="w-4 h-4 text-[#D8B99A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <button
                onClick={onOpenRegister}
                className="glass-pill px-8 py-4 rounded-full text-white font-mono-code text-xs font-bold tracking-widest uppercase flex items-center space-x-3 group transition-all duration-300 hover:border-[#D8B99A]/60"
              >
                <span>REGISTER NOW</span>
                <Sparkles className="w-4 h-4 text-[#C98F91] group-hover:rotate-45 transition-transform" />
              </button>
            </div>

            {/* Micro details footnote */}
            <div className="pt-4 flex items-center space-x-6 text-[11px] font-mono-code text-[#F4EFE8]/40">
              <span>150+ UNIVERSITIES</span>
              <span>•</span>
              <span>₹10,00,000+ PRIZE POOL</span>
              <span>•</span>
              <span>PRO NITES & EXHIBITIONS</span>
            </div>
          </div>

          {/* Right Column: 3D Glass Sculpture */}
          <div className="lg:col-span-6 relative">
            <Sculpture3D onInteract={onExploreEvents} />
          </div>
        </div>

        {/* Floating Glass Stats Cards Below Hero */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {FESTIVAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group border border-white/10"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#8F3D52] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono-code text-[#C98F91] tracking-widest block mb-1">
                    0{idx + 1} // STATISTIC
                  </span>
                  <div className="text-4xl lg:text-5xl font-bold font-cinzel text-chrome tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <h3 className="text-sm font-bold text-[#F4EFE8] font-mono-code tracking-wide">
                    {stat.label.split(' ')[1] || 'Category'}
                  </h3>
                </div>

                <div className="p-3 rounded-xl glass-pill text-[#D8B99A] group-hover:scale-110 transition-transform">
                  {idx === 0 && <Sparkles className="w-5 h-5 text-[#D8B99A]" />}
                  {idx === 1 && <Compass className="w-5 h-5 text-[#C98F91]" />}
                  {idx === 2 && <ShieldCheck className="w-5 h-5 text-[#F4EFE8]" />}
                </div>
              </div>

              <p className="mt-3 text-xs text-[#F4EFE8]/70 leading-relaxed">
                {stat.description} — <span className="text-[#C98F91] font-mono-code">{stat.detail}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
