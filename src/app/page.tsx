"use client";

import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import BrandLogos from "@/components/BrandLogos";
import ServicesSection from "@/components/ServicesSection";
import BookAppointmentForm from "@/components/BookAppointmentForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import ClinicSection from "@/components/ClinicSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import StatsSection from "@/components/StatsSection";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  useEffect(() => {
    // Handle hash navigation on page load
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          // Account for fixed navbar height
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, []);

  return (
    <main>
      <section id="home">
        <HeroSection />
      </section>
      <section id="brands">
        <BrandLogos />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="booking">
        <BookAppointmentForm />
      </section>
      <section id="testimonial">
        <TestimonialsSection />
      </section>
      <section id="team">
        <TeamSection />
      </section>
      <section id="department">
        <ClinicSection />
      </section>
      <section id="faqs">
        <FAQSection />
      </section>
      <section id="blog">
        <BlogSection />
      </section>
      <StatsSection />
      <NewsletterSection />
    </main>
  );
}

