/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

export const categories = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
]

export const series = [
  {
    name: 'Direct',
    data: [44, 55, 41, 67, 22, 43, 55, 41],
  },
  {
    name: 'Referral',
    data: [13, 23, 20, 8, 13, 27, 18, 24],
  },
  {
    name: 'Organic Search',
    data: [11, 17, 15, 15, 21, 14, 19, 16],
  },
  {
    name: 'Social',
    data: [21, 7, 25, 13, 22, 8, 17, 20],
  },
]

const ColumnChannelChart = () => {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 315,
      stacked: true,
      toolbar: { show: false },
      zoom: { enabled: false },
    },

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '45%',
        borderRadius: 0,
        borderRadiusWhenStacked: 'last',
        borderRadiusApplication: 'end',
      },
    },

    colors: ['#c2d6ff', '#7592ff', '#4560ff', '#2931d8'].reverse(),

    dataLabels: { enabled: false },

    grid: {
      borderColor: '#E2E8F0',
      strokeDashArray: 0,
    },

    xaxis: {
      categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: '#64748B',
          fontSize: '12px',
        },
      },
    },

    yaxis: {
      labels: {
        style: {
          colors: '#64748B',
          fontSize: '11px',
        },
      },
    },

    legend: {
      show: true,
      position: 'top',
      itemMargin: {
        horizontal: 10,
      },
      horizontalAlign: 'left',

      fontSize: '14px',
      fontWeight: 500,

      markers: {
        size: 5,
        shape: 'circle',
        strokeWidth: 0,
        offsetX: -5,
      },
    },

    fill: {
      opacity: 1,
    },

    tooltip: {
      shared: false,
      intersect: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[seriesIndex][dataPointIndex]
        const name = w.config.series[seriesIndex].name
        const color = w.globals.colors[seriesIndex]

        const isDark = document.documentElement.classList.contains('dark')

        const bg = isDark ? '#1E293B' : '#FFFFFF'
        const text = isDark ? '#F1F5F9' : '#0F172A'
        const subText = isDark ? '#CBD5E1' : '#475569'

        return `
          <div style="
            background:${bg};
            padding:12px 16px;
            border-radius:12px;
            box-shadow:0 10px 25px rgba(0,0,0,0.1);
            color:${text};
          ">
            <div style="display:flex;align-items:center">
              <span style="
                width:10px;
                height:10px;
                background:${color};
                border-radius:50%;
                display:inline-block;
                margin-right:8px;
              "></span>
              <span style="color:${subText}">
                ${name}:
              </span>
              <strong style="margin-left:6px">
                ${value}
              </strong>
            </div>
          </div>
        `
      },
    },
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="w-[600px] md:w-[800px] lg:w-[1000px] xl:w-full">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={315}
        />
      </div>
    </div>
  )
}

export default ColumnChannelChart
