import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, BookOpen, Calendar, Clock } from 'lucide-react';
import { sanityFetch, queries, urlFor } from '@/lib/sanity';
import Card from '@/components/ui/Card';

export default async function Blog() {
  // Fetch posts destacados desde Sanity
  const posts = await sanityFetch(queries.featuredPosts);

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
          <Link 
            href="/blog"
            className="text-amber-600 font-semibold flex items-center hover:text-amber-700 transition"
          >
            Ver todos
            <ChevronRight className="ml-1" />
          </Link>
        </div>
        
        {posts.length === 0 ? (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 text-center">
            <BookOpen className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <p className="text-amber-800">
              No hay posts publicados aún. ¡Pronto tendremos contenido increíble!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link key={post._id} href={`/blog/${post.slug.current}`}>
                <Card className="h-full hover:scale-105 transition-transform cursor-pointer p-0 overflow-hidden">
                  {/* Imagen */}
                  <div className="relative h-48 bg-gradient-to-br from-amber-200 to-orange-200">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).width(600).height(400).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-amber-600" />
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Categorías */}
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex gap-2 mb-3">
                        {post.categories.map((cat: any) => (
                          <span
                            key={cat.slug.current}
                            className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-700"
                          >
                            {cat.title}
                          </span>
                        ))}
                      </div>
                    )}

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
                          {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      {post.readTime && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime} min</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
