import React from 'react';
import { CUSTOMER_REVIEWS, SALON_INFO } from '../data/salonData';
import { Star, CheckCircle, MapPin, ArrowUpRight, MessageSquareQuote } from 'lucide-react';
import { motion } from 'motion/react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#F3ECE0] border-b border-[#A31621]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Overall Score Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[1.5px] bg-[#B76E79]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#B76E79]">
                Google Verified Feedback
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#A31621] tracking-tight leading-[1.05]">
              Real Experiences, Genuine Trust
            </h2>
          </div>

          {/* Aggregate Rating Banner */}
          <div className="flex items-center gap-5 p-5 bg-[#FAF5EE] border border-[#A31621]/20 shadow-sm">
            <div className="flex flex-col items-center justify-center border-r border-[#A31621]/15 pr-5">
              <span className="font-serif text-4xl font-bold text-[#A31621]">4.9</span>
              <div className="flex text-amber-500 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#A31621]">
                1,596+ Google Reviews
              </div>
              <p className="text-[11px] text-[#A31621]/75 mt-0.5">
                Top-rated unisex salon in Ghatkopar East
              </p>
              <a
                id="view-google-reviews-btn"
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#B76E79] font-bold uppercase tracking-widest hover:underline mt-1.5 inline-flex items-center gap-1"
              >
                <span>View Live Reviews</span>
                <ArrowUpRight size={11} />
              </a>
            </div>
          </div>
        </div>

        {/* Carousel / Multi-Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CUSTOMER_REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#FAF5EE] p-7 border border-[#A31621]/15 flex flex-col justify-between shadow-xs hover:border-[#B76E79] transition-all"
            >
              <div>
                {/* Star Row & Service Pill */}
                <div className="flex items-center justify-between gap-2 mb-5 pb-3 border-b border-[#A31621]/10">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 bg-[#F3ECE0] text-[#A31621] border border-[#A31621]/15">
                    {review.serviceCategory}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#A31621]/90 leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#A31621]/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#A31621] text-[#FAF5EE] text-xs font-bold flex items-center justify-center">
                    {review.avatarText}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#A31621]">
                      {review.name}
                    </h4>
                    <span className="text-[10px] text-[#A31621]/60 flex items-center gap-1">
                      <MapPin size={9} />
                      <span>{review.location}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-emerald-800 font-bold uppercase tracking-wider bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                  <CheckCircle size={10} />
                  <span>Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Review */}
        <div className="mt-12 text-center">
          <a
            id="write-review-btn"
            href={SALON_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-[#A31621]/20 hover:border-[#B76E79] bg-[#FAF5EE] text-[#A31621] text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-xs"
          >
            <MessageSquareQuote size={14} className="text-[#B76E79]" />
            <span>Read All 1,596+ Reviews on Google</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

      </div>
    </section>
  );
};

