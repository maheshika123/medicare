"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. The more content you provide about you. Lorem, Quos saepe suscipit, nemo dolore sapiente!",
    author: "James Rodrigo",
    role: "CUSTOMER",
  },
  {
    quote:
      "Exceptional healthcare service with a caring and professional team. They made me feel comfortable throughout my treatment journey.",
    author: "Sarah Mitchell",
    role: "PATIENT",
  },
  {
    quote:
      "The doctors here are knowledgeable and compassionate. I highly recommend this medical facility for anyone seeking quality healthcare.",
    author: "Michael Chen",
    role: "CUSTOMER",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative min-h-[500px] flex items-center justify-center py-20 overflow-hidden">
      {/* Blurred Background Image */}
      <div className="absolute inset-0">
        {!imageError ? (
          <Image
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Medical professionals"
            fill
            className="object-cover blur-md scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-slate-900"></div>
        )}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/70"></div>

      {/* Testimonial Card */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 md:p-12 shadow-2xl relative">
            {/* Opening Quote Icon */}
            <div className="absolute top-2 left-4 sm:top-4 sm:left-6">
              <span className="text-4xl sm:text-6xl md:text-8xl font-serif text-teal-700 leading-none">
                "
              </span>
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10 pt-6 sm:pt-8">
              {/* Quote Text */}
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 px-2 sm:px-4">
                {currentTestimonial.quote}
              </p>

              {/* Author Information */}
              <div className="px-2 sm:px-4 mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
                  {currentTestimonial.author}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
                  {currentTestimonial.role}
                </p>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-teal-700"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Closing Quote Icon */}
            <div className="absolute bottom-2 right-4 sm:bottom-4 sm:right-6">
              <span className="text-4xl sm:text-6xl md:text-8xl font-serif text-teal-700 leading-none">
                "
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

