import React from 'react';
import { Code, ShoppingCart, MessageSquare, Zap } from 'lucide-react';
import Card from '@/components/ui/Card';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Desarrollo de Software",
    description: "Soluciones personalizadas para tu negocio con las últimas tecnologías"
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-commerce & Ventas",
    description: "Plataformas de comercio electrónico y sistemas de ventas optimizados"
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Bots & Automatización",
    description: "Chatbots inteligentes y automatización de procesos empresariales"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Apps & Plataformas",
    description: "Aplicaciones web y móviles escalables y de alto rendimiento"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones tecnológicas creadas por una comunidad de expertos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <Card key={idx}>
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-16 h-16 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}