"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MapPin, Phone, ChevronDown, Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", sectionId: "home" },
    { name: "Services", href: "/services", sectionId: "services" },
    { name: "Booking", href: "/booking", sectionId: "booking" },
    { name: "Team", href: "/team", sectionId: "team" },
    { name: "Department", href: "/department", sectionId: "department" },
    { name: "Faqs", href: "/faqs", sectionId: "faqs" },
    { name: "Blog", href: "/blog", sectionId: "blog" },
  ];

  const isActive = (href: string) => pathname === href;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, sectionId?: string) => {
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
    <header className="bg-white sticky top-0 z-50">
      {/* Top Section */}
      <div className="border-b border-gray-200 hidden lg:block">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-3xl font-bold text-teal-700">
                MEDICARE
              </Link>
            </div>

            {/* Contact Info and Book Appointment Button */}
            <div className="flex items-center gap-6">
              {/* Location */}
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-teal-700" />
                <span className="text-sm text-gray-700">123 Arling, Miola, NY</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-teal-700" />
                <span className="text-sm text-gray-700">(+487) 384 9452</span>
              </div>

              {/* Book Appointment Button */}
              <Link
                href="/booking"
                className="px-4 py-2 border border-teal-700 rounded-lg text-sm font-medium text-gray-700 uppercase hover:bg-teal-50 transition-colors"
              >
                BOOK APPOINTMENT
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Top Section */}
      <div className="border-b border-gray-200 lg:hidden">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-teal-700">
              MEDICARE
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-teal-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Desktop */}
      <div className="border-b border-gray-200 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Navigation Links */}
            <nav className="flex items-center gap-0">
              {navLinks.map((link, index) => (
                <div key={link.name} className="flex items-center">
                  {index > 0 && (
                    <span className="w-px h-6 bg-gray-300 mx-4"></span>
                  )}
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.sectionId)}
                    className={`text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-teal-700"
                        : "text-gray-700 hover:text-teal-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}

              {/* Pages Dropdown */}
              <div className="flex items-center relative">
                <span className="w-px h-6 bg-gray-300 mx-4"></span>
                <button
                  onClick={() => setIsPagesOpen(!isPagesOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-teal-700 transition-colors"
                >
                  Pages
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isPagesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    <Link
                      href="/about"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Contact
                    </Link>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Side - GET PRO and Search */}
            <div className="flex items-center gap-6">
              {/* GET PRO */}
              <div className="text-sm hidden xl:block">
                <span className="text-gray-700 underline">GET</span>
                <br />
                <span className="text-gray-700 underline">PRO</span>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search.."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-teal-700 w-32"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Contact Info */}
            <div className="mb-4 space-y-3 pb-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-teal-700" />
                <span className="text-sm text-gray-700">123 Arling, Miola, NY</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-teal-700" />
                <span className="text-sm text-gray-700">(+487) 384 9452</span>
              </div>
              <Link
                href="/booking"
                className="inline-block px-4 py-2 border border-teal-700 rounded-lg text-sm font-medium text-gray-700 uppercase hover:bg-teal-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                BOOK APPOINTMENT
              </Link>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href, link.sectionId);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block py-2 text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-teal-700"
                      : "text-gray-700 hover:text-teal-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Pages Dropdown in Mobile */}
              <div className="pt-2">
                <button
                  onClick={() => setIsPagesOpen(!isPagesOpen)}
                  className="flex items-center gap-1 py-2 text-base font-medium text-gray-700 hover:text-teal-700 transition-colors w-full"
                >
                  Pages
                  <ChevronDown className={`w-4 h-4 transition-transform ${isPagesOpen ? "rotate-180" : ""}`} />
                </button>
                {isPagesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/about"
                      className="block py-2 text-sm text-gray-600 hover:text-teal-700"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsPagesOpen(false);
                      }}
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="block py-2 text-sm text-gray-600 hover:text-teal-700"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsPagesOpen(false);
                      }}
                    >
                      Contact
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Search */}
              <div className="relative mt-4 pt-4 border-t border-gray-200">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search.."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-teal-700"
                />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

