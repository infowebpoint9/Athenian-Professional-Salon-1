import React from 'react';
import { SALON_SERVICES } from '../data/salonData';
import { ArrowRight, Clock, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { SalonService } from '../types';

interface SignatureServicesProps {
  onSelectService: (service: SalonService) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const SignatureServices: React.FC<SignatureServicesProps> = ({
  onSelectService,
  onOpenBooking,
}) => {
  const signatureServices = SALON_SERVICES.filter((s) => s.isSignature);

  return (
    <section id="signature" className="py-20 md:py-28 bg-[#F3ECE0] border-b border-[#A31621]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[1.5px] bg-[#B76E79]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#B76E79]">
                Athenian Curations
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#A31621] tracking-tight leading-[1.05]">
              Signature Rituals
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A31621]/80 max-w-md">
            Our most requested and acclaimed treatments, crafted with medical-grade formulations and master artistry.
          </p>
        </div>

        {/* Signature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FAF5EE] border border-[#A31621]/20 flex flex-col editorial-shadow-hover group"
            >
              {/* Image with Tag */}
              <div className="relative h-64 overflow-hidden bg-[#A31621] border-b border-[#A31621]/15">
                <img
                  src={service.image}
                  alt={`${service.name} at Athenian Salon Mumbai`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#A31621] text-[#FAF5EE] px-3 py-1 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                  <Star size={10} className="text-[#B76E79] fill-[#B76E79]" />
                  <span>0{index + 1} • Signature</span>
                </div>
                {service.duration && (
                  <div className="absolute bottom-3 right-3 bg-[#FAF5EE] text-[#A31621] px-2.5 py-1 text-[11px] font-medium flex items-center gap-1 border border-[#A31621]/15">
                    <Clock size={11} className="text-[#B76E79]" />
                    <span>{service.duration}</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#A31621] mb-2.5 group-hover:text-[#B76E79] transition-colors leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A31621]/80 leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  {/* Bullet Highlights */}
                  {service.highlights && (
                    <ul className="space-y-2 mb-6">
                      {service.highlights.slice(0, 3).map((hl, i) => (
                        <li key={i} className="text-xs text-[#A31621]/85 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#B76E79] shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Bottom Row */}
                <div className="pt-4 border-t border-[#A31621]/15 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-[#A31621]/60 font-semibold">
                      Pricing
                    </span>
                    <span className="text-xs font-bold text-[#A31621]">
                      {service.priceNote}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      id={`sig-details-btn-${service.id}`}
                      onClick={() => onSelectService(service)}
                      className="px-3 py-1.5 text-xs text-[#A31621] font-bold hover:text-[#B76E79] uppercase tracking-wider"
                    >
                      Details
                    </button>
                    <button
                      id={`sig-book-btn-${service.id}`}
                      onClick={() => onOpenBooking(service.name)}
                      className="px-4 py-2 bg-[#A31621] hover:bg-[#B76E79] text-[#FAF5EE] text-xs font-bold uppercase tracking-[0.16em] transition-colors flex items-center gap-1.5"
                    >
                      <span>Book</span>
                      <ArrowRight size={12} className="text-[#FAF5EE]" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

