import { sanityFetch, queries } from '@/lib/sanity'

export default async function TestSanityPage() {
  // Fetch posts desde Sanity
  const posts = await sanityFetch(queries.allPosts)

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Test de Conexión Sanity ✅
        </h1>

        {posts.length === 0 ? (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-yellow-800">
              No hay posts todavía. Ve a{' '}
              <a 
                href="http://localhost:3333" 
                target="_blank"
                className="underline font-semibold"
              >
                Sanity Studio
              </a>
              {' '}y crea tu primer post.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-green-600 font-semibold">
              ✅ Conexión exitosa! Encontrados {posts.length} post(s)
            </p>

            {posts.map((post: any) => (
              <div 
                key={post._id} 
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h2 className="text-2xl font-bold mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex gap-2 text-sm text-gray-500">
                  <span>Por: {post.author?.name}</span>
                  <span>•</span>
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString('es-ES')}
                  </span>
                  {post.readTime && (
                    <>
                      <span>•</span>
                      <span>{post.readTime} min de lectura</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-bold mb-2">Próximos pasos:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Crear más posts en Sanity Studio</li>
            <li>Integrar en la página de Blog</li>
            <li>Crear páginas individuales de posts</li>
            <li>Borrar esta página de prueba</li>
          </ul>
        </div>
      </div>
    </div>
  )
}