'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Field } from '@/components/ui/field'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { addDays, format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import * as React from 'react'
import { type DateRange } from 'react-day-picker'

export function DatePicker() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 2),
    to: addDays(new Date(new Date().getFullYear(), 0, 20), 9),
  })

  return (
    <Field className="mx-auto w-full h-9 text-gray-900 text-sm">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date-picker-range"
            className="justify-start font-normal text-sm"
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd')} - {format(date.to, 'LLL dd')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto mr-12 mt-2 p-0!" align="start">
          <Calendar
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={1}
            className="w-[348px] h-[374px] p-5"
            modifiersClassNames={{
              range_start: 'bg-blue-600 text-white !rounded-l-full',
              range_end: 'bg-blue-600 text-white !rounded-r-full',
              range_middle: 'font-semibold',
            }}
          />
        </PopoverContent>
      </Popover>
    </Field>
  )
}
