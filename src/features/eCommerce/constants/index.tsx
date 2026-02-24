import type { ColumnHeader } from '@/types'
import type { RecentOrder } from '../types'

export const seriesCol = [
  {
    name: 'Sales',
    data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
  },
]

export const categories = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const series = [
  {
    name: 'Sales',
    data: [180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235],
  },
  {
    name: 'Revenue',
    data: [40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140],
  },
]

export const tabLineChart = [
  {
    id: 'overview',
    label: 'Overview',
  },

  {
    id: 'sales',
    label: 'Sales',
  },

  {
    id: 'revenue',
    label: 'Revenue',
  },
]

export const columnHeader: ColumnHeader<RecentOrder>[] = [
  {
    id: 'productName',
    label: 'Product',
    cellRender: (row) => (
      <div className="flex items-center gap-3">
        <img
          src={row.productImg}
          alt={row.productName}
          className="w-[50px] h-[50px] rounded-lg object-cover"
        />
        <div>
          <p className="font-semibold text-sm text-gray-800 dark:text-white/90">
            {row.productName}
          </p>
          <p className="text-xs text-gray-500">{row.variants} variants</p>
        </div>
      </div>
    ),
  },
  {
    id: 'category',
    label: 'Category',
  },
  {
    id: 'prices',
    label: 'Prices',
    cellRender: (row) => (
      <span className="font-medium">${row.prices.toFixed(2)}</span>
    ),
  },
  {
    id: 'status',
    label: 'Status',
    cellRender: (row) => {
      const statusStyle = {
        Pending: 'bg-orange-100 text-orange-700',
        Delivered: 'bg-green-100 text-green-700',
        Canceled: 'bg-red-100 text-red-700',
      }

      return (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle[row.status]}`}
        >
          {row.status}
        </span>
      )
    },
  },
]
