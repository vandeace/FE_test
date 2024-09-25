"use client";
import React from "react";
import { PieChartComponent } from "./pie-chart";
import { BarChartComponent } from "./bar-chart";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

const DashboardCharts = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <section className="flex w-full flex-col gap-y-3 rounded-md border border-alice-blue bg-[#fff] p-4 drop-shadow-2xl">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] pl-3 text-left font-normal",
              // !field.value && "text-muted-foreground",
            )}
          >
            {date.toDateString()}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={date => setDate(date ?? new Date())}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-10 gap-12">
          <div className="col-span-7 min-h-[400px]">
            <BarChartComponent />
          </div>
          <div className="col-span-3 min-h-[400px]">
            <PieChartComponent />
          </div>
        </div>
        <div className="grid grid-cols-10 gap-12">
          <div className="col-span-7 min-h-[400px]">
            <BarChartComponent />
          </div>
          <div className="col-span-3 min-h-[400px]">
            <PieChartComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardCharts;
