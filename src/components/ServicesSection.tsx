import React, { useState, useMemo } from 'react';
import { SALON_SERVICES, SERVICE_CATEGORIES, SALON_INFO } from '../data/salonData';
import { SalonService, ServiceCategory } from '../types';
import { Search, Scissors, Sparkles, Palette, HeartHandshake, Crown, ArrowRight, MessageCircle, Clock, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesSectionProps {
  onSelectService: (service: SalonService) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'hair':
        return <Scissors size={15} />;
      case 'skin':
        return <Sparkles size={15} />;
      case 'makeup':
        return <Palette size={15} />;
      case 'nails':
        return <HeartHandshake size={15} />;
      case 'bridal':
        return <Crown size={15} />;
      default:
        return <Sparkles size={15} />;
    }
  };

  const filteredServices = useMemo(() => {
    return SALON_SERVICES.filter((service) => {
      const matchesCategory =
        selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.fullDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeCategoryInfo = SERVICE_CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF5EE] relative border-b border-[#A31621]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-8 h-[1.5px] bg-[#B76E79]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#B76E79]">
              Bespoke Menu
            </span>
            <span className="w-8 h-[1.5px] bg-[#B76E79]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#A31621] tracking-tight leading-[1.05] mb-4">
            Comprehensive Salon Services
          </h2>
          <p className="text-sm sm:text-base text-[#A31621]/80 max-w-2xl mx-auto">
            From precision color blending and organic hair restoration to medical-grade skincare and bridal aesthetics.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#A31621]/15">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              id="service-tab-all"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedCategory === 'all'
                  ? 'bg-[#A31621] text-[#FAF5EE] shadow-xs'
                  : 'bg-[#F3ECE0] text-[#A31621] border border-[#A31621]/20 hover:bg-[#FAF5EE]'
              }`}
            >
              <span>All Services</span>
              <span className="text-[10px] opacity-75">({SALON_SERVICES.length})</span>
            </button>

            {SERVICE_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count = SALON_SERVICES.filter((s) => s.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  id={`service-tab-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#A31621] text-[#FAF5EE] shadow-xs'
                      : 'bg-[#F3ECE0] text-[#A31621] border border-[#A31621]/20 hover:bg-[#FAF5EE]'
                  }`}
                >
                  <span className={isSelected ? 'text-[#B76E79]' : 'text-[#A31621]'}>
                    {getCategoryIcon(cat.id)}
                  </span>
                  <span>{cat.name}</span>
                  <span className="text-[10px] opacity-75">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A31621]/60" />
            <input
              id="service-search-input"
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#F3ECE0] border border-[#A31621]/20 text-[#A31621] placeholder-[#A31621]/50 focus:outline-none focus:border-[#B76E79] focus:bg-[#FAF5EE] transition-all"
            />
          </div>

        </div>

        {/* Category Description Banner (if single category selected) */}
        {activeCategoryInfo && selectedCategory !== 'all' && (
          <div className="mb-8 p-5 bg-[#F3ECE0] border border-[#A31621]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#A31621]">
                {activeCategoryInfo.name} — {activeCategoryInfo.tagline}
              </h3>
              <p className="text-xs text-[#A31621]/80 mt-1">
                {activeCategoryInfo.description}
              </p>
            </div>
            <button
              onClick={() => onOpenBooking(activeCategoryInfo.name)}
              className="shrink-0 px-5 py-2.5 bg-[#A31621] hover:bg-[#B76E79] text-[#FAF5EE] text-xs font-bold uppercase tracking-[0.16em] transition-colors"
            >
              Book Category
            </button>
          </div>
        )}

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-[#F3ECE0] border border-[#A31621]/15 p-8">
            <p className="text-base text-[#A31621] font-serif">
              No services found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs text-[#B76E79] underline underline-offset-4 font-bold uppercase tracking-widest"
            >
              Clear filters and view all services
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, idx) => {
              const whatsappQuick = `https://wa.me/${SALON_INFO.phoneRaw}?text=${encodeURIComponent(
                `Hi Athenian Salon Mumbai, I want to know more about ${service.name}.`
              )}`;

              return (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  className="bg-[#F3ECE0]/60 hover:bg-[#F3ECE0] border border-[#A31621]/15 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#B76E79] hover:shadow-md group"
                >
                  <div>
                    {/* Top Row: Category tag & duration */}
                    <div className="flex items-center justify-between text-[11px] mb-3 pb-2 border-b border-[#A31621]/10">
                      <span className="font-bold uppercase tracking-widest text-[#B76E79] text-[10px]">
                        0{idx + 1} • {service.category}
                      </span>
                      {service.duration && (
                        <span className="flex items-center gap-1 text-[#A31621]/75 bg-[#FAF5EE] px-2 py-0.5 text-[10px] font-medium border border-[#A31621]/10">
                          <Clock size={10} className="text-[#B76E79]" />
                          <span>{service.duration}</span>
                        </span>
                      )}
                    </div>

                    {/* Image Thumbnail & Service Name */}
                    <div className="flex gap-4 items-start mb-4">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-16 h-16 object-cover border border-[#A31621]/15 shrink-0"
                      />
                      <div>
                        <h3 className="font-serif text-xl font-bold text-[#A31621] leading-snug group-hover:text-[#B76E79] transition-colors">
                          {service.name}
                        </h3>
                        <span className="text-[11px] text-[#A31621]/70 italic block mt-0.5">
                          {service.priceNote}
                        </span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-[#A31621]/80 leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-3 border-t border-[#A31621]/15 flex items-center justify-between gap-2">
                    <button
                      id={`view-detail-btn-${service.id}`}
                      onClick={() => onSelectService(service)}
                      className="text-xs font-bold text-[#A31621] hover:text-[#B76E79] flex items-center gap-1 uppercase tracking-wider"
                    >
                      <Info size={12} className="text-[#B76E79]" />
                      <span>Learn More</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        id={`service-card-wa-${service.id}`}
                        href={whatsappQuick}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-[#FAF5EE] hover:bg-[#25D366] hover:text-white text-[#A31621] border border-[#A31621]/15 transition-colors"
                        title="WhatsApp Inquiry"
                        aria-label={`WhatsApp inquiry for ${service.name}`}
                      >
                        <MessageCircle size={13} />
                      </a>

                      <button
                        id={`service-card-book-${service.id}`}
                        onClick={() => onOpenBooking(service.name)}
                        className="px-3.5 py-1.5 bg-[#A31621] hover:bg-[#B76E79] text-[#FAF5EE] text-xs font-bold uppercase tracking-[0.16em] transition-colors flex items-center gap-1"
                      >
                        <span>Book</span>
                        <ArrowRight size={11} className="text-[#FAF5EE]" />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Pricing Transparency Disclaimer */}
        <div className="mt-12 p-5 bg-[#F3ECE0] border border-[#A31621]/15 flex items-center gap-3.5 text-xs text-[#A31621]/85">
          <Info size={18} className="text-[#B76E79] shrink-0" />
          <p>
            <strong>Transparent Consultation:</strong> Exact treatment pricing for hair color, nanoplastia, and extensions is determined in-salon based on hair length, density, and prior color history. Contact our reception at <strong>{SALON_INFO.phone}</strong> for instant quotes.
          </p>
        </div>

      </div>
    </section>
  );
};
