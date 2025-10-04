import React from 'react';

const stats = [
  { value: "50+", label: "Desarrolladores Activos" },
  { value: "25", label: "Proyectos Completados" },
  { value: "$150K", label: "Ingresos Generados" },
  { value: "98%", label: "Satisfacción Cliente" }
];

export default function Stats() {
  return (
    <section className="py-12 bg-white/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
