import React from 'react';
import { INSTAGRAM_POSTS, SALON_INFO } from '../data/salonData';
import { Instagram, Heart, ArrowUpRight } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#FAF5EE] border-b border-[#A31621]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[1.5px] bg-[#B76E79]" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#B76E79]">
                {SALON_INFO.instagramHandle}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#A31621] tracking-tight leading-[1.05]">
              Athenians in Their Element
            </h2>
          </div>

          <a
            id="instagram-follow-btn"
            href={SALON_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#A31621] hover:bg-[#B76E79] text-[#FAF5EE] text-xs font-bold uppercase tracking-[0.2em] shadow-sm transition-all shrink-0 w-fit"
          >
            <Instagram size={14} className="text-[#FAF5EE]" />
            <span>Follow on Instagram</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              id={`instagram-post-${post.id}`}
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-[#A31621] border border-[#A31621]/20 shadow-xs"
            >
              <img
                src={post.image}
                alt="Athenian Salon Mumbai Instagram"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#200508]/85 opacity-0 group-hover:opacity-100 transition-opacity p-3.5 flex flex-col justify-between text-[#FAF5EE]">
                <div className="flex items-center justify-end text-[11px] font-semibold text-[#FAF5EE]/90">
                  <span className="flex items-center gap-1">
                    <Heart size={12} className="text-[#B76E79] fill-[#B76E79]" />
                    {post.likes}
                  </span>
                </div>
                <p className="text-[10px] text-[#FAF5EE]/90 line-clamp-3 leading-snug">
                  {post.caption}
                </p>
                <div className="text-[9px] uppercase tracking-widest text-[#B76E79] font-bold">
                  View Post ↗
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

