import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, BookOpen } from 'lucide-react';
import { sanityFetch, queries, urlFor } from '@/lib/sanity';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Blog | Devhive',
  description: 'Últimas noticias, tutoriales y actualizaciones de la comunidad Devhive',
};

export default async function BlogPage() {
  const posts = await sanityFetch(queries.allPosts);

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-20 px-4 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/"
              className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6 transition"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Link>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Blog de Devhive
            </h1>
            <p className="text-xl text-gray-600">
              Noticias, tutoriales y recursos para nuestra comunidad de desarrolladores
            </p>
          </div>

          {/* Posts Grid */}
          {posts.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
              <BookOpen className="w-16 h-16 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Aún no hay posts
              </h3>
              <p className="text-gray-600">
                Estamos preparando contenido increíble. ¡Vuelve pronto!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <Link 
                  key={post._id} 
                  href={`/blog/${post.slug.current}`}
                  className="group"
                >
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    
                    {/* Image */}
                    <div className="relative h-56 bg-gradient-to-br from-amber-200 to-orange-200">
                      {post.mainImage ? (
                        <Image
                          src={urlFor(post.mainImage).width(600).height(400).url()}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <BookOpen className="w-16 h-16 text-amber-600" />
                        </div>
                      )}
                      
                      {/* Featured Badge */}
                      {post.featured && (
                        <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          Destacado
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      
                      {/* Categories */}
                      {post.categories && post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.categories.map((cat: any) => (
                            <span
                              key={cat.slug.current}
                              className="text-xs font-semibold px-2 py-1 rounded-full bg-amber-100 text-amber-700"
                            >
                              {cat.title}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                                day: 'numeric',
                                month: 'short',
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

                        {/* Author */}
                        {post.author && (
                          <div className="flex items-center gap-2">
                            {post.author.image && (
                              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                <Image
                                  src={urlFor(post.author.image).width(64).height(64).url()}
                                  alt={post.author.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            )}
                            <span className="text-sm text-gray-600">
                              {post.author.name}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}