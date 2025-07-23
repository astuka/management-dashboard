'use client'

import React from 'react'
import { Sidebar } from '../../components/layout/Sidebar'
import { Header } from '../../components/layout/Header'
import { Card } from '../../components/ui/Card'
import { SalesChart } from '../../components/dashboard/SalesChart'
import { RevenueChart } from '../../components/dashboard/RevenueChart'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const pieData = [
  { name: 'Electronics', value: 400, color: '#3b82f6' },
  { name: 'Clothing', value: 300, color: '#10b981' },
  { name: 'Books', value: 200, color: '#f59e0b' },
  { name: 'Home & Garden', value: 150, color: '#ef4444' },
]

const barData = [
  { name: 'Q1', sales: 4000, revenue: 2400 },
  { name: 'Q2', sales: 3000, revenue: 1398 },
  { name: 'Q3', sales: 2000, revenue: 9800 },
  { name: 'Q4', sales: 2780, revenue: 3908 },
]

export default function Analytics() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
              <p className="text-gray-600 mt-2">Detailed insights into your business performance</p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Total Sales</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">$125,000</p>
                  <p className="text-sm text-green-600 mt-1">+12.5% from last month</p>
                </div>
              </Card>
              <Card>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">3.2%</p>
                  <p className="text-sm text-green-600 mt-1">+0.8% from last month</p>
                </div>
              </Card>
              <Card>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Avg. Order Value</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">$89.50</p>
                  <p className="text-sm text-red-600 mt-1">-2.1% from last month</p>
                </div>
              </Card>
              <Card>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Customer Lifetime Value</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">$1,250</p>
                  <p className="text-sm text-green-600 mt-1">+8.3% from last month</p>
                </div>
              </Card>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <SalesChart />
              <RevenueChart />
            </div>

            {/* Additional Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Category Distribution */}
              <Card title="Sales by Category" subtitle="Product category performance">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              {/* Quarterly Performance */}
              <Card title="Quarterly Performance" subtitle="Sales vs Revenue comparison">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
                      <YAxis stroke="#6b7280" fontSize={12} tickFormatter={(value) => `$${value}k`} />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                        formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                      />
                      <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 