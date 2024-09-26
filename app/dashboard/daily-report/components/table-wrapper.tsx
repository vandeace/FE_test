"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableDaily from "./table-daily";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatDate, parseDate } from "@/lib/formateDate";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";
import useMutableSearchParams from "@/hooks/utils/param";
import { HiXCircle } from "react-icons/hi";

export const tabListData = [
  "Total Tunai",
  "Total E-Toll",
  "Total Flo",
  "Total KTP",
  "Total Keseluruhan",
  "Total E-Toll+Tunai+Flo",
];
const TableWrapper = () => {
  const searchParam = useMutableSearchParams();
  const date = searchParam.get("date");
  const onDateChange = (date: Date | undefined) => {
    if (date) {
      const temp = formatDate(
        date,
        {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        },
        "-",
      );
      searchParam.set("date", temp);
    }
  };

  return (
    <div className="flex flex-col gap-y-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] pl-3 text-left font-normal",
              !date && "text-muted-foreground",
              // !field.value && "text-muted-foreground",
            )}
          >
            {date ? `${parseDate(date).toLocaleDateString("id-ID")}` : "Pilih Tanggal"}
            {date ? (
              <HiXCircle
                className="ml-auto h-4 w-4 opacity-50"
                onClick={() => searchParam.delete("date")}
              />
            ) : (
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date ? new Date(parseDate(date)) : undefined}
            onSelect={date => onDateChange(date)}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Tabs defaultValue={tabListData[0]} className="w-full">
        <TabsList>
          {tabListData.map((item, index) => (
            <TabsTrigger value={item} key={index}>
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabListData.map(item => (
          <TabsContent value={item}>
            <TableDaily value={item} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TableWrapper;
