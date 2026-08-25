import React from 'react';
import { SalonService } from '../types';
import { SALON_INFO } from '../data/salonData';
import { X, Clock, Sparkles, Check, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceDetailModalProps {
  service: SalonService | null;
  onClose: () => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenBooking,
}) => {
  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Athenian Salon Mumbai, I am inquiring about the ${service.name} service. Could you share current availability and consultation details?`
  );
  const whatsappUrl = `https://wa.me/${SALON_INFO.phoneRaw}?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#200508]/80 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative bg-[#FAF5EE] border border-[#A31621]/20 shadow-2xl max-w-2xl w-full overflow-hidden z-10 my-8 text-[#A31621]"
        >
          {/* Top Banner Image */}
          <div className="relative h-60 sm:h-72 bg-[#A31621] overflow-hidden">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#200508]/95 via-[#200508]/35 to-transparent" />

            {/* Close Button */}
            <button
              id="service-modal-close-btn"
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 bg-[#FAF5EE] text-[#A31621] hover:bg-[#F3ECE0] flex items-center justify-center transition-all shadow focus:outline-none border border-[#A31621]/20"
              aria-label="Close service details"
            >
              <X size={18} />
            </button>

            {/* Banner Text */}
            <div className="absolute bottom-5 left-6 right-6 text-[#FAF5EE]">
              <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 bg-[#B76E79] text-[#FAF5EE] inline-block mb-2">
                {service.category.toUpperCase()}
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold leading-tight">
                {service.name}
              </h3>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Quick Meta Strip */}
            <div className="flex flex-wrap items-center gap-4 py-3 px-4 bg-[#F3ECE0] border border-[#A31621]/15 text-xs">
              {service.duration && (
                <div className="flex items-center gap-1.5 text-[#A31621]">
                  <Clock size={14} className="text-[#B76E79]" />
                  <span><strong>Duration:</strong> {service.duration}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5 text-[#A31621]">
                <Sparkles size={14} className="text-[#B76E79]" />
                <span><strong>Pricing:</strong> {service.priceNote}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#B76E79] mb-2">
                Treatment Overview
              </h4>
              <p className="text-sm sm:text-base text-[#A31621]/90 leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Ideal For */}
            <div>
              <h4 className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#B76E79] mb-2">
                Ideal For
              </h4>
              <p className="text-xs sm:text-sm text-[#A31621]/85 bg-[#F3ECE0] p-3.5 border border-[#A31621]/15">
                {service.idealFor}
              </p>
            </div>

            {/* Highlights */}
            {service.highlights && service.highlights.length > 0 && (
              <div>
                <h4 className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#B76E79] mb-2">
                  Key Benefits & Protocol
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#A31621]">
                      <div className="w-4 h-4 bg-[#F3ECE0] border border-[#A31621]/20 flex items-center justify-center text-[#B76E79] shrink-0">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#A31621]/15 flex flex-col sm:flex-row items-center gap-3">
              <button
                id="modal-book-now-btn"
                onClick={() => {
                  onClose();
                  onOpenBooking(service.name);
                }}
                className="w-full sm:flex-1 py-3.5 bg-[#A31621] hover:bg-[#B76E79] text-[#FAF5EE] text-xs font-bold uppercase tracking-[0.16em] flex items-center justify-center gap-2 shadow transition-all"
              >
                <span>Book Appointment</span>
                <ArrowRight size={14} className="text-[#FAF5EE]" />
              </button>

              <a
                id="modal-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Inquiry</span>
              </a>

              <a
                id="modal-call-btn"
                href={`tel:${SALON_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-5 py-3.5 border border-[#A31621]/20 hover:border-[#A31621] text-[#A31621] text-xs font-bold uppercase tracking-[0.16em] flex items-center justify-center gap-1.5 bg-[#F3ECE0] transition-colors"
              >
                <Phone size={14} className="text-[#B76E79]" />
                <span>Call</span>
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

