
"use client"

import { DonutChart, Legend } from "@tremor/react"
import { Pie, PieChart, Cell, Tooltip } from "recharts"

import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { name: "Строительство", value: 45, color: "hsl(var(--chart-1))" },
  { name: "IT и связь", value: 32, color: "hsl(var(--chart-2))" },
  { name: "Транспорт", value: 18, color: "hsl(var(--chart-3))" },
  { name: "Медицина", value: 24, color: "hsl(var(--chart-4))" },
  { name: "Образование", value: 15, color: "hsl(var(--chart-5))" },
]

export function TendersByIndustryChart() {
  return (
    <div className="w-full h-[250px] flex items-center justify-center">
        <ChartContainer config={{}} className="mx-auto aspect-square h-full">
        <PieChart>
            <Tooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
            />
            <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            strokeWidth={5}
            >
            {chartData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
            ))}
            </Pie>
        </PieChart>
        </ChartContainer>
    </div>
  )
}
