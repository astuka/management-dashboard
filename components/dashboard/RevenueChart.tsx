import React from 'react'
import { ChartCard } from './ChartCard'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', revenue: 2400, profit: 1200 },
  { name: 'Feb', revenue: 1398, profit: 900 },
  { name: 'Mar', revenue: 9800, profit: 4900 },
  { name: 'Apr', revenue: 3908, profit: 1954 },
  { name: 'May', revenue: 4800, profit: 2400 },
  { name: 'Jun', revenue: 3800, profit: 1900 },
  { name: 'Jul', revenue: 4300, profit: 2150 },
  { name: 'Aug', revenue: 2400, profit: 1200 },
  { name: 'Sep', revenue: 1398, profit: 900 },
  { name: 'Oct', revenue: 9800, profit: 4900 },
  { name: 'Nov', revenue: 3908, profit: 1954 },
  { name: 'Dec', revenue: 4800, profit: 2400 },
]

export function RevenueChart() {
  return (
    <ChartCard 
      title="Revenue & Profit" 
      subtitle="Financial performance trends"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            stroke="#6b7280"
            fontSize={12}
          />
          <YAxis 
            stroke="#6b7280"
            fontSize={12}
            tickFormatter={(value) => `$${value}k`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
          />
          <Area 
            type="monotone" 
            dataKey="revenue" 
            stackId="1"
            stroke="#3b82f6" 
            fill="#3b82f6"
            fillOpacity={0.6}
          />
          <Area 
            type="monotone" 
            dataKey="profit" 
            stackId="1"
            stroke="#10b981" 
            fill="#10b981"
            fillOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  )
} 