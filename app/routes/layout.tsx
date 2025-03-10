import React from 'react'
import { Link, Outlet, useLocation } from 'react-router'

import { BarraLateral } from '~/components/navegacio/barra-lateral'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '~/components/ui/breadcrumb'
import { Separator } from '~/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '~/components/ui/sidebar'
import { categories } from '~/data/categories'

export default function LayoutPrincipal() {
  const location = useLocation()

  // Modificar la función para generar las migas de pan
  const breadcrumbs = React.useMemo(() => {
    const paths = location.pathname.split('/').filter(Boolean)

    // Si no hay rutas, devolver un array vacío
    if (paths.length === 0) return []

    // Encontrar la categoría
    const categoryPath = paths[0]
    const category = categories.find((c) => c.url === `/${categoryPath}`)

    if (!category) {
      // Si no se encuentra la categoría, devolver solo el path actual
      return [{ title: categoryPath, url: `/${categoryPath}` }]
    }

    // Iniciar con la categoría
    const result = [{ title: category.title, url: category.url }]

    // Si hay una subcategoría
    if (paths.length > 1) {
      const subcategoryPath = paths[1]
      const subcategory = category.items.find(
        (item) => item.url === `/${subcategoryPath}`
      )

      if (subcategory) {
        result.push({
          title: subcategory.title,
          url: `${category.url}${subcategory.url}`,
        })
      } else {
        result.push({
          title: subcategoryPath,
          url: `/${categoryPath}/${subcategoryPath}`,
        })
      }
    }

    return result
  }, [location])

  return (
    <SidebarProvider>
      <BarraLateral />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1 cursor-pointer" />
          <Separator orientation="vertical" className="mr-2 !h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Inicio</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.url}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {index === breadcrumbs.length - 1 ? (
                      <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link to={crumb.url}>{crumb.title}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
