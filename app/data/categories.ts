import { LifeBuoy, type LucideIcon } from 'lucide-react'

export interface Utility {
  title: string
  web?: string
  github?: string
}

export interface Subcategory {
  title: string
  url: string
  data: Utility[]
}

export interface Category {
  title: string
  url: string
  items: Subcategory[]
}

export interface NavFooterItem {
  title: string
  url: string
  icon: LucideIcon
}

export const categories: Category[] = [
  {
    title: 'Optimizar',
    url: '/optimizar',
    items: [
      {
        title: 'Imágenes',
        url: '/imagenes',
        data: [
          {
            title: 'Squoosh',
            web: 'https://squoosh.app',
            github: 'https://github.com/GoogleChromeLabs/squoosh',
          },
        ],
      },
    ],
  },

  {
    title: 'Frameworks',
    url: '/frameworks',
    items: [
      {
        title: 'Frontend',
        url: '/frontend',
        data: [
          {
            title: 'React',
            web: 'https://es.react.dev',
            github: 'https://github.com/facebook/react',
          },
          {
            title: 'Vue',
            web: 'https://vuejs.org',
            github: 'https://github.com/vuejs/core',
          },
          {
            title: 'Angular',
            web: 'https://angular.dev',
            github: 'https://github.com/angular/angular',
          },
          {
            title: 'Next.js',
            web: 'https://nextjs.org',
            github: 'https://github.com/vercel/next.js',
          },
          {
            title: 'React Router',
            web: 'https://reactrouter.com',
            github: 'https://github.com/remix-run/react-router',
          },
          {
            title: 'Remix',
            web: 'https://remix.run',
            github: 'https://github.com/remix-run/remix',
          },
          {
            title: 'Nuxt',
            web: 'https://nuxt.com',
            github: 'https://github.com/nuxt/nuxt',
          },
          {
            title: 'Astro',
            web: 'https://astro.build',
            github: 'https://github.com/withastro/astro',
          },
          {
            title: 'Svelte',
            web: 'https://svelte.dev',
            github: 'https://github.com/sveltejs/svelte',
          },
          {
            title: 'SvelteKit',
            web: 'https://svelte.dev/docs/kit/introduction',
            github: 'https://github.com/sveltejs/kit',
          },
          {
            title: 'Solid',
            web: 'https://www.solidjs.com',
            github: 'https://github.com/solidjs/solid',
          },
        ],
      },

      {
        title: 'Backend',
        url: '/backend',
        data: [
          {
            title: 'Hono',
            web: 'https://hono.dev',
            github: 'https://github.com/honojs/hono',
          },
          {
            title: 'NestJS',
            web: 'https://nestjs.com',
            github: 'https://github.com/nestjs/nest',
          },
          {
            title: 'Express',
            web: 'https://expressjs.com',
            github: 'https://github.com/expressjs/express',
          },
          {
            title: 'Fastify',
            web: 'https://fastify.dev',
            github: 'https://github.com/fastify/fastify',
          },
          {
            title: 'AdonisJS',
            web: 'https://adonisjs.com',
            github: 'https://github.com/adonisjs/core',
          },
          {
            title: 'Koa',
            web: 'https://koajs.com',
            github: 'https://github.com/koajs/koa',
          },
          {
            title: 'ElysiaJS',
            web: 'https://elysiajs.com',
            github: 'https://github.com/elysiajs/elysia',
          },
        ],
      },
    ],
  },

  {
    title: 'UI',
    url: '/ui',
    items: [
      {
        title: 'Tailwind CSS',
        url: '/tailwindcss',
        data: [
          {
            title: 'Tailwind CSS',
            web: 'https://tailwindcss.com',
            github: 'https://github.com/tailwindlabs/tailwindcss',
          },
          {
            title: 'Radix UI',
            web: 'https://www.radix-ui.com/',
            github: 'https://github.com/radix-ui/themes',
          },
          {
            title: 'DaisyUI',
            web: 'https://daisyui.com',
            github: 'https://github.com/saadeghi/daisyui',
          },
          {
            title: 'Flowbite',
            web: 'https://flowbite.com',
            github: 'https://github.com/themesberg/flowbite',
          },
          {
            title: 'Aceternity UI',
            web: 'https://ui.aceternity.com',
          },
          {
            title: 'FlyonUI',
            web: 'https://flyonui.com',
            github: 'https://github.com/themeselection/flyonui',
          },
          {
            title: 'UI Layouts',
            web: 'https://www.ui-layouts.com',
            github: 'https://github.com/ui-layouts/uilayouts',
          },
          {
            title: 'Buttons (Ibelick)',
            web: 'https://buttons.ibelick.com',
            github: 'https://github.com/ibelick/buttons',
          },
          {
            title: 'HeroUI (NextUI)',
            web: 'https://www.heroui.com',
            github: 'https://github.com/heroui-inc/heroui',
          },
          {
            title: 'TailAwesome',
            web: 'https://www.tailawesome.com',
          },
        ],
      },

      {
        title: 'Shadcn/ui',
        url: '/shadcn',
        data: [
          {
            title: 'Shadcn',
            web: 'https://ui.shadcn.com',
            github: 'https://github.com/shadcn-ui/ui',
          },
          {
            title: 'Origin UI',
            web: 'https://originui.com',
            github: 'https://github.com/origin-space/originui',
          },
          {
            title: 'Magic UI',
            web: 'https://magicui.design',
            github: 'https://github.com/magicuidesign/magicui',
          },
          {
            title: 'Tweakcn (Editor de temas)',
            web: 'https://tweakcn.com',
            github: 'https://github.com/jnsahaj/tweakcn',
          },
          {
            title: 'shadcn-ui-expansions',
            web: 'https://shadcnui-expansions.typeart.cc',
            github: 'https://github.com/hsuanyi-chou/shadcn-ui-expansions',
          },
          {
            title: 'shadcn-extension',
            web: 'https://shadcn-extension.vercel.app',
            github: 'https://github.com/BelkacemYerfa/shadcn-extension',
          },
          {
            title: 'enhanced-button',
            web: 'https://enhanced-button.vercel.app',
            github: 'https://github.com/jakobhoeg/enhanced-button',
          },
          {
            title: 'Motion Primitives',
            web: 'https://motion-primitives.com',
            github: 'https://github.com/ibelick/motion-primitives',
          },
          {
            title: 'react-full-stack-components',
            web: 'https://full-stack-components.vercel.app',
            github: 'https://github.com/KaraBharat/react-full-stack-components',
          },

          // Usado por Shadcn/ui
          {
            title: 'Radix UI (Components)',
            web: 'https://www.radix-ui.com/primitives',
            github: 'https://github.com/radix-ui/primitives',
          },
          {
            title: 'React DayPicker (Calendar)',
            web: 'https://daypicker.dev',
            github: 'https://github.com/gpbl/react-day-picker',
          },
          {
            title: 'Embla Carousel (Carousel)',
            web: 'https://www.embla-carousel.com',
            github: 'https://github.com/davidjerleke/embla-carousel',
          },
          {
            title: 'Recharts (Chart)',
            web: 'https://recharts.org/en-US',
            github: 'https://github.com/recharts/recharts',
          },
          {
            title: '⌘K (Command)',
            web: 'https://cmdk.paco.me',
            github: 'https://github.com/pacocoursey/cmdk',
          },
          {
            title: 'TanStack Table (Data Table)',
            web: 'https://tanstack.com/table/latest/docs/introduction',
            github: 'https://github.com/TanStack/table',
          },
          {
            title: 'Vaul (Drawer)',
            web: 'https://vaul.emilkowal.ski/getting-started',
            github: 'https://github.com/emilkowalski/vaul',
          },
          {
            title: 'React Hook Form (Form)',
            web: 'https://react-hook-form.com',
            github: 'https://github.com/react-hook-form/react-hook-form',
          },
          {
            title: 'Input OTP (Input OTP)',
            web: 'https://input-otp.rodz.dev/',
            github: 'https://github.com/guilhermerodz/input-otp',
          },
          {
            title: 'React Resizable Panels (Resizable)',
            web: 'https://react-resizable-panels.vercel.app',
            github: 'https://github.com/bvaughn/react-resizable-panels',
          },
          {
            title: 'Sonner (Sonner)',
            web: 'https://sonner.emilkowal.ski',
            github: 'https://github.com/emilkowalski/sonner',
          },
        ],
      },

      {
        title: 'Librerías',
        url: '/librerias',
        data: [
          {
            title: 'Ant Design',
            web: 'https://ant.design',
            github: 'https://github.com/ant-design/ant-design',
          },
          {
            title: 'React Aria',
            web: 'https://react-spectrum.adobe.com/react-aria/index.html',
            github: 'https://github.com/adobe/react-spectrum',
          },
          {
            title: 'Base UI',
            web: 'https://base-ui.com',
            github: 'https://github.com/mui/base-ui',
          },
          {
            title: 'Chakra UI',
            web: 'https://chakra-ui.com',
            github: 'https://github.com/chakra-ui/chakra-ui',
          },
          {
            title: 'Ark UI',
            web: 'https://ark-ui.com',
            github: 'https://github.com/chakra-ui/ark',
          },
          {
            title: 'MUI',
            web: 'https://mui.com',
            github: 'https://github.com/mui',
          },
          {
            title: 'PrimeReact',
            web: 'https://primereact.org',
            github: 'https://github.com/primefaces/primereact',
          },
          {
            title: 'Keep React',
            web: 'https://react.keepdesign.io',
            github: 'https://github.com/StaticMania/keep-react',
          },
          {
            title: 'Fluent UI',
            web: 'https://react.fluentui.dev',
            github: 'https://github.com/microsoft/fluentui',
          },
          {
            title: 'Uiverse',
            web: 'https://uiverse.io',
          },
          {
            title: 'React Bits',
            web: 'https://www.reactbits.dev',
            github: 'https://github.com/DavidHDev/react-bits',
          },
          {
            title: '21st',
            web: 'https://21st.dev',
            github: 'https://github.com/serafimcloud/21st',
          },
          {
            title: 'Bootstrap',
            web: 'https://getbootstrap.com',
            github: 'https://github.com/twbs',
          },
        ],
      },

      {
        title: 'Componentes',
        url: '/componentes',
        data: [
          {
            title: 'NumberFlow',
            web: 'https://number-flow.barvian.me',
            github: 'https://github.com/barvian/number-flow',
          },
          {
            title: 'react-gradient-glow',
            github: 'https://github.com/developedbyed/react-gradient-glow',
          },
          {
            title: 'React glow',
            github: 'https://github.com/codaworks/react-glow',
          },
          {
            title: 'Glide',
            web: 'https://glidejs.com',
            github: 'https://github.com/glidejs/glide',
          },
          {
            title: 'Flicking',
            web: 'https://naver.github.io/egjs-flicking',
            github: 'https://github.com/naver/egjs-flicking',
          },
          {
            title: 'Kibo UI',
            web: 'https://www.kibo-ui.com',
            github: 'https://github.com/haydenbleasel/kibo',
          },
          {
            title: 'ReUI',
            web: 'https://reui.io',
            github: 'https://github.com/keenthemes/reui',
          },
          {
            title: 'SmoothUI',
            web: 'https://smoothui.dev',
            github: 'https://github.com/educlopez/smoothui',
          },
          {
            title: 'Kokonut UI',
            web: 'https://kokonutui.com',
            github: 'https://github.com/kokonut-labs/kokonutui',
          },
        ],
      },
      {
        title: 'Bloques',
        url: '/bloques',
        data: [
          {
            title: 'Tailark',
            web: 'https://tailark.com',
            github: 'https://github.com/tailark/blocks',
          },
          {
            title: 'brijr',
            web: 'https://components.work',
            github: 'https://github.com/brijr/components',
          },
        ],
      },

      {
        title: 'Fondos',
        url: '/fondos',
        data: [
          {
            title: 'PatternCraft',
            web: 'https://patterncraft.fun',
            github: 'https://github.com/megh-bari/pattern-craft',
          },
          {
            title: 'BG.IBELICK',
            web: 'https://bg.ibelick.com',
            github: 'https://github.com/ibelick/background-snippets',
          },
        ],
      },
    ],
  },

  {
    title: 'Iconos',
    url: '/iconos',
    items: [
      {
        title: 'SVG',
        url: '/svg',
        data: [
          {
            title: 'Lucide',
            web: 'https://lucide.dev/icons/',
            github: 'https://github.com/lucide-icons/lucide',
          },
          {
            title: 'Tabler Icons',
            web: 'https://tabler.io/icons',
            github: 'https://github.com/tabler/tabler-icons',
          },
          {
            title: 'Iconoir',
            web: 'https://iconoir.com',
            github: 'https://github.com/iconoir-icons/iconoir',
          },
        ],
      },

      {
        title: 'Marcas',
        url: '/marcas',
        data: [
          {
            title: 'Svgl',
            web: 'https://svgl.app',
            github: 'https://github.com/pheralb/svgl',
          },
          {
            title: 'Simple Icons',
            web: 'https://simpleicons.org',
            github: 'https://github.com/simple-icons/simple-icons',
          },
        ],
      },

      {
        title: 'Librerías',
        url: '/librerias',
        data: [
          {
            title: 'React Icons',
            web: 'https://react-icons.github.io/react-icons',
            github: 'https://github.com/react-icons/react-icons',
          },
        ],
      },
    ],
  },

  {
    title: 'Hosting',
    url: '/hosting',
    items: [
      {
        title: 'Servidores',
        url: '/servidores',
        data: [
          {
            title: 'Cloudflare',
            web: 'https://www.cloudflare.com/es-es',
          },
          {
            title: 'Railway',
            web: 'https://railway.com',
          },
          {
            title: 'Vercel',
            web: 'https://vercel.com',
          },
          {
            title: 'AWS',
            web: 'https://aws.amazon.com/es',
          },
          {
            title: 'AWS Amplify',
            web: 'https://aws.amazon.com/es/amplify/',
          },
          {
            title: 'Azure',
            web: 'https://azure.microsoft.com/es-es',
          },
          {
            title: 'Google Cloud',
            web: 'https://cloud.google.com',
          },
          {
            title: 'DigitalOcean',
            web: 'https://www.digitalocean.com',
          },
          {
            title: 'Netlify',
            web: 'https://www.netlify.com',
          },
          {
            title: 'Render',
            web: 'https://render.com',
          },
          {
            title: 'Heroku',
            web: 'https://www.heroku.com',
          },
          {
            title: 'Fly.io',
            web: 'https://fly.io',
          },
          {
            title: 'Hetzner',
            web: 'https://www.hetzner.com',
          },
        ],
      },
      {
        title: 'Soluciones para VPS',
        url: '/soluciones-vps',
        data: [
          {
            title: 'Coolify',
            web: 'https://coolify.io',
            github: 'https://github.com/coollabsio/coolify',
          },
          {
            title: 'CapRover',
            web: 'https://caprover.com',
            github: 'https://github.com/caprover/caprover',
          },
          {
            title: 'Dokku',
            web: 'https://dokku.com',
            github: 'https://github.com/dokku/dokku',
          },
          {
            title: 'Dokploy',
            web: 'https://dokploy.com',
            github: 'https://github.com/Dokploy/dokploy',
          },
        ],
      },
      {
        title: 'BaaS',
        url: '/baas',
        data: [
          {
            title: 'Supabase',
            web: 'https://supabase.com',
            github: 'https://github.com/supabase/supabase',
          },
          { title: 'Firebase', web: 'https://firebase.google.com' },
          {
            title: 'Appwrite',
            web: 'https://appwrite.io',
            github: 'https://github.com/appwrite/appwrite',
          },
        ],
      },
      {
        title: 'Imágenes',
        url: '/imagenes',
        data: [
          { title: 'Cloudinary', web: 'https://cloudinary.com' },
          { title: 'Uploadcare', web: 'https://uploadcare.com' },
        ],
      },
      {
        title: 'Bases de Datos',
        url: '/bases-datos',
        data: [
          { title: 'MongoDB', web: 'https://www.mongodb.com' },
          { title: 'Turso', web: 'https://turso.tech' },
          { title: 'Neon', web: 'https://neon.tech' },
        ],
      },
      {
        title: 'Correos',
        url: '/correos',
        data: [{ title: 'Resend', web: 'https://resend.com' }],
      },
      {
        title: 'InfraOps',
        url: '/infra-ops',
        data: [
          {
            title: 'Docker (Contenedor)',
            web: 'https://www.docker.com',
            github: 'https://github.com/docker',
          },
          {
            title: 'Podman (Contenedor)',
            web: 'https://podman.io',
            github: 'https://github.com/containers/podman',
          },
          {
            title: 'Helm (Orquestación)',
            web: 'https://helm.sh',
            github: 'https://github.com/helm/helm',
          },
          {
            title: 'Kubernetes (Orquestación)',
            web: 'https://kubernetes.io',
            github: 'https://github.com/kubernetes/kubernetes',
          },
          {
            title: 'Nomad (Orquestación)',
            web: 'https://www.nomadproject.io',
            github: 'https://github.com/hashicorp/nomad',
          },
          {
            title: 'Portainer (Gestión de Contenedores)',
            web: 'https://www.portainer.io',
            github: 'https://github.com/portainer/portainer',
          },
          {
            title: 'Rancher (Gestión de Contenedores)',
            web: 'https://www.rancher.com',
            github: 'https://github.com/rancher/rancher',
          },
        ],
      },
      {
        title: 'Info',
        url: '/info',
        data: [{ title: 'GetDeploying', web: 'https://getdeploying.com' }],
      },
    ],
  },

  {
    title: 'Auth',
    url: '/auth',
    items: [
      {
        title: 'Bibliotecas',
        url: '/bibliotecas',
        data: [
          {
            title: 'Auth.js',
            web: 'https://authjs.dev',
            github: 'https://github.com/nextauthjs/next-auth',
          },
          {
            title: 'Better Auth',
            web: 'https://www.better-auth.com',
            github: 'https://github.com/better-auth/better-auth',
          },
          {
            title: 'OpenAuth',
            web: 'https://openauth.js.org',
            github: 'https://github.com/openauthjs/openauth',
          },
          {
            title: 'Stack Auth',
            web: 'https://stack-auth.com',
            github: 'https://github.com/stack-auth/stack-auth',
          },
          {
            title: 'Passport',
            web: 'https://www.passportjs.org',
            github: 'https://github.com/jaredhanson/passport',
          },
          {
            title: 'Lucia (Obsoleta)',
            web: 'https://lucia-auth.com',
            github: 'https://github.com/lucia-auth/lucia',
          },
        ],
      },
      {
        title: 'Soluciones',
        url: '/soluciones',
        data: [
          {
            title: 'Auth0',
            web: 'https://auth0.com',
          },
          {
            title: 'Clerk',
            web: 'https://clerk.com',
          },
          {
            title: 'Okta',
            web: 'https://www.okta.com',
          },
          {
            title: 'WorkOS',
            web: 'https://workos.com/',
          },
        ],
      },
    ],
  },

  {
    title: 'Utilidades',
    url: '/utilidades',
    items: [
      {
        title: 'TanStack',
        url: '/tanstack',
        data: [
          {
            title: 'TanStack',
            web: 'https://tanstack.com',
            github: 'https://github.com/tanstack',
          },
          {
            title: 'TanStack Query',
            web: 'https://tanstack.com/query/latest',
            github: 'https://github.com/tanstack/query',
          },
        ],
      },
      {
        title: 'CMS',
        url: '/cms',
        data: [
          {
            title: 'Strapi',
            web: 'https://strapi.io',
            github: 'https://github.com/strapi/strapi',
          },
          {
            title: 'PocketBase',
            web: 'https://pocketbase.io',
            github: 'https://github.com/pocketbase/pocketbase',
          },
          {
            title: 'Payload',
            web: 'https://payloadcms.com',
            github: 'https://github.com/payloadcms/payload',
          },
        ],
      },
      {
        title: 'Tiendas Online',
        url: '/tiendas-online',
        data: [
          {
            title: 'Shopify',
            web: 'https://www.shopify.com/es-es',
          },
        ],
      },
      {
        title: 'Pagos',
        url: '/pagos',
        data: [
          {
            title: 'Stripe',
            web: 'https://stripe.com/es',
          },
        ],
      },
      {
        title: 'Estados globales',
        url: '/estados-globales',
        data: [
          {
            title: 'Zustand',
            web: 'https://zustand-demo.pmnd.rs',
            github: 'https://github.com/pmndrs/zustand',
          },
          {
            title: 'Redux Toolkit',
            web: 'https://redux-toolkit.js.org/',
            github: 'https://github.com/reduxjs/redux-toolkit',
          },
          {
            title: 'Redux',
            web: 'https://redux.js.org',
            github: 'https://github.com/reduxjs/redux',
          },
          {
            title: 'Jotai',
            web: 'https://jotai.org',
            github: 'https://github.com/pmndrs/jotai',
          },
          {
            title: 'XState',
            web: 'https://stately.ai/docs',
            github: 'https://github.com/statelyai/xstate',
          },
          {
            title: 'MobX',
            web: 'https://mobx.js.org/README.html',
            github: 'https://github.com/mobxjs/mobx',
          },
        ],
      },
      {
        title: 'Data fetching',
        url: '/data-fetching',
        data: [
          {
            title: 'TanStack Query',
            web: 'https://tanstack.com/query',
            github: 'https://github.com/TanStack/query',
          },
          {
            title: 'SWR',
            web: 'https://swr.vercel.app/es-ES',
            github: 'https://github.com/vercel/swr',
          },
        ],
      },
      {
        title: 'Testing',
        url: '/testing',
        data: [
          {
            title: 'Playwright (E2E)',
            web: 'https://playwright.dev',
            github: 'https://github.com/microsoft/playwright',
          },
          {
            title: 'Cypress (E2E)',
            web: 'https://www.cypress.io',
            github: 'https://github.com/cypress-io/cypress',
          },
          {
            title: 'Storybook (Integration)',
            web: 'https://storybook.js.org',
            github: 'https://github.com/storybookjs/storybook',
          },
          {
            title: 'React Testing Library (Unit)',
            web: 'https://testing-library.com/docs/react-testing-library/intro',
            github: 'https://github.com/testing-library/react-testing-library',
          },
          {
            title: 'Vitest (Unit)',
            web: 'https://vitest.dev',
            github: 'https://github.com/vitest-dev/vitest',
          },
          {
            title: 'Jest (Unit)',
            web: 'https://jestjs.io/es-ES',
            github: 'https://github.com/facebook/jest',
          },
          {
            title: 'Selenium (E2E)',
            web: 'https://www.selenium.dev',
            github: 'https://github.com/SeleniumHQ/selenium',
          },
          {
            title: 'Puppeteer (E2E)',
            web: 'https://pptr.dev',
            github: 'https://github.com/puppeteer/puppeteer',
          },
        ],
      },
      {
        title: 'Hooks',
        url: '/hooks',
        data: [
          {
            title: 'useHooks',
            web: 'https://usehooks.com',
            github: 'https://github.com/uidotdev/usehooks',
          },
          {
            title: 'usehooks-ts',
            web: 'https://usehooks-ts.com',
            github: 'https://github.com/juliencrn/usehooks-ts',
          },
        ],
      },
      {
        title: 'Formularios',
        url: '/formularios',
        data: [
          {
            title: 'React Hook Form',
            web: 'https://react-hook-form.com',
            github: 'https://github.com/react-hook-form/react-hook-form',
          },
          {
            title: 'Formity',
            web: 'https://www.formity.app',
            github: 'https://github.com/martiserra99/formity',
          },
          {
            title: 'React Select',
            web: 'https://react-select.com',
            github: 'https://github.com/jedwatson/react-select',
          },
          {
            title: 'react-dropzone',
            web: 'https://react-dropzone.js.org',
            github: 'https://github.com/react-dropzone/react-dropzone',
          },
        ],
      },
      {
        title: 'PDF',
        url: '/pdf',
        data: [
          {
            title: 'React-pdf',
            web: 'https://react-pdf.org',
            github: 'https://github.com/diegomura/react-pdf',
          },
        ],
      },
      {
        title: 'Fechas',
        url: '/fechas',
        data: [
          {
            title: 'date-fns',
            web: 'https://date-fns.org',
            github: 'https://github.com/date-fns/date-fns',
          },
        ],
      },
      {
        title: 'Email',
        url: '/email',
        data: [
          {
            title: 'React Email',
            web: 'https://react.email',
            github: 'https://github.com/resend/react-email',
          },
        ],
      },
      {
        title: 'Gráficos',
        url: '/graficos',
        data: [
          {
            title: 'Recharts',
            web: 'https://recharts.org/en-US/',
            github: 'https://github.com/recharts/recharts',
          },
          {
            title: 'React Charts',
            web: 'https://react-charts.tanstack.com',
            github: 'https://github.com/TanStack/react-charts',
          },
          {
            title: 'Tremor',
            web: 'https://tremor.so',
            github: 'https://github.com/tremorlabs/tremor',
          },
          {
            title: 'Tremor Blocks',
            web: 'https://blocks.tremor.so',
            github: 'https://github.com/tremorlabs/tremor-blocks',
          },
          {
            title: 'Rosen Charts',
            web: 'https://rosencharts.com',
            github: 'https://github.com/Filsommer/rosenCharts',
          },
          {
            title: 'Lightweight Charts',
            web: 'https://es.tradingview.com/lightweight-charts',
            github: 'https://github.com/tradingview/lightweight-charts',
          },
        ],
      },
      {
        title: 'Editor de texto',
        url: '/editor-texto',
        data: [
          {
            title: 'Yoopta Editor',
            web: 'https://yoopta.dev',
            github: 'https://github.com/yoopta-editor/Yoopta-Editor',
          },
          {
            title: 'Tiptap Editor',
            web: 'https://tiptap.dev',
            github: 'https://github.com/ueberdosis/tiptap',
          },
        ],
      },
      {
        title: 'Arrastrar y soltar',
        url: '/arrastrar-soltar',
        data: [
          {
            title: 'React Flow (xyflow)',
            web: 'https://reactflow.dev',
            github: 'https://github.com/xyflow/xyflow',
          },
          {
            title: 'Swapy',
            web: 'https://swapy.tahazsh.com',
            github: 'https://github.com/TahaSh/swapy',
          },
          {
            title: 'Dnd kit',
            web: 'https://dndkit.com',
            github: 'https://github.com/clauderic/dnd-kit',
          },
        ],
      },
      {
        title: 'Animaciones',
        url: '/animaciones',
        data: [
          {
            title: 'GSAP',
            web: 'https://gsap.com',
            github: 'https://github.com/greensock/GSAP',
          },
          {
            title: 'Motion',
            web: 'https://motion.dev',
            github: 'https://github.com/motiondivision/motion',
          },
          {
            title: 'Lenis',
            web: 'https://lenis.darkroom.engineering',
            github: 'https://github.com/darkroomengineering/lenis',
          },
          {
            title: 'Anime.js',
            web: 'https://animejs.com',
            github: 'https://github.com/juliangarnier/anime',
          },
        ],
      },
      {
        title: 'Canvas',
        url: '/canvas',
        data: [
          {
            title: 'Konva',
            web: 'https://konvajs.org',
            github: 'https://github.com/konvajs/konva',
          },
        ],
      },
      {
        title: 'Biblioteca 3D',
        url: '/biblioteca-3d',
        data: [
          {
            title: 'Three.js',
            web: 'https://threejs.org',
            github: 'https://github.com/mrdoob/three.js',
          },
        ],
      },
      {
        title: 'React Developer Tools',
        url: '/react-developer-tools',
        data: [
          {
            title: 'React Developer Tools',
            web: 'https://es.react.dev/learn/react-developer-tools',
          },
          {
            title: 'React Scan',
            web: 'https://react-scan.com',
            github: 'https://github.com/aidenybai/react-scan',
          },
        ],
      },
      {
        title: 'Validación de esquemas',
        url: '/validacion-esquemas',
        data: [
          {
            title: 'Zod',
            web: 'https://zod.dev',
            github: 'https://github.com/colinhacks/zod',
          },
          {
            title: 'Valibot',
            web: 'https://valibot.dev',
            github: 'https://github.com/fabian-hiller/valibot',
          },
          {
            title: 'Yup',
            github: 'https://github.com/jquense/yup',
          },
          {
            title: 'Joi',
            web: 'https://joi.dev/',
            github: 'https://github.com/hapijs/joi',
          },
        ],
      },
      {
        title: 'ORM',
        url: '/orm',
        data: [
          {
            title: 'Prisma',
            web: 'https://www.prisma.io',
            github: 'https://github.com/prisma/prisma',
          },
          {
            title: 'Drizzle ORM',
            web: 'https://orm.drizzle.team',
            github: 'https://github.com/drizzle-team/drizzle-orm',
          },
          {
            title: 'TypeORM',
            web: 'https://typeorm.io',
            github: 'https://github.com/typeorm/typeorm',
          },
          {
            title: 'Sequelize',
            web: 'https://sequelize.org',
            github: 'https://github.com/sequelize/sequelize',
          },
          {
            title: 'Mongoose',
            web: 'https://mongoosejs.com',
            github: 'https://github.com/Automattic/mongoose',
          },
          {
            title: 'Kysely',
            web: 'https://kysely.dev',
            github: 'https://github.com/kysely-org/kysely',
          },
        ],
      },
      {
        title: 'DB',
        url: '/db',
        data: [
          {
            title: 'drawDB',
            web: 'https://www.drawdb.app',
            github: 'https://github.com/drawdb-io/drawdb',
          },
        ],
      },
      {
        title: 'Imágenes',
        url: '/imagenes',
        data: [
          {
            title: 'Unsplash',
            web: 'https://unsplash.com/es',
          },
        ],
      },
      {
        title: 'Fuentes',
        url: '/fuentes',
        data: [
          {
            title: 'Google Fonts',
            web: 'https://fonts.google.com',
          },
          {
            title: 'Adobe Fonts',
            web: 'https://fonts.adobe.com',
          },
        ],
      },
      {
        title: 'Compatibilidad web',
        url: '/compatibilidad-web',
        data: [
          {
            title: 'Can I use',
            web: 'https://caniuse.com',
            github: 'https://github.com/Fyrd/caniuse',
          },
        ],
      },
      {
        title: 'Detector de Tecnologías',
        url: '/detector-tecnologias',
        data: [
          {
            title: 'Cloudflare Radar',
            web: 'https://radar.cloudflare.com/scan',
            github: '',
          },
          {
            title: 'Wappalyzer',
            web: 'https://chromewebstore.google.com/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg?authuser=0&utm_source=app-launcher',
          },
        ],
      },
      {
        title: 'Cosas',
        url: '/cosas',
        data: [
          {
            title: 'VirusTotal',
            web: 'https://www.virustotal.com/gui/home/upload',
          },
          {
            title: 'Neumorphism',
            web: 'https://neumorphism.io',
            github: 'https://github.com/adamgiebl/neumorphism',
          },
          {
            title: 'CSS Gradient',
            web: 'https://cssgradient.io',
          },
          {
            title: 'Custom Shape Dividers',
            web: 'https://www.shapedivider.app',
          },
          {
            title: 'Fancy-Border-Radius',
            web: 'https://9elements.github.io/fancy-border-radius',
            github: 'https://github.com/9elements/fancy-border-radius',
          },
          {
            title: 'SVG Backgrounds',
            web: 'https://www.svgbackgrounds.com',
          },
          {
            title: 'OKLCH Color Picker & Converter',
            web: 'https://oklch.com',
            github: 'https://github.com/evilmartians/oklch-picker',
          },
          {
            title: 'OverAPI',
            web: 'https://overapi.com',
          },
          {
            title: 'BundlePhobia',
            web: 'https://bundlephobia.com',
            github: 'https://github.com/pastelsky/bundlephobia',
          },
          {
            title: 'npm trends',
            web: 'https://npmtrends.com',
          },
        ],
      },
    ],
  },

  {
    title: 'Escritorio',
    url: '/escritorio',
    items: [
      {
        title: 'Aplicación',
        url: '/aplicacion',
        data: [
          {
            title: 'Tauri',
            web: 'https://tauri.app/es',
            github: 'https://github.com/tauri-apps/tauri',
          },
          {
            title: 'Electron',
            web: 'https://www.electronjs.org/es',
            github: 'https://github.com/electron/electron',
          },
        ],
      },
    ],
  },

  {
    title: 'Móvil',
    url: '/movil',
    items: [
      {
        title: 'Aplicación',
        url: '/aplicacion',
        data: [
          {
            title: 'Expo',
            web: 'https://expo.dev',
            github: 'https://github.com/expo/expo',
          },
          {
            title: 'React Native',
            web: 'https://reactnative.dev',
            github: 'https://github.com/facebook/react-native',
          },
          {
            title: 'Lynx',
            web: 'https://lynxjs.org',
            github: 'https://github.com/lynx-family/lynx',
          },
        ],
      },
    ],
  },

  {
    title: 'Información',
    url: '/informacion',
    items: [
      {
        title: 'HTTP',
        url: '/http',
        data: [
          {
            title: 'Status Code',
            web: 'https://developer.mozilla.org/es/docs/Web/HTTP/Status',
          },
          {
            title: 'Request methods',
            web: 'https://developer.mozilla.org/es/docs/Web/HTTP/Methods',
          },
        ],
      },
      {
        title: 'API',
        url: '/api',
        data: [
          {
            title: 'Fetch API',
            web: 'https://developer.mozilla.org/es/docs/Web/API/Fetch_API',
          },
        ],
      },
      {
        title: 'JavaScript',
        url: '/javascript',
        data: [
          {
            title: 'Promise',
            web: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise',
          },
          {
            title: 'Temporal (Fechas)',
            web: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal',
          },
        ],
      },
      {
        title: 'TypeScript',
        url: '/typescript',
        data: [
          {
            title: 'TypeScript',
            web: 'https://www.typescriptlang.org',
            github: 'https://github.com/microsoft/TypeScript',
          },
          {
            title: 'React TypeScript',
            web: 'https://react-typescript-cheatsheet.netlify.app',
            github: 'https://github.com/typescript-cheatsheets/react',
          },
        ],
      },
      {
        title: 'Markdown',
        url: '/markdown',
        data: [
          {
            title: 'Markdown en GitHub',
            web: 'https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax',
          },
        ],
      },
    ],
  },

  /* 
  {
    title: 'Algo',
    url: '/algo',
    items: [
      {
        title: 'subalgo',
        url: '/subalgo',
        data: [
          {
            title: '',
            web: '',
            github: '',
          },
        ],
      },
    ],
  }, 
  */
]

export const navFooter: NavFooterItem[] = [
  {
    // title: 'Ayuda al Proyecto',
    title: 'Contribuye al Proyecto',
    url: 'https://github.com/SergiCodeDev/utilidades',
    icon: LifeBuoy,
    // icon: FlameKindling,
    // icon: Tent,
    // icon: TreePalm,
    // icon: HeartHandshake,
  },
]

export function flattenCategories(
  categories: Category[]
): (Category | Subcategory | Utility)[] {
  return categories.flatMap((category) => [
    category,
    ...category.items.flatMap((subcategory) => [
      subcategory,
      ...subcategory.data,
    ]),
  ])
}

export const flatItems = flattenCategories(categories)

// Función auxiliar para obtener la URL completa de una subcategoría
export function getFullUrl(category: Category, subcategoryUrl: string): string {
  return `${category.url}${subcategoryUrl}`
}
