"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/", sectionId: "home" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", sectionId: "services" },
  { name: "Booking", href: "/booking", sectionId: "booking" },
  { name: "Testimonial", href: "/testimonial", sectionId: "testimonial" },
];

const moreLinks = [
  { name: "Our Team", href: "/team", sectionId: "team" },
  { name: "Faqs", href: "/faqs", sectionId: "faqs" },
  { name: "Department", href: "/department", sectionId: "department" },
  { name: "Blog", href: "/blog", sectionId: "blog" },
];

const openingHours = [
  { day: "Monday - Thursday", hours: "8:00 am - 6:00 pm" },
  { day: "Friday - Saturday", hours: "10:00 am - 4:00 pm" },
  { day: "Sunday", hours: "Emergency only" },
  { day: "Personal", hours: "7:00 pm - 9:00 pm" },
];

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, sectionId?: string) => {
    // If we're on the homepage and there's a section ID, scroll to it
    if (pathname === "/" && sectionId) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
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
    } else if (sectionId) {
      // If we're on a different page, navigate to homepage with hash
      e.preventDefault();
      router.push(`/#${sectionId}`);
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 300);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Company Info */}
          <div>
            {/* Logo */}
            <Link href="/" className="text-3xl font-bold text-teal-700 mb-4 block">
              MEDICARE
            </Link>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Elit adipi massa diam in dignissim. Sagittis pulvinar ut dis venenatis nunc nunc.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-teal-700 flex-shrink-0" />
                <span className="text-gray-600 text-sm">123 Arling, Miola, NY</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-700 flex-shrink-0" />
                <span className="text-gray-600 text-sm">Info@yourinfo.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-700 flex-shrink-0" />
                <span className="text-gray-600 text-sm">(+487) 384 9452</span>
              </div>
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
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center hover:bg-teal-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.sectionId)}
                    className="text-gray-600 hover:text-teal-700 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - More Links */}
          <div>
            <ul className="space-y-2 mt-10 md:mt-0">
              {moreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.sectionId)}
                    className="text-gray-600 hover:text-teal-700 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Opening Hours */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Opening Hours</h3>
            <ul className="space-y-3">
              {openingHours.map((schedule, index) => (
                <li key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                  <div className="flex flex-col">
                    <span className="text-gray-800 font-medium text-sm">{schedule.day}</span>
                    <span className="text-gray-600 text-sm">{schedule.hours}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-600 text-sm">
              © 2025 Medicare - All rights reserved
            </p>

            {/* Credits */}
            <p className="text-gray-600 text-sm">
              HTML Templates by:{" "}
              <span className="text-teal-700 font-semibold">Maheshika Devindya</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

