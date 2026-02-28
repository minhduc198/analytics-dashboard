import type { ColumnHeader } from '@/types'
import type { RecentOrderAnalytics } from '../types'

export const selectTimeLineChart = [
  {
    id: '12M',
    label: '12 months',
  },

  {
    id: '30D',
    label: '30 Days',
  },

  {
    id: '7D',
    label: '7 Days',
  },

  {
    id: '24H',
    label: '24 Hours',
  },
]

export const seriesColAnalytics = [
  {
    name: 'Sales',
    data: [
      168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112, 123, 212, 270,
      190, 310, 115, 90, 380, 112, 223, 292, 170, 290, 380, 312, 385, 201, 298,
    ],
  },
]

export const categoriesAnalytics = Array(30)
  .fill(0)
  .map((_, i) => String(i + 1))

export const topChannel = [
  {
    source: 'Google',
    visitors: '4.7K',
  },

  {
    source: 'Facebook',
    visitors: '3.4K',
  },

  {
    source: 'Threads',
    visitors: '2.9K',
  },

  {
    source: 'Google',
    visitors: '1.5K',
  },
]

export const topPages = [
  {
    source: 'tailadmin.com',
    pageview: '4.7K',
  },
  {
    source: 'preview.tailadmin.com',
    pageview: '3.4K',
  },
  {
    source: 'docs.tailadmin.com',
    pageview: '2.9K',
  },
  {
    source: 'tailadmin.com/components',
    pageview: '1.5K',
  },
]

export const recentOrderAnalyticsData: RecentOrderAnalytics[] = [
  {
    id: 1,
    productName: 'TailGrids',
    category: 'UI Kit',
    country: 'USA',
    countryFlag: 'https://flagcdn.com/w40/us.png',
    cr: 'Dashboard',
    value: 12499,
  },
  {
    id: 2,
    productName: 'GrayGrids',
    category: 'Templates',
    country: 'Singapore',
    countryFlag: 'https://flagcdn.com/w40/sg.png',
    cr: 'Dashboard',
    value: 5498,
  },
  {
    id: 3,
    productName: 'Uideck',
    category: 'Templates',
    country: 'United Kingdom',
    countryFlag: 'https://flagcdn.com/w40/gb.png',
    cr: 'Dashboard',
    value: 4521,
  },
  {
    id: 4,
    productName: 'FormBold',
    category: 'SaaS',
    country: 'Yemen',
    countryFlag: 'https://flagcdn.com/w40/ye.png',
    cr: 'Dashboard',
    value: 13843,
  },
  {
    id: 5,
    productName: 'NextAdmin',
    category: 'Dashboard',
    country: 'Finland',
    countryFlag: 'https://flagcdn.com/w40/fi.png',
    cr: 'Dashboard',
    value: 7523,
  },
  {
    id: 6,
    productName: 'Form Builder',
    category: 'SaaS',
    country: 'Belgium',
    countryFlag: 'https://flagcdn.com/w40/be.png',
    cr: 'Dashboard',
    value: 1377,
  },
  {
    id: 7,
    productName: 'AyroUI',
    category: 'UI Kit',
    country: 'Bangladesh',
    countryFlag: 'https://flagcdn.com/w40/bd.png',
    cr: 'Dashboard',
    value: 599,
  },
]

export const columnHeaderAnalytics: ColumnHeader<RecentOrderAnalytics>[] = [
  {
    id: 'productName',
    label: 'Products',
    cellRender: (row) => (
      <p className="font-semibold text-gray-800 dark:text-white/90">
        {row.productName}
      </p>
    ),
  },
  {
    id: 'category',
    label: 'Category',
  },
  {
    id: 'country',
    label: 'Country',
    cellRender: (row) => (
      <div className="flex items-center justify-start">
        <img
          src={row.countryFlag}
          alt={row.country}
          className="w-5 h-5 rounded-full object-cover"
        />
      </div>
    ),
  },
  {
    id: 'cr',
    label: 'CR',
  },
  {
    id: 'value',
    label: 'Value',
    cellRender: (row) => (
      <span className="font-semibold text-green-600">
        ${row.value.toLocaleString()}
      </span>
    ),
  },
]
