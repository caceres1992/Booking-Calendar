"use client";
import { Button } from "@/components/ui/button";
import "react-day-picker/style.css";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import moment from "moment";
type CalendarParse = {
  from: string;
  to: string;
};

type Props = {
  data?: any;
};


const CalendarBooking = ({ data }: Props) => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  const [datesBlocked, setDatesBlocked] = useState<CalendarParse[]>([]);
  const handleBookedDates = () => {
    setDatesBlocked(data);
  };
  
  const isBlockedDay = (date: any) => {
    return datesBlocked.some(
      (range) =>
        date >= moment(range.from).toDate() && date <= moment(range.to).toDate()
    );
  };

  useEffect(() => {}, [0]);
  return (
    <Popover >
        
      <PopoverTrigger asChild onClick={handleBookedDates}>
        <Button
          variant={"default"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date?.from ? (
            date.to ? (
              <>
                {moment(date.from).format("ll")}
                {" - "}
                {moment(date.to).format("ll")}
              </>
            ) : (
              moment(date.from).format("ll")
            )
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
       
       
      </PopoverTrigger>
      <PopoverContent className="w-auto p-2">
        <DayPicker
          mode="range"
          startMonth={new Date(Date())}
          selected={date}
          disabled={(date) => {
            if (date < new Date()) {
              return true;
            } else {
              return isBlockedDay(date);
            }
          }}
          excludeDisabled
          onSelect={setDate}
          showOutsideDays={true}
          min={3}
          components={{
            Nav({ children }) {
              return (
                <nav className="  absolute  w-full flex justify-between items-center  ">
                  {children}
                </nav>
              );
            },
            CaptionLabel(props) {
              return (
                <h4 className="  text-center w-full text-sm md:text-base h-full flex justify-center flex-col items-center">
                  {props.children}
                </h4>
              );
            },

            // Day(props) {
            //   return (
            //     <td
            //       className={`
            //         ${props.modifiers.disabled && "text-gray-500 bg-gray-100"}
            //         ${props.modifiers.selected && " bg-blue-100 text-blue-600"}
            //         ${
            //           props.modifiers.range_start &&
            //           `bg-blue-600 text-blue-100 rounded-r-left ${
            //             props.modifiers.disabled && "opacity-50"
            //           }`
            //         }
            //         ${
            //           props.modifiers.range_end && "  rounded-r-full bg-blue-600 text-blue-100"
            //         }
            //         ${
            //           props.modifiers.focused &&
            //           "  text-blue-100 bg-blue-600 rounded-full"
            //         }

            //         `}
            //     >
            //       {props.children}
            //     </td>
            //   );
            // },
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

export default CalendarBooking;
