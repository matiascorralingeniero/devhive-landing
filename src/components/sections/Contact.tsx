import React from 'react';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';

export default function Contact() {
  return (
    <section id="contacto" className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cuéntanos sobre tu idea y descubre cómo Devhive puede ayudarte a hacerla realidad
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Conecta con nosotros
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a 
                      href="mailto:hola@devhive.com" 
                      className="text-amber-600 hover:text-amber-700"
                    >
                      hola@devhive.com
                    </a>
                  </div>
                </div>

                {/* Discord/Comunidad */}
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Comunidad</h4>
                    <a 
                      href="#" 
                      className="text-amber-600 hover:text-amber-700"
                    >
                      Únete a nuestro Discord
                    </a>
                  </div>
                </div>

                {/* Ubicación */}
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Ubicación</h4>
                    <p className="text-gray-600">
                      Santiago, Chile
                      <br />
                      Remoto en toda Latinoamérica
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info adicional */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                ¿Por qué elegirnos?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-2xl">🐝</span>
                  <span>Equipo colaborativo de desarrolladores experimentados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">⚡</span>
                  <span>Desarrollo ágil y entregas rápidas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">💰</span>
                  <span>Precios competitivos y transparentes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">🚀</span>
                  <span>Tecnologías modernas y escalables</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envíanos un mensaje
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}