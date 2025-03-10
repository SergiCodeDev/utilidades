import { GalleryVerticalEnd } from 'lucide-react'
import { Link } from 'react-router'

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '~/components/ui/sidebar'
import { useCloseSidebarOnClick } from '~/hooks/use-close-sidebar-on-click'

export function CapDeNavegacio() {
  const handleLinkClick = useCloseSidebarOnClick()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground transition-[background-color] duration-150 ease-in-out" // hover:bg-[oklch(97.61%_0_0)]
          asChild
        >
          <Link to="/" onClick={handleLinkClick}>
            <div className="bg-sidebar-primary shadow text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg bg-[conic-gradient(from_270deg,rgba(255,255,255,1)_0deg,rgba(215,231,255,1)_30deg,rgba(238,231,255,1)_60deg,rgba(251,211,255,1)_90deg,rgba(255,238,231,1)_120deg,rgba(249,255,238,1)_150deg,rgba(195,255,243,1)_180deg,rgba(249,255,238,1)_210deg,rgba(255,238,231,1)_240deg,rgba(251,211,255,1)_270deg,rgba(238,231,255,1)_300deg,rgba(215,231,255,1)_330deg,rgba(255,255,255,1)_360deg)]">
              <GalleryVerticalEnd className="size-4 text-neutral-800" />
            </div>
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-medium">Utilidades</span>
              <span className="text-xs opacity-65">By SergiCodeDev</span>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

// bg-[conic-gradient(from_270deg,rgba(255,255,255,1)_0deg,rgba(117,182,255,1)_30deg,rgba(209,182,255,1)_60deg,rgba(251,155,255,1)_90deg,rgba(255,215,155,1)_120deg,rgba(226,255,160,1)_150deg,rgba(53,255,165,1)_180deg,rgba(226,255,160,1)_210deg,rgba(255,215,155,1)_240deg,rgba(251,155,255,1)_270deg,rgba(209,182,255,1)_300deg,rgba(117,182,255,1)_330deg,rgba(255,255,255,1)_360deg)]
// bg-[conic-gradient(from_270deg,rgba(255,255,255,1)_0deg,rgba(170,207,255,1)_30deg,rgba(224,207,255,1)_60deg,rgba(251,180,255,1)_90deg,rgba(255,225,200,1)_120deg,rgba(241,255,205,1)_150deg,rgba(153,255,210,1)_180deg,rgba(241,255,205,1)_210deg,rgba(255,225,200,1)_240deg,rgba(251,180,255,1)_270deg,rgba(224,207,255,1)_300deg,rgba(170,207,255,1)_330deg,rgba(255,255,255,1)_360deg)]
// bg-[conic-gradient(from_270deg,rgba(255,255,255,1)_0deg,rgba(200,220,255,1)_30deg,rgba(230,220,255,1)_60deg,rgba(251,200,255,1)_90deg,rgba(255,230,220,1)_120deg,rgba(245,255,225,1)_150deg,rgba(180,255,230,1)_180deg,rgba(245,255,225,1)_210deg,rgba(255,230,220,1)_240deg,rgba(251,200,255,1)_270deg,rgba(230,220,255,1)_300deg,rgba(200,220,255,1)_330deg,rgba(255,255,255,1)_360deg)]

// bg-[conic-gradient(from_270deg,rgba(255,255,255,1)_0deg,rgba(210,227,255,1)_30deg,rgba(235,227,255,1)_60deg,rgba(251,207,255,1)_90deg,rgba(255,235,227,1)_120deg,rgba(247,255,232,1)_150deg,rgba(190,255,237,1)_180deg,rgba(247,255,232,1)_210deg,rgba(255,235,227,1)_240deg,rgba(251,207,255,1)_270deg,rgba(235,227,255,1)_300deg,rgba(210,227,255,1)_330deg,rgba(255,255,255,1)_360deg)]
// bg-[conic-gradient(from_270deg,rgba(255,255,255,1)_0deg,rgba(215,231,255,1)_30deg,rgba(238,231,255,1)_60deg,rgba(251,211,255,1)_90deg,rgba(255,238,231,1)_120deg,rgba(249,255,238,1)_150deg,rgba(195,255,243,1)_180deg,rgba(249,255,238,1)_210deg,rgba(255,238,231,1)_240deg,rgba(251,211,255,1)_270deg,rgba(238,231,255,1)_300deg,rgba(215,231,255,1)_330deg,rgba(255,255,255,1)_360deg)] // usando

// bg-[conic-gradient(from_270deg,rgba(255,255,255,1)_0deg,rgba(220,235,255,1)_30deg,rgba(240,235,255,1)_60deg,rgba(251,215,255,1)_90deg,rgba(255,240,235,1)_120deg,rgba(250,255,240,1)_150deg,rgba(200,255,245,1)_180deg,rgba(250,255,240,1)_210deg,rgba(255,240,235,1)_240deg,rgba(251,215,255,1)_270deg,rgba(240,235,255,1)_300deg,rgba(220,235,255,1)_330deg,rgba(255,255,255,1)_360deg)]
