import React from 'react'
import { Calendar } from '../Dashboard/Calendar'
import { ChartArea } from '../Dashboard/AreaChart'
import { Trending } from '../Dashboard/Trending'
import { PieChartMain } from '../Dashboard/PieChart'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { User, DollarSign, Building2, MapPin } from 'lucide-react'

const StatCard = ({ title, value, icon, trend }: {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 p-2 text-indigo-600 dark:text-indigo-400">
        {icon}
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{trend}</p>
    </CardContent>
  </Card>
)

const Home = () => {
  return (
    <div className="flex flex-col gap-6 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Welcome back, Admin
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value="12,345"
          trend="+12% from last month"
          icon={<User className="h-4 w-4" />}
        />
        <StatCard
          title="Revenue"
          value="$45,231"
          trend="+8% from last month"
          icon={<DollarSign className="h-4 w-4" />}
        />
        <StatCard
          title="Active Hotels"
          value="342"
          trend="+23 new this month"
          icon={<Building2 className="h-4 w-4" />}
        />
        <StatCard
          title="Destinations"
          value="125"
          trend="+5 new destinations"
          icon={<MapPin className="h-4 w-4" />}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Main Chart - Spans 5 columns */}
        <div className="lg:col-span-5">
          <ChartArea />
        </div>

        {/* Side Charts - Stack in 2 columns */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <PieChartMain />
          <Trending />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <Calendar />
        </div>
      </div>
    </div>
  )
}

export default Home