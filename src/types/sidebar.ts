import type { LucideIcon } from 'lucide-react'

export interface SidebarChild {
  title: string
  url: string
  id: number
}

export interface SidebarItem {
  id: number
  title: string
  icon?: LucideIcon
  url?: string
  children?: SidebarChild[]
}

export interface SidebarSectionType {
  title: string
  children: SidebarItem[]
}
