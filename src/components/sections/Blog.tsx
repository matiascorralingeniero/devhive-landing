import React from 'react';
import { ChevronRight, BookOpen } from 'lucide-react';
import Card from '@/components/ui/Card';

const blogPosts = [
  {
    title: "Lanzamiento de Devhive: Una nueva era de colaboración",
    date: "15 Sep 2025",
    category: "Anuncio"
  },
  {
    title: "Cómo monetizar tus habilidades de desarrollo",
    date: "10 Sep 2025",
    category: "Tutorial"
  },
  {
    title: "Reporte financiero Q3 2025",
    date: "05 Sep 2025",
    category: "Finanzas"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Blog & Noticias
            </h2>
            <p className="text-xl text-gray-600">
              Últimas actualizaciones de la comunidad
            </p>
          </div>
          <button className="text-amber-600 font-semibold flex items-center hover:text-amber-700">
            Ver todos
            <ChevronRight className="ml-1" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <Card key={idx} className="p-0 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-amber-600" />
              </div>
              <div className="p-6">
                <div className="text-sm text-amber-600 font-semibold mb-2">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm">{post.date}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}