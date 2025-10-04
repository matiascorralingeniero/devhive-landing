import React from 'react';
import Button from '@/components/ui/Button';

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-amber-500 to-orange-500">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Listo para crear miel con nosotros?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Únete a Devhive y forma parte de una comunidad que transforma ideas en productos rentables
        </p>
        <button className="bg-white text-amber-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition transform hover:scale-105">
          Comenzar Ahora
        </button>
      </div>
    </section>
  );
}