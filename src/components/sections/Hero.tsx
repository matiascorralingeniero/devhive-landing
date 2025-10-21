'use client';

import React from 'react';
import { ChevronRight, Hexagon } from 'lucide-react';
import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Logo size='lg'/>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Como una colmena,
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                {' '}creamos miel digital
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Somos una comunidad de desarrolladores que colaboran, innovan y monetizan productos tecnológicos de alto impacto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex items-center justify-center">
                Únete a la Colmena
                <ChevronRight className="ml-2" />
              </Button>
              <Button variant="secondary" size="lg">
                Ver Proyectos
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <div 
                    key={i}
                    className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center hover:scale-110 transition"
                  >
                    <Hexagon className="w-8 h-8 text-amber-600 fill-amber-200" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}