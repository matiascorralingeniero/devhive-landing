import React from 'react';
import { Hexagon, Github, Linkedin, Twitter } from 'lucide-react';
import Logo from '@/components/ui/Logo';

const footerLinks = {
  services: [
    { name: 'Desarrollo', href: '#' },
    { name: 'E-commerce', href: '#' },
    { name: 'Bots', href: '#' },
  ],
  community: [
    { name: 'Blog', href: '#' },
    { name: 'Proyectos', href: '#' },
    { name: 'Finanzas', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo size='sm'/>
            </div>
            <p className="text-gray-400">
              Construyendo el futuro del desarrollo colaborativo
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-amber-500">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-bold mb-4">Comunidad</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-amber-500">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <Github className="w-6 h-6 text-gray-400 hover:text-amber-500 cursor-pointer transition" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-amber-500 cursor-pointer transition" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-amber-500 cursor-pointer transition" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Devhive. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}