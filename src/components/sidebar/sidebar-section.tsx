import { useSideBarStore } from '@/stores/useSideBarStore'
import { Collapsible } from '@radix-ui/react-collapsible'
import type { SidebarSectionType } from '../../types/sidebar'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from '../ui/sidebar'
import SideBarChild from './sidebar-child'
import SideBarItem from './sidebar-item'
import { useSidebarControl } from '@/hooks/use-sidebar-control'

interface props {
  parent: SidebarSectionType
}

export default function SideBarSection({ parent }: props) {
  const { activeMenu, setActiveMenu } = useSideBarStore()
  const { isPinned, isHovering } = useSidebarControl()
  const isExpanded = isPinned || isHovering

  const handleOpenTab = (id: number) => {
    setActiveMenu(activeMenu === id ? null : id)
  }

  const generateMenu = (parent: SidebarSectionType) => {
    return parent.children.map((item) => (
      <SidebarMenu key={item.title}>
        <Collapsible
          open={activeMenu === item.id && isExpanded}
          onOpenChange={() => handleOpenTab(item.id)}
        >
          <SidebarGroup className="py-0.5">
            <SideBarItem item={item} />
            {isExpanded && <SideBarChild item={item} />}
          </SidebarGroup>
        </Collapsible>
      </SidebarMenu>
    ))
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        {isExpanded ? (
          parent.title
        ) : (
          <div className="text-xl w-full text-center mb-5">...</div>
        )}
      </SidebarGroupLabel>
      <SidebarGroupContent>{generateMenu(parent)}</SidebarGroupContent>
    </SidebarGroup>
  )
}
