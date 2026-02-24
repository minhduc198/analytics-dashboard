export const selectTimeLineChart = [
  {
    id: '12M',
    label: '12 months',
  },

  {
    id: '30D',
    label: '30 Days',
  },

  {
    id: '7D',
    label: '7 Days',
  },

  {
    id: '24H',
    label: '24 Hours',
  },
]

export const seriesColAnalytics = [
  {
    name: 'Sales',
    data: [
      168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112, 123, 212, 270,
      190, 310, 115, 90, 380, 112, 223, 292, 170, 290, 380, 312, 385, 201, 298,
    ],
  },
]

export const categoriesAnalytics = Array(30)
  .fill(0)
  .map((_, i) => String(i + 1))
