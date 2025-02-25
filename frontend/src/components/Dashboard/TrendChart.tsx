"use client"

import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

// Sample data - replace with your actual visitor data
const visitorData = [
  { month: "Jan", domestic: 1200, international: 800, total: 2000 },
  { month: "Feb", domestic: 1500, international: 1000, total: 2500 },
  { month: "Mar", domestic: 2200, international: 1400, total: 3600 },
  { month: "Apr", domestic: 1800, international: 1200, total: 3000 },
  { month: "May", domestic: 2500, international: 1800, total: 4300 },
  { month: "Jun", domestic: 3000, international: 2200, total: 5200 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <p className="font-bold text-gray-900 dark:text-white">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p
            key={index}
            className="text-sm"
            style={{ color: entry.color }}
          >
            {`${entry.name}: ${entry.value.toLocaleString()} visitors`}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function TrendChart() {
  const maxVisitors = Math.max(...visitorData.map(data => data.total))
  const peakMonth = visitorData.find(data => data.total === maxVisitors)

  return (
    <Card className="w-full h-[400px]">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Monthly Visitors</span>
          <span className="text-sm font-normal text-muted-foreground">
            Peak: {peakMonth?.month} ({maxVisitors.toLocaleString()} visitors)
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart 
            data={visitorData} 
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
            <XAxis 
              dataKey="month" 
              stroke="currentColor" 
              className="text-gray-600 dark:text-gray-400"
            />
            <YAxis 
              stroke="currentColor"
              className="text-gray-600 dark:text-gray-400"
              tickFormatter={(value) => `${value.toLocaleString()}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="domestic" 
              stroke="#4F46E5" 
              strokeWidth={2} 
              dot={{
                fill: "#4F46E5",
                strokeWidth: 2,
              }}
              name="Domestic"
            />
            <Line 
              type="monotone" 
              dataKey="international" 
              stroke="#EC4899" 
              strokeWidth={2} 
              dot={{
                fill: "#EC4899",
                strokeWidth: 2,
              }}
              name="International"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

