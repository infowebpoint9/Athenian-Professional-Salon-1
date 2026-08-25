import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Star, Phone, ArrowRight, Sparkles, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FAF5EE] border-b border-[#A31621]/10"
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B76E79]/10 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A31621]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column / Visual Brand Editorial Frame */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-6 sm:p-8 rounded-none border border-[#A31621]/15 bg-[#F3ECE0]/60 backdrop-blur-xs flex flex-col justify-between"
            >
              {/* Est. Mumbai 2024 Header */}
              <div className="flex items-center justify-between border-b border-[#A31621]/10 pb-4 mb-6">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#A31621]/70 font-semibold">
                  Est. Mumbai 2024
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#B76E79] font-bold">
                  Ghatkopar East
                </span>
              </div>

              {/* Main Image with Architectural Frame */}
              <div className="relative overflow-hidden border border-[#A31621]/20 bg-[#A31621] mb-6">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop"
                  alt="Athenian Salon Mumbai interior and luxury hair styling"
                  className="w-full h-72 sm:h-80 lg:h-88 object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B0407]/80 via-transparent to-black/10" />

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#FAF5EE]/95 backdrop-blur-md border border-[#A31621]/15 text-[#A31621]">
                  <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider mb-1">
                    <span className="text-[#A31621] font-serif text-xs">Athenian Professional</span>
                    <span className="text-[#B76E79] flex items-center gap-1 font-sans text-[10px]">
                      <Clock size={11} />
                      10 AM – 9 PM
                    </span>
                  </div>
                  <p className="text-[11px] text-[#A31621]/85 line-clamp-1">
                    Opp. Food Spot, Hingwala Lane • Hair, Skin & Bridal
                  </p>
                </div>
              </div>

              {/* Sub-quote & Rating */}
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-[#A31621] font-normal leading-snug mb-4">
                  “The Art of Personalised Hair & Skin Mastery.”
                </p>

                {/* Rating Stat Lockup */}
                <div className="pt-4 border-t border-[#A31621]/10 flex items-center gap-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={16} fill="currentColor" />
                    <span className="font-serif font-bold text-lg text-[#A31621]">4.9</span>
                  </div>
                  <div className="w-px h-7 bg-[#A31621]/20" />
                  <p className="text-xs text-[#A31621]/80 font-medium">
                    <strong>1,596+ Google Reviews</strong> • Premier Unisex Salon
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Main Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            
            {/* Top Micro Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[2px] bg-[#B76E79]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#B76E79]">
                Boutique Unisex Salon
              </span>
            </motion.div>

            {/* Massive Display Serif Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[88px] xl:text-[98px] font-bold tracking-tighter text-[#A31621] leading-[0.92] text-balance mb-6"
            >
              Your Beauty, <br />
              <span className="italic font-light text-[#B76E79]">Elevated</span> to Artistry.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#A31621]/85 font-normal leading-relaxed max-w-xl mb-8"
            >
              Athenian Professional delivers luxury hair styling, organic Nanoplastia, medical-grade HydraFacial therapies, and bespoke bridal aesthetics in the heart of Ghatkopar East, Mumbai.
            </motion.p>

            {/* 4-Item Numbered Category Quick Grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-[#A31621]/15 mb-8"
            >
              <a href="#services" className="group block">
                <span className="text-[10px] uppercase tracking-widest text-[#B76E79] font-bold block mb-1">
                  01 — Hair
                </span>
                <span className="font-serif text-base sm:text-lg font-semibold text-[#A31621] group-hover:text-[#B76E79] border-b border-transparent group-hover:border-[#B76E79] transition-all pb-0.5 inline-block">
                  Balayage & Cuts
                </span>
              </a>

              <a href="#services" className="group block">
                <span className="text-[10px] uppercase tracking-widest text-[#B76E79] font-bold block mb-1">
                  02 — Skin
                </span>
                <span className="font-serif text-base sm:text-lg font-semibold text-[#A31621] group-hover:text-[#B76E79] border-b border-transparent group-hover:border-[#B76E79] transition-all pb-0.5 inline-block">
                  HydraFacial
                </span>
              </a>

              <a href="#services" className="group block">
                <span className="text-[10px] uppercase tracking-widest text-[#B76E79] font-bold block mb-1">
                  03 — Nails
                </span>
                <span className="font-serif text-base sm:text-lg font-semibold text-[#A31621] group-hover:text-[#B76E79] border-b border-transparent group-hover:border-[#B76E79] transition-all pb-0.5 inline-block">
                  Gel Art & Spa
                </span>
              </a>

              <a href="#services" className="group block">
                <span className="text-[10px] uppercase tracking-widest text-[#B76E79] font-bold block mb-1">
                  04 — Bridal
                </span>
                <span className="font-serif text-base sm:text-lg font-semibold text-[#A31621] group-hover:text-[#B76E79] border-b border-transparent group-hover:border-[#B76E79] transition-all pb-0.5 inline-block">
                  Bridal Couture
                </span>
              </a>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5"
            >
              <button
                id="hero-book-cta"
                onClick={onOpenBooking}
                className="px-8 sm:px-10 py-4 bg-[#A31621] hover:bg-[#B76E79] text-[#FAF5EE] text-xs font-bold uppercase tracking-[0.2em] rounded-none sm:rounded-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 active:scale-[0.99]"
              >
                <span>Book Appointment</span>
                <ArrowRight size={15} className="text-[#FAF5EE]" />
              </button>

              <div className="flex items-center gap-3 px-3 py-1">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-[#A31621]/60 font-semibold">
                    Inquiry Line
                  </span>
                  <a
                    id="hero-inquiry-phone"
                    href={`tel:${SALON_INFO.phoneRaw}`}
                    className="font-bold text-sm sm:text-base text-[#A31621] hover:text-[#B76E79] transition-colors"
                  >
                    {SALON_INFO.phone}
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

