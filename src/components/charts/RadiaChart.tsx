import type { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

const RadialChart = () => {
  const series = [75.55]
  const options: ApexOptions = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,

        track: {
          background: '#E5E7EB',
          strokeWidth: '100%',
          margin: 39,
        },
        dataLabels: {
          value: {
            offsetY: -60,
            fontSize: '34px',
            fontWeight: 700,
          },
        },
      },
    },

    grid: {
      padding: {
        top: -40,
      },
    },
    fill: {
      opacity: 1,
      colors: ['#465FFF'],
    },
    stroke: {
      lineCap: 'round',
    },

    labels: [''],
  }

  return (
    <div className="relative">
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={450}
        />
      </div>
      <div id="html-dist"></div>
      <div className="absolute left-1/2 top-[170px] -translate-x-1/2 -translate-y-[85%] rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600 dark:bg-green-500/15 dark:text-green-500">
        +10%
      </div>
    </div>
  )
}

export default RadialChart
