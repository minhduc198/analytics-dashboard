import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { NOTIFICATIONS, USER_INFO } from '@/data'
import { useSidebarControl } from '@/hooks/use-sidebar-control'
import { cn } from '@/lib/utils'
import { useTheme } from '@/theme/theme-provider'
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@radix-ui/react-dropdown-menu'
import {
  Bell,
  ChevronDown,
  ChevronUp,
  CircleUser,
  Ellipsis,
  Info,
  Moon,
  Search,
  Settings,
  Sun,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Notification from '../notification'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { useNavigate } from 'react-router-dom'
import { path } from '@/routers/path'

export default function Header() {
  const navigate = useNavigate()
  const [isOpenNotification, setIsOpenNotification] = useState(false)
  const [isOpenProfile, setIsOpenProfile] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const { theme, setTheme } = useTheme()
  const { isPinned, isHovering, setIsPinned } = useSidebarControl()
  const isExpanded = isPinned || isHovering

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCommandK =
        (e.metaKey && e.key.toLowerCase() === 'k') ||
        (e.ctrlKey && e.key.toLowerCase() === 'k')

      if (isCommandK) {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const handleOpenChange = () => {
    setIsOpenNotification(!isOpenNotification)
  }

  const handleClose = () => {
    setIsOpenNotification(false)
  }

  const toggleProfile = () => {
    setIsOpenProfile(!isOpenProfile)
  }

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  const handleToPageProfile = () => {
    navigate(path.profile)
    setOpenMenu(false)
  }

  return (
    <div
      className={cn(
        'xl:ml-20 h-[76px] xl:h-[76px] flex xl:flex-row flex-col items-start xl:items-center justify-between border-b fixed inset-0 xl:py-[16px] bg-white dark:bg-background z-50',
        { 'h-[152px] border-0 ': openMenu },
        {
          'xl:ml-[290px]': isExpanded,
        },
      )}
    >
      <div className="w-full flex items-center justify-between xl:justify-start gap-3 p-3">
        <Button
          variant="ghost"
          size="icon"
          className="h-11 w-11 rounded-[8px] border-0 xl:border border-gray-200"
          onClick={() => setIsPinned(!isPinned)}
        >
          <div className="flex flex-col gap-1">
            <span className="h-[2px] w-4 bg-muted-foreground rounded" />
            <span className="h-[2px] w-3 bg-muted-foreground rounded" />
            <span className="h-[2px] w-4 bg-muted-foreground rounded" />
          </div>
        </Button>

        <div className="relative w-[430px] hidden xl:flex">
          <Search className=" text-[#667085] absolute top-3 left-4" />
          <Input
            ref={inputRef}
            placeholder="Search or type command..."
            className="pl-12! py-6! text-[#667085]!"
          />
          <div className="flex absolute top-3 right-2 px-1 py-0.5 border rounded-[8px] bg-[#f9fafb] text-[#667085] text-sm">
            ⌘ K
          </div>
        </div>

        <div className="flex xl:hidden">
          <img src="src/assets/icons/logo-light.svg" alt="" />
        </div>

        <Button
          size="icon"
          variant="ghost-icon"
          className="flex xl:hidden"
          onClick={toggleMenu}
        >
          <Ellipsis />
        </Button>
      </div>

      <div
        className={cn('w-full h-px bg-gray-200 flex xl:hidden', {
          hidden: !openMenu,
        })}
      ></div>

      <div
        className={cn(
          'w-full hidden xl:flex items-center justify-between px-5 py-4 xl:justify-end gap-4 shadow-sm xl:shadow-none',
          {
            flex: openMenu,
          },
        )}
      >
        <div className="flex gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="w-11 h-11 rounded-full! border! border-gray-200! hover:bg-[rgb(0,0,0,0.05)]! "
            onClick={toggleTheme}
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          <Popover open={isOpenNotification} onOpenChange={handleOpenChange}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative w-11 h-11 rounded-full! border! border-gray-200! hover:bg-[rgb(0,0,0,0.05)]! "
              >
                <Bell className="h-5 w-5" />
                <div className="absolute z-10 top-[3px] right-px h-2 w-2 bg-orange-400 rounded-full">
                  <div className="absolute inset-0 h-2 w-2  inline-flex animate-ping rounded-full bg-orange-400 opacity-75"></div>
                </div>
              </Button>
            </PopoverTrigger>

            <PopoverContent className="shadow-theme-lg dark:bg-gray-dark absolute mt-[12px] flex h-[480px] w-[350px] flex-col rounded-2xl border border-gray-200 bg-white p-3 sm:w-[361px] -right-[260px] xl:right-0 dark:border-gray-800">
              <Notification
                listData={NOTIFICATIONS.slice(0, 8)}
                handleClose={handleClose}
              />
            </PopoverContent>
          </Popover>
        </div>

        <DropdownMenu open={isOpenProfile} onOpenChange={toggleProfile}>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 cursor-pointer">
              <Avatar className="h-11 w-11">
                <AvatarImage src={USER_INFO.avatar} />
                <AvatarFallback>{USER_INFO.firstName}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{USER_INFO.lastName}</span>

              {isOpenProfile ? (
                <ChevronUp size={20} cursor="pointer" />
              ) : (
                <ChevronDown size={20} cursor="pointer" />
              )}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="shadow-lg dark:bg-gray-dark absolute right-0 mt-[12px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-3 dark:border-gray-800"
          >
            <DropdownMenuLabel className="text-sm font-medium text-gray-700 dark:text-gray-400">
              {USER_INFO.firstName} {USER_INFO.lastName}
            </DropdownMenuLabel>
            <DropdownMenuLabel className="text-xs mt-0.5 text-gray-500 dark:text-gray-400">
              {USER_INFO.emailAddress}
            </DropdownMenuLabel>

            <div className="group mt-4 text-sm flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300">
              <CircleUser size={24} />
              <div onClick={handleToPageProfile}>
                <DropdownMenuItem>Edit profile</DropdownMenuItem>
              </div>
            </div>
            <div className="group text-sm flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300">
              <Settings size={24} />
              <DropdownMenuItem>Account settings</DropdownMenuItem>
            </div>
            <div className="group mb-4 text-sm flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300">
              <Info size={24} />
              <DropdownMenuItem>Support</DropdownMenuItem>
            </div>

            <DropdownMenuSeparator className="w-full h-px bg-gray-300" />

            <div className="group mt-4 text-sm flex items-center gap-3 rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300">
              <Info size={24} />
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
