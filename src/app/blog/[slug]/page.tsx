import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import { sanityFetch, queries, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Componentes para renderizar el contenido rico de Sanity
const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8 rounded-xl overflow-hidden">
        <Image
          src={urlFor(value).width(1200).url()}
          alt={value.alt || 'Post image'}
          width={1200}
          height={675}
          className="w-full h-auto"
        />
      </div>
    ),
    code: ({ value }: any) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6">
        <code className={`language-${value.language}`}>{value.code}</code>
      </pre>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold text-gray-900 mt-12 mb-6">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-lg text-gray-700 leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-amber-500 pl-6 py-2 my-6 italic text-gray-700 bg-amber-50 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-600 hover:text-amber-700 underline"
      >
        {children}
      </a>
    ),
    strong: ({ children }: any) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-gray-100 text-amber-600 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
};

// Generar metadata dinámica para SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await sanityFetch(queries.postBySlug(params.slug));

  if (!post) {
    return {
      title: 'Post no encontrado | Devhive',
    };
  }

  return {
    title: `${post.title} | Devhive Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: urlFor(post.mainImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await sanityFetch(queries.postBySlug(params.slug));

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      
      <article className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Back Link */}
          <Link 
            href="/blog"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-8 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.map((cat: any) => (
                  <span
                    key={cat.slug.current}
                    className="text-sm font-semibold px-4 py-2 rounded-full bg-amber-100 text-amber-700"
                  >
                    {cat.title}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-8 border-b border-gray-200">
              {/* Author */}
              {post.author && (
                <div className="flex items-center gap-3">
                  {post.author.image ? (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={urlFor(post.author.image).width(96).height(96).url()}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <User className="w-6 h-6 text-amber-600" />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-gray-900">{post.author.name}</p>
                    {post.author.bio && (
                      <p className="text-sm text-gray-500">{post.author.bio}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Date */}
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>

              {/* Read Time */}
              {post.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime} min de lectura</span>
                </div>
              )}
            </div>
          </header>

          {/* Featured Image */}
          {post.mainImage && (
            <div className="relative h-96 rounded-2xl overflow-hidden mb-12 shadow-2xl">
              <Image
                src={urlFor(post.mainImage).width(1200).height(675).url()}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg prose-amber max-w-none">
            <PortableText value={post.body} components={portableTextComponents} />
          </div>

          {/* Author Bio (si existe) */}
          {post.author && post.author.bio && (
            <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg border border-amber-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Sobre el autor
              </h3>
              <div className="flex gap-6">
                {post.author.image && (
                  <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={urlFor(post.author.image).width(192).height(192).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="text-xl font-bold text-gray-900 mb-2">
                    {post.author.name}
                  </p>
                  <p className="text-gray-600 mb-4">{post.author.bio}</p>
                  {(post.author.github || post.author.linkedin) && (
                    <div className="flex gap-4">
                      {post.author.github && (
                        <a
                          href={post.author.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-600 hover:text-amber-700"
                        >
                          GitHub
                        </a>
                      )}
                      {post.author.linkedin && (
                        <a
                          href={post.author.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-600 hover:text-amber-700"
                        >
                          LinkedIn
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </>
  );
}