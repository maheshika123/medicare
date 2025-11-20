"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-[600px] bg-slate-900 flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <div className="text-white space-y-6 z-10">
            {/* Small Heading */}
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
              ABOUT YOUR HEALTH
            </p>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Well-Being Is Our Priority
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg">
              From preventive care to specialized treatments, our expert team is
              committed to delivering personalized, compassionate healthcare. Trust us
              to guide you on your journey to better health with cutting-edge medicine
              and unwavering support.
            </p>

            {/* Contact Us Button */}
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors uppercase tracking-wide"
            >
              CONTACT US
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            {!imageError ? (
              <Image
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional surgeon in surgical attire performing a procedure"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-slate-800/50 flex items-center justify-center">
                <div className="text-center text-white/60">
                  <svg
                    className="w-32 h-32 mx-auto mb-4 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <p className="text-sm">Image failed to load</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

