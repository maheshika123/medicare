"use client";

import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useState } from "react";

const teamMembers = [
  [
    {
      name: "Dr. Leslie Taylor",
      specialization: "PEDIATRICIAN",
      description:
        "Dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum habitant fames ac penatibus et.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&q=80",
    },
    {
      name: "Dr. Zachary Brown",
      specialization: "CARDIOLOGIST",
      description:
        "Dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum habitant fames ac penatibus et.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&q=80",
    },
  ],
  [
    {
      name: "Dr. Sarah Johnson",
      specialization: "NEUROLOGIST",
      description:
        "Dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum habitant fames ac penatibus et.",
      image: "https://images.unsplash.com/photo-1594824476968-48fd8d6c3b1d?w=400&h=400&fit=crop&q=80",
    },
    {
      name: "Dr. Michael Chen",
      specialization: "DERMATOLOGIST",
      description:
        "Dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum habitant fames ac penatibus et.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&q=80",
    },
  ],
];

export default function TeamSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const currentMembers = teamMembers[currentPage];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
          Our Team
        </h2>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {currentMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              {/* Doctor Image */}
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 md:w-40 md:h-40 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, 160px"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const parent = target.parentElement;
                      if (parent) {
                        target.style.display = "none";
                        const fallback = parent.querySelector(".image-fallback") as HTMLElement;
                        if (fallback) {
                          fallback.style.display = "flex";
                        }
                      }
                    }}
                  />
                  {/* Fallback if image fails */}
                  <div className="absolute inset-0 bg-teal-100 flex items-center justify-center image-fallback" style={{ display: "none" }}>
                    <div className="text-teal-700 text-4xl font-bold">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Name */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>

                  {/* Specialization */}
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                    {member.specialization}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {member.description}
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center hover:bg-teal-800 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center hover:bg-teal-800 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center hover:bg-teal-800 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center hover:bg-teal-800 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentPage ? "bg-teal-700" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

