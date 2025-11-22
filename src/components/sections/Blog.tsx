import React from 'react';
import { BookOpen, Calendar, Clock } from 'lucide-react';
import Card from '@/components/ui/Card';

const blogPosts = [
  {
    id: '1',
    title: "Lanzamiento de Devhive: Una nueva era de colaboración",
    date: "2024-11-15",
    category: "Anuncio",
    excerpt: "Hoy lanzamos Devhive, una comunidad de desarrolladores que colaboran para crear productos tecnológicos innovadores.",
    readTime: 5
  },
  {
    id: '2',
    title: "Cómo monetizar tus habilidades de desarrollo",
    date: "2024-11-10",
    category: "Tutorial",
    excerpt: "Descubre las mejores estrategias para convertir tu conocimiento técnico en una fuente de ingresos sostenible.",
    readTime: 8
  },
  {
    id: '3',
    title: "Reporte financiero Q4 2024",
    date: "2024-11-05",
    category: "Finanzas",
    excerpt: "Transparencia total: conoce nuestros números y cómo estamos creciendo como comunidad.",
    readTime: 3
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Blog & Noticias
          </h2>
          <p className="text-xl text-gray-600">
            Últimas actualizaciones de la comunidad
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="h-full p-0 overflow-hidden">
              {/* Imagen placeholder */}
              <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-amber-600" />
              </div>

              <div className="p-6">
                {/* Categoría */}
                <div className="mb-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-700">
                    {post.category}
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(post.date).toLocaleDateString('es-ES', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} min</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
