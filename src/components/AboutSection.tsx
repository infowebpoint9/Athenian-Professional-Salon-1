import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { ArrowRight, Check } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF5EE] relative overflow-hidden border-b border-[#A31621]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-8 h-[1.5px] bg-[#B76E79]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#B76E79]">
              The Athenian Philosophy
            </span>
            <span className="w-8 h-[1.5px] bg-[#B76E79]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#A31621] tracking-tight leading-[1.05]">
            Artistry, Precision & Warmth in Ghatkopar East.
          </h2>
        </div>

        {/* Split Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Imagery Grid */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Primary Salon Image */}
              <div className="border border-[#A31621]/20 bg-[#F3ECE0] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop"
                  alt="Stylist consulting client on bespoke hair color at Athenian Salon Mumbai"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center"
                />
              </div>

              {/* Offset Accent Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-60 sm:w-68 p-5 bg-[#FAF5EE] border border-[#A31621]/20 shadow-2xl text-[#A31621]">
                <span className="text-[10px] uppercase tracking-widest text-[#B76E79] font-bold block mb-1">
                  Verified Excellence
                </span>
                <span className="text-3xl font-serif font-bold text-[#A31621] block leading-none mb-1">
                  1,596+
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#A31621] block mb-2">
                  Satisfied Clients
                </span>
                <p className="text-[11px] text-[#A31621]/80 leading-relaxed">
                  Consistently rated 4.9★ on Google for precision cuts, balayage, and clinical skincare.
                </p>
              </div>

              {/* Architectural accent corners */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#B76E79] pointer-events-none" />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#A31621] mb-5 leading-tight">
              Every appointment is designed around your unique hair & skin goals.
            </h3>

            <p className="text-base text-[#A31621]/85 leading-relaxed mb-4">
              Located at Jayant Villa on Hingwala Lane, <strong>Athenian Professional</strong> is a boutique unisex salon dedicated to refined hairdressing, medical-grade skincare therapies, and timeless bridal artistry.
            </p>

            <p className="text-sm sm:text-base text-[#A31621]/80 leading-relaxed mb-6">
              We believe great beauty services begin with attentive consultation. Rather than applying one-size-fits-all treatments, our certified colorists and skin therapists evaluate your hair texture, skin sensitivity, and daily styling habits.
            </p>

            {/* Core Commitments List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5 pb-3 border-b border-[#A31621]/10">
                <span className="text-xs font-serif font-bold text-[#B76E79] uppercase tracking-widest pt-0.5">
                  01
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#A31621]">In-Depth Texture & Undertone Consultation</h4>
                  <p className="text-xs text-[#A31621]/75">No rushed appointments. We diagnose hair porosity and skin undertones first.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pb-3 border-b border-[#A31621]/10">
                <span className="text-xs font-serif font-bold text-[#B76E79] uppercase tracking-widest pt-0.5">
                  02
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#A31621]">Genuine Professional Products</h4>
                  <p className="text-xs text-[#A31621]/75">Formulations by L'Oréal Professionnel, Olaplex, Casmara, and certified organic Nanoplastia.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="text-xs font-serif font-bold text-[#B76E79] uppercase tracking-widest pt-0.5">
                  03
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[#A31621]">Uncompromising Hygiene Standards</h4>
                  <p className="text-xs text-[#A31621]/75">Medical autoclave sterilization for metal instruments and single-use consumables.</p>
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="about-book-btn"
                onClick={onOpenBooking}
                className="px-8 py-3.5 bg-[#A31621] hover:bg-[#B76E79] text-[#FAF5EE] text-xs font-bold uppercase tracking-[0.2em] shadow-sm transition-all flex items-center gap-2"
              >
                <span>Book Consultation</span>
                <ArrowRight size={14} className="text-[#FAF5EE]" />
              </button>

              <a
                id="about-call-btn"
                href={`tel:${SALON_INFO.phoneRaw}`}
                className="px-6 py-3.5 border border-[#A31621]/20 hover:border-[#B76E79] text-[#A31621] text-xs font-bold uppercase tracking-[0.16em] bg-[#F3ECE0] transition-all"
              >
                Call: {SALON_INFO.phone}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

