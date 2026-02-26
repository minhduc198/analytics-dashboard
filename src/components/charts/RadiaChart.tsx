import type { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

const RadialChart = () => {
  const series = [75.55]
  const options: ApexOptions = {
    chart: {
      type: 'radialBar',
      redrawOnWindowResize: true,
      redrawOnParentResize: true,
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

    responsive: [
      {
        breakpoint: 576,
        options: {
          plotOptions: {
            radialBar: {
              track: {
                margin: 32,
              },

              dataLabels: {
                value: {
                  fontSize: '24px',
                },
              },
            },
          },
        },
      },
      {
        breakpoint: 375,
        options: {
          plotOptions: {
            radialBar: {
              track: {
                margin: 24,
              },

              dataLabels: {
                value: {
                  offsetY: -40,
                  fontSize: '18px',
                },
              },
            },
          },
        },
      },
    ],

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
    <div className="w-full flex justify-center">
      <div id="chart" className="w-[420px]">
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          width="100%"
          height={420}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  )
}

export default RadialChart
