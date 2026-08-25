import React from 'react';
import { LogoCrest } from './LogoCrest';
import { SALON_INFO, SERVICE_CATEGORIES } from '../data/salonData';
import { Phone, MapPin, Instagram, Clock, ArrowUp, Star } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#200508] text-[#FAF5EE] pt-16 pb-12 border-t border-[#A31621]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#FAF5EE]/10">
          
          {/* Col 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <LogoCrest variant="white" size="lg" />
            <p className="text-xs sm:text-sm text-[#FAF5EE]/80 leading-relaxed max-w-sm pt-2">
              Athenian Professional is a premier unisex salon in Ghatkopar East, Mumbai. Dedicated to precision hair design, clinical skincare, Nanoplastia, and bespoke bridal beauty.
            </p>
            
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 p-3 bg-[#2D090E] border border-[#A31621]/60 text-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="currentColor" />
                ))}
              </div>
              <span className="font-bold text-[#FAF5EE]">4.9★</span>
              <span className="text-[#FAF5EE]/70 font-semibold">• 1,596+ Google Reviews</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#B76E79]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF5EE]/80 font-medium">
              <li>
                <a href="#home" className="hover:text-[#B76E79] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#B76E79] transition-colors">About Athenian</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B76E79] transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#signature" className="hover:text-[#B76E79] transition-colors">Signature Rituals</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#B76E79] transition-colors">Client Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#B76E79] transition-colors">Google Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#B76E79] transition-colors">Location & Hours</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#B76E79]">
              Service Menus
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF5EE]/80 font-medium">
              {SERVICE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a href="#services" className="hover:text-[#B76E79] transition-colors flex items-center justify-between">
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-[#B76E79]">↗</span>
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-[#B76E79] hover:underline font-bold text-xs mt-2 uppercase tracking-wider"
                >
                  + Reserve Custom Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Visit & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#B76E79]">
              Athenian Studio
            </h4>
            
            <div className="flex items-start gap-2.5 text-[#FAF5EE]/80">
              <MapPin size={15} className="text-[#B76E79] shrink-0 mt-0.5" />
              <span>
                Shop No.2, Jayant Villa, Hingwala Ln, opp. Food Spot, Ghatkopar East, Mumbai, 400077
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-[#FAF5EE]/80">
              <Clock size={15} className="text-[#B76E79] shrink-0" />
              <span>10:00 AM – 9:00 PM (Daily)</span>
            </div>

            <div className="flex items-center gap-2.5 text-[#FAF5EE]/80 pt-1">
              <Phone size={15} className="text-[#B76E79] shrink-0" />
              <a href={`tel:${SALON_INFO.phoneRaw}`} className="font-bold text-[#FAF5EE] hover:text-[#B76E79]">
                {SALON_INFO.phone}
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <a
                id="footer-insta-btn"
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#2D090E] hover:bg-[#B76E79] hover:text-[#200508] text-[#FAF5EE] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                id="footer-gmaps-btn"
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#2D090E] hover:bg-[#B76E79] hover:text-[#200508] text-[#FAF5EE] transition-colors"
                aria-label="Google Maps"
              >
                <MapPin size={15} />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF5EE]/60">
          <div>
            © {new Date().getFullYear()} Athenian Salon Mumbai (Athenian Professional). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] uppercase tracking-wider">Premium Unisex Salon in Ghatkopar East</span>
            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="p-2.5 bg-[#2D090E] hover:bg-[#B76E79] hover:text-[#200508] text-[#FAF5EE] transition-all"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

