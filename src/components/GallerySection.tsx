import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, ZoomIn, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GallerySectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Portfolio' },
    { id: 'hair', name: 'Hair & Balayage' },
    { id: 'bridal', name: 'Bridal Artistry' },
    { id: 'skin', name: 'Skin Therapies' },
    { id: 'nails', name: 'Nail Couture' },
    { id: 'salon', name: 'Salon Ambience' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#F3ECE0] border-t border-[#A31621]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-8 h-[1.5px] bg-[#B76E79]" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#B76E79]">
              Visual Craftsmanship
            </span>
            <span className="w-8 h-[1.5px] bg-[#B76E79]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#A31621] tracking-tight leading-[1.05] mb-4">
            Client Transformations & Studio
          </h2>
          <p className="text-sm sm:text-base text-[#A31621]/80 max-w-2xl mx-auto">
            Real artistry from our daily appointments in Ghatkopar East. Click any frame to inspect the details.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`gallery-filter-${cat.id}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#A31621] text-[#FAF5EE] shadow-xs'
                  : 'bg-[#FAF5EE] text-[#A31621] border border-[#A31621]/20 hover:bg-[#F3ECE0]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => handleOpenLightbox(index)}
              className="group relative overflow-hidden bg-[#A31621] cursor-pointer shadow-md border border-[#A31621]/20 h-72 sm:h-80"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#200508]/95 via-[#200508]/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              {/* Tag (Top Left) */}
              <div className="absolute top-3 left-3 bg-[#FAF5EE] text-[#A31621] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 shadow-sm border border-[#A31621]/15">
                {item.tag}
              </div>

              {/* Hover Zoom Icon (Top Right) */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-[#FAF5EE] text-[#A31621] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm border border-[#A31621]/15">
                <ZoomIn size={14} />
              </div>

              {/* Caption (Bottom) */}
              <div className="absolute bottom-4 left-4 right-4 text-[#FAF5EE]">
                <h3 className="font-serif text-lg font-bold leading-tight mb-1 text-balance">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#FAF5EE]/80 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {currentLightboxItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseLightbox}
              className="fixed inset-0 bg-[#200508]/90 backdrop-blur-md"
            />

            {/* Lightbox Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-[#FAF5EE] overflow-hidden shadow-2xl border border-[#A31621]/20 z-10 text-[#A31621]"
            >
              {/* Close Button */}
              <button
                id="lightbox-close-btn"
                onClick={handleCloseLightbox}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#200508]/80 text-[#FAF5EE] hover:bg-[#200508] flex items-center justify-center transition-all shadow"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>

              {/* Prev / Next Buttons */}
              <button
                id="lightbox-prev-btn"
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#200508]/80 text-[#FAF5EE] hover:bg-[#200508] flex items-center justify-center transition-all shadow"
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                id="lightbox-next-btn"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#200508]/80 text-[#FAF5EE] hover:bg-[#200508] flex items-center justify-center transition-all shadow"
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>

              {/* Main Image */}
              <div className="h-[380px] sm:h-[480px] bg-[#140305] flex items-center justify-center overflow-hidden">
                <img
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.alt}
                  className="max-h-full w-auto object-contain"
                />
              </div>

              {/* Bottom Info Bar */}
              <div className="p-6 bg-[#FAF5EE] border-t border-[#A31621]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#B76E79] px-2.5 py-0.5 bg-[#F3ECE0] border border-[#A31621]/15">
                      {currentLightboxItem.tag}
                    </span>
                    <span className="text-xs font-semibold text-[#A31621]/60">
                      {lightboxIndex !== null ? `${lightboxIndex + 1} / ${filteredItems.length}` : ''}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#A31621]">
                    {currentLightboxItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A31621]/80 mt-1">
                    {currentLightboxItem.description}
                  </p>
                </div>

                <button
                  id="lightbox-book-look-btn"
                  onClick={() => {
                    handleCloseLightbox();
                    onOpenBooking(currentLightboxItem.title);
                  }}
                  className="shrink-0 px-7 py-3.5 bg-[#A31621] hover:bg-[#B76E79] text-[#FAF5EE] text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 shadow transition-colors"
                >
                  <span>Book This Look</span>
                  <ArrowRight size={14} className="text-[#FAF5EE]" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
