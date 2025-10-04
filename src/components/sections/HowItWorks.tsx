import React from 'react';
import { Users, Code, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: <Users className="w-10 h-10 text-amber-600" />,
    number: "1",
    title: "Únete",
    description: "Forma parte de nuestra comunidad de desarrolladores talentosos"
  },
  {
    icon: <Code className="w-10 h-10 text-amber-600" />,
    number: "2",
    title: "Colabora",
    description: "Trabaja en proyectos innovadores con otros desarrolladores"
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-amber-600" />,
    number: "3",
    title: "Monetiza",
    description: "Obtén ingresos por tu trabajo y productos desarrollados"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-100 to-orange-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cómo Funciona Devhive
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.number}. {step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
