import { persist } from 'zustand/middleware'
import { createStore, useStore } from 'zustand'

interface SideBarStoreState {
  isChildACtive: number
  setIsChildACtive: (id: number) => void
  activeMenu: number | null
  setActiveMenu: (id: number | null) => void
}

export const sideBarStore = createStore<SideBarStoreState>()(
  persist(
    (set) => ({
      isChildACtive: 1.1,
      setIsChildACtive: (id) => set({ isChildACtive: id }),
      activeMenu: 1,
      setActiveMenu: (id) => set({ activeMenu: id }),
    }),
    { name: 'sidebar-store' },
  ),
)

export const useSideBarStore = () => {
  const { activeMenu, setActiveMenu, isChildACtive, setIsChildACtive } =
    useStore(sideBarStore, (state) => state)
  return { activeMenu, setActiveMenu, isChildACtive, setIsChildACtive }
}
