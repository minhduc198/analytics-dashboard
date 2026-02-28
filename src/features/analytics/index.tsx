/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useMemo, useState } from 'react'
import {
  categoriesAnalytics,
  columnHeaderAnalytics,
  recentOrderAnalyticsData,
  selectTimeLineChart,
  seriesColAnalytics,
  topChannel,
  topPages,
} from './constants'
import { cn, formatShortNumber } from '@/lib/utils'
import ColumnChart from '@/components/charts/ColumnChart'
import { ArrowRight, EllipsisVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'
import AreaAnalyticsChart from './AreaAnalyticsChart'
import ColumnChannelChart from './ColumnChannelChart'
import DonutChart from './DonutChart'
import Demographic from '@/components/charts/Demographic'
import CustomTable from '@/components/custom-table'

const cycle = [0, 9, 252, 440, 454, 1600, 12340, 510000, 8080800, 98080800]

export default function Analytics() {
  const [activeTime, setActiveTime] = useState('12M')
  const [activeUser, setActiveUser] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveUser((prev) => (prev + 1) % 10)
    }, 2000)

    return () => clearInterval(id)
  }, [])

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
                <span className="block text-sm text-gray-500 dark:text-gray-400">
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
              height={450}
              className="min-w-[1200px] xl:min-w-[1330px]"
            />
          </div>
        </div>

        <div className="col-span-12 xl:col-span-7">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-white/3 md:p-6">
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold text-gray-800 dark:text-white/90">
                  Top Channels
                </div>
                <EllipsisVertical size={24} />
              </div>
              <div className="my-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 dark:border-gray-800">
                  <span className="text-xs text-gray-400"> Source </span>
                  <span className="text-right text-xs text-gray-400">
                    Visitors
                  </span>
                </div>
                {topChannel.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between border-b border-gray-100 py-3 dark:border-gray-800"
                  >
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.source}
                    </span>
                    <span className="text-right text-sm text-gray-500 dark:text-gray-400">
                      {item.visitors}
                    </span>
                  </div>
                ))}
              </div>
              <Button className="w-full flex justify-center gap-2 rounded-lg border border-gray-300 bg-white p-2.5 text-sm font-medium! text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/3">
                Channels Report
                <ArrowRight />
              </Button>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-white/3 md:p-6">
              <div className="flex justify-between items-center">
                <div className="text-lg font-semibold text-gray-800 dark:text-white/90">
                  Top Pages
                </div>
                <EllipsisVertical size={24} />
              </div>
              <div className="my-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 dark:border-gray-800">
                  <span className="text-xs text-gray-400"> Source </span>
                  <span className="text-right text-xs text-gray-400">
                    Pageview
                  </span>
                </div>
                {topPages.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between border-b border-gray-100 py-3 dark:border-gray-800"
                  >
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.source}
                    </span>
                    <span className="text-right text-sm text-gray-500 dark:text-gray-400">
                      {item.pageview}
                    </span>
                  </div>
                ))}
              </div>
              <Button className="w-full flex justify-center gap-2 rounded-lg border border-gray-300 bg-white p-2.5 text-sm font-medium! text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/3">
                Channels Report
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-5">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 dark:border-gray-800 dark:bg-white/3">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Active Users
              </h3>
              <EllipsisVertical size={24} />
            </div>
            <div className="mt-6 flex items-end gap-1.5">
              <div className="flex items-center gap-2.5">
                <span className="relative inline-block w-5 h-5">
                  <span className="absolute w-2 h-2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 top-1/2 left-1/2">
                    <span className="absolute inline-flex w-4 h-4 rounded-full opacity-75 bg-red-400 -top-1 -left-1 animate-ping"></span>
                  </span>
                </span>
                <span className="min-w-[50px] font-semibold text-gray-800 activeUsers text-title-sm dark:text-white/90">
                  {formatShortNumber(cycle[activeUser])}
                </span>
              </div>
              <span className="block text-gray-500 text-sm dark:text-gray-400">
                Live visitors
              </span>
            </div>
            <AreaAnalyticsChart activeUsers={cycle[activeUser]} />
            <div className="flex items-center justify-center gap-6">
              <div>
                <p className="text-lg font-semibold text-center text-gray-800 dark:text-white/90">
                  224
                </p>
                <p className="text-xs mt-0.5 text-center text-gray-500 dark:text-gray-400">
                  Avg, Daily
                </p>
              </div>

              <div className="w-px bg-gray-200 h-11 dark:bg-gray-800"></div>

              <div>
                <p className="text-lg font-semibold text-center text-gray-800 dark:text-white/90">
                  1.4K
                </p>
                <p className="text-xs mt-0.5 text-center text-gray-500 dark:text-gray-400">
                  Avg, Weekly
                </p>
              </div>

              <div className="w-px bg-gray-200 h-11 dark:bg-gray-800"></div>

              <div>
                <p className="text-lg font-semibold text-center text-gray-800 dark:text-white/90">
                  22.1K
                </p>
                <p className="text-xs mt-0.5 text-center text-gray-500 dark:text-gray-400">
                  Avg, Monthly
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-7">
          <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/3 sm:px-6 sm:pt-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Acquisition Channels
              </h3>
              <EllipsisVertical />
            </div>
            <ColumnChannelChart />
          </div>
        </div>

        <div className="col-span-12 xl:col-span-5">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:px-6 sm:pt-6 sm:pb-5 dark:border-gray-800 dark:bg-white/3">
            <div className="flex items-center justify-between mb-9">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Sessions By Device
              </h3>
              <EllipsisVertical />
            </div>

            <DonutChart />
          </div>
        </div>

        <div className="col-span-12 xl:col-span-5">
          <Demographic />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <CustomTable
            tableTitle="Recent Orders"
            columnData={recentOrderAnalyticsData}
            columnHeaderECommerce={columnHeaderAnalytics}
          />
        </div>
      </div>
    </div>
  )
}
