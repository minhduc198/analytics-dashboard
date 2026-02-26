import type { ISeries } from '@/types'
import type { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

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
      redrawOnWindowResize: true,
      redrawOnParentResize: true,
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
    <div className="w-full overflow-x-auto">
      <div
        id="chart"
        className="w-[600px] md:w-[800px] lg:w-[1200px] xl:w-full"
      >
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          width="100%"
          height={180}
        />
      </div>
    </div>
  )
}

export default ColumnChart
