import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface FloatingMobileBarProps {
  onOpenBooking: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onOpenBooking }) => {
  return (
    <div
      id="floating-mobile-bar"
      className="fixed bottom-0 inset-x-0 z-40 bg-[#FAF5EE]/95 backdrop-blur-md border-t border-[#A31621]/20 p-2.5 sm:hidden shadow-[0_-4px_20px_rgba(163,22,33,0.12)]"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Call button */}
        <a
          id="mobile-bar-call"
          href={`tel:${SALON_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#F3ECE0] border border-[#A31621]/20 text-[#A31621] active:scale-95 transition-transform"
        >
          <Phone size={15} className="text-[#B76E79]" />
          <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">Call</span>
        </a>

        {/* WhatsApp button */}
        <a
          id="mobile-bar-wa"
          href={SALON_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#25D366] text-white active:scale-95 transition-transform shadow-xs"
        >
          <MessageCircle size={15} />
          <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">WhatsApp</span>
        </a>

        {/* Book button */}
        <button
          id="mobile-bar-book"
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#A31621] text-[#FAF5EE] active:scale-95 transition-transform shadow-xs"
        >
          <Calendar size={15} className="text-[#FAF5EE]" />
          <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">Book</span>
        </button>
      </div>
    </div>
  );
};

