import React, { useState } from 'react';
import { Play, Pause, Volume2, Radio, Calendar, Music, Sparkles, MapPin } from 'lucide-react';
import { ARTISTS, ArtistItem } from '../data/festivalData';

export const ArtistsSection: React.FC = () => {
  const [playingArtistId, setPlayingArtistId] = useState<string | null>('art-1');

  const togglePlay = (id: string) => {
    if (playingArtistId === id) {
      setPlayingArtistId(null);
    } else {
      setPlayingArtistId(id);
    }
  };

  return (
    <section id="artists" className="py-24 relative overflow-hidden bg-[#0D0B10]/80">
      {/* Background Ambient Orb */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#8F3D52]/20 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-code text-[#C98F91] uppercase tracking-widest mb-2">
              <Radio className="w-4 h-4 text-[#D8B99A] animate-pulse" />
              <span>03 // HEADLINE PRO NITES & PERFORMERS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-cinzel text-chrome tracking-tight">
              FEATURED ARTISTS
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#F4EFE8]/70 max-w-xl">
              Immerse in live concerts, electro-classical symphonies, and world-class pro nites across 3 unforgettable evenings.
            </p>
          </div>

          <div className="glass-panel px-4 py-2.5 rounded-2xl border border-white/10 text-xs font-mono-code text-[#D8B99A] flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-[#C98F91]" />
            <span>4 PRO NITE CONCERTS INCLUDED IN ALL-ACCESS PASS</span>
          </div>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTISTS.map((artist) => {
            const isPlaying = playingArtistId === artist.id;
            return (
              <div
                key={artist.id}
                className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between space-y-6 relative overflow-hidden group"
              >
                {/* Background image tint */}
                <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity -z-10 overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B10] via-[#0D0B10]/90 to-transparent" />
                </div>

                {/* Top Info Bar */}
                <div className="flex items-center justify-between">
                  <span className="glass-pill px-3 py-1 rounded-full text-[10px] font-mono-code text-[#D8B99A] border border-[#D8B99A]/30">
                    {artist.time}
                  </span>

                  <div className="flex items-center space-x-2 text-xs font-mono-code text-[#C98F91]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{artist.date}</span>
                  </div>
                </div>

                {/* Artist Name & Genre */}
                <div className="space-y-2">
                  <div className="text-xs font-mono-code text-[#C98F91] tracking-widest uppercase">
                    {artist.role}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold font-cinzel text-chrome group-hover:text-white transition-colors">
                    {artist.name}
                  </h3>
                  <div className="text-xs font-mono-code text-[#F4EFE8]/60 flex items-center space-x-2">
                    <Music className="w-3.5 h-3.5 text-[#D8B99A]" />
                    <span>{artist.genre}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#F4EFE8]/70 leading-relaxed font-normal">
                  {artist.bio}
                </p>

                {/* Audio Teaser Widget */}
                {artist.popularTrack && (
                  <div className="glass-panel p-3.5 rounded-2xl border border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => togglePlay(artist.id)}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                          isPlaying
                            ? 'bg-[#8F3D52] text-white shadow-lg shadow-[#8F3D52]/50 scale-105'
                            : 'glass-pill text-[#D8B99A] hover:text-white'
                        }`}
                        aria-label="Play track teaser"
                      >
                        {isPlaying ? (
                          <Pause className="w-4 h-4" />
                        ) : (
                          <Play className="w-4 h-4 ml-0.5" />
                        )}
                      </button>

                      <div>
                        <div className="text-[10px] font-mono-code text-[#C98F91]">
                          FEATURED TRACK TEASER
                        </div>
                        <div className="text-xs font-bold text-[#F4EFE8] font-mono-code">
                          {artist.popularTrack}
                        </div>
                      </div>
                    </div>

                    {/* Equalizer Bars Simulation */}
                    <div className="flex items-end space-x-1 h-6 pr-2">
                      {[0.4, 0.9, 0.6, 1.0, 0.5, 0.8, 0.3].map((heightMultiplier, i) => (
                        <div
                          key={i}
                          className={`w-1 rounded-full transition-all duration-300 ${
                            isPlaying ? 'bg-[#C98F91] animate-pulse' : 'bg-white/20'
                          }`}
                          style={{
                            height: isPlaying ? `${heightMultiplier * 20}px` : '6px',
                            animationDelay: `${i * 150}ms`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Stage Tag */}
                <div className="pt-2 flex items-center justify-between text-xs font-mono-code text-[#F4EFE8]/50 border-t border-white/10">
                  <span className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8F3D52]" />
                    <span>{artist.stage}</span>
                  </span>
                  <span>SRMIST KATTANKULATHUR</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
