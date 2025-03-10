import { ChevronRight } from 'lucide-react'
import * as React from 'react'
import { Link, useLocation } from 'react-router'

import { CapDeNavegacio } from '~/components/navegacio/cap-de-navegacio'
import { FormulariDeCerca } from '~/components/navegacio/formulari-de-cerca'
import { PeuDeNavegacio } from '~/components/navegacio/peu-de-navegacio'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '~/components/ui/collapsible'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '~/components/ui/sidebar'
import { categories, navFooter } from '~/data/categories'
import { useCloseSidebarOnClick } from '~/hooks/use-close-sidebar-on-click'

// Función auxiliar para normalizar el texto (eliminar acentos y convertir a minúsculas)
function normalizeText(text: string): string {
  return text
    .normalize('NFD') // Descompone los caracteres en su forma base (é -> e\u0301)
    .replace(/[\u0300-\u036f]/g, '') // Elimina los signos diacríticos (acentos, cedillas, etc.)
    .toLowerCase() // Convierte todo a minúsculas
}

export function BarraLateral({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const [searchTerm, setSearchTerm] = React.useState('')
  const location = useLocation()
  const [openCategories, setOpenCategories] = React.useState<
    Record<string, boolean>
  >(
    categories.reduce((acc, category) => {
      acc[category.title] = true
      return acc
    }, {} as Record<string, boolean>)
  )

  const isActive = React.useCallback(
    (categoryUrl: string, subcategoryUrl: string) =>
      location.pathname === `${categoryUrl}${subcategoryUrl}`,
    [location.pathname]
  )

  React.useEffect(() => {
    setOpenCategories((prev) => {
      const newState = { ...prev }
      categories.forEach((category) => {
        if (category.items.some((item) => isActive(category.url, item.url))) {
          newState[category.title] = true
        }
      })
      return newState
    })
  }, [isActive])

  const filteredCategories = React.useMemo(
    () =>
      categories
        .map((category) => {
          // Comprobamos si el título de la categoría contiene el término de búsqueda
          if (
            normalizeText(category.title).includes(normalizeText(searchTerm))
          ) {
            // Si coincide, devolvemos la categoría completa (con todos sus elementos)
            return { ...category } // Devolver la categoría completa con todos sus elementos
          }

          // Si el título de la categoría NO coincide, filtramos sus subcategorías
          return {
            ...category,
            items: category.items.filter(
              (subcategory) =>
                // Comprobamos si el título de la subcategoría coincide con el término de búsqueda
                normalizeText(subcategory.title).includes(
                  normalizeText(searchTerm)
                ) ||
                // Si no coincide el título de la subcategoría, verificamos si algún elemento dentro de `data` coincide
                subcategory.data.some((item) =>
                  normalizeText(item.title).includes(normalizeText(searchTerm))
                )
            ),
          }
        })
        // Después de mapear, eliminamos las categorías que se quedaron vacías
        .filter(
          (category) =>
            // (Uno de los dos debe ser verdadero)
            // Si el título de la categoría coincide, la mantenemos
            normalizeText(category.title).includes(normalizeText(searchTerm)) ||
            // O si tiene subcategorías después del filtrado, también la mantenemos
            category.items.length > 0
        ),
    [searchTerm]
  )

  React.useEffect(() => {
    if (searchTerm) {
      setOpenCategories((prev) => {
        const newState = { ...prev }
        filteredCategories.forEach((category) => {
          newState[category.title] = true
        })
        return newState
      })
    }
  }, [searchTerm, filteredCategories])

  const handleSearch = React.useCallback((term: string) => {
    setSearchTerm(term)
  }, [])

  const handleLinkClick = useCloseSidebarOnClick()

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <CapDeNavegacio />
        <FormulariDeCerca onSearch={handleSearch} searchTerm={searchTerm} />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {filteredCategories.map((category) => (
          <Collapsible
            key={category.title}
            open={openCategories[category.title]}
            onOpenChange={(isOpen) =>
              setOpenCategories((prev) => ({
                ...prev,
                [category.title]: isOpen,
              }))
            }
            className="group/collapsible"
          >
            <SidebarGroup className="py-2">
              <SidebarGroupLabel
                asChild
                className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm cursor-pointer" // group-data-[state=open]/collapsible:mb-1 transition-none
              >
                <CollapsibleTrigger>
                  {category.title}{' '}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {category.items.map((subcategory) => (
                      <SidebarMenuItem key={subcategory.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={isActive(category.url, subcategory.url)}
                        >
                          <Link
                            className="pl-5"
                            to={`${category.url}${subcategory.url}`}
                            onClick={handleLinkClick}
                          >
                            {subcategory.title}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <PeuDeNavegacio items={navFooter} />
      </SidebarFooter>
    </Sidebar>
  )
}
