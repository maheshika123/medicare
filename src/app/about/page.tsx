import Image from "next/image";
import { CheckCircle, Heart, Users, Award, Clock, Shield } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every patient with empathy, respect, and understanding.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our experienced medical professionals are dedicated to your health.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in medical care and service.",
  },
  {
    icon: Clock,
    title: "Accessibility",
    description: "We're committed to making healthcare accessible to everyone.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Your health and safety are our top priorities.",
  },
];

const achievements = [
  { number: "5120+", label: "Happy Patients" },
  { number: "26", label: "Total Branches" },
  { number: "53", label: "Senior Doctors" },
  { number: "10+", label: "Years Experience" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-teal-700 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">About Medicare</h1>
            <p className="text-lg sm:text-xl text-teal-100 leading-relaxed">
              Your trusted partner in healthcare, committed to providing exceptional
              medical services with compassion and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At Medicare, our mission is to provide comprehensive, high-quality
                  healthcare services that improve the lives of our patients and their
                  families. We are dedicated to delivering personalized care with
                  compassion, integrity, and excellence.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We believe that everyone deserves access to quality healthcare, and
                  we work tirelessly to make that a reality for our community. Our team
                  of experienced medical professionals is committed to staying at the
                  forefront of medical innovation and best practices.
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      Patient-centered care approach
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      Advanced medical technology and equipment
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      Comprehensive healthcare services
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=600&fit=crop&q=80"
                  alt="Medical professionals"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Medicare
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-teal-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Achievements
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-teal-700 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-700 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Story
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Medicare was founded with a simple yet powerful vision: to make
                quality healthcare accessible to everyone. What started as a small
                clinic has grown into a trusted healthcare network with multiple
                branches and a team of dedicated medical professionals.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Over the past decade, we have served thousands of patients, building
                lasting relationships based on trust, compassion, and excellence. Our
                commitment to continuous improvement and innovation has allowed us to
                stay at the forefront of medical care while maintaining the personal
                touch that sets us apart.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, Medicare continues to expand its services and reach, always
                staying true to our founding principles of patient-centered care,
                medical excellence, and community service. We are proud of our journey
                and excited about the future of healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

