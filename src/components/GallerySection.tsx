import React, { useState } from 'react';
import { Camera, Sparkles, X, ZoomIn, Eye, Heart } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/festivalData';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Stages & Lighting', 'Dance', 'Exhibitions', 'Music', 'Fashion', 'Crowd'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[#0D0B10]/90">
      {/* Background Lights */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#8F3D52]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-code text-[#C98F91] uppercase tracking-widest mb-2">
              <Camera className="w-4 h-4 text-[#D8B99A]" />
              <span>05 // DIGITAL ART EXHIBITION & ARCHIVE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-cinzel text-chrome tracking-tight">
              FESTIVAL GALLERY
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#F4EFE8]/70 max-w-xl">
              Immerse in moments captured across past editions of AURA — a visual archive of lights, emotion, and artistic energy.
            </p>
          </div>

          <div className="glass-panel px-4 py-2 rounded-full border border-white/10 text-xs font-mono-code text-[#D8B99A]">
            EXHIBITION ARCHIVE // 2024–2025
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono-code tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#8F3D52] text-white border border-[#C98F91] font-bold shadow-lg shadow-[#8F3D52]/40'
                  : 'glass-panel text-[#F4EFE8]/70 hover:text-white border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="glass-panel rounded-3xl overflow-hidden group cursor-pointer border border-white/10 relative h-80 transition-all duration-500 hover:scale-[1.02]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B10] via-[#0D0B10]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Top Details */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="glass-pill px-3 py-1 rounded-full text-[10px] font-mono-code text-[#D8B99A]">
                  {item.category}
                </span>
                <span className="text-[10px] font-mono-code text-[#C98F91] bg-[#0D0B10]/80 px-2.5 py-1 rounded-full border border-white/10">
                  {item.year}
                </span>
              </div>

              {/* Bottom Title & Zoom Hint */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <h3 className="text-lg font-bold font-cinzel text-[#F4EFE8] group-hover:text-chrome transition-colors">
                    {item.title}
                  </h3>
                  {item.photographer && (
                    <p className="text-[10px] font-mono-code text-[#F4EFE8]/50 mt-0.5">
                      PHOTO: {item.photographer}
                    </p>
                  )}
                </div>

                <div className="p-2.5 rounded-full glass-panel text-[#D8B99A] group-hover:scale-110 transition-transform border border-white/10">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D0B10]/95 backdrop-blur-2xl animate-fadeIn">
          <button
            onClick={() => setLightboxItem(null)}
            className="absolute top-6 right-6 p-3 rounded-full glass-panel text-white hover:border-[#C98F91] transition-all border border-white/10 z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full glass-panel p-4 sm:p-6 rounded-3xl border border-[#C98F91]/30 shadow-2xl space-y-4">
            <div className="relative rounded-2xl overflow-hidden max-h-[70vh] border border-white/10 flex items-center justify-center bg-black">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono-code">
              <div>
                <div className="text-[#C98F91] uppercase">{lightboxItem.category} // {lightboxItem.year}</div>
                <h3 className="text-2xl font-bold font-cinzel text-chrome mt-1">
                  {lightboxItem.title}
                </h3>
              </div>

              {lightboxItem.photographer && (
                <div className="text-[#F4EFE8]/60 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                  PHOTOGRAPHER: <span className="text-white">{lightboxItem.photographer}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
