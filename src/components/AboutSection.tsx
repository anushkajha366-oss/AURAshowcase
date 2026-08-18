import React from 'react';
import { Compass, Sparkles, MapPin, Building2, Globe2, ShieldCheck, Award } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#8F3D52]/20 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Spatial UI Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Festival Philosophy & SRMIST Heritage */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono-code text-[#C98F91] uppercase tracking-widest mb-2">
                <Compass className="w-4 h-4 text-[#D8B99A]" />
                <span>06 // THE ARCHITECTURE OF AURA</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold font-cinzel text-chrome tracking-tight leading-tight">
                WHERE CREATIVITY COMES ALIVE
              </h2>
              <p className="mt-4 text-base text-[#F4EFE8]/80 leading-relaxed font-normal">
                AURA is SRM Institute of Science and Technology's flagship national cultural festival. Conceived as a celebration of human imagination and creative expression, AURA transforms the campus into an immersive digital & visual art gallery for 3 unforgettable days.
              </p>
            </div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-mono-code text-[#D8B99A]">
                  <Globe2 className="w-4 h-4 text-[#C98F91]" />
                  <span>NATIONWIDE CREATIVE HUB</span>
                </div>
                <p className="text-xs text-[#F4EFE8]/70 leading-relaxed">
                  Welcoming 10,000+ delegates and artists from 150+ institutes across India.
                </p>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-mono-code text-[#D8B99A]">
                  <Award className="w-4 h-4 text-[#C98F91]" />
                  <span>INDUSTRY BENCHMARK</span>
                </div>
                <p className="text-xs text-[#F4EFE8]/70 leading-relaxed">
                  Evaluated by acclaimed directors, vocalists, fashion curators, and digital artists.
                </p>
              </div>
            </div>

            {/* Campus & Location Details */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center space-x-3 text-sm font-mono-code text-[#D8B99A]">
                <MapPin className="w-5 h-5 text-[#8F3D52]" />
                <span className="font-bold text-white">VENUE & ACCESSIBILITY</span>
              </div>

              <p className="text-xs text-[#F4EFE8]/80 leading-relaxed">
                SRM Institute of Science and Technology, Kattankulathur Campus, Chennai. Spanning 250 acres with state-of-the-art auditoriums, open-air amphitheaters, tech domes, and luxury design lounges.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono-code text-[#C98F91]">
                <span>LAT: 12.8231° N</span>
                <span>•</span>
                <span>LON: 80.0444° E</span>
                <span>•</span>
                <span>SRM KATTANKULATHUR</span>
              </div>
            </div>
          </div>

          {/* Right Column: Spatial Visual Layers Card Stack */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel p-8 rounded-3xl border border-[#C98F91]/30 shadow-2xl relative z-10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center space-x-2 font-mono-code text-xs text-[#D8B99A]">
                  <Building2 className="w-4 h-4 text-[#C98F91]" />
                  <span>SRMIST CULTURAL REGISTRY</span>
                </div>
                <span className="text-[10px] font-mono-code text-[#C98F91] border border-[#C98F91]/30 px-2 py-0.5 rounded">
                  ESTD. 2008
                </span>
              </div>

              {/* Fast Facts */}
              <div className="space-y-4 font-mono-code text-xs">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-[#F4EFE8]/60">ESTIMATED FOOTFALL</span>
                  <span className="text-white font-bold">10,000+ CREATIVES</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-[#F4EFE8]/60">TOTAL EVENTS</span>
                  <span className="text-[#D8B99A] font-bold">20+ COMPETITIONS</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-[#F4EFE8]/60">TOTAL PRIZE POOL</span>
                  <span className="text-[#C98F91] font-bold">₹10,00,000 INR</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-[#F4EFE8]/60">PRO NITE ACTS</span>
                  <span className="text-white font-bold">4 HEADLINERS</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-[#F4EFE8]/60">ACCOMMODATION</span>
                  <span className="text-[#D8B99A] font-bold">AVAILABLE ON CAMPUS</span>
                </div>
              </div>

              {/* Quote Footer */}
              <div className="p-4 rounded-2xl bg-[#8F3D52]/20 border border-[#8F3D52]/40 text-center">
                <p className="text-xs italic font-cinzel text-[#F4EFE8]">
                  "Art is not what you see, but what you make others feel."
                </p>
              </div>
            </div>

            {/* Overlapping Decorative Layer */}
            <div className="absolute -bottom-6 -right-6 w-full h-full glass-panel rounded-3xl border border-white/5 -z-10 hidden sm:block opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};
