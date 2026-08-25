import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AthenianSpartanLogo } from './AthenianSpartanLogo';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user has seen the intro in this session
    const hasSeenIntro = sessionStorage.getItem('athenian_intro_seen');
    const timerDuration = hasSeenIntro ? 1200 : 2200;

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('athenian_intro_seen', 'true');
      setTimeout(onComplete, 600); // Allow fade out to finish
    }, timerDuration);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    sessionStorage.setItem('athenian_intro_seen', 'true');
    setTimeout(onComplete, 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="athenian-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF5EE] text-[#A31621] select-none"
        >
          {/* Subtle warm luxury background pulse */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(183,110,121,0.15)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-md">
            {/* Logo Emblem Animation */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-5 relative"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center p-2">
                <AthenianSpartanLogo
                  className="w-full h-full"
                  color="#C8102E"
                />
              </div>
            </motion.div>

            {/* Brand Typography Reveal */}
            <motion.h1
              initial={{ opacity: 0, letterSpacing: '0.15em', y: 10 }}
              animate={{ opacity: 1, letterSpacing: '0.28em', y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
              className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#A31621]"
            >
              Athenian
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.25em', y: 6 }}
              animate={{ opacity: 1, letterSpacing: '0.45em', y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: 'easeOut' }}
              className="text-xs sm:text-sm uppercase font-semibold text-[#B76E79] mt-1.5"
            >
              Professional
            </motion.p>


            {/* Subtle Expanding Gold/Rose Divider */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 90, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
              className="h-[1.5px] bg-[#B76E79] my-4 rounded-full"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="text-[11px] uppercase tracking-[0.2em] text-[#A31621]/70"
            >
              Ghatkopar East • Mumbai
            </motion.p>
          </div>

          {/* Quick Skip Button */}
          <button
            id="preloader-skip-btn"
            onClick={handleSkip}
            className="absolute bottom-6 right-6 text-xs text-[#A31621]/60 hover:text-[#A31621] transition-colors uppercase tracking-widest px-3 py-1 rounded border border-[#B76E79]/40 hover:border-[#B76E79]"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
