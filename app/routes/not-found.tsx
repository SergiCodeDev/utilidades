import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '~/components/ui/button'

export function meta() {
  return [{ title: 'Utilidades - Página no encontrada' }]
}

// ssr: true
// export function loader() {
//   // return new Response('Not Found', { status: 404 })
//   // throw new Response(null, { status: 404 })
//   return new Response(null, { status: 404 })
// }

// ssr: false
// status: 200

export default function UtilityPage() {
  return (
    <section className="p-4 grid place-content-center h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <h2 className="text-2xl font-bold mb-4">Página no encontrada</h2>
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
