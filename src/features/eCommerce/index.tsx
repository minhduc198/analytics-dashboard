import ColumnChart from '@/components/charts/ColumnChart'
import Demographic from '@/components/charts/Demographic'
import RadialChart from '@/components/charts/RadiaChart'
import CustomTable from '@/components/custom-table'
import { DatePicker } from '@/components/date-picker'
import { RECENT_ORDER } from '@/data'
import AreaStatisticsChart from '@/features/ecommerce/AreaStatisticsChart'
import { cn } from '@/lib/utils'
import { ArrowDown, ArrowUp, Box, EllipsisVertical, Users } from 'lucide-react'
import { useState } from 'react'
import {
  categories,
  columnHeaderECommerce,
  seriesCol,
  tabLineChart,
} from './constants'
import type { RecentOrderECommerce } from './types'

export default function ECommerce() {
  const [activeTab, setActiveTab] = useState('overview')

  const handleSelectTab = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className="p-4 pb-20 md:p-6 md:pb-6 ">
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 md:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
                <Users />
              </div>
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Customers
                  </span>
                  <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">
                    3,782
                  </h4>
                </div>

                <span className="flex items-center gap-1 rounded-full  py-0.5 pl-2 pr-2.5 text-sm font-medium bg-green-50 text-green-600 ">
                  <ArrowUp size={13} />
                  11.01%
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 md:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
                <Box />
              </div>
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Orders
                  </span>
                  <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">
                    5,359
                  </h4>
                </div>

                <span className="flex items-center gap-1 rounded-full  py-0.5 pl-2 pr-2.5 text-sm font-medium bg-red-50 text-red-600 dark:bg-red-500/15 dark:text-red-500">
                  <ArrowDown size={13} />
                  9.05%
                </span>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 sm:px-6 sm:pt-6 dark:border-gray-800 dark:bg-white/3">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Monthly Sales
              </h3>
              <EllipsisVertical size={24} />
            </div>
            <ColumnChart series={seriesCol} categories={categories} />
          </div>
        </div>
        <div className="col-span-12 space-y-6 xl:col-span-5 ">
          <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/3">
            <div className="shadow-default rounded-2xl bg-white px-5 pb-8 pt-5 dark:bg-gray-900 sm:px-6 sm:pt-6">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                    Monthly Target
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Target you’ve set for each month
                  </p>
                </div>
                <EllipsisVertical size={24} />
              </div>

              <div className="relative max-h-[195px] mt-5 sm:mt-0">
                <RadialChart />
                <div className="absolute left-1/2 top-[85%] -translate-x-1/2 -translate-y-[85%] rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-500/15 dark:text-green-500">
                  +10%
                </div>
              </div>
              <p className="mx-auto mt-1.5 w-full max-w-[380px] text-center text-sm text-gray-500 sm:text-base">
                You earn $3287 today, it's higher than last month. Keep up your
                good work!
              </p>
            </div>
            <div className="flex items-center justify-center gap-5 px-6 py-3.5 sm:gap-8 sm:py-5">
              <div>
                <p className="mb-1 text-center text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                  Target
                </p>
                <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
                  $20K
                  <ArrowDown size={16} color="red" />
                </p>
              </div>

              <div className="h-7 w-px bg-gray-200 dark:bg-gray-800"></div>

              <div>
                <p className="mb-1 text-center text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                  Revenue
                </p>
                <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
                  $20K
                  <ArrowUp size={16} color="green" />
                </p>
              </div>

              <div className="h-7 w-px bg-gray-200 dark:bg-gray-800"></div>

              <div>
                <p className="mb-1 text-center text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                  Today
                </p>
                <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
                  $20K
                  <ArrowUp size={16} color="green" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-12 gap-4 md:gap-6 ">
        <div className="col-span-12 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-5  sm:px-6 sm:pt-6 dark:border-gray-800 dark:bg-white/3">
          <div className="justify-between items-center mb-6 flex flex-col gap-5 sm:flex-row sm:justify-between">
            <div>
              <h3 className="text-center sm:text-start text-lg font-semibold text-gray-800 dark:text-white/90">
                Statistics
              </h3>
              <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
                Target you’ve set for each month
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="inline-flex w-fit items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
                {tabLineChart.map((tab) => (
                  <div
                    key={tab.id}
                    onClick={() => handleSelectTab(tab.id)}
                    className={cn(
                      'text-sm rounded-md px-3 py-2 font-medium cursor-pointer hover:text-gray-900 dark:hover:text-white text-gray-500 dark:text-gray-400',
                      {
                        'text-gray-900 dark:text-white bg-white dark:bg-gray-800':
                          activeTab === tab.id,
                      },
                    )}
                  >
                    {tab.label}
                  </div>
                ))}
              </div>

              <DatePicker />
            </div>
          </div>
          <AreaStatisticsChart />
        </div>
      </div>
      x
      <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 mt-6 items-start">
        <Demographic />
        <div className="w-full md:col-span-7">
          <CustomTable<RecentOrderECommerce>
            tableTitle="Recent Order"
            columnData={RECENT_ORDER}
            columnHeaderECommerce={columnHeaderECommerce}
          />
        </div>
      </div>
    </div>
  )
}
