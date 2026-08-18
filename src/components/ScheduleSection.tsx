import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Sparkles, Filter, ChevronRight, CircleDot } from 'lucide-react';
import { SCHEDULE_DAYS, SCHEDULE_SLOTS, ScheduleSlot } from '../data/festivalData';

export const ScheduleSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [selectedStage, setSelectedStage] = useState<string>('All Stages');

  const stages = [
    'All Stages',
    'Main Stage Arena',
    'Amphitheatre Central',
    'Creative Tech Dome',
    'Black Box Theater',
    'Quadrangle Circle',
    'Garden Stage'
  ];

  const filteredSlots = SCHEDULE_SLOTS.filter((slot) => {
    const matchesDay = slot.day === activeDay;
    const matchesStage =
      selectedStage === 'All Stages' || slot.stage === selectedStage;
    return matchesDay && matchesStage;
  });

  return (
    <section id="schedule" className="py-24 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-[#8F3D52]/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-code text-[#C98F91] uppercase tracking-widest mb-2">
              <Calendar className="w-4 h-4 text-[#D8B99A]" />
              <span>04 // TIMELINE & SPATIAL SCHEDULE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-cinzel text-chrome tracking-tight">
              FESTIVAL SCHEDULE
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#F4EFE8]/70 max-w-xl">
              Explore 3 full days of consecutive performances, keynotes, battles, and pro-nites across multiple stages.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono-code text-[#D8B99A] glass-panel px-4 py-2 rounded-full border border-white/10">
            <CircleDot className="w-3.5 h-3.5 text-[#8F3D52] animate-ping" />
            <span>REAL-TIME STAGE TRACKER</span>
          </div>
        </div>

        {/* Day Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {SCHEDULE_DAYS.map((dayItem) => {
            const isActive = activeDay === dayItem.day;
            return (
              <button
                key={dayItem.day}
                onClick={() => setActiveDay(dayItem.day)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 relative overflow-hidden border ${
                  isActive
                    ? 'bg-[#8F3D52]/30 border-[#C98F91]/50 shadow-xl shadow-[#8F3D52]/30'
                    : 'glass-panel border-white/10 hover:border-white/20'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#8F3D52] via-[#C98F91] to-[#D8B99A]" />
                )}
                <div className="text-[10px] font-mono-code text-[#C98F91] tracking-widest uppercase mb-1">
                  DAY 0{dayItem.day}
                </div>
                <div className="text-xl font-bold font-cinzel text-[#F4EFE8]">
                  {dayItem.title}
                </div>
                <div className="text-xs font-mono-code text-[#D8B99A] mt-2 flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{dayItem.date}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Stage Filter Chips */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <Filter className="w-4 h-4 text-[#C98F91] shrink-0 mr-2 hidden sm:block" />
          {stages.map((stage) => (
            <button
              key={stage}
              onClick={() => setSelectedStage(stage)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono-code tracking-wider whitespace-nowrap transition-all ${
                selectedStage === stage
                  ? 'bg-[#8F3D52] text-white border border-[#C98F91] font-bold'
                  : 'glass-panel text-[#F4EFE8]/70 hover:text-white border-white/10'
              }`}
            >
              {stage}
            </button>
          ))}
        </div>

        {/* Timeline Grid */}
        <div className="space-y-4">
          {filteredSlots.length === 0 ? (
            <div className="glass-panel p-8 rounded-2xl text-center border border-white/10 text-xs font-mono-code text-[#C98F91]">
              NO SCHEDULED EVENTS ON THIS STAGE FOR DAY {activeDay}
            </div>
          ) : (
            filteredSlots.map((slot) => (
              <div
                key={slot.id}
                className="glass-panel glass-panel-hover p-5 sm:p-6 rounded-2xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                {/* Left: Time & Category */}
                <div className="flex items-start sm:items-center space-x-4 min-w-[220px]">
                  <div className="p-3 rounded-xl glass-pill text-[#D8B99A] font-mono-code text-xs font-bold text-center shrink-0">
                    <Clock className="w-4 h-4 mx-auto mb-1 text-[#C98F91]" />
                    <span>{slot.time}</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono-code text-[#C98F91] uppercase tracking-wider block">
                      {slot.category}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold font-cinzel text-[#F4EFE8] group-hover:text-chrome transition-colors">
                      {slot.title}
                    </h4>
                  </div>
                </div>

                {/* Right: Stage & Status */}
                <div className="flex items-center justify-between sm:justify-end space-x-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/10">
                  <div className="flex items-center space-x-1.5 text-xs font-mono-code text-[#F4EFE8]/70">
                    <MapPin className="w-3.5 h-3.5 text-[#D8B99A]" />
                    <span>{slot.stage}</span>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-mono-code font-bold tracking-wider ${
                      slot.status === 'LIVE NOW'
                        ? 'bg-[#8F3D52] text-white animate-pulse border border-[#C98F91]'
                        : slot.status === 'COMPLETED'
                        ? 'bg-white/10 text-[#F4EFE8]/40 border border-white/5'
                        : 'glass-pill text-[#D8B99A]'
                    }`}
                  >
                    {slot.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
