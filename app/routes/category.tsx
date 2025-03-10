import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { Link, useParams } from 'react-router'
import { Button } from '~/components/ui/button'
import { categories } from '~/data/categories'

export function meta({ params }: { params: { category: string } }) {
  // Obtén los datos de la categoría y utilidad
  const categoryData = categories.find((c) => c.url === `/${params.category}`)

  // Si no se encuentran los datos, usa un título predeterminado
  const title = categoryData
    ? `Utilidades - ${categoryData.title}`
    : 'Utilidades - Página no encontrada'

  return [{ title }]
}

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>()

  const categoryData = categories.find((c) => c.url === `/${category}`)

  if (!categoryData) {
    return (
      <section className="p-4 grid place-content-center h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <p className="text-2xl font-bold mb-4">Categoría no encontrada</p>
        <Button asChild>
          <Link
            to="/"
            className="max-w-full !bg-stone-200/40 hover:!bg-stone-200/50 !text-neutral-900 [transition:background-color_150ms_ease-in-out,opacity_150ms_ease-in-out] group"
          >
            <span className="truncate">Volver al Inicio</span>{' '}
            <ArrowRight className="transition-transform duration-150 ease-in-out group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </section>
    )
  }

  return (
    <section className="p-4 h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <h1 className="text-2xl font-bold mb-4 hidden">{categoryData.title}</h1>
      {categoryData.items.map((subcategory) => (
        <div key={subcategory.title} className="mb-6">
          <h2 className="text-2xl font-bold mb-4">{subcategory.title}</h2>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {subcategory.data.map((utility) => (
              <div
                key={utility.title}
                className="border p-4 rounded-lg flex flex-col items-start bg-neutral-50/40"
              >
                <h3 className="text-xl font-semibold mb-2">{utility.title}</h3>
                {utility.web && (
                  <Button asChild>
                    <a
                      href={utility.web}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="max-w-full mb-2 !bg-neutral-100/55 hover:!bg-neutral-100/75 !text-neutral-900 [transition:background-color_150ms_ease-in-out,opacity_150ms_ease-in-out]"
                    >
                      <ExternalLink />{' '}
                      <span className="truncate">{utility.web}</span>
                    </a>
                  </Button>
                )}

                {utility.github && (
                  <Button asChild>
                    <a
                      href={utility.github}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="max-w-full !bg-stone-200/30 hover:!bg-stone-200/40 !text-neutral-900 [transition:background-color_150ms_ease-in-out,opacity_150ms_ease-in-out]"
                    >
                      <Github />{' '}
                      <span className="truncate">{utility.github}</span>
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
