import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { Link, useParams } from 'react-router'
import { Button } from '~/components/ui/button'
import { categories } from '~/data/categories'

export function meta({
  params,
}: {
  params: { category: string; utility: string }
}) {
  // Obtén los datos de la categoría y utilidad
  const categoryData = categories.find((c) => c.url === `/${params.category}`)
  const subcategoryData = categoryData?.items.find(
    (item) => item.url === `/${params.utility}`
  )

  // Si no se encuentran los datos, usa un título predeterminado
  const title = subcategoryData
    ? `Utilidades - ${subcategoryData.title}`
    : 'Utilidades - Página no encontrada'

  return [{ title }]
}

export default function UtilityPage() {
  const { category, utility } = useParams<{
    category: string
    utility: string
  }>()

  // Modificar la función para encontrar la categoría y subcategoría correctas
  const categoryData = categories.find((c) => c.url === `/${category}`)
  const subcategoryData = categoryData?.items.find(
    (item) => item.url === `/${utility}`
  )

  // Si no se encuentra la categoría , subcategoría o datos de la subcategoría, mostrar un mensaje de error
  if (!categoryData || !subcategoryData || !subcategoryData.data) {
    return (
      <section className="p-4 grid place-content-center h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <p className="text-2xl font-bold mb-4">Datos no encontrados</p>
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
      {/* // bg rectangulos | bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] */}
      {/*// bg circulos | h-full bg-[radial-gradient(hsl(0_0%_89.8%/25%)_1px,transparent_1px)] [background-size:12px_12px] */}
      {/* <title>{`Utilidades - ${subcategoryData?.title}`}</title> */}
      <h1 className="text-2xl font-bold mb-4">{subcategoryData?.title}</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {subcategoryData.data.map((item) => (
          <div
            key={item.title}
            className="border p-4 rounded-lg flex flex-col items-start bg-neutral-50/40"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            {item.web && (
              <Button asChild>
                <a
                  href={item.web}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="max-w-full mb-2 !bg-neutral-100/55 hover:!bg-neutral-100/75 !text-neutral-900 [transition:background-color_150ms_ease-in-out,opacity_150ms_ease-in-out]"
                >
                  <ExternalLink /> <span className="truncate">{item.web}</span>
                </a>
              </Button>
            )}

            {item.github && (
              <Button asChild>
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="max-w-full !bg-stone-200/30 hover:!bg-stone-200/40 !text-neutral-900 [transition:background-color_150ms_ease-in-out,opacity_150ms_ease-in-out]"
                >
                  <Github /> <span className="truncate">{item.github}</span>
                </a>
              </Button>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

// ctrol + k ctrol + c
// Ctrl + K Ctrl + U

// ssr false, no ppr
// import { ArrowRight, ExternalLink, Github } from 'lucide-react'
// import { Link } from 'react-router'
// import { Button } from '~/components/ui/button'
// import { categories } from '~/data/categories'
// import type { Route } from './+types/utility'

// export function clientLoader({ params }: Route.ClientLoaderArgs) {
//   // Obtén los datos de la categoría y utilidad
//   const categoryData = categories.find((c) => c.url === `/${params.category}`)
//   const subcategoryData = categoryData?.items.find(
//     (item) => item.url === `/${params.utility}`
//   )
//   return { categoryData, subcategoryData }
// }

// export function meta({ data }: Route.MetaArgs) {
//   const { subcategoryData } = data

//   const title =
//     !data || !subcategoryData
//       ? 'Utilidades - Página no encontrada'
//       : `Utilidades - ${subcategoryData.title}`

//   return [{ title }]
// }

// export default function UtilityPage({ loaderData }: Route.ComponentProps) {
//   const { categoryData, subcategoryData } = loaderData

//   // Si no se encuentra la categoría , subcategoría o datos de la subcategoría, mostrar un mensaje de error
//   if (!categoryData || !subcategoryData || !subcategoryData.data) {
//     return (
//       <section className="p-4 grid place-content-center h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
//         <p className="text-2xl font-bold mb-4">Datos no encontrados</p>
//         <Button asChild>
//           <Link
//             to="/"
//             className="max-w-full !bg-stone-200/40 hover:!bg-stone-200/50 !text-neutral-900 [transition:background-color_150ms_ease-in-out,opacity_150ms_ease-in-out] group"
//           >
//             <span className="truncate">Volver al Inicio</span>{' '}
//             <ArrowRight className="transition-transform duration-150 ease-in-out group-hover:translate-x-0.5" />
//           </Link>
//         </Button>
//       </section>
//     )
//   }

//   return (
//     <section className="p-4 h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
//       {/* // bg rectangulos | bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] */}
//       {/*// bg circulos | h-full bg-[radial-gradient(hsl(0_0%_89.8%/25%)_1px,transparent_1px)] [background-size:12px_12px] */}
//       {/* <title>{`Utilidades - ${subcategoryData?.title}`}</title> */}
//       <h1 className="text-2xl font-bold mb-4">{subcategoryData?.title}</h1>
//       <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {subcategoryData.data.map((item) => (
//           <div
//             key={item.title}
//             className="border p-4 rounded-lg flex flex-col items-start bg-neutral-50/40"
//           >
//             <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
//             {item.web && (
//               <Button asChild>
//                 <a
//                   href={item.web}
//                   target="_blank"
//                   rel="noopener noreferrer nofollow"
//                   className="max-w-full mb-2 !bg-neutral-100/55 hover:!bg-neutral-100/75 !text-neutral-900 [transition:background-color_150ms_ease-in-out,opacity_150ms_ease-in-out]"
//                 >
//                   <ExternalLink /> <span className="truncate">{item.web}</span>
//                 </a>
//               </Button>
//             )}

//             {item.github && (
//               <Button asChild>
//                 <a
//                   href={item.github}
//                   target="_blank"
//                   rel="noopener noreferrer nofollow"
//                   className="max-w-full !bg-stone-200/30 hover:!bg-stone-200/40 !text-neutral-900 [transition:background-color_150ms_ease-in-out,opacity_150ms_ease-in-out]"
//                 >
//                   <Github /> <span className="truncate">{item.github}</span>
//                 </a>
//               </Button>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }
