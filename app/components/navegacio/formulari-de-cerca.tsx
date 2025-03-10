import { Search } from 'lucide-react'
import type React from 'react'

import { Label } from '~/components/ui/label'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from '~/components/ui/sidebar'

interface FormulariDeCercaProps extends React.ComponentProps<'form'> {
  onSearch: (term: string) => void
  searchTerm: string
}

export function FormulariDeCerca({
  onSearch,
  searchTerm,
  ...props
}: FormulariDeCercaProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit} {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="buscador" className="sr-only">
            Buscador
          </Label>
          <SidebarInput
            id="buscador"
            placeholder="Buscar utilidades..."
            className="pl-8"
            onChange={handleChange}
            value={searchTerm}
          />
          <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  )
}
