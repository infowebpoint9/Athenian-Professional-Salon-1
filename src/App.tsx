/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { SignatureServices } from './components/SignatureServices';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { InstagramSection } from './components/InstagramSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { BookingModal } from './components/BookingModal';
import { SalonService } from './types';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [selectedService, setSelectedService] = useState<SalonService | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialService, setBookingInitialService] = useState<string>('');

  const handleOpenBooking = (serviceName?: string) => {
    setBookingInitialService(serviceName || '');
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setBookingInitialService('');
  };

  return (
    <div className="min-h-screen bg-[#FAF5EE] text-[#A31621] flex flex-col selection:bg-[#B76E79]/25 selection:text-[#A31621]">
      {/* 1. Cinematic Preloader / Brand Intro */}
      {!introFinished && (
        <Preloader onComplete={() => setIntroFinished(true)} />
      )}

      {/* 2. Main Header / Navigation */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1 pb-16 sm:pb-0">
        {/* 3. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Trust & Social Proof Strip */}
        <TrustStrip />

        {/* 5. About Section */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Signature Services */}
        <SignatureServices
          onSelectService={(service) => setSelectedService(service)}
          onOpenBooking={handleOpenBooking}
        />

        {/* 7. Comprehensive Services Explorer */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onOpenBooking={handleOpenBooking}
        />

        {/* 8. Why Choose Athenian */}
        <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

        {/* 9. Visual Gallery & Lightbox */}
        <GallerySection onOpenBooking={handleOpenBooking} />

        {/* 10. Instagram Feed */}
        <InstagramSection />

        {/* 11. Google Reviews & Testimonials */}
        <ReviewsSection />

        {/* 12. Contact & Location & FAQ */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 13. Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* 14. Floating Mobile Action Bar */}
      <FloatingMobileBar onOpenBooking={() => handleOpenBooking()} />

      {/* 15. Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenBooking={handleOpenBooking}
      />

      {/* 16. Appointment Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialService={bookingInitialService}
      />
    </div>
  );
}
