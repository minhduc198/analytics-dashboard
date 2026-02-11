import React from 'react'
import ReactApexChart from 'react-apexcharts'
import type { ApexOptions } from 'apexcharts'
import type { ISeries } from '@/types'

interface Props {
  series: ISeries[]
  categories: string[]
}

const ColumnChart = ({ series, categories }: Props) => {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 180,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '35%',
        borderRadius: 5,
        borderRadiusApplication: 'end',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories,
    },
    // yaxis: {
    //   title: {
    //     text: '',
    //   },
    // },
    fill: {
      opacity: 1,
      colors: ['#465FFF'],
    },
    tooltip: {
      // y: {
      //   formatter: (val: number) => `Sales ${val}`,
      // },
    },
  }

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={180}
      />
    </div>
  )
}

export default ColumnChart
