
"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "Январь", tenders: 186 },
  { month: "Февраль", tenders: 305 },
  { month: "Март", tenders: 237 },
  { month: "Апрель", tenders: 173 },
  { month: "Май", tenders: 209 },
  { month: "Июнь", tenders: 214 },
]

const chartConfig = {
  tenders: {
    label: "Тендеры",
    color: "hsl(var(--accent))",
  },
}

export function TendersByMonthChart() {
  return (
      <ChartContainer config={chartConfig} className="h-[250px] w-full">
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: -20,
            right: 12,
            top: 12
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <Area
            dataKey="tenders"
            type="natural"
            fill="var(--color-tenders)"
            fillOpacity={0.4}
            stroke="var(--color-tenders)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
  )
}
