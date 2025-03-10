/* import type { Config } from '@react-router/dev/config'

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
} satisfies Config */

import type { Config } from '@react-router/dev/config'
import { categories, type Category } from './app/data/categories'

function generateUrls(categories: Category[]): string[] {
  let urls: string[] = []

  categories.forEach((category) => {
    // Agregamos la URL base de la categoría
    urls.push(category.url)

    // Para cada subcategoría dentro de la categoría
    category.items.forEach((subcategory) => {
      // Agregamos la URL de la subcategoría (concatenada a la de la categoría)
      urls.push(`${category.url}${subcategory.url}`)

      // Si la subcategoría tiene elementos (utilities), no necesitamos agregar ninguna URL adicional
    })
  })

  return urls
}

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  // Usamos la función para obtener las rutas dinámicas generadas
  async prerender() {
    // Llamamos a la función para generar todas las URLs
    let allUrls = generateUrls(categories)
    allUrls.push('/')

    return allUrls // Retorna todas las rutas generadas para que el sistema las pre-renderice
  },
} satisfies Config
