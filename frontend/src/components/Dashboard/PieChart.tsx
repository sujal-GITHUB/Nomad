"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart, Tooltip } from "recharts" // Added Tooltip import
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { motion } from 'framer-motion';

const chartData = [
  { location: "Beach Resort", visitors: 2750, fill: "#818CF8" },
  { location: "Mountain Lodge", visitors: 2000, fill: "#A78BFA" },
  { location: "City Hotel", visitors: 1870, fill: "#F472B6" },
  { location: "Countryside Villa", visitors: 1230, fill: "#34D399" },
  { location: "Lake House", visitors: 900, fill: "#60A5FA" },
]

const totalVisitors = chartData.reduce((acc, curr) => acc + curr.visitors, 0)

// Type-safe custom tooltip
const CustomTooltip = ({ active, payload }: { 
  active?: boolean; 
  payload?: Array<{ payload: typeof chartData[0] }>;
}) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 dark:bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg"
      >
        <p className="font-bold text-gray-900 dark:text-white">{data.location}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {data.visitors.toLocaleString()} visitors
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {((data.visitors / totalVisitors) * 100).toFixed(1)}% of total
        </p>
      </motion.div>
    );
  }
  return null;
};

export function PieChartMain() {
  const mostPopular = React.useMemo(() => {
    return chartData.reduce((max, curr) => 
      curr.visitors > max.visitors ? curr : max, chartData[0]
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white/80 dark:bg-white/10 backdrop-blur-md">
        <CardHeader className="items-center pb-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
              Popular Destinations
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              June 2024
            </CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <motion.div
            className="mx-auto aspect-square max-h-[200px]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <PieChart width={200} height={200}>
              {/* Add the Tooltip component */}
              <Tooltip content={<CustomTooltip />} />
              
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="location"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
              >
                <Label
                  content={({ viewBox }) => {
                    // Fix the type issue with cx and cy
                    const centerX = viewBox ? (viewBox as any).cx || 125 : 125;
                    const centerY = viewBox ? (viewBox as any).cy || 125 : 125;
                    
                    return (
                      <text
                        x={centerX}
                        y={centerY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="fill-gray-900 dark:fill-white"
                      >
                        <tspan
                          x={centerX}
                          y={centerY}
                          className="text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={centerX}
                          y={centerY + 20}
                          className="text-sm fill-gray-600 dark:fill-gray-300"
                        >
                          Total
                        </tspan>
                      </text>
                    );
                  }}
                />
              </Pie>
            </PieChart>
          </motion.div>
        </CardContent>
        <CardFooter className="flex-col gap-2 p-4">
          <motion.div 
            className="flex items-center gap-2 text-gray-900 dark:text-white"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-medium">{mostPopular.location}</span>
            <TrendingUp className="h-4 w-4 text-emerald-500" />
            <span className="text-emerald-500 text-sm">
              {((mostPopular.visitors / totalVisitors) * 100).toFixed(1)}%
            </span>
          </motion.div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Most visited destination
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  )
}