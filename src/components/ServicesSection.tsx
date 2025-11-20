"use client";

import Image from "next/image";
import { Home, Heart, UtensilsCrossed, Pill, Activity, Baby, Soup, FlaskConical } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Home,
    secondaryIcon: Activity,
    title: "General Practitioners",
    description: "Aliquam etiam lectus adipiscing est auctor mi quisque non viverra.",
  },
  {
    icon: Heart,
    secondaryIcon: Baby,
    title: "Pregnancy Supports",
    description: "Aliquam etiam lectus adipiscing est auctor mi quisque non viverra.",
  },
  {
    icon: UtensilsCrossed,
    secondaryIcon: Soup,
    title: "Nutritional Support",
    description: "Aliquam etiam lectus adipiscing est auctor mi quisque non viverra.",
  },
  {
    icon: FlaskConical,
    secondaryIcon: Pill,
    title: "Pharmaceutical care",
    description: "Aliquam etiam lectus adipiscing est auctor mi quisque non viverra.",
  },
];

export default function ServicesSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative">
      {/* Header Background with Image */}
      <div className="relative bg-teal-800 min-h-[300px] flex items-center justify-center overflow-hidden">
        {/* Blurred Background Image */}
        <div className="absolute inset-0">
          {!imageError ? (
            <Image
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Medical professionals"
              fill
              className="object-cover opacity-30 blur-sm"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-teal-900"></div>
          )}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-teal-900/60"></div>

        {/* Title */}
        <div className="relative z-10 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white">
            Our Services
          </h2>
        </div>
      </div>

      {/* Service Cards */}
      <div className="relative -mt-24 mb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const SecondaryIcon = service.secondaryIcon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  {/* Icon */}
                  <div className="mb-4 relative">
                    <IconComponent className="w-12 h-12 text-teal-700" />
                    {SecondaryIcon && (
                      <SecondaryIcon className="w-6 h-6 text-teal-700 absolute -bottom-1 -right-1" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

