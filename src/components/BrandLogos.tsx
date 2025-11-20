export default function BrandLogos() {
  return (
    <section className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-16">
          {/* BETAEL - All caps, sans-serif, regular weight */}
          <div className="text-teal-400 text-xl sm:text-2xl md:text-3xl font-light tracking-wider uppercase font-sans">
            BETAEL
          </div>

          {/* Healer. - Mixed case, sans-serif, regular weight, with period */}
          <div className="text-teal-400 text-xl sm:text-2xl md:text-3xl font-light font-sans">
            Healer.
          </div>

          {/* Lifetrace - Script-like, connected letters */}
          <div 
            className="text-teal-400 text-2xl sm:text-3xl md:text-4xl font-normal"
            style={{ 
              fontFamily: "'Brush Script MT', 'Lucida Handwriting', 'Dancing Script', cursive",
              fontStyle: 'italic',
              letterSpacing: '-0.02em'
            }}
          >
            Lifetrace
          </div>

          {/* medcare - Lowercase, bold sans-serif */}
          <div className="text-teal-400 text-xl sm:text-2xl md:text-3xl font-bold lowercase font-sans">
            medcare
          </div>

          {/* SOVEN - All caps, serif font */}
          <div 
            className="text-teal-400 text-xl sm:text-2xl md:text-3xl font-normal uppercase"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            SOVEN
          </div>
        </div>
      </div>
    </section>
  );
}

