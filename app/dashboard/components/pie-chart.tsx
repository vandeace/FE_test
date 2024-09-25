"use client";

import { Pie, PieChart, ResponsiveContainer } from "recharts";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { browser: "shift1", visitors: 275, fill: "var(--color-shift1)", label: "Shift 1" },
  { browser: "shift2", visitors: 200, fill: "var(--color-shift2)", label: "Shift 2" },
  { browser: "shift2", visitors: 187, fill: "var(--color-shift3)", label: "Shift 3" },
];

const chartConfig = {
  shift1: {
    label: "Shift 1",
    color: "hsl(var(--chart-1))",
  },
  shift2: {
    label: "Shift 2",
    color: "hsl(var(--chart-2))",
  },
  shift3: {
    label: "Shift 3",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function PieChartComponent() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Total Lalin</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ResponsiveContainer width="100%" height={250}>
          <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
            <PieChart>
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Pie data={chartData} dataKey="visitors" nameKey="browser" innerRadius={60} />
            </PieChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm w-full">
        {chartData.map(item => (
          <div key={item.browser} className="flex justify-between w-full">
            <div className="">{item.label}</div>
            <div className="">{item.visitors}</div>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
}
