import React from 'react';
import { WHY_CHOOSE_US, SALON_INFO } from '../data/salonData';
import { Compass, Award, ShieldCheck, Sparkles, Coffee, CheckCircle2, Phone } from 'lucide-react';
import { motion } from 'motion/react';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass size={20} className="text-[#B76E79]" />;
      case 'Award':
        return <Award size={20} className="text-[#B76E79]" />;
      case 'ShieldCheck':
        return <ShieldCheck size={20} className="text-[#B76E79]" />;
      case 'Sparkles':
        return <Sparkles size={20} className="text-[#B76E79]" />;
      case 'Coffee':
        return <Coffee size={20} className="text-[#B76E79]" />;
      case 'CheckCircle2':
      default:
        return <CheckCircle2 size={20} className="text-[#B76E79]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#FAF5EE] relative overflow-hidden border-b border-[#A31621]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-8 h-[1.5px] bg-[#B76E79]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#B76E79]">
              The Athenian Standard
            </span>
            <span className="w-8 h-[1.5px] bg-[#B76E79]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#A31621] tracking-tight leading-[1.05] mb-4">
            Why Discerning Clients Choose Us
          </h2>
          <p className="text-sm sm:text-base text-[#A31621]/80 max-w-2xl mx-auto">
            A boutique salon experience combining technical mastery, uncompromising hygiene, and warm hospitality.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#F3ECE0]/60 hover:bg-[#F3ECE0] border border-[#A31621]/15 p-7 sm:p-8 transition-all duration-300 hover:border-[#B76E79] hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#A31621]/10">
                  <div className="w-11 h-11 bg-[#FAF5EE] border border-[#A31621]/15 flex items-center justify-center">
                    {getIcon(pillar.iconName)}
                  </div>
                  <span className="font-serif text-lg font-bold text-[#B76E79]">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#A31621] mb-3 group-hover:text-[#B76E79] transition-colors leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A31621]/85 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#A31621]/10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#B76E79]">
                <span>Pillar 0{idx + 1}</span>
                <span>•</span>
                <span>Athenian Protocol</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 sm:p-10 bg-[#A31621] text-[#FAF5EE] border border-[#A31621] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B76E79] block mb-1">
              Personalized Consultation
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold mb-2">
              Experience the Athenian Difference Today
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF5EE]/80 max-w-xl leading-relaxed">
              Book a one-on-one session with our master stylists and skin therapists at Jayant Villa, Ghatkopar East.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            <button
              id="why-us-book-btn"
              onClick={onOpenBooking}
              className="px-7 py-3.5 bg-[#FAF5EE] hover:bg-[#B76E79] hover:text-[#FAF5EE] text-[#A31621] text-xs font-bold uppercase tracking-[0.2em] shadow-sm transition-all"
            >
              Book Appointment
            </button>
            <a
              id="why-us-call-btn"
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="px-6 py-3.5 border border-[#FAF5EE]/30 hover:border-[#FAF5EE] text-[#FAF5EE] text-xs font-bold uppercase tracking-[0.16em] flex items-center gap-2 transition-all"
            >
              <Phone size={13} className="text-[#B76E79]" />
              <span>{SALON_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

