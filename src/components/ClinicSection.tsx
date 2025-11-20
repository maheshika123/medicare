"use client";

import { useState } from "react";

const clinicCategories = [
  {
    id: "laboratory",
    name: "LABORATORY ANALYSIS",
    title: "Laboratory Analysis",
    description1:
      "Laboratory analysis means a test performed by a laboratory on body fluid, tissue, or excretion for the purpose of determining the presence, absence, or concentration of various substances in the human body.",
    description2:
      "Sampling is the process of collecting a portion of an environmental medium as representative of the locally remaining medium. The collected portion of the medium is then analyzed to determine the radionuclide concentration.",
    tags: ["Neurocritical Care", "Neuro Oncology", "Geriatric Neurology"],
  },
  {
    id: "cardiology",
    name: "CARDIOLOGY CLINIC",
    title: "Cardiology Clinic",
    description1:
      "Cardiology is the branch of medicine that deals with disorders of the heart and the cardiovascular system. Our cardiology clinic provides comprehensive cardiac care including diagnosis, treatment, and prevention of heart diseases.",
    description2:
      "Our team of experienced cardiologists uses advanced diagnostic tools and treatment methods to ensure the best possible outcomes for our patients. We offer preventive care, interventional procedures, and ongoing management of cardiac conditions.",
    tags: ["Heart Health", "Cardiac Care", "Preventive Cardiology"],
  },
  {
    id: "gynecology",
    name: "GYNECOLOGY CLINIC",
    title: "Gynecology Clinic",
    description1:
      "Our gynecology clinic provides comprehensive women's health services including routine examinations, preventive care, and treatment of various gynecological conditions.",
    description2:
      "We offer a wide range of services from annual check-ups to specialized treatments, ensuring women receive the highest quality of care in a comfortable and supportive environment.",
    tags: ["Women's Health", "Preventive Care", "Reproductive Health"],
  },
  {
    id: "pathology",
    name: "PATHOLOGY CLINIC",
    title: "Pathology Clinic",
    description1:
      "Pathology is the study of disease and involves examining tissues, cells, and body fluids to diagnose diseases. Our pathology clinic provides accurate diagnostic services to support patient care.",
    description2:
      "Our pathologists work closely with other medical specialists to provide comprehensive diagnostic information that guides treatment decisions and helps ensure the best patient outcomes.",
    tags: ["Diagnostic Services", "Tissue Analysis", "Disease Diagnosis"],
  },
  {
    id: "pediatrics",
    name: "PEDIATRICS CLINIC",
    title: "Pediatrics Clinic",
    description1:
      "Pediatrics focuses on the medical care of infants, children, and adolescents. Our pediatrics clinic provides comprehensive healthcare services tailored to the unique needs of young patients.",
    description2:
      "Our pediatricians are dedicated to providing compassionate, family-centered care that promotes the health and well-being of children from birth through adolescence.",
    tags: ["Child Health", "Pediatric Care", "Family Medicine"],
  },
  {
    id: "neurology",
    name: "NEUROLOGY CLINIC",
    title: "Neurology Clinic",
    description1:
      "Neurology is the branch of medicine dealing with disorders of the nervous system. Our neurology clinic provides expert diagnosis and treatment for a wide range of neurological conditions.",
    description2:
      "Our neurologists use advanced diagnostic techniques and treatment methods to address conditions affecting the brain, spinal cord, and peripheral nerves, ensuring comprehensive neurological care.",
    tags: ["Brain Health", "Neurological Disorders", "Nerve Care"],
  },
];

export default function ClinicSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const currentClinic = clinicCategories[activeCategory];
  const totalPages = Math.ceil(clinicCategories.length / 1);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {Array.from({ length: totalPages }).map((_, index) => (
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

        {/* Main Card */}
        <div className="max-w-6xl mx-auto bg-teal-50 rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Sidebar - Navigation */}
            <div className="bg-teal-100/50 lg:w-64 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-teal-200">
              <nav className="space-y-4">
                {clinicCategories.map((category, index) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(index);
                      setCurrentPage(Math.floor(index / 1));
                    }}
                    className={`block w-full text-left py-2 px-3 rounded transition-colors ${
                      index === activeCategory
                        ? "text-teal-700 font-semibold bg-teal-200"
                        : "text-gray-600 hover:text-teal-700 hover:bg-teal-100"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Right Content Area */}
            <div className="flex-1 p-6 lg:p-12">
              {/* Main Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                {currentClinic.title}
              </h2>

              {/* Description Paragraphs */}
              <div className="space-y-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {currentClinic.description1}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {currentClinic.description2}
                </p>
              </div>

              {/* Tags/Keywords */}
              <div className="flex flex-wrap gap-3 mb-8">
                {currentClinic.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium hover:bg-teal-200 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Learn More Button */}
              <button className="bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

