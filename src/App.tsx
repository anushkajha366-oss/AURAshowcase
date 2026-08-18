import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventsSection } from './components/EventsSection';
import { ArtistsSection } from './components/ArtistsSection';
import { ScheduleSection } from './components/ScheduleSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { EventItem } from './data/festivalData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // ScrollSpy to update active nav section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'events', 'artists', 'schedule', 'gallery', 'about'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenRegisterWithEvent = (event: EventItem) => {
    setSelectedEvent(event);
    setIsRegisterOpen(true);
  };

  const handleOpenRegisterGeneral = () => {
    setSelectedEvent(null);
    setIsRegisterOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0D0B10] text-[#F4EFE8] font-sans selection:bg-[#8F3D52] selection:text-white relative overflow-x-hidden">
      {/* Translucent Glass Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenRegister={handleOpenRegisterGeneral}
      />

      {/* Main Page Content Sections */}
      <main>
        {/* Fullscreen Spatial Hero */}
        <Hero
          onExploreEvents={() => handleNavigate('events')}
          onOpenRegister={handleOpenRegisterGeneral}
        />

        {/* Events Section */}
        <EventsSection
          onSelectEventToRegister={handleOpenRegisterWithEvent}
        />

        {/* Headline Artists Section */}
        <ArtistsSection />

        {/* Schedule & Timeline Section */}
        <ScheduleSection />

        {/* Digital Gallery & Archive */}
        <GallerySection />

        {/* About & Festival Heritage */}
        <AboutSection />
      </main>

      {/* Editorial Footer with Registration CTA */}
      <Footer
        onOpenRegister={handleOpenRegisterGeneral}
        onNavigate={handleNavigate}
      />

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        initialSelectedEvent={selectedEvent}
      />
    </div>
  );
}
