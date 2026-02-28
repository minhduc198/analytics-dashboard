/* eslint-disable react-hooks/set-state-in-effect */
import type { ApexOptions } from 'apexcharts'
import { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

interface Props {
  activeUsers: number
}

const AreaAnalyticsChart = ({ activeUsers }: Props) => {
  const [chartData, setChartData] = useState<number[]>([])

  useEffect(() => {
    const newData = Array(50)
      .fill(0)
      .map(() => Math.floor(Math.random() * 301))

    setChartData(newData)
  }, [activeUsers])

  const series = [
    {
      name: 'Live Users',
      data: chartData,
    },
  ]
  const options: ApexOptions = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: { show: false },
      zoom: {
        enabled: true,
        type: 'x',
      },
      sparkline: {
        enabled: true,
      },
    },

    stroke: {
      curve: 'smooth',
      width: 2,
    },

    markers: {
      size: 0,
      hover: {
        size: 6,
      },
    },

    colors: ['#5d73ff', '#a8c2ff'],

    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        // gradientToColors: ['blue'],
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },

    dataLabels: { enabled: false },

    yaxis: {
      show: false,
    },

    tooltip: {
      enabled: true,
      intersect: false,
      custom: function ({ series, seriesIndex, dataPointIndex }) {
        const value = series[seriesIndex][dataPointIndex]

        return `
          <div style="
            background:#fff;
            padding:12px 16px;
            border-radius:12px;
            box-shadow:0 10px 25px rgba(0,0,0,0.1);
          ">
            <div style="font-size:14px;color:#6b7280;margin-bottom:6px">
              Live Users
            </div>
            <div style="font-size:18px;font-weight:600;color:#111827">
              ${value}
            </div>
          </div>
        `
      },
    },

    legend: { show: false },
  }

  return (
    <div className="w-full overflow-x-auto my-5 min-h-[155px] rounded-xl bg-gray-50 dark:bg-gray-900">
      <div
        id="chart"
        className="min-w-[600px] md:min-w-[1000px] lg:min-w-[1200px]"
      >
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          width="100%"
          height={140}
        />
      </div>
    </div>
  )
}

export default AreaAnalyticsChart
