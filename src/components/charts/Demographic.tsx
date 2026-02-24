import { EllipsisVertical } from 'lucide-react'
import React from 'react'
import MapChart from './MapChart'

export default function Demographic() {
  return (
    <div className="w-full sm:col-span-5 overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 py-5 sm:px-6 sm:pt-6 dark:border-gray-800 dark:bg-white/3">
      <div className="flex justify-between items-start mb-6">
        <div className="">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Customers Demographic
          </h3>
          <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
            Number of customer based on country
          </p>
        </div>
        <EllipsisVertical size={24} />
      </div>
      <MapChart />
      <div className="space-y-5 mt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-full max-w-8 items-center rounded-full">
              <img src="src/assets/icons/usa.svg" alt="usa" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-white/90">
                USA
              </p>
              <span className="block text-[12px] text-gray-500 dark:text-gray-400">
                2,379 Customers
              </span>
            </div>
          </div>

          <div className="flex w-full max-w-[140px] items-center gap-3">
            <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
              <div className="absolute left-0 top-0 flex h-full w-[79%] rounded-sm bg-primary"></div>
            </div>
            <p className="text-sm font-medium text-gray-800 dark:text-white/90">
              79%
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-full max-w-8 items-center rounded-full">
              <img src="src/assets/icons/french.svg" alt="usa" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-white/90">
                French
              </p>
              <span className="block text-[12px] text-gray-500 dark:text-gray-400">
                589 Customers
              </span>
            </div>
          </div>

          <div className="flex w-full max-w-[140px] items-center gap-3">
            <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
              <div className="absolute left-0 top-0 flex h-full w-[23%] rounded-sm bg-primary"></div>
            </div>
            <p className="text-sm font-medium text-gray-800 dark:text-white/90">
              23%
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
