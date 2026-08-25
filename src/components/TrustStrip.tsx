import React from 'react';
import { Star, ShieldCheck, MapPin, Award } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-[#F3ECE0] border-b border-[#A31621]/15 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y-0 md:divide-x md:divide-[#A31621]/15 items-center">
          
          {/* Trust Pillar 1: Google Rating */}
          <a
            id="trust-strip-google-reviews"
            href={SALON_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 px-0 md:px-6 group hover:opacity-90 transition-opacity"
          >
            <div className="w-12 h-12 border border-[#A31621]/20 bg-[#FAF5EE] flex items-center justify-center shrink-0 group-hover:border-[#B76E79] transition-colors">
              <Star size={18} className="text-amber-500 fill-amber-500" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#B76E79] font-bold block">
                01 • Google Verified
              </span>
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#A31621]">
                4.9 / 5.0
              </div>
              <p className="text-[11px] text-[#A31621]/75 font-medium">
                1,596+ Live Reviews
              </p>
            </div>
          </a>

          {/* Trust Pillar 2: Professional Unisex Salon */}
          <div className="flex items-center gap-3.5 px-0 md:px-6">
            <div className="w-12 h-12 border border-[#A31621]/20 bg-[#FAF5EE] flex items-center justify-center shrink-0">
              <Award size={18} className="text-[#B76E79]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#B76E79] font-bold block">
                02 • Certification
              </span>
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#A31621]">
                Unisex Studio
              </div>
              <p className="text-[11px] text-[#A31621]/75 font-medium">
                Master Hair & Skin Artists
              </p>
            </div>
          </div>

          {/* Trust Pillar 3: Medical-Grade Hygiene */}
          <div className="flex items-center gap-3.5 px-0 md:px-6">
            <div className="w-12 h-12 border border-[#A31621]/20 bg-[#FAF5EE] flex items-center justify-center shrink-0">
              <ShieldCheck size={18} className="text-[#B76E79]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#B76E79] font-bold block">
                03 • Clean Protocol
              </span>
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#A31621]">
                100% Sanitized
              </div>
              <p className="text-[11px] text-[#A31621]/75 font-medium">
                Autoclaved & Single-Use
              </p>
            </div>
          </div>

          {/* Trust Pillar 4: Prime Ghatkopar Location */}
          <a
            id="trust-strip-location"
            href={SALON_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 px-0 md:px-6 group hover:opacity-90 transition-opacity"
          >
            <div className="w-12 h-12 border border-[#A31621]/20 bg-[#FAF5EE] flex items-center justify-center shrink-0 group-hover:border-[#B76E79] transition-colors">
              <MapPin size={18} className="text-[#A31621]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#B76E79] font-bold block">
                04 • Location
              </span>
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#A31621]">
                Ghatkopar E
              </div>
              <p className="text-[11px] text-[#A31621]/75 font-medium">
                Jayant Villa, Hingwala Lane
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

