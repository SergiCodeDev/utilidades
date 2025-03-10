import { GalleryVerticalEnd } from 'lucide-react'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Utilidades - Inicio' }]
}

export default function Home() {
  return (
    <section className="p-4 grid place-content-center h-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="bg-sidebar-primary shadow text-sidebar-primary-foreground flex aspect-square size-44 items-center justify-center rounded-[3.4rem] bg-[conic-gradient(from_270deg,rgba(255,255,255,1)_0deg,rgba(215,231,255,1)_30deg,rgba(238,231,255,1)_60deg,rgba(251,211,255,1)_90deg,rgba(255,238,231,1)_120deg,rgba(249,255,238,1)_150deg,rgba(195,255,243,1)_180deg,rgba(249,255,238,1)_210deg,rgba(255,238,231,1)_240deg,rgba(251,211,255,1)_270deg,rgba(238,231,255,1)_300deg,rgba(215,231,255,1)_330deg,rgba(255,255,255,1)_360deg)]">
        <GalleryVerticalEnd className="size-22 text-neutral-800" />
      </div>
      <h1 className="text-2xl font-bold mt-4 text-center text-neutral-800">
        Utilidades
      </h1>
    </section>
  )
}
