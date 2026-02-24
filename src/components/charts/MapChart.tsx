/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react'
import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/jsvectormap.css'
import 'jsvectormap/dist/maps/world.js'

const MapChart = () => {
  const mapRef = useRef<HTMLDivElement | null>(null)
  const mapInstance = useRef<any>(null)

  useEffect(() => {
    if (!mapRef.current) return

    mapRef.current.innerHTML = ''

    mapInstance.current = new jsVectorMap({
      selector: mapRef.current,
      map: 'world',

      zoomButtons: false,
      zoomOnScroll: true,

      regionStyle: {
        initial: {
          fill: '#E5E7EB',
          stroke: '#fff',
          strokeWidth: 0.5,
        },
        hover: {
          fill: '#465FFF',
        },
      },

      markers: [
        {
          name: 'United States',
          coords: [37.0902, -95.7129],
        },
        {
          name: 'United Kingdom',
          coords: [55.3781, -3.436],
        },
        {
          name: 'Egypt',
          coords: [26.8206, 30.8025],
        },
      ],

      markerStyle: {
        initial: {
          fill: '#465FFF',
          strokeWidth: 0,
          r: 4,
        },
      },

      onRegionTooltipShow(event: any, tooltip: any) {
        tooltip.css({
          backgroundColor: '#465FFF',
          color: '#fff',
          padding: '6px 10px',
          borderRadius: '6px',
        })
      },
    })

    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy()
        mapInstance.current = null
      }
    }
  }, [])

  return (
    <div className="w-full h-[150px] border border-gray-200 rounded-xl">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  )
}

export default MapChart
