import React, { useState } from 'react';
import { SALON_INFO, SALON_FAQ } from '../data/salonData';
import { MapPin, Phone, Clock, MessageCircle, ArrowUpRight, ChevronDown, ChevronUp, Navigation, Calendar } from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF5EE] relative border-b border-[#A31621]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-Contact Luxury CTA Banner */}
        <div className="mb-20 bg-[#A31621] text-[#FAF5EE] p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-[#A31621]">
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[1.5px] bg-[#B76E79]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#B76E79]">
                Elevate Your Everyday
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-[1.05]">
              Ready for Your Next Look?
            </h2>
            <p className="text-sm sm:text-base text-[#FAF5EE]/85 mb-8 max-w-xl leading-relaxed">
              Step into Athenian Salon for personalized hair styling, radiant skin rituals, and bridal couture in Ghatkopar East. Our team is ready to welcome you.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                id="cta-banner-book-btn"
                onClick={onOpenBooking}
                className="px-8 py-3.5 bg-[#FAF5EE] hover:bg-[#B76E79] hover:text-[#FAF5EE] text-[#A31621] text-xs font-bold uppercase tracking-[0.2em] shadow-sm transition-all flex items-center gap-2"
              >
                <Calendar size={14} className="text-[#A31621]" />
                <span>Book Appointment</span>
              </button>

              <a
                id="cta-banner-wa-btn"
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-[0.16em] transition-all flex items-center gap-2"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Us</span>
              </a>

              <a
                id="cta-banner-call-btn"
                href={`tel:${SALON_INFO.phoneRaw}`}
                className="px-6 py-3.5 border border-[#FAF5EE]/30 hover:border-[#FAF5EE] text-[#FAF5EE] text-xs font-bold uppercase tracking-[0.16em] transition-all flex items-center gap-2"
              >
                <Phone size={14} className="text-[#B76E79]" />
                <span>Call +91 9321016619</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-8 h-[1.5px] bg-[#B76E79]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#B76E79]">
              Visit Our Studio
            </span>
            <span className="w-8 h-[1.5px] bg-[#B76E79]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#A31621] tracking-tight leading-[1.05] mb-4">
            Location & Hours
          </h2>
          <p className="text-sm text-[#A31621]/80">
            Conveniently situated in Ghatkopar East, directly opposite Food Spot on Hingwala Lane.
          </p>
        </div>

        {/* 2-Column: Details Card + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Address Card */}
            <div className="p-6 bg-[#F3ECE0] border border-[#A31621]/15 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#FAF5EE] border border-[#A31621]/15 flex items-center justify-center text-[#A31621] shrink-0 mt-0.5">
                  <MapPin size={18} className="text-[#B76E79]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#A31621] mb-1">
                    Athenian Salon Mumbai
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A31621]/85 leading-relaxed mb-3">
                    {SALON_INFO.address}
                  </p>
                  <a
                    id="contact-directions-link"
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#B76E79] hover:underline"
                  >
                    <Navigation size={12} />
                    <span>Get Directions on Google Maps</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 bg-[#F3ECE0] border border-[#A31621]/15 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#FAF5EE] border border-[#A31621]/15 flex items-center justify-center text-[#A31621] shrink-0 mt-0.5">
                  <Clock size={18} className="text-[#B76E79]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-[#A31621] mb-1">
                    Operating Schedule
                  </h3>
                  <div className="flex justify-between items-center text-xs text-[#A31621]/85 py-1.5 border-b border-[#A31621]/10">
                    <span>Monday – Sunday</span>
                    <span className="font-bold text-[#A31621]">10:00 AM – 9:00 PM</span>
                  </div>
                  <p className="text-[11px] text-[#A31621]/70 mt-2">
                    Open all 7 days a week including public holidays.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Connect Card */}
            <div className="p-6 bg-[#F3ECE0] border border-[#A31621]/15 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#FAF5EE] border border-[#A31621]/15 flex items-center justify-center text-[#A31621] shrink-0 mt-0.5">
                  <Phone size={18} className="text-[#B76E79]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-[#A31621] mb-1">
                    Direct Appointments
                  </h3>
                  <p className="text-xs text-[#A31621]/80 mb-2">
                    Call our reception for instant slot availability.
                  </p>
                  <a
                    id="contact-phone-direct"
                    href={`tel:${SALON_INFO.phoneRaw}`}
                    className="font-serif text-2xl font-bold text-[#A31621] hover:text-[#B76E79] transition-colors block"
                  >
                    {SALON_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Map Component */}
          <div className="lg:col-span-7">
            <div className="border border-[#A31621]/20 shadow-md bg-[#F3ECE0] h-[440px] relative">
              <iframe
                title="Athenian Salon Mumbai Google Maps Location"
                src="https://maps.google.com/maps?q=Athenian%20Salon%20Jayant%20Villa%20Hingwala%20Lane%20Ghatkopar%20East%20Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.9] contrast-[1.05]"
              />
              
              {/* Overlay Badge for fast directions */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF5EE]/95 backdrop-blur-md p-4 border border-[#A31621]/20 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-bold text-[#A31621]">
                    Athenian Salon Mumbai
                  </div>
                  <div className="text-[11px] text-[#A31621]/80">
                    Hingwala Lane, Opp. Food Spot, Ghatkopar East
                  </div>
                </div>
                <a
                  id="map-directions-btn"
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#A31621] hover:bg-[#B76E79] text-[#FAF5EE] text-xs font-bold uppercase tracking-[0.16em] flex items-center justify-center gap-1.5 shrink-0 transition-colors"
                >
                  <Navigation size={12} className="text-[#FAF5EE]" />
                  <span>Open in Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Salon FAQ Section */}
        <div className="max-w-3xl mx-auto pt-10 border-t border-[#A31621]/15">
          <div className="text-center mb-10">
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#B76E79] block mb-1">
              Need Assistance?
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#A31621]">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {SALON_FAQ.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#A31621]/15 bg-[#F3ECE0]/60 overflow-hidden transition-colors"
                >
                  <button
                    id={`faq-toggle-${idx}`}
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-serif font-bold text-[#B76E79]">
                        0{idx + 1}
                      </span>
                      <span className="font-serif text-base sm:text-lg font-bold text-[#A31621]">
                        {faq.q}
                      </span>
                    </div>
                    <span className="text-[#B76E79] shrink-0">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#A31621]/85 leading-relaxed border-t border-[#A31621]/10 pt-3.5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

