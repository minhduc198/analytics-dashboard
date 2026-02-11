import ColumnChart from '@/components/charts/ColumnChart'
import RadialChart from '@/components/charts/RadiaChart'
import { ArrowDown, ArrowUp, Box, EllipsisVertical, Users } from 'lucide-react'
const series = [
  {
    name: 'Net Profit',
    data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
  },
]

const categories = [
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
export default function ECommerce() {
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
            <ColumnChart series={series} categories={categories} />
          </div>
        </div>
        <div className="col-span-12 space-y-6 xl:col-span-5">
          <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/3">
            <div className="shadow-default rounded-2xl bg-white px-5 pb-11 pt-5 dark:bg-gray-900 sm:px-6 sm:pt-6">
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

              <RadialChart />
              <p className="mx-auto mt-[-120px] mb-[-14px] w-full max-w-[380px] text-center text-sm text-gray-500 sm:text-base">
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
    </div>
  )
}
