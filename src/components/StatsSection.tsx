const stats = [
  {
    number: "+5120",
    label: "Happy Patients",
  },
  {
    number: "+26",
    label: "Total Branches",
  },
  {
    number: "+53",
    label: "Senior Doctors",
  },
  {
    number: "+10",
    label: "Years Experience",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Number */}
              <div className="text-5xl md:text-6xl font-bold text-teal-700 mb-3">
                {stat.number}
              </div>
              {/* Label */}
              <div className="text-lg md:text-xl text-gray-800 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

