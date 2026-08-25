import React, { useState, useEffect } from 'react';
import { LogoCrest } from './LogoCrest';
import { SALON_INFO } from '../data/salonData';
import { Phone, Calendar, Menu, X, Instagram, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'signature', 'why-us', 'gallery', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Signature', href: '#signature' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Announcement & Quick Contact Bar (Desktop) */}
      <div className="bg-[#A31621] text-[#FAF5EE] py-1.5 px-4 text-[11px] sm:text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B76E79] animate-pulse" />
            <span>Ghatkopar East, Mumbai • Open Daily 10:00 AM – 9:00 PM</span>
          </div>
          <div className="hidden md:flex items-center gap-5">
            <a
              id="top-bar-phone-link"
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-[#B76E79] transition-colors"
            >
              <Phone size={12} className="text-[#B76E79]" />
              <span>{SALON_INFO.phone}</span>
            </a>
            <span className="text-[#B76E79]/40">•</span>
            <a
              id="top-bar-insta-link"
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#B76E79] transition-colors"
            >
              <Instagram size={12} className="text-[#B76E79]" />
              <span>{SALON_INFO.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF5EE]/98 backdrop-blur-md shadow-[0_4px_24px_-4px_rgba(163,22,33,0.08)] py-3 border-b border-[#A31621]/15'
            : 'bg-[#FAF5EE] py-4 md:py-5 border-b border-[#A31621]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center focus:outline-none"
            aria-label="Athenian Salon Mumbai Home"
          >
            <LogoCrest variant="dark" size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-200 relative py-1 ${
                    isActive ? 'text-[#A31621] font-bold' : 'text-[#A31621]/70 hover:text-[#B76E79]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B76E79]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-call-btn"
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#A31621] border border-[#A31621]/20 rounded-none sm:rounded-xs hover:border-[#B76E79] hover:bg-[#F3ECE0] transition-all"
              aria-label="Call salon"
            >
              <Phone size={13} className="text-[#B76E79]" />
              <span className="hidden xl:inline">Call Salon</span>
            </a>

            <button
              id="header-book-btn"
              onClick={() => onOpenBooking()}
              className="group relative flex items-center gap-2 px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FAF5EE] bg-[#A31621] hover:bg-[#B76E79] active:scale-[0.98] rounded-none sm:rounded-xs shadow-xs hover:shadow transition-all"
            >
              <Calendar size={13} className="text-[#B76E79] group-hover:text-white transition-colors" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-book-header-btn"
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-[#A31621] text-[#FAF5EE]"
            >
              Book
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#A31621] hover:bg-[#F3ECE0] border border-[#A31621]/20 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-[96px] z-30 bg-[#FAF5EE] border-b border-[#B76E79]/30 shadow-xl overflow-hidden sm:hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    id={`mobile-nav-${link.name.toLowerCase()}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base font-serif font-medium text-[#A31621] hover:text-[#B76E79] py-1.5 border-b border-[#F3ECE0] flex justify-between items-center"
                  >
                    <span>{link.name}</span>
                    <span className="text-[#B76E79] text-xs">→</span>
                  </a>
                ))}
              </nav>

              <div className="pt-3 border-t border-[#B76E79]/30 space-y-3">
                <button
                  id="mobile-drawer-book-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 bg-[#A31621] text-[#FAF5EE] text-xs font-semibold uppercase tracking-widest rounded flex items-center justify-center gap-2 shadow"
                >
                  <Calendar size={15} className="text-[#B76E79]" />
                  <span>Book Appointment</span>
                </button>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    id="mobile-drawer-call-btn"
                    href={`tel:${SALON_INFO.phoneRaw}`}
                    className="py-2.5 px-3 border border-[#B76E79]/30 rounded text-center text-[#A31621] font-semibold flex items-center justify-center gap-1.5 bg-[#F3ECE0]"
                  >
                    <Phone size={13} className="text-[#B76E79]" />
                    <span>Call Us</span>
                  </a>
                  <a
                    id="mobile-drawer-maps-btn"
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 border border-[#B76E79]/30 rounded text-center text-[#A31621] font-semibold flex items-center justify-center gap-1.5 bg-[#F3ECE0]"
                  >
                    <MapPin size={13} className="text-[#B76E79]" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
