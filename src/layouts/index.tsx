import Header from '@/components/header'
import { AppSidebar } from '@/components/sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { useSidebarControl } from '@/hooks/use-sidebar-control'
import { Outlet } from 'react-router-dom'

export function Layout() {
  const { isPinned, isHovering } = useSidebarControl()
  const isExpanded = isPinned || isHovering

  return (
    <>
      <Header />

      <SidebarProvider
        style={
          {
            '--sidebar-width': isExpanded ? '290px' : '80px',
            '--sidebar-width-icon': '80px',
          } as React.CSSProperties
        }
      >
        <AppSidebar />
        <SidebarInset className="mt-[76px]">
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
    </>
  )
}
