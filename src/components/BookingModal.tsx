import React, { useState, useEffect } from 'react';
import { SALON_INFO, SALON_SERVICES, SERVICE_CATEGORIES } from '../data/salonData';
import { X, Phone, MessageCircle, CheckCircle2, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AppointmentFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    serviceCategory: 'hair',
    serviceName: initialService || 'Haircut & Styling',
    preferredDate: '',
    preferredTimeSlot: 'Afternoon (1:00 PM - 5:00 PM)',
    stylistPreference: 'Any Senior Stylist',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      const match = SALON_SERVICES.find((s) => s.name === initialService);
      setFormData((prev) => ({
        ...prev,
        serviceName: initialService,
        serviceCategory: match ? match.category : 'hair',
      }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Compose formatted WhatsApp booking request
    const message = `*NEW APPOINTMENT INQUIRY — ATHENIAN SALON MUMBAI*
----------------------------------------
*Client Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Service Requested:* ${formData.serviceName} (${formData.serviceCategory.toUpperCase()})
*Preferred Date:* ${formData.preferredDate || 'Earliest Available'}
*Preferred Time Slot:* ${formData.preferredTimeSlot}
*Stylist Preference:* ${formData.stylistPreference}
*Special Notes:* ${formData.notes || 'None'}
----------------------------------------
_Inquiry sent via atheniansalon.com/mumbai_`;

    const whatsappUrl = `https://wa.me/${SALON_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

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
          transition={{ duration: 0.25 }}
          className="relative bg-[#FAF5EE] border border-[#A31621]/20 shadow-2xl max-w-xl w-full overflow-hidden z-10 my-8 text-[#A31621]"
        >
          {/* Header */}
          <div className="bg-[#A31621] text-[#FAF5EE] p-6 sm:p-8 relative">
            <button
              id="booking-modal-close-btn"
              onClick={onClose}
              className="absolute top-6 right-6 w-9 h-9 bg-[#FAF5EE]/10 hover:bg-[#FAF5EE]/20 text-[#FAF5EE] flex items-center justify-center transition-colors"
              aria-label="Close booking modal"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-6 h-[1.5px] bg-[#B76E79]" />
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#B76E79]">
                Athenian Professional • Ghatkopar East
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight">
              Reserve Your Salon Ritual
            </h3>
            <p className="text-xs text-[#FAF5EE]/80 mt-1.5 font-medium">
              Prompt confirmation via WhatsApp & Phone • Open Daily 10 AM – 9 PM
            </p>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8">
            {isSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2 border border-emerald-200">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="font-serif text-3xl font-bold text-[#A31621]">
                  Inquiry Sent Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-[#A31621]/85 max-w-md mx-auto leading-relaxed">
                  Your appointment details have been forwarded to our salon coordinator on WhatsApp. We will confirm your preferred chair and slot shortly.
                </p>

                <div className="p-5 bg-[#F3ECE0] border border-[#A31621]/15 text-left text-xs space-y-1.5 max-w-md mx-auto">
                  <div className="font-bold text-[#A31621] text-sm">{formData.serviceName}</div>
                  <div className="text-[#A31621]/80">Client: {formData.fullName} ({formData.phone})</div>
                  <div className="text-[#A31621]/80">Slot: {formData.preferredDate || 'Today'} • {formData.preferredTimeSlot}</div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    id="booking-confirm-call-btn"
                    href={`tel:${SALON_INFO.phoneRaw}`}
                    className="w-full sm:w-auto px-7 py-3.5 bg-[#A31621] text-[#FAF5EE] text-xs font-bold uppercase tracking-[0.16em] flex items-center justify-center gap-2 shadow-xs hover:bg-[#B76E79] transition-colors"
                  >
                    <Phone size={14} className="text-[#FAF5EE]" />
                    <span>Call +91 9321016619</span>
                  </a>
                  <button
                    id="booking-done-btn"
                    onClick={handleReset}
                    className="w-full sm:w-auto px-7 py-3.5 border border-[#A31621]/20 text-[#A31621] text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#F3ECE0]"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#A31621] uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Ananya Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F3ECE0] border border-[#A31621]/20 text-xs text-[#A31621] placeholder-[#A31621]/40 focus:outline-none focus:border-[#B76E79] focus:bg-[#FAF5EE]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#A31621] uppercase tracking-wider mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. 98200 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F3ECE0] border border-[#A31621]/20 text-xs text-[#A31621] placeholder-[#A31621]/40 focus:outline-none focus:border-[#B76E79] focus:bg-[#FAF5EE]"
                    />
                  </div>
                </div>

                {/* Service Category & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#A31621] uppercase tracking-wider mb-1.5">
                      Service Category
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => {
                        const newCat = e.target.value;
                        const firstInCat = SALON_SERVICES.find((s) => s.category === newCat)?.name || '';
                        setFormData({
                          ...formData,
                          serviceCategory: newCat,
                          serviceName: firstInCat,
                        });
                      }}
                      className="w-full px-4 py-3 bg-[#F3ECE0] border border-[#A31621]/20 text-xs text-[#A31621] focus:outline-none focus:border-[#B76E79]"
                    >
                      {SERVICE_CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#A31621] uppercase tracking-wider mb-1.5">
                      Specific Treatment *
                    </label>
                    <select
                      value={formData.serviceName}
                      onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F3ECE0] border border-[#A31621]/20 text-xs text-[#A31621] focus:outline-none focus:border-[#B76E79]"
                    >
                      {SALON_SERVICES.filter((s) => s.category === formData.serviceCategory).map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#A31621] uppercase tracking-wider mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F3ECE0] border border-[#A31621]/20 text-xs text-[#A31621] focus:outline-none focus:border-[#B76E79]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#A31621] uppercase tracking-wider mb-1.5">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTimeSlot}
                      onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F3ECE0] border border-[#A31621]/20 text-xs text-[#A31621] focus:outline-none focus:border-[#B76E79]"
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                      <option value="Evening (5:00 PM - 8:30 PM)">Evening (5:00 PM - 8:30 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-bold text-[#A31621] uppercase tracking-wider mb-1.5">
                    Any Notes or Questions? (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Inquiring about hair length pricing or bridal trial"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F3ECE0] border border-[#A31621]/20 text-xs text-[#A31621] placeholder-[#A31621]/40 focus:outline-none focus:border-[#B76E79]"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    id="booking-submit-btn"
                    className="w-full sm:flex-1 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-[0.16em] shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                  >
                    <MessageCircle size={16} />
                    <span>Proceed via WhatsApp</span>
                  </button>

                  <a
                    id="booking-instant-call-btn"
                    href={`tel:${SALON_INFO.phoneRaw}`}
                    className="w-full sm:w-auto px-6 py-4 border border-[#A31621]/20 hover:border-[#A31621] text-[#A31621] text-xs font-bold uppercase tracking-[0.16em] bg-[#F3ECE0] flex items-center justify-center gap-1.5 hover:bg-[#FAF5EE] transition-colors"
                  >
                    <Phone size={14} className="text-[#B76E79]" />
                    <span>Call Now</span>
                  </a>
                </div>

                <p className="text-[11px] text-[#A31621]/60 text-center pt-1">
                  We respect your privacy. No spam. You will be redirected directly to WhatsApp.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

