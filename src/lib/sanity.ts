// src/lib/sanity.ts
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Set to false for fresh data
})

// Helper para construir URLs de imágenes
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Queries útiles
export const queries = {
  // Obtener todos los posts
  allPosts: `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    featured,
    "author": author->{name, image},
    "categories": categories[]->{ title, slug, color }
  }`,

  // Obtener posts destacados
  featuredPosts: `*[_type == "post" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    "author": author->{name, image},
    "categories": categories[]->{ title, slug, color }
  }`,

  // Obtener un post por slug
  postBySlug: (slug: string) => `*[_type == "post" && slug.current == "${slug}"][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    readTime,
    body,
    "author": author->{name, image, bio, github, linkedin},
    "categories": categories[]->{ title, slug, color }
  }`,

  // Obtener todas las categorías
  allCategories: `*[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    color
  }`,
}

// Función helper para fetch
export async function sanityFetch<T = any>(query: string): Promise<T> {
  return client.fetch(query)
}