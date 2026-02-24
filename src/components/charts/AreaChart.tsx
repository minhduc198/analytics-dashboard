import type { ISeries } from '@/types'
import type { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

interface Props {
  categories: string[]
  series: ISeries[]
}
const StatisticsSplineChart = ({ series, categories }: Props) => {
  const options: ApexOptions = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: { show: false },
      zoom: {
        enabled: true,
        type: 'x',
      },
    },

    stroke: {
      curve: 'straight',
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
        opacityFrom: 0.6,
        opacityTo: 0.05,
        stops: [0, 100],
      },
    },

    grid: {
      borderColor: '#E2E8F0',
      strokeDashArray: 6,
    },

    dataLabels: { enabled: false },

    xaxis: {
      categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
      crosshairs: {
        show: true,
        stroke: {
          color: '#94A3B8',
          width: 1,
          dashArray: 5,
        },
      },
      labels: {
        style: { colors: '#64748B' },
      },
    },

    yaxis: {
      labels: {
        style: { colors: '#64748B' },
      },
    },

    tooltip: {
      shared: true,
      intersect: false,
      custom: function ({ dataPointIndex, w }) {
        const month = w.globals.labels[dataPointIndex]
        const sales = w.config.series[0].data[dataPointIndex]
        const revenue = w.config.series[1].data[dataPointIndex]

        return `
          <div style="
            background:#fff;
            padding:14px 18px;
            border-radius:12px;
            box-shadow:0 10px 30px rgba(0,0,0,0.08);
          ">
            <div style="font-weight:600;margin-bottom:10px">
              ${month}
            </div>

            <div style="display:flex;align-items:center;margin-bottom:6px">
              <span style="
                width:10px;
                height:10px;
                background:#5d73ff;
                border-radius:50%;
                display:inline-block;
                margin-right:8px;
              "></span>
              Sales:
              <strong style="margin-left:6px">
                ${sales}
              </strong>
            </div>

            <div style="display:flex;align-items:center">
              <span style="
                width:10px;
                height:10px;
                background:#a8c2ff;
                border-radius:50%;
                display:inline-block;
                margin-right:8px;
              "></span>
              Revenue:
              <strong style="margin-left:6px">
                ${revenue}
              </strong>
            </div>
          </div>
        `
      },
    },

    legend: { show: false },
  }

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={350}
    />
  )
}

export default StatisticsSplineChart
