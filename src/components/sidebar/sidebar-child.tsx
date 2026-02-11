/* eslint-disable react-hooks/exhaustive-deps */
import { cn } from '@/lib/utils'
import { CollapsibleContent } from '@radix-ui/react-collapsible'
import { NavLink, useLocation } from 'react-router-dom'
import type { SidebarItem } from '../../types/sidebar'
import { SidebarGroupContent, SidebarMenu } from '../ui/sidebar'
import { useEffect } from 'react'
import { useSideBarStore } from '@/stores/useSideBarStore'
interface props {
  item: SidebarItem
}
export default function SideBarChild({ item }: props) {
  const { setIsChildACtive } = useSideBarStore()
  const location = useLocation()

  useEffect(() => {
    const newItem = item.children
    newItem?.forEach((i) => {
      if (i.url === location.pathname) {
        setIsChildACtive(i.id)
      }
    })
  }, [location.pathname])

  return (
    <CollapsibleContent>
      <SidebarGroupContent>
        {!!item.children && (
          <SidebarMenu className="my-1">
            {item.children.map((i) => (
              <NavLink key={i.url} to={i.url}>
                {({ isActive }) => (
                  <div
                    className={cn(
                      'cursor-pointer hover:bg-background-primary py-2 pl-4 ml-8 rounded-[8px]',
                      {
                        'text-primary bg-background-primary! hover:bg-background-primary':
                          isActive,
                      },
                    )}
                  >
                    {i.title}
                  </div>
                )}
              </NavLink>
            ))}
          </SidebarMenu>
        )}
      </SidebarGroupContent>
    </CollapsibleContent>
  )
}
