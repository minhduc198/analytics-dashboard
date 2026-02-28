/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import type { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

const labels = ['Desktop', 'Mobile', 'Tablet']
const series = [45, 65, 25]

const DonutChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const options: ApexOptions = {
    chart: {
      type: 'donut',
      events: {
        dataPointMouseEnter: (_event, _chart, config) => {
          setActiveIndex(config.dataPointIndex)
        },
        dataPointMouseLeave: () => {
          setActiveIndex(null)
        },
      },
    },

    dataLabels: {
      enabled: false,
    },

    labels,

    colors: ['#3641f5', '#7592ff', '#dce9ff'],

    stroke: {
      width: 0,
    },

    plotOptions: {
      pie: {
        donut: {
          size: '65%',
        },
      },
    },

    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      itemMargin: { horizontal: 10 },
      fontWeight: 500,
      markers: {
        size: 5,
        shape: 'circle',
        offsetX: -5,
      },
    },
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-[420px]">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height={286}
        />

        <div
          className={`absolute top-1/2 left-1/2 translate-x-[-28px] translate-y-[-45px] flex items-center justify-center
          pointer-events-none transition-opacity duration-200
          ${activeIndex !== null ? 'opacity-100' : 'opacity-0'}`}
        >
          {activeIndex !== null && (
            <div className="flex flex-col items-center">
              <div className="text-slate-800 dark:text-slate-200 text-lg font-semibold">
                {labels[activeIndex]}
              </div>
              <div className="text-slate-900 dark:text-white text-xl font-bold -mt-1">
                {series[activeIndex]}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DonutChart
