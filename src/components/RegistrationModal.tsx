import React, { useState } from 'react';
import {
  X,
  Ticket,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  QrCode,
  Download,
  Building,
  User,
  Mail,
  Phone
} from 'lucide-react';
import { PASS_OPTIONS, EventItem, FESTIVAL_INFO } from '../data/festivalData';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSelectedEvent?: EventItem | null;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  initialSelectedEvent
}) => {
  const [selectedPassId, setSelectedPassId] = useState<string>('pass-vip');
  const [step, setStep] = useState<'SELECT_PASS' | 'FILL_DETAILS' | 'CONFIRMATION'>('SELECT_PASS');

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    needAccommodation: false,
    selectedEventId: initialSelectedEvent?.id || ''
  });

  const [generatedPassId, setGeneratedPassId] = useState<string>('');

  if (!isOpen) return null;

  const currentPass = PASS_OPTIONS.find((p) => p.id === selectedPassId) || PASS_OPTIONS[1];

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'SELECT_PASS') {
      setStep('FILL_DETAILS');
    } else if (step === 'FILL_DETAILS') {
      const passCode = `AURA-26-${Math.floor(100000 + Math.random() * 900000)}`;
      setGeneratedPassId(passCode);
      setStep('CONFIRMATION');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D0B10]/85 backdrop-blur-2xl animate-fadeIn overflow-y-auto">
      <div className="glass-panel p-6 sm:p-8 rounded-3xl max-w-3xl w-full border border-[#C98F91]/30 relative my-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full glass-panel text-[#F4EFE8]/70 hover:text-white border border-white/10 transition-all z-20"
          aria-label="Close Registration Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6 pr-10">
          <div className="flex items-center space-x-2 text-xs font-mono-code text-[#C98F91]">
            <Ticket className="w-4 h-4 text-[#D8B99A]" />
            <span>OFFICIAL REGISTRATION PORTAL // AURA '26</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-cinzel text-chrome">
            {step === 'CONFIRMATION' ? 'PASS GENERATED!' : 'REGISTER FOR AURA ’26'}
          </h2>

          {initialSelectedEvent && step !== 'CONFIRMATION' && (
            <div className="inline-block bg-[#8F3D52]/30 px-3 py-1 rounded-full border border-[#C98F91]/30 text-xs font-mono-code text-[#F4EFE8]">
              SELECTED EVENT: <span className="font-bold text-[#D8B99A]">{initialSelectedEvent.title}</span>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-xs font-mono-code">
          <div className={`flex items-center space-x-2 ${step === 'SELECT_PASS' ? 'text-white font-bold' : 'text-[#F4EFE8]/40'}`}>
            <span className="w-5 h-5 rounded-full bg-[#8F3D52] flex items-center justify-center text-[10px] text-white">1</span>
            <span>CHOOSE PASS</span>
          </div>

          <div className="h-[1px] bg-white/10 flex-1 mx-4" />

          <div className={`flex items-center space-x-2 ${step === 'FILL_DETAILS' ? 'text-white font-bold' : 'text-[#F4EFE8]/40'}`}>
            <span className="w-5 h-5 rounded-full bg-[#8F3D52] flex items-center justify-center text-[10px] text-white">2</span>
            <span>DELEGATE DETAILS</span>
          </div>

          <div className="h-[1px] bg-white/10 flex-1 mx-4" />

          <div className={`flex items-center space-x-2 ${step === 'CONFIRMATION' ? 'text-white font-bold' : 'text-[#F4EFE8]/40'}`}>
            <span className="w-5 h-5 rounded-full bg-[#8F3D52] flex items-center justify-center text-[10px] text-white">3</span>
            <span>DIGITAL PASS</span>
          </div>
        </div>

        {/* STEP 1: SELECT PASS */}
        {step === 'SELECT_PASS' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PASS_OPTIONS.map((pass) => {
                const isSelected = selectedPassId === pass.id;
                return (
                  <div
                    key={pass.id}
                    onClick={() => setSelectedPassId(pass.id)}
                    className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 relative flex flex-col justify-between space-y-4 border ${
                      isSelected
                        ? 'bg-[#8F3D52]/30 border-[#C98F91] shadow-xl shadow-[#8F3D52]/40 scale-[1.02]'
                        : 'glass-panel border-white/10 hover:border-white/20'
                    }`}
                  >
                    {pass.popular && (
                      <span className="absolute -top-3 left-4 bg-gradient-to-r from-[#8F3D52] to-[#D8B99A] text-white text-[9px] font-mono-code font-bold px-2.5 py-0.5 rounded-full border border-white/20 uppercase">
                        MOST POPULAR
                      </span>
                    )}

                    <div>
                      <span className="text-[10px] font-mono-code text-[#C98F91] uppercase block mb-1">
                        {pass.type}
                      </span>
                      <h3 className="text-xl font-bold font-cinzel text-white">
                        {pass.name}
                      </h3>
                      <div className="text-3xl font-bold font-cinzel text-chrome mt-2">
                        {pass.price}
                      </div>
                    </div>

                    <ul className="space-y-2 text-[11px] font-mono-code text-[#F4EFE8]/80 border-t border-white/10 pt-3">
                      {pass.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B99A] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`py-2 rounded-xl text-center text-xs font-mono-code font-bold transition-all ${
                      isSelected ? 'bg-[#8F3D52] text-white' : 'glass-pill text-[#F4EFE8]/70'
                    }`}>
                      {isSelected ? 'SELECTED' : 'SELECT PASS'}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={handleNextStep}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8F3D52] via-[#B84D6A] to-[#8F3D52] text-white font-mono-code text-xs font-bold tracking-wider hover:scale-105 transition-all shadow-xl shadow-[#8F3D52]/40"
              >
                CONTINUE TO DELEGATE DETAILS →
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: FILL DETAILS */}
        {step === 'FILL_DETAILS' && (
          <form onSubmit={handleNextStep} className="space-y-5">
            <div className="p-4 rounded-2xl glass-panel border border-white/10 flex items-center justify-between text-xs font-mono-code">
              <div>
                <span className="text-[#C98F91]">SELECTED PASS:</span>{' '}
                <span className="text-white font-bold">{currentPass.name} ({currentPass.price})</span>
              </div>
              <button
                type="button"
                onClick={() => setStep('SELECT_PASS')}
                className="text-[#D8B99A] underline hover:text-white"
              >
                Change Pass
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-code text-[#C98F91] mb-1.5">
                  FULL NAME *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#F4EFE8]/40" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full glass-panel pl-10 pr-4 py-3 rounded-xl text-xs font-mono-code text-white border border-white/10 focus:outline-none focus:border-[#C98F91]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code text-[#C98F91] mb-1.5">
                  EMAIL ADDRESS *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#F4EFE8]/40" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@college.edu"
                    className="w-full glass-panel pl-10 pr-4 py-3 rounded-xl text-xs font-mono-code text-white border border-white/10 focus:outline-none focus:border-[#C98F91]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code text-[#C98F91] mb-1.5">
                  MOBILE NUMBER *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#F4EFE8]/40" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full glass-panel pl-10 pr-4 py-3 rounded-xl text-xs font-mono-code text-white border border-white/10 focus:outline-none focus:border-[#C98F91]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code text-[#C98F91] mb-1.5">
                  COLLEGE / UNIVERSITY *
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#F4EFE8]/40" />
                  <input
                    type="text"
                    required
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    placeholder="SRM Institute of Science & Tech"
                    className="w-full glass-panel pl-10 pr-4 py-3 rounded-xl text-xs font-mono-code text-white border border-white/10 focus:outline-none focus:border-[#C98F91]"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 glass-panel p-4 rounded-xl border border-white/10">
              <input
                type="checkbox"
                id="accommodate"
                checked={formData.needAccommodation}
                onChange={(e) => setFormData({ ...formData, needAccommodation: e.target.checked })}
                className="w-4 h-4 rounded border-white/20 bg-black text-[#8F3D52] focus:ring-0"
              />
              <label htmlFor="accommodate" className="text-xs font-mono-code text-[#F4EFE8] cursor-pointer">
                I require on-campus student hostel accommodation during 24–26 October 2026
              </label>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep('SELECT_PASS')}
                className="px-6 py-3 rounded-full glass-panel text-xs font-mono-code text-[#F4EFE8]/70 hover:text-white"
              >
                ← BACK
              </button>

              <button
                type="submit"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8F3D52] via-[#B84D6A] to-[#8F3D52] text-white font-mono-code text-xs font-bold tracking-wider hover:scale-105 transition-all shadow-xl shadow-[#8F3D52]/40"
              >
                GENERATE OFFICIAL PASS →
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: DIGITAL PASS CONFIRMATION */}
        {step === 'CONFIRMATION' && (
          <div className="space-y-6 text-center">
            {/* Ticket Card Preview */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#D8B99A]/40 max-w-md mx-auto relative overflow-hidden text-left space-y-6 shadow-2xl">
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#8F3D52] via-[#C98F91] to-[#D8B99A]" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="font-cinzel text-xl font-bold text-chrome tracking-widest">
                    AURA '26
                  </span>
                  <div className="text-[9px] font-mono-code text-[#C98F91]">
                    SRMIST CULTURAL FESTIVAL
                  </div>
                </div>

                <div className="glass-pill px-3 py-1 rounded-full text-[10px] font-mono-code text-[#D8B99A]">
                  CONFIRMED
                </div>
              </div>

              <div className="space-y-3 font-mono-code text-xs">
                <div>
                  <span className="text-[#F4EFE8]/50 text-[10px] block">DELEGATE NAME</span>
                  <span className="text-white font-bold text-base">{formData.fullName || 'Alex Rivera'}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[#F4EFE8]/50 text-[10px] block">PASS TYPE</span>
                    <span className="text-[#D8B99A] font-bold">{currentPass.name}</span>
                  </div>
                  <div>
                    <span className="text-[#F4EFE8]/50 text-[10px] block">DATE</span>
                    <span className="text-[#C98F91] font-bold">24–26 OCT 2026</span>
                  </div>
                </div>

                <div>
                  <span className="text-[#F4EFE8]/50 text-[10px] block">INSTITUTION</span>
                  <span className="text-white">{formData.college || 'SRMIST Chennai'}</span>
                </div>
              </div>

              {/* QR Code Simulation */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono-code text-[#F4EFE8]/50 block">PASS ID CODE</span>
                  <span className="text-xs font-mono-code text-[#D8B99A] font-bold tracking-wider">
                    {generatedPassId}
                  </span>
                </div>

                <div className="p-2 bg-white rounded-xl shadow-lg">
                  <QrCode className="w-12 h-12 text-black" />
                </div>
              </div>
            </div>

            <p className="text-xs font-mono-code text-[#F4EFE8]/70 max-w-sm mx-auto">
              Your digital entry pass has been emailed to <span className="text-[#D8B99A]">{formData.email || 'your email'}</span>. Present this QR pass at the SRMIST entrance gate.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={onClose}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8F3D52] to-[#B84D6A] text-white font-mono-code text-xs font-bold tracking-wider shadow-lg shadow-[#8F3D52]/40"
              >
                DONE & RETURN TO FESTIVAL
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
