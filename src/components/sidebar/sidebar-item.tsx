import { CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'
import type { SidebarItem } from '../../types/sidebar'
import { SidebarMenuButton } from '../ui/sidebar'
import { useSideBarStore } from '@/stores/useSideBarStore'
import { cn } from '@/lib/utils'
import { useSidebarControl } from '@/hooks/use-sidebar-control'
interface props {
  item: SidebarItem
}
export default function SideBarItem({ item }: props) {
  const { activeMenu, isChildACtive } = useSideBarStore()
  const { isPinned, isHovering } = useSidebarControl()
  const isExpanded = isPinned || isHovering

  const hasChildActive = item.children
    ? item.children.some((i) => i.id === isChildACtive)
    : false

  return (
    <SidebarMenuButton
      asChild
      size="md"
      className={cn('px-3 cursor-pointer hover:bg-background-primary', {
        'text-primary! bg-background-primary! hover:bg-background-primary! ':
          activeMenu === item.id || hasChildActive,
        'w-[49px]': !isExpanded,
      })}
    >
      <CollapsibleTrigger>
        <div className="w-full flex justify-between items-center">
          <a href={item.url} className={cn('flex items-center gap-2')}>
            {item.icon ? <item.icon className="w-6 h-6 shrink-0" /> : null}
            {isExpanded && (
              <span className="text-sm font-medium">{item.title}</span>
            )}
          </a>
          {isExpanded && !!item.children && <ChevronDown className="h-4 w-4" />}
        </div>
      </CollapsibleTrigger>
    </SidebarMenuButton>
  )
}
