import { cn } from '@/lib/utils'
import type { INotification } from '@/types'
import { X } from 'lucide-react'

interface Props {
  listData: INotification[]
  handleClose: () => void
}

interface ItemProps {
  item: INotification
}

const NotificationItem = ({ item }: ItemProps) => {
  return (
    <div className="flex items-start gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5">
      <div className="relative">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            className="object-cover"
            src={item.requesterAvatar}
            alt={item.requesterName}
          />
        </div>
        <span
          className={cn(
            'bg-green-500 absolute right-0 bottom-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white dark:border-gray-900',
            {
              'bg-red-500': item.requesterOnline,
            },
          )}
        ></span>
      </div>

      <div>
        <div>
          <span className="font-medium text-gray-800 dark:text-white/90">
            {item.requesterName}
          </span>{' '}
          request permission to {item.action}{' '}
          <span className="font-medium text-gray-800 dark:text-white/90 capitalize">
            {item.targetType} - {item.projectName}
          </span>
        </div>

        <div className="text-xs font-medium flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-1">
          <span>Project</span>
          <span className="h-1 w-1 rounded-full bg-gray-400"></span>
          <span>{item.timeAgo}</span>
        </div>
      </div>
    </div>
  )
}

export default function Notification({ listData, handleClose }: Props) {
  return (
    <div>
      <div className="flex justify-between items-center pb-3 border-b">
        <span className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Notification
        </span>
        <X size={24} cursor="pointer" onClick={handleClose} />
      </div>

      <div className="h-[340px] overflow-auto mt-3">
        {listData.map((item) => (
          <NotificationItem item={item} key={item.id} />
        ))}
      </div>

      <div className="text-sm shadow-xs mt-3 flex justify-center rounded-lg border border-gray-300 bg-white p-3 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
        View All Notification
      </div>
    </div>
  )
}
