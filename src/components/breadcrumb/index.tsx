import type { IBreadcrumb } from '@/types'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb'
import { cn } from '@/lib/utils'

interface Props {
  paths: IBreadcrumb[]
}
export default function CustomBreadcrumb({ paths }: Props) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {paths.map((item, idx) => {
          return (
            <>
              <BreadcrumbItem
                key={item.href}
                className="text-sm text-gray-500 dark:text-gray-400"
              >
                <BreadcrumbLink
                  href={item.href}
                  className={cn(idx === paths.length - 1 && 'text-black!')}
                >
                  {item.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {idx !== paths.length - 1 && <BreadcrumbSeparator />}
            </>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
