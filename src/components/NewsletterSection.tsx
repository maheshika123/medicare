"use client";

import Image from "next/image";
import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [imageError, setImageError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="relative min-h-[400px] flex items-center overflow-hidden">
      {/* Blurred Background Image */}
      <div className="absolute inset-0">
        {!imageError ? (
          <Image
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Medical professional"
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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Side - Text */}
            <div className="text-white flex-1 text-center lg:text-left">
              <p className="text-xs sm:text-sm md:text-base uppercase tracking-wider mb-4 font-serif">
                OUR NEWSLETTER
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Subscribe Us To Get More Updates
              </h2>
            </div>

            {/* Right Side - Newsletter Form */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-lg border border-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:min-w-[280px]"
                  required
                />
                <button
                  type="submit"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-lg border border-white text-gray-800 font-semibold uppercase tracking-wide hover:bg-gray-50 transition-colors font-serif whitespace-nowrap"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

