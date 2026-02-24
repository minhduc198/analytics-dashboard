import React, { useState } from 'react'
import {
  categoriesAnalytics,
  selectTimeLineChart,
  seriesColAnalytics,
} from './constants'
import { cn } from '@/lib/utils'
import ColumnChart from '@/components/charts/ColumnChart'

export default function Analytics() {
  const [activeTime, setActiveTime] = useState('12M')

  const handleSelectTime = (tab: string) => {
    setActiveTime(tab)
  }
  return (
    <div className="p-4 pb-20 md:p-6 md:pb-6 ">
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Unique Visitors
              </p>
              <div className="mt-3 flex items-end justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white/90">
                    24.7K
                  </h4>
                </div>
                <div className="flex items-center gap-1">
                  <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-600 dark:bg-green-500/15 dark:text-green-500">
                    +20%
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Vs last month
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Pageviews
              </p>
              <div className="mt-3 flex items-end justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white/90">
                    55.9K
                  </h4>
                </div>
                <div className="flex items-center gap-1">
                  <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-600 dark:bg-green-500/15 dark:text-green-500">
                    +4%
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Vs last month
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Bounce Rate
              </p>
              <div className="mt-3 flex items-end justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white/90">
                    54%
                  </h4>
                </div>
                <div className="flex items-center gap-1">
                  <span className="flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-600 dark:bg-red-500/15 dark:text-red-500">
                    -1.59%
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Vs last month
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Visit Duration
              </p>
              <div className="mt-3 flex items-end justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white/90">
                    2m 56s
                  </h4>
                </div>
                <div className="flex items-center gap-1">
                  <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-600 dark:bg-green-500/15 dark:text-green-500">
                    +7%
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Vs last month
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12">
          <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/3 sm:px-6 sm:pt-6">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <h3 className="mb-1 text-lg font-semibold text-gray-800 dark:text-white/90">
                  Analytics
                </h3>
                <span className="block text-theme-sm text-gray-500 dark:text-gray-400">
                  Visitor analytics of last 30 days
                </span>
              </div>

              <div className="inline-flex w-fit items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
                {selectTimeLineChart.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelectTime(item.id)}
                    className={cn(
                      'text-sm rounded-md px-3 py-2 font-medium cursor-pointer hover:text-gray-900 dark:hover:text-white text-gray-500 dark:text-gray-400',
                      {
                        'text-gray-900 dark:text-white bg-white dark:bg-gray-800':
                          activeTime === item.id,
                      },
                    )}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <ColumnChart
              series={seriesColAnalytics}
              categories={categoriesAnalytics}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
