import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'

import type { Route } from './+types/root'
import './app.css'

export const links: Route.LinksFunction = () => [
  {
    rel: 'preload',
    href: '/font/inter.woff2',
    crossOrigin: 'anonymous',
    as: 'font',
    type: 'font/woff2',
  },
  // <link rel="preload" href="/public/inter.woff2" crossorigin="anonymous" as="font" type="font/woff2"></link>
  // google
  /* { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  }, */
  /* {
    rel: 'icon',
    href: 'favicon_64x64.ico',
    type: 'image/x-icon',
    sizes: '64x64',
  },
  {
    rel: 'icon',
    href: 'favicon_256x256.ico',
    type: 'image/x-icon',
    sizes: '256x256',
  }, */
  /* {
    rel: 'author',
    href: 'https://github.com/SergiCodeDev',
  }, */
]

export const meta: Route.MetaFunction = () => [
  /* {
    name: 'theme-color',
    content: '#ffffff',
  }, */
  {
    title: 'Utilidades',
  },
  /* {
    name: 'description',
    content:
      'Colección de herramientas, librerías y recursos para desarrolladores web. Desde frameworks y componentes UI hasta soluciones de hosting, bases de datos, testing y mucho más. Todo en un solo lugar.',
  },
  {
    name: 'application-name',
    content: 'Utilidades para el Desarrollo Web',
  },
  { name: 'author', content: 'SergiCodeDev' },
  {
    name: 'keywords',
    content:
      'Desarrollo Web, Utilidades, Herramientas, Librerías, Frameworks, UI, Hosting, Bases de Datos, Testing, API, JavaScript, TypeScript',
  },
  {
    name: 'referrer',
    content: 'origin-when-cross-origin',
  },
  { name: 'creator', content: 'SergiCodeDev' },
  { name: 'publisher', content: 'SergiCodeDev' },
  { name: 'robots', content: 'index, follow' },
  {
    name: 'googlebot',
    content:
      'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
  },
  {
    name: 'category',
    content: 'utilidades-desarrollo-web',
  },
  {
    name: 'format-detection',
    content: 'telephone=no, address=no, email=no',
  },
  { property: 'og:title', content: 'Utilidades para el Desarrollo Web' },
  {
    property: 'og:description',
    content:
      'Colección de herramientas, librerías y recursos para desarrolladores web. Desde frameworks y componentes UI hasta soluciones de hosting, bases de datos, testing y mucho más. Todo en un solo lugar.',
  },
  { property: 'og:url', content: 'https://sergicodedev.pages.dev' },
  { property: 'og:site_name', content: 'Utilidades' },
  { property: 'og:locale', content: 'es_ES' },
  {
    property: 'og:image',
    content: 'https://sergicodedev.pages.dev/opengraph/og.jpg',
  },
  { property: 'og:image:width', content: '1200' },
  { property: 'og:image:height', content: '630' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Utilidades para el Desarrollo Web' },
  {
    name: 'twitter:description',
    content:
      'Colección de herramientas, librerías y recursos para desarrolladores web. Desde frameworks y componentes UI hasta soluciones de hosting, bases de datos, testing y mucho más. Todo en un solo lugar.',
  },
  {
    name: 'twitter:image',
    content: 'https://sergicodedev.pages.dev/opengraph/og.jpg',
  }, */
]

// Componente de carga
/* 
export function HydrateFallback() {
  return (
    <section className="p-4 grid place-content-center h-screen bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="bg-sidebar-primary shadow text-sidebar-primary-foreground flex aspect-square size-44 items-center justify-center rounded-[3.4rem] bg-[conic-gradient(from_270deg,rgba(255,255,255,1)_0deg,rgba(215,231,255,1)_30deg,rgba(238,231,255,1)_60deg,rgba(251,211,255,1)_90deg,rgba(255,238,231,1)_120deg,rgba(249,255,238,1)_150deg,rgba(195,255,243,1)_180deg,rgba(249,255,238,1)_210deg,rgba(255,238,231,1)_240deg,rgba(251,211,255,1)_270deg,rgba(238,231,255,1)_300deg,rgba(215,231,255,1)_330deg,rgba(255,255,255,1)_360deg)]">
        <GalleryVerticalEnd className="size-22 text-neutral-800" />
      </div>
      <p className="text-2xl font-bold mt-4 text-center text-neutral-800">
        Cargando...
      </p>
    </section>
  )
} 
*/

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <Meta />
        <Links />
        <meta
          name="description"
          content="Colección de herramientas, librerías y recursos para desarrolladores web. Desde frameworks y componentes UI hasta soluciones de hosting, bases de datos, testing y mucho más. Todo en un solo lugar."
        />
        <link rel="author" href="https://github.com/SergiCodeDev" />
        <meta
          name="application-name"
          content="Utilidades para el Desarrollo Web"
        />
        <meta name="author" content="SergiCodeDev" />
        <meta
          name="keywords"
          content="Desarrollo Web, Utilidades, Herramientas, Librerías, Frameworks, UI, Hosting, Bases de Datos, Testing, API, JavaScript, TypeScript"
        />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="creator" content="SergiCodeDev" />
        <meta name="publisher" content="SergiCodeDev" />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />
        <meta name="category" content="utilidades-desarrollo-web" />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
        <meta property="og:title" content="Utilidades para el Desarrollo Web" />
        <meta
          property="og:description"
          content="Colección de herramientas, librerías y recursos para desarrolladores web. Desde frameworks y componentes UI hasta soluciones de hosting, bases de datos, testing y mucho más. Todo en un solo lugar."
        />
        <meta property="og:url" content="https://sergicodedev.pages.dev" />
        <meta property="og:site_name" content="Utilidades" />
        <meta property="og:locale" content="es_ES" />
        <meta
          property="og:image"
          content="https://utilidades.pages.dev/opengraph/og.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Utilidades para el Desarrollo Web"
        />
        <meta
          name="twitter:description"
          content="Colección de herramientas, librerías y recursos para desarrolladores web. Desde frameworks y componentes UI hasta soluciones de hosting, bases de datos, testing y mucho más. Todo en un solo lugar."
        />
        <meta
          name="twitter:image"
          content="https://utilidades.pages.dev/opengraph/og.jpg"
        />
        <link
          rel="icon"
          href="/favicon/favicon_64x64.ico"
          type="image/x-icon"
          sizes="64x64"
        />
        <link
          rel="icon"
          href="/favicon/favicon_256x256.ico"
          type="image/x-icon"
          sizes="256x256"
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}

// export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
//   let message = 'Oops!'
//   let details: string | null = 'An unexpected error occurred.'
//   let stack: string | undefined

//   if (isRouteErrorResponse(error)) {
//     // message = error.status === 404 ? '404' : 'Error'
//     message = 'Página no encontrada'
//     // details =
//     //   error.status === 404
//     //     ? 'The requested page could not be found.'
//     //     : error.statusText || details
//     details = null
//   } else if (import.meta.env.DEV && error && error instanceof Error) {
//     details = error.message
//     stack = error.stack
//   }

//   return (
//     <main className="p-4 grid place-content-center h-screen bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
//       <h2 className="text-2xl font-bold mb-4">{message}</h2>
//       <Button asChild>
//         <Link
//           to="/"
//           className="max-w-full !bg-stone-200/40 hover:!bg-stone-200/50 !text-neutral-900 [transition:background-color_150ms_ease-in-out,opacity_150ms_ease-in-out] group"
//         >
//           <span className="truncate">Volver al Inicio</span>{' '}
//           <ArrowRight className="transition-transform duration-150 ease-in-out group-hover:translate-x-0.5" />
//         </Link>
//       </Button>

//       {details && <p>{details}</p>}
//       {stack && (
//         <pre className="w-full p-4 overflow-x-auto">
//           <code>{stack}</code>
//         </pre>
//       )}
//     </main>
//   )
// }
