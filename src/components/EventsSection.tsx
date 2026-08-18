import React, { useState, useMemo } from 'react';
import {
  Search,
  Trophy,
  Users,
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  ArrowRight,
  X,
  Filter,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { EVENTS, CATEGORIES, EventItem } from '../data/festivalData';

interface EventsSectionProps {
  onSelectEventToRegister: (event: EventItem) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({
  onSelectEventToRegister
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Domains');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);

  const filteredEvents = useMemo(() => {
    return EVENTS.filter((event) => {
      const matchesCategory =
        selectedCategory === 'All Domains' || event.category === selectedCategory;
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.domain.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="events" className="py-24 relative overflow-hidden">
      {/* Background Lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8F3D52]/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#D8B99A]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-code text-[#C98F91] uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4 text-[#D8B99A]" />
              <span>02 // COMPETITIONS & SHOWCASES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-cinzel text-chrome tracking-tight">
              FESTIVAL EVENTS
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#F4EFE8]/70 max-w-xl">
              20+ flagship challenges designed to showcase visionary talent, performance art, and technical innovation.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <div className="glass-panel px-4 py-2 rounded-full border border-white/10 text-xs font-mono-code text-[#D8B99A]">
              TOTAL PRIZE POOL: <span className="text-white font-bold">₹10,00,000+</span>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search Input */}
        <div className="space-y-6 mb-12">
          {/* Category Chips */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            <Filter className="w-4 h-4 text-[#C98F91] shrink-0 mr-1 hidden sm:block" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono-code tracking-wider whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#8F3D52] text-white border border-[#C98F91]/50 shadow-lg shadow-[#8F3D52]/40 font-bold'
                    : 'glass-panel text-[#F4EFE8]/70 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#C98F91]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search event title, domain, or key rules..."
              className="w-full glass-panel pl-11 pr-4 py-3 rounded-full text-xs font-mono-code text-white placeholder-[#F4EFE8]/40 border border-white/10 focus:outline-none focus:border-[#C98F91] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#F4EFE8]/50 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div className="glass-panel p-12 rounded-3xl text-center border border-white/10 max-w-md mx-auto my-12">
            <p className="text-sm font-mono-code text-[#C98F91]">NO EVENTS FOUND MATCHING YOUR FILTER</p>
            <p className="text-xs text-[#F4EFE8]/60 mt-2">Try clearing your search or switching categories.</p>
            <button
              onClick={() => {
                setSelectedCategory('All Domains');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#8F3D52] text-white font-mono-code text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="glass-panel glass-panel-hover rounded-3xl overflow-hidden group flex flex-col justify-between border border-white/10 relative"
              >
                {/* Event Image Banner */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B10] via-[#0D0B10]/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="glass-pill px-3 py-1 rounded-full text-[10px] font-mono-code text-white font-bold uppercase tracking-wider">
                      {event.category}
                    </span>

                    <span className="glass-panel bg-[#0D0B10]/80 px-2.5 py-1 rounded-full text-[10px] font-mono-code text-[#D8B99A] border border-[#D8B99A]/30 font-bold flex items-center space-x-1">
                      <Trophy className="w-3 h-3 text-[#D8B99A]" />
                      <span>{event.prizePool}</span>
                    </span>
                  </div>

                  {/* Event Domain Tag */}
                  <div className="absolute bottom-3 left-3 text-[10px] font-mono-code text-[#C98F91] tracking-wider uppercase bg-[#0D0B10]/90 px-2.5 py-1 rounded-md border border-white/10">
                    {event.domain}
                  </div>
                </div>

                {/* Event Info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-cinzel text-[#F4EFE8] group-hover:text-chrome transition-colors">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#F4EFE8]/70 line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Metadata Chips */}
                  <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono-code text-[#F4EFE8]/80 border-t border-white/10">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C98F91]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C98F91]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D8B99A]" />
                      <span className="truncate">{event.venue}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Users className="w-3.5 h-3.5 text-[#D8B99A]" />
                      <span>{event.teamSize}</span>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-2 flex items-center space-x-3">
                    <button
                      onClick={() => setActiveModalEvent(event)}
                      className="flex-1 py-2.5 rounded-xl glass-panel text-xs font-mono-code text-[#F4EFE8] hover:text-white hover:border-[#C98F91]/50 transition-all border border-white/10"
                    >
                      RULES & DETAILS
                    </button>

                    <button
                      onClick={() => onSelectEventToRegister(event)}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#8F3D52] to-[#B84D6A] text-white font-mono-code text-xs font-bold hover:scale-105 transition-all shadow-md shadow-[#8F3D52]/30 flex items-center space-x-1"
                    >
                      <span>REGISTER</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Event Details Modal */}
      {activeModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D0B10]/80 backdrop-blur-xl animate-fadeIn">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl max-w-2xl w-full border border-[#C98F91]/30 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setActiveModalEvent(null)}
              className="absolute top-4 right-4 p-2 rounded-full glass-panel text-[#F4EFE8]/70 hover:text-white border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono-code text-[#C98F91]">
                <span>{activeModalEvent.category}</span>
                <span>•</span>
                <span>{activeModalEvent.domain}</span>
              </div>
              <h3 className="text-3xl font-bold font-cinzel text-chrome">
                {activeModalEvent.title}
              </h3>

              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono-code text-[#D8B99A]">
                <span className="bg-[#8F3D52]/30 px-3 py-1 rounded-full border border-[#C98F91]/30 font-bold text-white">
                  PRIZE POOL: {activeModalEvent.prizePool}
                </span>
                <span>TEAM SIZE: {activeModalEvent.teamSize}</span>
              </div>
            </div>

            {/* Modal Image */}
            <div className="my-6 rounded-2xl overflow-hidden h-60 relative border border-white/10">
              <img
                src={activeModalEvent.image}
                alt={activeModalEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B10] via-transparent to-transparent" />
            </div>

            {/* Description & Rules */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono-code text-[#C98F91] tracking-widest uppercase mb-2">
                  EVENT OVERVIEW
                </h4>
                <p className="text-sm text-[#F4EFE8]/80 leading-relaxed">
                  {activeModalEvent.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono-code text-[#C98F91] tracking-widest uppercase mb-3">
                  RULES & JUDGING CRITERIA
                </h4>
                <ul className="space-y-2 text-xs text-[#F4EFE8]/80 font-mono-code">
                  {activeModalEvent.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D8B99A] shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Schedule and venue breakdown */}
              <div className="p-4 rounded-2xl glass-panel border border-white/10 grid grid-cols-2 gap-4 text-xs font-mono-code text-[#F4EFE8]">
                <div>
                  <span className="text-[#C98F91] block mb-1">DATE & TIME</span>
                  <span>{activeModalEvent.date} @ {activeModalEvent.time}</span>
                </div>
                <div>
                  <span className="text-[#D8B99A] block mb-1">VENUE</span>
                  <span>{activeModalEvent.venue}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center space-x-4">
                <button
                  onClick={() => {
                    const ev = activeModalEvent;
                    setActiveModalEvent(null);
                    onSelectEventToRegister(ev);
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#8F3D52] via-[#B84D6A] to-[#8F3D52] text-white font-mono-code text-xs font-bold tracking-wider hover:scale-[1.02] transition-all shadow-xl shadow-[#8F3D52]/40"
                >
                  PROCEED TO REGISTER FOR THIS EVENT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
